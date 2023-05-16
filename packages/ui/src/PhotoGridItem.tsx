import { YStack, GetProps, Image, useMedia } from 'tamagui'
import { PhotoItem } from '@tenostagram/types'
import { Pressable, Dimensions } from 'react-native'
import { useLink } from 'solito/link'

type BaseProps = GetProps<typeof YStack>

type Props = {
  photoItem: PhotoItem
} & BaseProps

export const usePhotoGridItem = () => {
  const media = useMedia()
  const numColumns = 3
  const spacing = media.gtXs ? 8 : 2
  const screenWidth = media.gtXs ? 800 : Dimensions.get('window').width
  const itemSize = Math.floor((screenWidth - (numColumns - 1) * spacing) / numColumns)
  return {
    itemSize,
    spacing,
    numColumns,
  }
}

export const PhotoGridItem = ({ photoItem, ...baseProps }: Props) => {
  const { itemSize } = usePhotoGridItem()
  const linkProps = useLink({
    href: `/user/${photoItem.user.id}/photo/${photoItem.id}`,
  })
  return (
    <YStack {...baseProps}>
      <Pressable {...linkProps}>
        <Image
          source={{
            uri: photoItem.image.uri,
            width: itemSize,
            height: itemSize,
          }}
          width={itemSize}
          height={itemSize}
        />
      </Pressable>
    </YStack>
  )
}
