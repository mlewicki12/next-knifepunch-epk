
import Image from 'next/image';
import Social, { Media } from './social';

export type Socials = {
  bandcamp?: string;
  facebook?: string;
  instagram?: string;
  myspace?: string;
  spotify?: string;
  tiktok?: string;
  twitter?: string;
}

type Header = {
  image: string;
  artist: string;
  title: string;
  socials: Socials;
}

const Header = ({
  image, artist, title, socials
}: Header) => {
  return (
    <div className='col-span-2 p-4 w-full h-full flex justify-between border-b-2 border-black'>
      <Image height={200} width={200} alt={artist} src={image} />

      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-right'>{artist} - {title}</h1>
          <h2 className='text-l text-right'><a href='https://knifepunchrecords.com'>Out Oct. 14th on Knifepunch Records</a></h2>
        </div>
        <div className='flex justify-end'>
          {Object.keys(socials).map(key => socials[key as Media] !== '' && ( 
            <Social key={key} media={key as Media} link={socials[key as Media]!} />
           ))}
        </div>
      </div>
    </div>
  );
}

export default Header;