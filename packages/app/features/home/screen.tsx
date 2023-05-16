import { YStack } from '@tenostagram/ui'
import React from 'react'
import { useLink } from 'solito/link'
import { PhotoCard } from '@tenostagram/ui'
import { FlatList } from 'react-native'
import { PhotoItem } from '@tenostagram/types'
import { createPhotoItem, createUser } from 'app/data'

export function HomeScreen() {
  return (
    <YStack
      f={1}
      $gtXs={{
        mt: '$4',
        alignItems: 'center',
      }}
    >
      <YStack
        f={1}
        $gtXs={{
          maxWidth: 800,
        }}
      >
        <FlatList
          data={[...new Array(18)].map(
            (_, index): PhotoItem => createPhotoItem(createUser('870', 'teno'), `photo-${index}`)
          )}
          renderItem={({ item }) => <PhotoCard f={1} photoItem={item} mb="$4" />}
          keyExtractor={(item, index) => `${item.user.name}-${index}`}
        />
      </YStack>
    </YStack>
  )
}
