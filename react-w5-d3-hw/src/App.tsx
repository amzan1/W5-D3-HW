import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'
import bag from './assets/bag.svg'
import cup from './assets/cup.png'
import Tshirt from './assets/t-shert.png'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex my-5 justify-center flex-row max-sm:flex-col w-auto'>
      <Banner/>
      </div>
      <div className='flex justify-center  items-center flex-row max-sm:flex-col w-auto '>
      <Card src={bag} supject='Bags' type1='HandBag' type2='BackBag' type3='MiniBag' type4='Tots'/>
      <Card src={cup} supject='Cups' type1='CoffeeCup' type2='TeeCup' type3='Mug' type4='Glass'/>
      <Card src={Tshirt} supject='Clothing' type1='T-shirt' type2='Sweater' type3='Dress' type4='Shirt'/>

      </div>
      
    </>
  )
}

export default App
