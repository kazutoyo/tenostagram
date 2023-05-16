import { UserDetailHeader, YStack } from '@tenostagram/ui'
import React from 'react'
import { createParam } from 'solito'
import { createPhotoItem, createUser } from 'app/data'
import { FlatList } from 'react-native'
import { PhotoItem } from '@tenostagram/types'
import { usePhotoGridItem, PhotoGridItem } from '@tenostagram/ui/src'

const { useParam } = createParam<{ userId: string }>()

export function UserDetailScreen() {
  const [userId] = useParam('userId')
  const user = createUser(userId!, 'teno')
  const { spacing, numColumns } = usePhotoGridItem()

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
        <FlatList
          ListHeaderComponent={<UserDetailHeader user={user} p="$4" />}
          data={[...new Array(18)].map(
            (_, index): PhotoItem => createPhotoItem(createUser('870', 'teno'), `photo-${index}`)
          )}
          renderItem={({ item, index }) => {
            return (
              <PhotoGridItem
                photoItem={item}
                mr={index % 3 !== 2 ? spacing : undefined}
                mt={index >= 3 ? spacing : undefined}
              />
            )
          }}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          style={{
            flex: 1,
          }}
        />
      </YStack>
    </YStack>
  )
}
