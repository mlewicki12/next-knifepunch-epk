
type SoundCloud = {
  artist: string;
  title: string;
  src: string;
  link: string;
}

const SoundCloud = ({
  artist,
  title,
  src,
  link,
}: SoundCloud) => {
  return (
    <div>
      <iframe width="100%" height="600" scrolling="no" frameBorder="no" allow="autoplay"
        src={ src }>
      </iframe>
      <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
        <a href="https://soundcloud.com/user-282582091" title="knifepunch records" target="_blank" style={{color: '#111111', textDecoration: 'none'}}>knifepunch records</a> · 
        <a href={ link } title="GammaGirl - A Cult of Flesh and Blood" target="_blank" style={{color: '#111111', textDecoration: 'none'}}>GammaGirl - A Cult of Flesh and Blood</a>
      </div>
    </div>
  );
}

export default SoundCloud;