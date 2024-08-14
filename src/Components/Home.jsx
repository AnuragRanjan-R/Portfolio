
import HeroImage from '../assets/me/me1new.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full '>

          <h2 className='text-4xl sm:text-6xl font-bold text-white'>Anurag the Novice | On a Journey from Code to Creation</h2>
          <p className='text-gray-500 py-4 max-w-md'>Building the Future, One Pixel at a Time | Civil Engineer by Degree, Web Developer by Passion</p>

          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex utems-center rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'> <MdKeyboardArrowRight size={25} className='ml-1' /> </span>
            </Link>


          </div>

        </div>

        <div>
          <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full ml-14' />
        </div>

      </div>

    </div>
  );
}

export default Home;

