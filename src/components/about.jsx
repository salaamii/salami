const About = () => {
    return (
        <section className="about bg-bg2 flex justify-between gap-4 text-text">
            <div className="text-container">
                <p className="text-green font-mono text-[0.9rem]">// WHO I AM</p>
                <h1 className="font-condensed text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold ">ABOUT</h1>

                     <p class="reveal reveal-delay-1">
                        I'm <strong>Salami</strong>, a frontend developer based in Lagos. I hold degrees in 
                        <strong>Statistics</strong> (Unilorin) and <strong>Computer Science</strong> (KWASU) — 
                        a combination that makes me think carefully about both the logic and the experience of 
                        what I build.
                    </p>
                   <p class="reveal reveal-delay-2">
                        I came into development through curiosity, then kept going because I found I was 
                        good at it. Currently focused on building real products, not just 
                        tutorial clones.
                    </p>
                    <p class="reveal reveal-delay-3">
                        Outside of code, I produce and mix music as 
                        <a href="https://freiyardstd.vercel.app" class="about-link" target="_blank">DRKCHLD</a> 
                         , a whole separate world, same attention to craft.
                    </p>
            </div>

            <div className="stack-container">
                <div className="frontend-tools">
                    
                    <p>Frontend</p>
                    <div className="skill-tags">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Javascript</p>
                        <p>SCSS</p>
                        <p>Tailwind</p>
                        <p>React</p>
                        
                    </div>
                </div>
                <div className="frontend-tools">

                    <p>Tools</p>
                    <div className="skill-tags">
                        <p>Git</p>
                        <p>Github</p>
                        <p>Vercel</p>
                        <p>Vite</p>
                        <p>Visual Studio Code</p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About