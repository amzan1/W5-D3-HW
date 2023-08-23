import chair from '../assets/image 15.svg'
import cups from '../assets/cups.png'

function Banner() {
  return (
    <>
    
    <div className='flex  w-2/4 bg-slate-200 mx-3  max-sm:my-3 max-sm:w-fit '>
        <div className='flex flex-col p-6'>
            <h2 className=' text-5xl font-light	mb-5'>WOODEN CHAIRS</h2>
            <b className=' font-extrabold text-xs'>SALE UP TO</b>
            <p className=' text-lg text-lime-600'>40% OFF</p>
            <button className=' bg-amber-200 w-28 h-10 rounded-md mt-10'>Shop Now</button>
        </div>
        <div>
            <img src={chair} alt="" />
        </div>
    </div>
    <div className='flex  justify-center w-1/4  bg-slate-200 pt-5 max-sm:mx-3 my-3max-sm:my-3 max-sm:w-auto'>
        <div className='flex flex-col text-center items-center'>
            <h3 className=' text-xl'>Pack 4 Cups of coffee</h3>
            <p className=' font-semibold'>Starting at <span className=' text-red-600 font-bold'>$99.99</span></p>
            <img className=' w-32 mt-10' src={cups} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Banner