import { User } from '@tenostagram/types'

export const createUser = (userId: string, name: string): User => ({
  id: userId,
  name: name,
  thumbnailUrl: `https://picsum.photos/id/${userId}/200`,
})
