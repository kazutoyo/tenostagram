import { Card, Avatar, XStack, YStack, Text, GetProps, Image, useMedia } from 'tamagui'
import { User } from '@tenostagram/types'

type YStackProps = GetProps<typeof YStack>

type Props = {
  user: User
} & YStackProps

export const UserDetailHeader = ({ user, ...yStackProps }: Props) => {
  return (
    <YStack {...yStackProps}>
      <XStack space="$4" ai="center" mx="$2">
        <Avatar circular size="$8">
          <Avatar.Image src={user.thumbnailUrl} />
          <Avatar.Fallback bc="$gray100" />
        </Avatar>
        <Text fontSize={24} fow="700">
          {user.name}
        </Text>
      </XStack>
    </YStack>
  )
}
