
import Image from 'next/image'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Profile = () => {
  return (
    <Tabs className='p-2 col-span-2 md:col-span-1'>
      <TabList className='mb-0'>
        <Tab>Album</Tab>
        <Tab>Liner notes</Tab>
        <Tab>Photos</Tab>
      </TabList>

      <TabPanel>
        <div className='p-2 bg-white border border-gray-400 rounded-md rounded-tl-none'>
          On their debut LP, Build and Burn, Gutless balances a searing indie punk rage with an exuberant, unyielding dedication to self-expression. The album&apos;s heavier moments meet trauma and marginalization with a stubborn, scorching resistance. “The Bitch Lives”, the first full song of the LP, encapsulates this attitude, responding to a cruel world not just with melancholy but with a spiteful celebration of survival. In its more joyful moments, the LP pays earnest tribute to the strange ephemeral delight of being part of a music scene. Folk punk sing-along “Hope I Don&apos;t Blow Out My Voice” celebrates the power of music and community with triumphant snark, accentuated by glockenspiel, fiddle, and gang vocals. The LP is framed in the context of a DIY show, with interludes titled “Load-In” and “Doors”. The closing track, entitled “Mystery Set”, tackles the dissonance of the lively queer punk scene in Gainesville, a notorious college sports town, and references a song by Florida indie punk contemporaries Insignificant Other. Build and Burn is peppered with features from other bands in the area, such as Jeremy Hunter of JER and Skatune Network, Candice Maritato of Woolbright, Briana Uknowit of Cooper! and George Geanuracos of Atlanta&apos;s Yankee Roses. The result is a sonic snapshot of the local punk community, giving authenticity to Gutless&apos; lyrical tributes to the scene.

          <span className='text-small font-bold'>&nbsp;- Blurb by Jamie Conroy</span>
        </div>
      </TabPanel>

      <TabPanel>
        <div className='p-2 bg-white border border-gray-400 rounded-md'>
          Vi Viana - vocals, guitar, organ, piano, synthesizers, glockenspiel, bass (on track 6) <br />
          Maxim Moritz - lead guitar<br />
          Andrew Martin - bass<br />
          Tim McGowan - drums<br />
          Veronica Prudence - additional lead and rhythm guitars, vocals (track 11)<br />
          Jeremy Hunter (JER / Skatune Network) - trombone, trumpet, and tenor saxophone (track 3)<br />
          George Geanuracos (Yankee Roses) - violin (tracks 5, 6, 7, 9 and 10), vocals (track 5)<br />
          Candice Maritato (Woolbright) - vocals (track 5 and 10)<br />
          Brianna Uknowit (Cooper!) - mandolin and vocals (track 6)<br />
          Rob McGregor - singing saw (track 1)<br /><br />


          Mixed and mastered by Josie Lucido<br />
          Initial recording by Rob McGregor at Goldentone Studio<br />
          Additional recording and production by Vi Viana<br />
          Photography by Jeremy McGuire, Chris Denmark and Brianna Uknowit<br />
          Background painting by Annette Gilley<br />
          Design and layout by Vi Viana<br /><br />

          Many thanks to Dani, Bird, Maciej, Josie and all of our Knifepunch comrades for helping us finish 
          and release this record that we&apos;ve poured so much of ourselves onto for the past 3-4 years. Many 
          thanks to our dear friends who provided additional instrumentation and vocals, most of which were 
          recorded remotely with their own gear. Many thanks to everyone who&apos;s supported, encouraged, shaped 
          us through our multiple years of activity and inactivity. Thank you all for making all of this possible.
        </div>
      </TabPanel>

      <TabPanel>
        <div className='p-2 bg-white border border-gray-400 rounded-md'>
          <a href='https://drive.google.com/drive/folders/1T5XoREt6ib8zTttVccGoYi5QMfLr3tB8' target='_blank' rel='noreferrer noopener'>
            <Image height={400} width={710} src='/gutless - photo.PNG' alt='Gutless photo - Vi playing a guitar' />
          </a>
          <p>Photos by Chris Denmark of <a href='https://twitter.com/jaggedwirephoto' target='_blank' rel='noreferrer noopener'>Jagged Wire Photography</a></p>
          <p>(Press image for more photos)</p>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default Profile;