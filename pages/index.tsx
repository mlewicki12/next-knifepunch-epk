
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'
import Profile from '../components/profile'
import SoundCloud from '../components/soundcloud'

const Home: NextPage = () => {
  const socials = {
    instagram: 'https://www.instagram.com/gutless1312/',
    twitter: 'https://twitter.com/gutless1312',
    tiktok: 'https://www.tiktok.com/@gutless1312',
    spotify: 'https://open.spotify.com/artist/56o9hzQMzxukoNh3kGk4uH',
    bandcamp: 'https://gutless1312.bandcamp.com'
  };

  return (
    <div className='w-full h-full flex justify-center'>
      <Head>
        <title>Gutless - Build and Burn</title>
        <meta name='description' content='Knifepunch Records EPK' />
        <link rel='icon' href='/knifepunch.png' />

        <meta property='og:image' content='/gutless - profile.PNG' key='ogimage' />
        <meta property='og:title' content='Gutless - Build and Burn' key='ogtitle' />
        <meta property='og:site_name' content='Knifepunch Records' key='ogsitename' />
        <meta property='og:description' content='Out Oct. 14th on Knifepunch Records' key='ogdesc' />
      </Head>

      <main className='w-full xl:w-2/3 h-full grid grid-cols-2'>
        <Header
          image='/gutless - profile.PNG'
          artist='Gutless'
          title='Build and Burn'
          socials={socials}
        />

        <SoundCloud
          artist='Gutless'
          title='Build and Burn'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1498414258%3Fsecret_token%3Ds-zFyBsPPAeNo&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
          link='https://soundcloud.com/user-282582091/sets/gutless-build-and-burn/s-zFyBsPPAeNo'
        />

        <Profile />
      </main>
    </div>
  )
}

export default Home
