
const Hero = ()=> {
    return (
        <section className="hero-container min-h-[100svh] flex justify-center items-start pt-24 pb-24 relative overflow-hidden">

            <div className="hero-line "></div>
            <div className="hero-line"></div>
            <div className="hero-line"></div>

            <div className="text-container flex flex-col md:items-center text-center gap-6 w-full mt-4 mx-auto max-w-[1000px] px-6 lg:pl-[0%] lg:px-0">
                <div className="hero-eyebrow font-mono text-[0.8rem] lg:text-[1rem] text-green tracking-widest uppercase mb-8 flex items-center gap-3">
                    <p className="">FRONTEND DEVELOPER - LAGOS. NG</p>
                </div>

                <h1 className="font-condensed font-extrabold text-[clamp(5rem,12vw,11.5rem)] leading-[0.88] text-white pr-[40%] md:pr-[0%] uppercase tracking-[-0.02em] mb-[0.2em] md:pl-[0%] text-center">SAL<span className="name-outline">AMI</span></h1>

                <p className="hero-desc text-text text-[1.2rem] lg:text-[1rem] text-left lg:max-w-[400px] w-90 leading-[1.8] mb-12 border-l border-green pl-5">
                    Frontend developer with a background in Statistics and Computer Science.
                     I build clean, functional web applications, and when I'm not writing code,
                     I produce music under <a href="https://freiyardstd.vercel.app" className="about-link text-green underline" target="_blank">DRKCHLD</a>.
                </p>

                <div className="hero-cta flex flex-col lg:flex-row md:flex-row gap-6 font-mono font-extrabold tracking-widest">
                   <a href="#projects"> <button className='border border-text-dim text-bg bg-green py-3 px-4 lg:py-4 lg:px-8 cursor-pointer'>VIEW WORK</button></a>
                   <a href="#contact"><button className='border border-text-dim bg-bg text-text-dim py-3 px-4 lg:py-4 lg:px-8 hover:text-green hover:text-green hover:border-green transition-colors cursor-pointer'>GET IN TOUCH</button></a>

                </div>
                
            </div>
        </section>
    )
}

export default Hero