import logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai"
import avatar from '../assets/images/image-avatar.png';

function Header({ count, handleCart, navState, handleNav, refOne, refTwo }) {
  return (
    <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">

      <div className="flex items-center justify-start gap-4" >
        <button className="ham-btn" onClick={handleNav} ref={refOne} >
          <span className={!navState ? `open-ham` : `close-ham`}></span>
        </button>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={!navState ? `close` : `open`}>
          <ul className="navbar flex justify-start gap-4">
            <li className="capitalize font-bold lg:text-slate-600 text-slate-900 hover:text-slate-600">collections</li>
            <li className="capitalize font-bold lg:text-slate-600 text-slate-900 hover:text-slate-600">women</li>
            <li className="capitalize font-bold lg:text-slate-600 text-slate-900 hover:text-slate-600">men</li>
            <li className="capitalize font-bold lg:text-slate-600 text-slate-900 hover:text-slate-600">about</li>
            <li className="capitalize font-bold lg:text-slate-600 text-slate-900 hover:text-slate-600">contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-start gap-4" ref={refTwo}>
        <button className="relative" onClick={handleCart} >
          {count !== 0 ? <p className='absolute bottom-3 right-0 w-4 aspect-square bg-orange-400 rounded-full text-white bold'>{count}</p> : <p className="hidden">{count}</p>}
          < AiOutlineShoppingCart className="text-2xl text-slate-600 cursor-pointer hover:text-slate-900" />
        </button>

        <div className="avatar-img w-12 ">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

    </header>
  );
}

export default Header;