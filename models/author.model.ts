import type { Book } from './book.model'

export interface Author {
  id: number
  name: string
  biography: string
  birthDate: string
  books: Book[]
}
