import { UserPhotoDetailScreen } from 'app/features/user/photo-detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Photo',
        }}
      />
      <UserPhotoDetailScreen />
    </>
  )
}
