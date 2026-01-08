import { notFound } from 'next/navigation';
import { fetchCourseData } from '@/lib/api';
import { CoursePage } from '@/components/course/course-page';

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: { params: Promise<{ courseId: string }> }) {
  const course = await fetchCourseData();


  console.log("course", course)
  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.title} | BIM Academy`,
    description: course.description?.substring(0, 160) || `Learn ${course.title} with BIM Academy`,
  };
}

/**
 * Course detail page - Dynamic route at /courses/[courseId]
 */
export default async function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await fetchCourseData();

  // If we want to strictly enforce the slug, we could check courseId here
  // But for now, if the course exists, we show it.

  if (!course) {
    notFound();
  }

  return <CoursePage course={course} />;
}
