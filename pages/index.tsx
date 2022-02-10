
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'
import Profile from '../components/profile'
import SoundCloud from '../components/soundcloud'

const Home: NextPage = () => {
  const socials = {
    instagram: 'https://www.instagram.com/koolgammagirl/',
    twitter: 'https://twitter.com/koolgammagirl',
    tiktok: 'https://www.tiktok.com/@koolgammagirl',
    spotify: 'https://open.spotify.com/artist/12wxb0rncHIQ0WZUpxdEUl',
    bandcamp: 'https://gammagirl.bandcamp.com/'
  };

  return (
    <div className='w-full h-full flex justify-center'>
      <Head>
        <title>GammaGIRL - A Cult of Flesh and Blood</title>
        <meta name='description' content='Knifepunch Records EPK - GammaGIRL' />
        <link rel='icon' href='/knifepunch.png' />
      </Head>

      <main className='w-full xl:w-1/2 h-full grid grid-cols-2'>
        <Header
          image='/gammagirl.png'
          artist='GammaGIRL'
          title='The Cult of Flesh and Blood'
          socials={socials}
        />

        <Profile />

        <SoundCloud
          artist='GammaGIRL'
          title='The Cult of Flesh and Blood'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1375382779%3Fsecret_token%3Ds-ucNlf0pFMwO&color=%23962faf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          link='https://soundcloud.com/user-282582091/sets/gammagirl-a-cult-of-flesh-and-blood'
        />
      </main>
    </div>
  )
}

export default Home
