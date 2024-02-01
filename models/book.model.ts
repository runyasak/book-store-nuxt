import type { Author } from './author.model'

export interface Book {
  bookId: number
  title: string
  genre: string
  publishedDate: string
  authorId: number
  synopsis: string
  coverImageUrl: string
  author: Author
  rating: number
  description: string
}

export interface BookInput {
  bookId: number
  title: string
  genre: string
  publishedDate: string
  authorId: number
  synopsis: string
  coverImageUrl: string
  author: AuthorInput
  rating: number
  description: string
}

export interface AuthorInput {
  id: number
  name: string
  biography: string
  birthDate: string
  books: BookInput[]
}
