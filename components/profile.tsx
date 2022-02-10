
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Profile = () => {
  return (
    <Tabs className='p-2'>
      <TabList className='mb-0'>
        <Tab>Bio</Tab>
        <Tab>Album</Tab>
        <Tab>Contact</Tab>
      </TabList>

      <TabPanel>
        <div className='p-2'>
          hey
        </div>
      </TabPanel>

      <TabPanel>
        <div className='p-2'>
          hi
        </div>
      </TabPanel>

      <TabPanel>
        <div className='p-2'>
          hello
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default Profile;