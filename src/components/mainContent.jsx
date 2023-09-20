import { AiOutlineShoppingCart } from "react-icons/ai";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import Slider from './slider';
import Cart from './cart'



function Main({ count, setAmount, handleCart, showCart, setLightBox }) {

  const handleMinus = () => {
    if (count !== 0) {
      setAmount(count - 1)
    } else {
      setAmount(0)
    }

  }

  return (
    <main className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:mt-10 lg:place-items-center' >
      {showCart && <Cart count={count} setCount={setAmount} />}
      <Slider setLightBox={setLightBox} />
      <section className='p-8 mx-auto max-w-xl'>
        <article>
          <h2 className='text-orange-400 uppercase font-bold tracking-wide py-1 py-2 mb-10 text-sm'>
            sneaker company
          </h2>
          <h1 className='text-slate-900 font-bold text-3xl lg:4xl mb-10'>Fall Limied Edition Sneakers</h1>
          <p className='text-slate-600 mb-10 leading-relaxed'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </article>
        <article className='pb-10'>
          <div className='flex items-center justify-between flex-wrap lg:flex-col lg:items-start lg:gap-4'>
            <ul className='flex  items-center gap-4'>
              <li className='text-slate-900 font-bold text-2xl py-1 px-2'>$125.00</li>
              <li className='bg-orange-100 text-orange-400 uppercase font-bold tracking-wide py-1 px-2 text-sm rounded shadow'>50%</li>
            </ul>
            <p className='text-slate-600 text p-2'><s>$250.00</s></p>
          </div>
          <div className='lg:flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between p-2 bg-slate-100 rounded shadow my-4 gap-4 lg:flex-1'>
              <button><img src={minus} alt="minus" onClick={handleMinus} /></button>
              <p className='font-bold'>{count}</p>
              <button><img src={plus} alt="plus" onClick={() => setAmount(count + 1)} /></button>
            </div>
            <div className='lg:flex-1'>
              <button className='flex items-center justify-center gap-4 w-full bg-orange-500 rounded-lg font-bold text-white py-2 px-4 hover:bg-orange-400 transition-all duration-200 mt-5 lg:mt-0 ' onClick={handleCart} >
                <AiOutlineShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>

        </article>


      </section>

    </main>

  );
}

export default Main;
