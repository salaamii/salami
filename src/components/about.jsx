const About = () => {

    const frontend = ['HTML5', 'CSS3', 'Javascript', 'SCSS', 'Tailwind', 'React'];
    const tools = ['Vite', 'Vercel', 'VS Code', 'Git', 'Github', 'Supabase']
    return (
        <section className="about bg-bg2 flex flex-col justify-between gap-4 text-text px-8 py-2">
            <div className="text-container">
                <p className="text-green font-mono text-[0.9rem] text-right">// WHO I AM</p>
                <h1 className="font-condensed text-[clamp(3.5rem,8vw,6.5rem)] font-extrabold text-center">ABOUT</h1>

                     <p class="reveal reveal-delay-1 mb-2 text-left">
                        I'm <strong>Salami</strong>, a frontend developer based in Lagos. I hold degrees in 
                        <strong>Statistics</strong> (Unilorin) and <strong>Computer Science</strong> (KWASU), 
                        a combination that makes me think carefully about both the logic and the experience of 
                        what I build.
                    </p>
                   <p class="reveal reveal-delay-2 mb-2">

                        I came into development through curiosity, then kept going because I found I was 
                        good at it. Currently focused on building real products, not just 
                        tutorial clones.
                    </p>
                    <p class="reveal reveal-delay-3">
                        Outside of code, I produce and mix music as 
                         <a href="https://freiyardstd.vercel.app" className="about-link text-green font-bold underline" target="_blank"> DRKCHLD</a> 
                         , a whole separate world, same attention to craft.
                    </p>
            </div>

            <div className="stack-container">

                <div className="frontend-stack">
                    
                    <h3 className="text-text-dim uppercase mb-3 font-bold">Stack</h3>
                    <div className="stack grid grid-cols-3 gap-2 mb-4">
                        {frontend.map((skill)=> (
                            <p className="w-full text-center border border-green mb-2 px-2 py-1 lg:text-[1.2rem] text-green bg-green-dim" key={skill}>{skill}</p>
                        ))}
                    </div>    
                </div>

                <div className="tools">
                    <h3 className="text-text-dim uppercase mb-3 font-bold text-right">Tools</h3>
                    <div className="tool grid grid-cols-3 gap-2">
                        {tools.map((tool)=> (
                            <p className="w-full text-center border text-[1.2rem] border-green mb-2 px-2 py-1 text-green bg-green-dim" key={tool}>{tool}</p>
                        ))}
                    </div>    
                </div>

            </div>
        </section>
    )
}

export default About