
import Image from 'next/image';

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

      <div>
        <h1 className='text-3xl font-bold text-right'>{artist} - {title}</h1>
        <h2 className='text-xl text-right'>Knifepunch Records</h2>
      </div>
    </div>
  );
}

export default Header;