import {frontend, tools} from '../data/skills'

const About = () => {

   
    return (
        <section id='about' className="about bg-bg2 flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:justify-center justify-between gap-4 lg:gap-20 text-text px-8 py-2 lg:py-32 lg:px-12">

            <div className="text-container ">
                <p className="text-green font-mono text-[0.9rem] text-right lg:text-left">// WHO I AM</p>
                <h1 className="font-condensed text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-center lg:text-left lg:text-white">ABOUT</h1>

                     <p className="reveal reveal-delay-1 text-text leading-[1.9] mb-5 text-[0.95rem]">
                        I'm <strong className="text-white font-medium">Salami</strong>, a frontend developer based in Lagos. I hold degrees in
                        <strong className="text-white font-medium"> Statistics</strong> (Unilorin) and <strong className="text-white font-medium">Computer Science</strong> (KWASU),
                        a combination that makes me think carefully about both the logic and the experience of
                        what I build.
                    </p>
                   <p className="reveal reveal-delay-2 text-text leading-[1.9] mb-5 text-[0.95rem]">
                        I came into development through curiosity, then kept going because I found I was
                        good at it. Currently focused on building real products, not just
                        tutorial clones.
                    </p>
                    <p className="reveal reveal-delay-3 text-text leading-[1.9] text-[0.95rem]">
                        Outside of code, I produce and mix music as
                         <a href="https://Bio.site/DRKCHLD" className="font-mono text-[0.65rem] text-green tracking-[0.1em] no-underline border-b border-green pb-[2px]" target="_blank"> DRKCHLD</a>
                         , a whole separate world, same attention to craft.
                    </p>
            </div>

            <div className="stack-container">

                <div className="frontend-stack">
                    
                    <h3 className="font-mono text-[0.6rem] text-text-dim tracking-[0.2em] uppercase mb-3">Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {frontend.map((skill)=> (
                            <p className="font-mono text-[0.65rem] text-green border border-green-border px-3 py-[0.35rem] tracking-[0.05em] bg-green-dim hover:bg-green hover:text-bg hover:border-green transition-colors cursor-pointer" key={skill}>{skill}</p>
                        ))}
                    </div>    
                </div>

                <div className="tools">
                    <h3 className="font-mono text-[0.6rem] text-text-dim tracking-[0.2em] uppercase mb-3">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool)=> (
                            <p className="font-mono text-[0.65rem] text-green border border-green-border px-3 py-[0.35rem] tracking-[0.05em] bg-green-dim hover:bg-green hover:text-bg hover:border-green transition-colors cursor-pointer" key={tool}>{tool}</p>
                        ))}
                    </div>    
                </div>

            </div>


        </section>
    )
}

export default About