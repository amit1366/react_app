import './App.css';
import './slider';
import Navbar from './component/Navbar';
import Formtext from './component/Formtext';
// import NewsCard from './component/About';

import NewsCardItem from './component/Carditem';
function App() {
  return (
    <>
      <Navbar />
      <Formtext Heading="Please enter your text" />
      {/* <NewsCard /> */}
      <div className="container">
                <div className="row">
                    <div className="card-content-item">
                        <NewsCardItem/>
                    </div>
                </div>
        </div>
    </>
  );
}

export default App;
