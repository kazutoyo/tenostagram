import { PhotoCard, YStack } from '@tenostagram/ui'
import React from 'react'
import { createParam } from 'solito'
import { createPhotoItem, users } from 'app/data'

const { useParam } = createParam<{ userId: string; photoId: string }>()

export function UserPhotoDetailScreen() {
  const [userId] = useParam('userId')
  const [photoId] = useParam('photoId')
  if (!userId) return null
  const user = users[userId!]
  if (!user) return null
  const item = createPhotoItem(user, photoId!)

  return (
    <YStack
      f={1}
      $gtXs={{
        mt: '$12',
        alignItems: 'center',
        fullscreen: true,
      }}
    >
      <YStack
        $xs={{
          fullscreen: true,
        }}
        $gtXs={{
          width: '100%',
          maxWidth: 660,
        }}
      >
        <PhotoCard f={1} photoItem={item} enableSharedTransition={true} mb="$4" />
      </YStack>
    </YStack>
  )
}
