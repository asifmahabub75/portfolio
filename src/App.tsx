import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'

type IconName =
  | 'arrow'
  | 'award'
  | 'book'
  | 'briefcase'
  | 'check'
  | 'chevron'
  | 'code'
  | 'download'
  | 'external'
  | 'github'
  | 'graduation'
  | 'linkedin'
  | 'mail'
  | 'menu'
  | 'moon'
  | 'send'
  | 'spark'
  | 'sun'
  | 'target'
  | 'user'
  | 'x'

const icons: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="M8.5 12 7 22l5-3 5 3-1.5-10" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  briefcase: <><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 12h20" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></>,
  external: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" />,
  graduation: <><path d="m2 10 10-5 10 5-10 5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 7L2 7" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6Z" /><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8Z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>
}

const projects = [
  { id: '01', name: 'Bank Management System', image: 'bank-management.jpg', category: 'OOP', language: 'Java', description: 'A structured banking application concept for managing customer accounts and everyday transactions.', concepts: ['Classes & Objects', 'Encapsulation', 'File Handling'] },
  { id: '02', name: 'Student Management System', image: 'student-management.jpg', category: 'OOP', language: 'C++', description: 'A console-based academic record manager designed around clean object-oriented principles.', concepts: ['OOP', 'Inheritance', 'Data Management'] },
  { id: '03', name: 'Library Management System', image: 'library-management.jpg', category: 'Data Structures', language: 'C', description: 'A lightweight library catalog concept using linked data to organize books and borrowing records.', concepts: ['Linked List', 'Pointers', 'Structures'] },
  { id: '04', name: 'Shortest Path Finder', image: 'shortest-path.jpg', category: 'Algorithms', language: 'C++', description: 'A graph exploration tool concept for finding efficient routes using Dijkstra’s algorithm.', concepts: ['Graphs', 'Dijkstra', 'Priority Queue'] },
]

const skills = [
  { group: 'Programming Languages', icon: 'code' as IconName, items: [['C', 76], ['C++', 82], ['Java', 72], ['Python', 68]] as [string, number][] },
  { group: 'Web Technologies', icon: 'spark' as IconName, items: [['HTML', 84], ['CSS', 78]] as [string, number][] },
  { group: 'CS Fundamentals', icon: 'target' as IconName, items: [['OOP', 82], ['Data Structures', 76], ['Problem Solving', 80], ['Algorithms', 74]] as [string, number][] },
]

const achievements = [
  { title: 'Take Off Programming Contest', event: 'Programming Contest', description: 'Participated in a competitive programming event focused on logic, speed, and structured problem solving.' },
  { title: 'Unlock the Algorithm Contest', event: 'Algorithm Competition', description: 'Applied algorithmic thinking to timed challenges across a range of computational problems.' },
  { title: 'TypeTrack', event: 'Technical Event', description: 'Took part in a skill-focused technical event that encouraged accuracy and consistent performance.' },
  { title: 'DIU Math Olympiad', event: 'Daffodil International University', description: 'Participated in a university mathematics event centered on analytical and quantitative reasoning.' },
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading reveal">
    <span className="eyebrow"><span />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [filter, setFilter] = useState('All')
  const [showTop, setShowTop] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const roles = ['Computer Science Student', 'Aspiring Software Developer', 'Problem Solver']

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const current = roles[roleIndex]
    if (typedRole.length < current.length) {
      const timer = window.setTimeout(() => setTypedRole(current.slice(0, typedRole.length + 1)), 65)
      return () => window.clearTimeout(timer)
    }
    const timer = window.setTimeout(() => {
      setTypedRole('')
      setRoleIndex((value) => (value + 1) % roles.length)
    }, 1600)
    return () => window.clearTimeout(timer)
  }, [typedRole, roleIndex])

  useEffect(() => {
    const done = window.setTimeout(() => setLoaded(true), 700)
    const onScroll = () => setShowTop(window.scrollY > 650)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.clearTimeout(done); window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current?.checkValidity()) {
      setFormStatus('Please complete all fields with a valid email address.')
      formRef.current?.reportValidity()
      return
    }
    setFormStatus('Thanks for reaching out. Your message is ready to be connected to an email service.')
    formRef.current.reset()
  }

  const filters = ['All', 'OOP', 'Data Structures', 'Algorithms', 'Problem Solving']
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return <>
    <div className={`loader ${loaded ? 'loader--hidden' : ''}`} aria-hidden="true"><div className="loader-mark">&lt;AM /&gt;</div><div className="loader-line"><span /></div></div>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Asif Mahabub home"><span>&lt;</span>AM<span>/&gt;</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'Achievements', 'Contact'].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          )}
        </div>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><Icon name={dark ? 'sun' : 'moon'} /></button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name={menuOpen ? 'x' : 'menu'} /></button>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="availability"><span /> Open to learning & opportunities</div>
            <p className="hero-greeting">Hello, I’m</p>
            <h1>Khandhakar<br /><span>Asif Mahabub.</span></h1>
            <div className="typed-line">I’m a <strong>{typedRole}</strong><span className="cursor" /></div>
            <p className="hero-intro">I’m a Computer Science and Engineering student passionate about programming, problem-solving, algorithms, and software development. I enjoy learning new technologies and building practical projects that improve my programming skills.</p>
            <div className="hero-buttons">
              <a href="#projects" className="button">View Projects <Icon name="arrow" size={18} /></a>
              <a href="#contact" className="button button-outline">Contact Me</a>
            </div>
            <div className="social-row">
              <span>Find me online</span><i />
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Icon name="github" /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a>
              <a href="mailto:your.email@example.com" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-portrait-frame">
              <img src={`${import.meta.env.BASE_URL}asif.jpg`} alt="Khandhakar Asif Mahabub" className="hero-portrait" />
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><i><Icon name="chevron" size={15} /></i></a>
      </section>

      <section id="about" className="section">
        <div className="container">
          <SectionHeading eyebrow="Get to know me" title="About me" />
          <div className="about-grid">
            <div className="about-copy reveal">
              <h3>Curious mind. Consistent learner.<br /><span>Future software developer.</span></h3>
              <p>I’m currently pursuing a Bachelor of Science in Computer Science and Engineering at Daffodil International University. My journey is driven by curiosity—understanding how systems work and turning ideas into useful software.</p>
              <p>I enjoy the process of breaking down complex problems, designing logical solutions, and steadily improving them through code.</p>
              <div className="about-points">
                <div><Icon name="graduation" /><span><small>Education</small><strong>B.Sc. in CSE, DIU</strong></span></div>
                <div><Icon name="code" /><span><small>Programming level</small><strong>Intermediate</strong></span></div>
                <div><Icon name="target" /><span><small>Current focus</small><strong>DSA & Software Development</strong></span></div>
                <div><Icon name="briefcase" /><span><small>Career goal</small><strong>Software Developer</strong></span></div>
              </div>
              <a className="text-link" href="#contact">Let’s build something meaningful <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="What I work with" title="Skills & knowledge" text="A growing toolkit built through coursework, practice, and hands-on exploration." />
          <div className="skills-grid">
            {skills.map((skill) => <article className="skill-card reveal" key={skill.group}>
              <div className="skill-title"><span><Icon name={skill.icon} /></span><h3>{skill.group}</h3></div>
              <div className="skill-list">{skill.items.map(([name, value]) => <div className="skill-item" key={name}>
                <div><strong>{name}</strong><span>{value}%</span></div>
                <div className="skill-track"><i style={{ '--skill': `${value}%` } as React.CSSProperties} /></div>
              </div>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <SectionHeading eyebrow="Academic journey" title="Education" />
          <div className="education-card reveal">
            <div className="education-icon"><Icon name="graduation" size={31} /></div>
            <div className="education-main">
              <div className="education-top"><span>Bachelor’s Degree</span><small>Dates editable</small></div>
              <h3>Bachelor of Science in Computer Science and Engineering</h3>
              <p><Icon name="book" size={17} /> Daffodil International University (DIU)</p>
              <div className="education-tags"><span>Department of CSE</span><span>Undergraduate</span><span>Dhaka, Bangladesh</span></div>
            </div>
            <div className="education-status"><span /> Currently studying</div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="Learning by building" title="Featured projects" text="Project concepts that put programming fundamentals and problem-solving techniques into practice." />
          <div className="filters reveal" role="group" aria-label="Filter projects">
            {filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => <article className="project-card reveal" key={project.id}>
              <div className="project-top"><span className="project-number">{project.id}</span><span className={`language language-${project.language.toLowerCase().replace('+', 'p')}`}>{project.language}</span></div>
              <img className="project-image" src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.name} preview`} />
              <small>{project.category}</small>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="concepts">{project.concepts.map((concept) => <span key={concept}>{concept}</span>)}</div>
              <div className="project-actions">
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub</a>
                <a href="#contact">View details <Icon name="external" size={16} /></a>
              </div>
            </article>)}
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="button button-outline center-button"><Icon name="github" size={18} /> Visit my GitHub</a>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="container">
          <SectionHeading eyebrow="Milestones along the way" title="Achievements & participation" text="A record of events that have strengthened my analytical thinking and competitive programming experience." />
          <div className="achievements-grid">
            {achievements.map((achievement, index) => <article className="achievement-card reveal" key={achievement.title}>
              <div className="certificate-placeholder">
                <Icon name="award" size={38} /><span>Certificate / event image</span><b>0{index + 1}</b>
              </div>
              <div className="achievement-body">
                <div><span>{achievement.event}</span><small>Date to be added</small></div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow"><span />Get in touch</span>
            <h2>Have an idea or<br />just want to <em>say hello?</em></h2>
            <p>I’m always open to learning opportunities, collaborations, and conversations about technology. Send a message and I’ll be happy to connect.</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com"><span><Icon name="mail" /></span><div><small>Email</small><strong>your.email@example.com</strong></div></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><span><Icon name="linkedin" /></span><div><small>LinkedIn</small><strong>linkedin.com/in/your-profile</strong></div></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><span><Icon name="github" /></span><div><small>GitHub</small><strong>github.com/your-username</strong></div></a>
            </div>
          </div>
          <form className="contact-form reveal" ref={formRef} onSubmit={submitForm} noValidate>
            <div className="field-row">
              <label>Full name<input required name="name" placeholder="Your name" /></label>
              <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
            </div>
            <label>Subject<input required name="subject" placeholder="What would you like to discuss?" /></label>
            <label>Message<textarea required name="message" rows={5} placeholder="Tell me a little about it..." /></label>
            <button className="button" type="submit">Send message <Icon name="send" size={17} /></button>
            {formStatus && <p className="form-status" role="status"><Icon name="check" size={17} />{formStatus}</p>}
          </form>
        </div>
      </section>
    </main>

    <footer>
      <div className="container footer-inner">
        <div><a href="#home" className="brand"><span>&lt;</span>AM<span>/&gt;</span></a><p>Designed & built with curiosity and code.</p></div>
        <p>© {new Date().getFullYear()} Khandhakar Asif Mahabub. All rights reserved.</p>
        <div className="footer-socials"><a href="https://github.com/" aria-label="GitHub"><Icon name="github" /></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="mailto:your.email@example.com" aria-label="Email"><Icon name="mail" /></a></div>
      </div>
    </footer>
    <button className={`back-top ${showTop ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><Icon name="arrow" /></button>
  </>
}

export default App
