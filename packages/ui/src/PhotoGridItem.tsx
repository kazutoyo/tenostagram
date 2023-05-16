import { YStack, GetProps, useMedia } from 'tamagui'
import { PhotoItem } from '@tenostagram/types'
import { Pressable, Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import Animated from 'react-native-reanimated'

type BaseProps = GetProps<typeof YStack>

type Props = {
  photoItem: PhotoItem
  enableSharedTransition?: boolean
} & BaseProps

export const usePhotoGridItem = () => {
  const media = useMedia()
  const numColumns = 3
  const spacing = media.gtXs ? 8 : 2
  const screenWidth = media.gtXs ? 660 : Dimensions.get('window').width
  const itemSize = Math.floor((screenWidth - (numColumns - 1) * spacing) / numColumns)
  return {
    itemSize,
    spacing,
    numColumns,
  }
}

export const PhotoGridItem = ({ photoItem, enableSharedTransition, ...baseProps }: Props) => {
  const { itemSize } = usePhotoGridItem()
  const linkProps = useLink({
    href: `/user/${photoItem.user.id}/photo/${photoItem.id}`,
  })
  return (
    <YStack {...baseProps}>
      <Pressable {...linkProps}>
        {/* RN ReanimatedでのsharedTransition。enableSharedTransitionがtrueのときに有効にする */}
        <Animated.Image
          sharedTransitionTag={
            enableSharedTransition === true ? `photo-shared-${photoItem.id}` : undefined
          }
          source={photoItem.image}
          style={{
            width: itemSize,
            height: itemSize,
          }}
        />
      </Pressable>
    </YStack>
  )
}
