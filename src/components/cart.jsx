
import deleteBtn from '../assets/images/icon-delete.svg';
import cartImg from '../assets/images/image-product-1-thumbnail.jpg';

function Cart({ count, setCount }) {


  return (
    <div className='cart lg:right-10'>
      <h1 className="text-2xl text-slate-800 px-2 py-4 border-b border-slate-400">Cart</h1>
      {count !== 0 ?
        <div className='flex flex-col justify-between gap-4'>
          <div className='mt-3 flex flex-row items-center justify-around'>
            <img src={cartImg} alt="" className='w-20 rounded-lg' />
            <h1 className='text-slate-500 self-start leading-8'>Fall Limited Edition Sneakers<br /> <span >$125.00 * {count} <strong className='text-slate-900 ml-2'>${125 * count}.00</strong></span></h1>
            <button onClick={() => setCount(0)} ><img src={deleteBtn} alt="" /></button>
          </div>
          <button className='text-white bg-orange-400 p-2 bold w-80 self-center rounded-lg hover:bg-orange-200  transition-all duration-200'>Checkout</button>
        </div>
        : <p className='flex items-center justify-center text-slate-600 mt-10'>Your cart is empty...</p>}
    </div>
  )
}
export default Cart