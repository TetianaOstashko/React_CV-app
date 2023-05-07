import './App.css';
import { Image } from './components/image';
import { ContactInfo } from './components/contactInfo';
import { WorkExperience } from './components/workExperience';

function App() {
  return (
    <div className='CV-container'>
      <h1 className='CV-name'>Tetiana Ostashko</h1>

      <Image path='https://media.licdn.com/dms/image/D4E03AQHxdVSoS8gztA/profile-displayphoto-shrink_800_800/0/1668775547228?e=1689206400&v=beta&t=nHWcLGesiJNQOgWQjQfHYEVUrD0VykMMCwAvHv83qq0'/>
      <ContactInfo />
      <WorkExperience />
    </div> 
  );
}



export default App;
