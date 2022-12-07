import './index.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./routes/Home/Home"

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration : 900,
        offset : 80,
      }
    );
  }, [])
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
