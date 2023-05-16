import { UserPhotoDetailScreen } from 'app/features/user/photo-detail-screen'
import Head from 'next/head'

export default function Screen() {
  return (
    <>
      <Head>
        <title>Photo</title>
      </Head>
      <UserPhotoDetailScreen />
    </>
  )
}
