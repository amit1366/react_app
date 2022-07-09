import './App.css';
import Navbar from './component/Navbar'
import Formtext from './component/Formtext'
import About from './component/about';
function App() {
  return (
    <>
      <Navbar />

      <Formtext Heading="Please enter your text" />

      <About />

    </>
  );
}

export default App;


