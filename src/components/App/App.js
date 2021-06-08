import './App.css';
import Slides from '../Slides/Slides';
import Header from '../Header/Header';
import 'react-slideshow-image/dist/styles.css';
import { AppProvider } from '../../context/AppContext';
import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
  return (
    <SimpleReactLightbox>
      <div className='App'>
        <AppProvider>
          <Header />
          <Slides />
        </AppProvider>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
