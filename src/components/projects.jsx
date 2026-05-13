import {frontend, tools, projects} from '../data/skills'

const Projects = ()=> {

    
    return (
        <section className="bg-bg py-32 px-12">
            <div className="max-w-[1000px] mx-auto">
                <p className="font-mono text-[0.65rem] text-green tracking-[0.25em] uppercase mb-4">// SELECTED WORK</p>
                <h1 className="font-condensed font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase leading-none mb-12">PROJECTS</h1>

                <div className="flex flex-col gap-[1.5px]">
                    {projects.map((project) => (
                        <div key={project.id} className="border border-green-border bg-bg2 p-10 grid grid-cols-[auto_1fr_auto] gap-8 items-center hover:border-green hover:bg-bg3 transition-colors">
                            <span className="font-mono text-[0.65rem] text-text-dim tracking-[0.1em] self-start pt-1">{project.id}</span>
                            <div>
                                <h2 className="font-condensed font-bold text-[1.6rem] text-white uppercase tracking-[0.02em] mb-1">{project.title}</h2>
                                <p className="text-[0.85rem] text-text leading-[1.7] max-w-[500px] mb-4">{project.desc}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-mono text-[0.55rem] text-text-dim border border-green-border px-2 py-1 uppercase tracking-[0.08em]">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 self-start">
                                <a href={project.live} target="_blank" className="font-mono text-[0.6rem] text-text-white tracking-[0.15em] uppercase hover:text-green transition-colors">Live Site ↗</a>
                                <a href={project.github} className="font-mono text-[0.6rem] text-text-white tracking-[0.3em] uppercase hover:text-green transition-colors">GitHub ↗</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects