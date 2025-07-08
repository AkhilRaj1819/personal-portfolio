// src/projectsData.js
import bookaura from './bookaura.png'
import squad from './squad.png'
import uw from './uw.png'
import aqua from './aqua.png'
import ba from './bookaura-figma.png'
import dash from './dashboard.png'

const projects = [
  {
    id: 'bookaura',
    title: 'BookAura',
    image: bookaura,
    short: 'An AI-powered ebook store and integrated study assistant.',
    full: `BookAura is a full-stack platform that merges digital reading with smart study tools. It functions as an AI-powered ebook marketplace with features like EPUB.js-based reading, secure book uploads (Cloudinary), and category-based filtering.

Its standout feature is the built-in StudyHub:
- ✨ Gemini-powered chatbot for real-time doubt clearing
- 📅 Study calendar with FullCalendar integration
- 🧠 Flashcard generator from PDFs using AI
- ⏱️ Pomodoro productivity timer

Designed for students, self-learners, and avid readers, BookAura redefines learning by turning ebooks into interactive experiences.`,
    stacks: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'Gemini', 'EPUB.js'],
    link: 'https://bookauraba.netlify.app'
  },
  {
    id: 'squad89',
    title: 'Squad89 Portfolio',
    image: squad,
    short: 'Responsive and modern developer portfolio.',
    full: `A sleek and responsive portfolio built for Squad89 to showcase their work, philosophy, and design sensibility. The project focuses on clean UI, accessibility, and maintainable component architecture.

Highlights:
- Fully responsive with utility-first styling via TailwindCSS
- Custom hover and scroll animations
- Modular React components for easy content updates

This project reflects best practices in building high-performing personal branding sites for tech professionals.`,
    stacks: ['React', 'TailwindCSS'],
    link: 'https://squad-89-portfolio-kalvium.vercel.app/'
  },
  {
    id: 'urbanwander',
    title: 'Urban Wander',
    image: uw,
    short: 'Static landing page for urban travel inspiration.',
    full: `Urban Wander is a visually-rich static landing page aimed at travelers seeking city-based adventures. It was built with semantic HTML, responsive CSS, and JavaScript enhancements.

Core Features:
- Pixel-perfect responsive layout
- Modern hero section, destination highlights, and testimonials
- Scroll-triggered animations and interactive nav menu

This project demonstrates frontend fundamentals, emphasizing layout precision and mobile-first design.`,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://vermillion-phoenix-f2e0bd.netlify.app/'
  },
  {
    id: 'aquilien',
    title: 'Aquilien',
    image: aqua,
    short: 'Ecommerce frontend for selling water bottles.',
    full: `Aquilien is a frontend ecommerce UI that allows users to explore and purchase water bottles. Built with React + Vite, it delivers fast load times and clean product presentation.

Key Features:
- Product listing cards with CTA and hover states
- TailwindCSS for consistent and responsive styling
- Component-driven architecture ready for backend integration

Aquilien represents a practical, scalable template for product-based online stores.`,
    stacks: ['React', 'Vite', 'TailwindCSS'],
    link: 'https://aqulien.netlify.app/'
  },
  {
    id: 'bookaura-figma',
    title: 'BookAura – Figma Design',
    image: ba,
    short: 'High-fidelity UI/UX prototype for BookAura.',
    full: `A comprehensive Figma prototype that maps out the entire user journey of BookAura — from book discovery to reading and studying.

Key Design Areas:
- Clean bookstore layout and reading interface
- Flashcard and AI chat UI integration
- Voice interaction support for accessibility
- Organized components and auto-layouts for consistency

It illustrates thoughtful UI/UX design for educational platforms, balancing usability with feature depth.`,
    stacks: ['Figma', 'UI/UX Design'],
    link: 'https://www.figma.com/proto/hjSnJKF9x4hR8QAFKR23lw/capstone-highfed?node-id=6-476'
  },
  {
    id: 'dashboard-figma',
    title: 'Admin Dashboard – Figma Design',
    image: dash,
    short: 'Visual analytics dashboard built in Figma.',
    full: `This is a professional Figma dashboard template showcasing data-rich UI elements for admin and analytics panels.

Features:
- KPI cards, graphs, and data tables
- Balanced dark/light mode compatibility
- Sidebar layout with modular sections
- Ideal for SaaS, CMS, or reporting dashboards

It demonstrates an understanding of data visualization, hierarchy, and dashboard UX standards.`,
    stacks: ['Figma', 'Charts', 'Admin UI'],
    link: 'https://www.figma.com/proto/oXryQokQByyp42ly8DK2OG/Assignment---Working-with-Colours--Copy-?node-id=8121-62'
  }
]

export default projects
