import { User } from './user'

export type PhotoItem = {
  id: string
  user: User
  image: {
    uri: string
    width: number
    height: number
  }
  publishedAt: Date
}
