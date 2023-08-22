
import mainImg from '../assets/mainImg.svg'

function Header() {
    return (
      <header className='flex items-center gap-x-4 md:gap-x-10' >
        <img src={mainImg} alt="React-svg" className='w-[40px] md:w-[100px]' />
        <h1 >The React Quiz</h1>
      </header>
    );
  }
  
  export default Header;