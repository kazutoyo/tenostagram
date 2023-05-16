import { PhotoItem, User } from '@tenostagram/types'

export const createPhotoItem = (user: User, photoId: string): PhotoItem => ({
  id: photoId,
  user: user,
  image: {
    width: 600,
    height: 600,
    uri: `https://picsum.photos/seed/${user.id}-${photoId}/600/600`,
  },
  publishedAt: new Date(),
})
