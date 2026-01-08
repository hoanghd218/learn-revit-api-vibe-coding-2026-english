/**
 * Course data layer
 * Contains TypeScript interfaces and mock data for courses
 */

import type { Course } from '@/types/course'

/**
 * Format duration from seconds to HH:MM:SS string
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/** Mock course data matching design spec */
export const SAMPLE_COURSES = [
  {
    id: 'ai-architecture-intro',
    title: '10 phút tạo ra website CV công việc bạn có tin không?',
    instructor: 'Khoa Nguyen',
    duration: '5:00',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/images/course-thumbnail.jpg',
    description: 'Khóa học về AI trong kiến trúc',
    isPremium: true,
    curriculum: [
      {
        id: 'section-1',
        title: 'AI Kiến Trúc – Công Cụ Bắt Buộc, Không Còn Là Xu Hướng!',
        lessons: [
          {
            id: 'lesson-1',
            title: '10 phút tạo ra website CV công việc bạn có tin không?',
            duration: '00:05:00',
            badge: 'pro',
            isLocked: false,
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            content: `
              <h3>Giới thiệu bài học</h3>
              <p>Trong bài học này, chúng ta sẽ tìm hiểu cách tạo ra một website CV xin việc chuyên nghiệp chỉ trong 10 phút sử dụng các công cụ AI.</p>
              <ul>
                <li>Cách sử dụng prompt để tạo nội dung CV</li>
                <li>Tạo layout website với AI</li>
                <li>Deploy website miễn phí</li>
              </ul>
              <p>Hãy xem video và thực hành theo nhé!</p>
            `
          },
          {
            id: 'lesson-2',
            title: 'Chuỗi 5 prompt giúp bạn tạo website cá nhân chuyên nghiệp',
            duration: '00:05:00',
            badge: 'pro',
            isLocked: false,
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            content: `<p>Nội dung bài học đang được cập nhật...</p>`
          },
        ],
      },
      {
        id: 'section-2',
        title: 'Kỹ thuật viết prompt, cách tạo trợ lý giúp KTS tạo prompt dễ hơn',
        lessons: [
          {
            id: 'lesson-3',
            title: 'Bí quyết viết prompt hiệu quả',
            duration: '00:05:00',
            badge: 'free',
            isLocked: false,
          },
        ],
      },
      {
        id: 'section-3',
        title: 'Stable Diffusion',
        lessons: [
          {
            id: 'lesson-4',
            title: 'Giới thiệu Stable Diffusion',
            duration: '00:05:00',
            badge: 'free',
            isLocked: true,
          },
        ],
      },
    ],
  },
] as const satisfies readonly Course[]

/**
 * Get course by ID
 */
export function getCourse(courseId: string): Course | null {
  const course = SAMPLE_COURSES.find((c) => c.id === courseId)
  return course ? { ...course } : null
}

/**
 * Get all course IDs for static generation
 */
export function getAllCourseIds(): string[] {
  return SAMPLE_COURSES.map((course) => course.id)
}
