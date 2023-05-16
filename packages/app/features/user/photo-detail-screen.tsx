import { PhotoCard, YStack } from '@tenostagram/ui'
import React from 'react'
import { createParam } from 'solito'
import { createPhotoItem, createUser } from 'app/data'

const { useParam } = createParam<{ userId: string; photoId: string }>()

export function UserPhotoDetailScreen() {
  const [userId] = useParam('userId')
  const [photoId] = useParam('photoId')
  const user = createUser(userId!, 'teno')
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
          maxWidth: 800,
        }}
      >
        <PhotoCard f={1} photoItem={item} mb="$4" />
      </YStack>
    </YStack>
  )
}
