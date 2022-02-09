
import Image from 'next/image';

const Header = () => {
  return (
    <div className='col-span-2 p-4 w-full h-full flex justify-between border-b-2 border-black'>
      <Image height={200} width={200} alt='GammaGIRL' src='/gammagirl.png' />

      <div>
        <h1 className='text-3xl font-bold text-right'>GammaGIRL - A Cult of Flesh and Blood</h1>
        <h2 className='text-xl text-right'>Knifepunch Records</h2>
      </div>
    </div>
  );
}

export default Header;