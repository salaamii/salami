const Contact = ()=> {
    return (

        <section id="contact" className="bg-bg2 py-16 lg:py-32 px-6 lg:px-12 text-center">
            <div className="max-w-[600px] mx-auto">
                <p className="font-mono text-[0.65rem] text-green tracking-[0.25em] uppercase mb-4">// LET'S WORK</p>
                <h1 className="font-condensed font-extrabold text-[clamp(2.5rem,6vw,4rem)] text-white uppercase leading-none mb-6">GOT A PROJECT?<br />LET'S TALK.</h1>
                <p className="text-[1.2rem] text-text-dim leading-[1.8] mb-12">Open to frontend roles, freelance projects, and collaborations.<br />Response within 24 hours.</p>

                <a href="mailto:salamiolamide10@gmail.com" className="font-condensed font-bold text-[clamp(1.8rem,5vw,3.5rem)] text-white uppercase tracking-[0.05em] border-b-2 border-green pb-1 inline-block mb-12 hover:text-green transition-colors">salamiolamide10@gmail.com</a>

                <div className="flex justify-center gap-8">
                    <a href="https://github.com/salaamii" target="_blank" className="font-mono font-extrabold text-[1rem] text-text tracking-[0.15em] uppercase hover:text-green transition-colors">GitHub</a>
                    <a href="" className="font-mono text-[1rem] text-text tracking-[0.15em] font-extrabold uppercase hover:text-green transition-colors">LinkedIn</a>
                    <a href="" className="font-mono text-[1rem] text-text tracking-[0.15em] font-extrabold uppercase hover:text-green transition-colors">X</a>
                </div>
            </div>
        </section>
    )
}

export default Contact