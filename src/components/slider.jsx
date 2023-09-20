import { useState } from 'react';
import next from '../assets/images/icon-next.svg';
import prev from '../assets/images/icon-previous.svg';


function Slider({ setLightBox }) {
  const products = [
    {
      id: 1,
      image: "./image-product-1.jpg",
      thumb: "./image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      image: "./image-product-2.jpg",
      thumb: "./image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      image: "./image-product-3.jpg",
      thumb: "./image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      image: "./image-product-4.jpg",
      thumb: "./image-product-4-thumbnail.jpg",
    }
  ];
  const [value, setValue] = useState(0);
  const { image } = products[value];

  const prevSlide = () => {
    if (value !== 0) {
      setValue(value - 1)
    } else {
      setValue(products.length - 1)
    }
  }
  const nextSlide = () => {
    if (value === products.length - 1) {
      setValue(0)
    } else {
      setValue(value + 1)
    }
  }
  return (
    <section className='mx-auto'>
      <div className='relative'>
        <img src={image} alt='' className='img-btn h-96  md:w-full lg:rounded-2xl lg:cursor-pointer' onClick={() => setLightBox(true)} />
        <button className='btn-control btn-control-left' onClick={prevSlide} ><img src={prev} alt="" /></button>
        <button className='btn-control btn-control-right'><img src={next} alt="" onClick={nextSlide} /></button>
      </div>
      <ul className='hidden lg:flex items-center justify-start gap-5 mt-5'>
        {products.map((item, index) => {
          return (<li key={item.id} onClick={() => setValue(index)} className={`${index === value && "border-2 border-orange-400 opacity-80"} rounded-2xl cursor-pointer overflow-hidden`}>
            <img className='w-20' src={item.thumb} alt='' />
          </li>)
        })}
      </ul>
    </section>
  )
}
export default Slider;