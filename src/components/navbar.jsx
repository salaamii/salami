import {useState} from 'react';

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    

    return (

        <>    

            <nav  className="fixed font-mono top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-12 py-4 border-b border-green-border bg-bg backdrop-blur-md">
                <header className="text-green">SALAMI</header>

                <ul className={`mobile-menu ${mobileNav ? 'open' : ''} flex flex-col bg-bg lg:bg-transparent lg:static w-full lg:w-max px-4 py-4 lg:px-0 lg:py-0 absolute top-full right-0 lg:flex-row gap-6 text-xs text-text-dim tracking-widest uppercase`}>
                    <li><a href="#about" className='nav-link hover:text-green px-4 lg:px-2 py-2 lg:py-0 transition-colors cursor-pointer text-green bg-bg lg:text-text-dim font-bold block border-b lg:border-0 w-48 lg:w-max'>About</a></li>
                    <li><a href="#work" className='nav-link hover:text-green px-4 py-2 lg:px-2 lg:py-0 transition-colors cursor-pointer text-green bg-bg lg:text-text-dim font-bold block border-b lg:border-0 w-48 lg:w-max'>Work</a></li>
                    <li> <a href="#contact" className='nav-link hover:text-green px-4 py-2 lg:px-2 lg:py-0 transition-colors cursor-pointer text-green lg:text-text-dim font-bold block border-b lg:border-0 w-48 lg:w-max'>Contact</a></li>
                </ul>

                <button className=' hidden lg:flex border border-green text-green py-2 px-5 hover:bg-green hover:text-bg transition-colors cursor-pointer' onClick={()=> {}}>HIRE ME</button>

              <div className="hamburger lg:hidden"><i onClick={()=>{setMobileNav(!mobileNav)}} className="fa-solid fa-bars fa-2xl text-white cursor-pointer "></i></div>

            
            </nav>

            {mobileNav && (
                <div 
                    onClick={() => setMobileNav(false)} 
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                ></div>
            )}
        </>
    )
}

export default Navbar