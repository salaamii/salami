
const Hero = ()=> {
    return (
        <section className="hero-container min-h-screen flex justify-center items-start pt-24 relative overflow-hidden">

            <div className="hero-line "></div>
            <div className="hero-line"></div>
            <div className="hero-line"></div>

            <div className="text-container flex flex-col gap-6 w-full mt-4 mx-auto max-w-[1000px] pl-[10%]">
                <div className="hero-eyebrow font-mono text-[1rem] text-green tracking-widest uppercase mb-8 flex items-center gap-3">
                    <p className="">FRONTEND DEVELOPER - LAGOS. NG</p>
                </div>

                <h1 className="font-condensed font-extrabold text-[clamp(5rem,16vw,11.5rem)] leading-[0.88] text-white uppercase tracking-[-0.02em] mb-[0.2em]">SAL<span className="name-outline">AMI</span></h1>

                <p className="hero-desc text-text text-[1rem] max-w-[400px] leading-[1.8] mb-12 border-l border-green pl-5">
                    Frontend developer with a background in Statistics and Computer Science.
                     I build clean, functional web applications, and when I'm not writing code,
                     I produce music under <a href="https://freiyardstd.vercel.app" className="about-link text-green underline" target="_blank">DRKCHLD</a>.
                </p>

                <div className="hero-cta flex gap-6 font-mono font-extrabold tracking-widest">
                    <button className='border border-text-dim text-bg bg-green py-4 px-8 cursor-pointer'>VIEW WORK</button>
                    <button className='border border-text-dim text-text-dim py-4 px-8 hover:text-green hover:text-green hover:border-green transition-colors cursor-pointer'>GET IN TOUCH</button>

                </div>
                
            </div>
        </section>
    )
}

export default Hero