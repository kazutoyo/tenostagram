import { Card, Avatar, XStack, YStack, Text, GetProps, Stack } from 'tamagui'
import { PhotoItem } from '@tenostagram/types'
import { Pressable, Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import Animated from 'react-native-reanimated'

type CardProps = GetProps<typeof Card>

type Props = {
  photoItem: PhotoItem
  enableSharedTransition?: boolean
} & CardProps

export const PhotoCard = ({ photoItem, enableSharedTransition, ...cardProps }: Props) => {
  const screenWidth = Dimensions.get('window').width
  const linkProps = useLink({
    href: `/user/${photoItem.user.id}`,
  })
  return (
    <Card py="$4" space="$4" {...cardProps}>
      <Card.Header>
        <YStack space="$4">
          <Pressable {...linkProps}>
            <XStack space="$4" ai="center" mx="$2">
              <Avatar circular size="$4">
                <Avatar.Image src={photoItem.user.thumbnailUrl} />
                <Avatar.Fallback bc="$gray100" />
              </Avatar>
              <Text fos="$8" fow="700">
                {photoItem.user.name}
              </Text>
            </XStack>
          </Pressable>
          <Stack
            $xs={{
              w: screenWidth,
              h: Math.floor((screenWidth / photoItem.image.width) * photoItem.image.height),
            }}
          >
            <Animated.Image
              sharedTransitionTag={
                enableSharedTransition === true ? `photo-shared-${photoItem.id}` : undefined
              }
              source={photoItem.image}
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: photoItem.image.width / photoItem.image.height,
              }}
            />
          </Stack>
        </YStack>
      </Card.Header>

      <Card.Footer>
        <Text mx="$2" color="$gray11">
          {photoItem.publishedAt.getFullYear()}年{photoItem.publishedAt.getMonth() + 1}月
          {photoItem.publishedAt.getDate()}日
        </Text>
      </Card.Footer>
    </Card>
  )
}
