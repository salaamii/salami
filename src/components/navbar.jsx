import {useState} from 'react';

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    

    return (

        <>    

            <nav  className="fixed font-mono top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-12 py-4 border-b border-green-border bg-bg/85 backdrop-blur-md">
                <header className="text-green">SALAMI</header>

                <ul className={`mobile-menu ${mobileNav ? 'open' : ''} flex flex-col bg-bg lg:bg-none w-full lg:w-max px-4 py-4 lg:px-0 lg:py-0 absolute top-full right-0 lg:flex-row gap-6 text-xs text-text-dim tracking-widest uppercase`}>
                    <li><a href="#about" className='nav-link hover:text-green px-4 py-2 transition-colors cursor-pointer text-green bg-bg lg:text-base font-bold block border-b border- w-48'>About</a></li>
                    <li><a href="#work" className='nav-link hover:text-green px-4 py-2 transition-colors cursor-pointer text-green bg-bg lg:text-base font-bold block border-b w-48'>Work</a></li>
                    <li> <a href="#contact" className='nav-link hover:text-green px-4 py-2 transition-colors cursor-pointer text-green lg:text-base font-bold block border-b w-48'>Contact</a></li>
                </ul>

                <button className=' hidden lg:flex border border-green text-green py-2 px-5 hover:bg-green hover:text-bg transition-colors cursor-pointer' onClick={()=> {}}>HIRE ME</button>

                <i onClick={()=>{setMobileNav(!mobileNav)}} className="fa-solid fa-bars fa-2xl text-white cursor-pointer lg:hidden"></i>

            
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