import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Hero from "./components/Hero/Hero";
import NewPlace from "./components/NewPlace/NewPlace"
import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  return (
    <div className='w-[100vw] overflow-x-hidden'>
      <Banner />
      <Hero />
      <NewPlace/>
      <Companies />
    </div>
  )
}
