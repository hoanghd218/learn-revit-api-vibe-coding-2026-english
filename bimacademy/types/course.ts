/**
 * Course-related TypeScript interfaces
 * Used for course detail page components
 */

/** Badge type for lessons */
export type BadgeType = 'pro' | 'free' | 'premium'

/** Lesson interface */
export interface Lesson {
  id: string
  title: string
  duration: string // Format: "00:05:00"
  thumbnail?: string
  badge?: BadgeType
  isLocked?: boolean
  videoUrl?: string
  content?: string // HTML or Markdown content for the lesson
}

/** Curriculum section interface */
export interface CurriculumSection {
  id: string
  title: string
  lessons: Lesson[]
}

/** Course interface */
export interface Course {
  id: string
  title: string
  instructor: string
  duration: string // Total course duration
  videoUrl: string
  thumbnail: string
  description?: string
  curriculum: CurriculumSection[]
  isPremium?: boolean
}

/** Get course function return type */
export interface CourseResult {
  course: Course | null
  error?: string
}
