
import Image from 'next/image';
import Social from './social';

type Header = {
  image: string;
  artist: string;
  title: string;
}

const Header = ({
  image, artist, title
}: Header) => {
  return (
    <div className='col-span-2 p-4 w-full h-full flex justify-between border-b-2 border-black'>
      <Image height={200} width={200} alt={artist} src={image} />

      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-right'>{artist} - {title}</h1>
          <h2 className='text-xl text-right'>knifepunch records</h2>
        </div>
        <div className='flex justify-end'>
          <Social media='bandcamp' link='' />
          <Social media='facebook' link='' />
          <Social media='instagram' link='' />
          <Social media='myspace' link='' />
          <Social media='spotify' link='' />
          <Social media='tiktok' link='' />
          <Social media='twitter' link='' />

        </div>
      </div>
    </div>
  );
}

export default Header;