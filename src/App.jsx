import { useState, useEffect, useRef } from 'react';
import './index.css';
import Header from './components/header';
import Main from './components/mainContent';
import LightBox from './components/lightBox';

function App() {
  const [count, setAmount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showLightBox, setLightBox] = useState(false);
  const [navState, setNavState] = useState(false);
  const refOne = useRef();
  const refTwo = useRef();
  useEffect(() => {
    let handle = (e) => {
      if (!refTwo.current.contains(e.target)) {
        setShowCart(false)
      }
    }
    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle)
    }
  }, [showCart])
  useEffect(() => {
    let handle = (e) => {
      if (!refOne.current.contains(e.target)) {
        setNavState(false);
      }
    }
    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle)
    }
  }, [navState])

  const handleCart = () => {
    if (!showCart) {
      setShowCart(true)
    } else {
      setShowCart(false)
    }
  }
  const handleNav = () => {
    if (!navState) {
      setNavState(true)
    } else {
      setNavState(false)
    }
  }

  return (
    <div className='relative mx-auto'>
      {showLightBox && <LightBox setLightBox={setLightBox} />}
      < Header
        handleCart={handleCart}
        count={count}
        handleNav={handleNav}
        navState={navState}
        refOne={refOne}
        refTwo={refTwo}
      />
      <Main
        handleCart={handleCart}
        showCart={showCart}
        count={count}
        setAmount={setAmount}
        setLightBox={setLightBox}

      />
    </div>
  );
}

export default App;
