
import Image from 'next/image';

export type Media = 'bandcamp' | 'facebook' | 'instagram' | 'myspace' | 'spotify' | 'tiktok' | 'twitter';

type Social = {
  media: Media;
  link: string;
};

const Social = ({
  media, link
}: Social) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='hover:animate-bounce'>
      <Image height={64} width={64} 
        src={`/socials/${media}.png`} alt={`${media}:${link}`} />
    </a>
  );
}

export default Social;