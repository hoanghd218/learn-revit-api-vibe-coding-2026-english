import { Course, CurriculumSection, Lesson } from '@/types/course';

const API_URL = 'https://api.bimspeed.net/v1/api/Course/ai-for-bim-developer-vibe-coding-2025';

interface ApiLessonDto {
    id: string;
    name: string;
    document: string | null;
    sortingOrder: number;
    time: string;
    url: string;
    isPay: boolean;
    isShow: boolean;
}

interface ApiChapterDto {
    id: string;
    chapterName: string;
    sortingOrder: number;
    lessonDtos: ApiLessonDto[];
}

interface ApiCourseResponse {
    data: {
        id: string;
        name: string;
        generalInfo: string;
        trainerName: string;
        imagePath: string;
        chapterDtos: ApiChapterDto[];
        originalPrice: number;
        sellingPrice?: number;
        slug: string;
    };
    succeeded: boolean;
}

/**
 * Fetch the single course data from the API
 */
export async function fetchCourseData(): Promise<Course | null> {
    try {
        const res = await fetch(API_URL, { next: { revalidate: 3600 } });

        if (!res.ok) {
            console.error('Failed to fetch course data');
            return null;
        }

        const json: ApiCourseResponse = await res.json();

        if (!json.succeeded || !json.data) {
            return null;
        }

        const { data } = json;

        const curriculum: CurriculumSection[] = data.chapterDtos
            .sort((a, b) => a.sortingOrder - b.sortingOrder)
            .map((chapter) => ({
                id: chapter.id,
                title: chapter.chapterName,
                lessons: chapter.lessonDtos
                    .sort((a, b) => a.sortingOrder - b.sortingOrder)
                    .map((lesson) => ({
                        id: lesson.id,
                        title: lesson.name,
                        duration: formatDuration(lesson.time),
                        videoUrl: lesson.url,
                        isLocked: lesson.isPay && false, // Defaulting logic, update as needed
                        badge: lesson.isPay ? 'pro' : 'free',
                    })),
            }));

        // Calculate total duration roughly or use a default if not summed up
        // The API provides 'time' as a string (likely minutes), let's assume so for now.

        return {
            id: data.slug,
            title: data.name,
            instructor: data.trainerName,
            description: data.generalInfo, // This returns HTML, component needs to handle it
            thumbnail: data.imagePath,
            duration: 'Calculate if needed',
            videoUrl: '', // Main course intro video if any
            curriculum,
            isPremium: data.originalPrice > 0,
        };
    } catch (error) {
        console.error('Error fetching course:', error);
        return null;
    }
}

function formatDuration(timeString: string): string {
    // Assuming timeString is in minutes as per example "9", "7", etc.
    const minutes = parseInt(timeString, 10);
    if (isNaN(minutes)) return "00:00:00";


    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00`;
}

export interface CourseSummary {
    id: string;
    title: string;
    badge: string;
    image: string;
    slug: string;
}

export async function getAllCourses(): Promise<CourseSummary[]> {
    try {
        const res = await fetch('https://api.bimspeed.net/v1/api/Course', { next: { revalidate: 3600 } });

        if (!res.ok) {
            console.error('Failed to fetch courses list');
            return [];
        }

        const json: { data: any[], succeeded: boolean } = await res.json();

        if (!json.succeeded || !Array.isArray(json.data)) {
            return [];
        }

        return json.data.map((item: any) => ({
            id: item.id,
            title: item.name,
            badge: item.originalPrice === 0 ? 'Free 100%' : 'Premium', // Logic can be adjusted
            image: item.imagePath || '/images/course-1.jpg', // Fallback image
            slug: item.slug
        }));
    } catch (error) {
        console.error('Error fetching courses list:', error);
        return [];
    }
}
