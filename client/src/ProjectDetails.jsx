import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from './projectsData'

const Feature = ({ icon, title, description }) => (
  <div className='flex gap-4 items-start mb-6'>
    <div className='text-2xl'>{icon}</div>
    <div>
      <h4 className='text-lg font-semibold mb-1 text-white'>{title}</h4>
      <p className='text-sm leading-relaxed text-gray-300'>{description}</p>
    </div>
  </div>
)

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center px-4 bg-black text-gray-300'>
        <div className='text-center text-xl'>🚫 Project not found.</div>
      </div>
    )
  }

  const isBookAura = project.id === 'bookaura'

  return (
    <div className='bg-black text-white min-h-screen px-4 pt-[100px] pb-8'>
      <div className='max-w-5xl mx-auto'>
        <Link
          to='/projects'
          className='hover:underline font-medium mb-6 inline-block text-sm text-[#30AF5B]'
        >
          ← Back to Projects
        </Link>

        <div className='rounded-2xl shadow-xl p-6 md:p-10 bg-black'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-[280px] md:h-[350px] object-cover rounded-xl shadow-sm mb-8'
          />

          <h1 className='text-3xl md:text-4xl font-bold mb-6 text-white'>{project.title}</h1>

          {isBookAura ? (
            <>
              <p className='mb-6 leading-relaxed text-base md:text-lg text-gray-300'>
                <strong>BookAura</strong> is a powerful full-stack platform that blends an AI-driven ebook store with an intelligent learning assistant. It allows users to explore and buy ebooks effortlessly and then shift into focus mode with the built-in StudyHub.
              </p>

              <div className='rounded-xl p-6 md:p-8 mb-6 bg-gray-800'>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  ✨ StudyHub Key Features
                </h3>
                <Feature
                  icon='🤖'
                  title='AI Chat Assistant'
                  description='Chat with a Gemini-powered assistant to ask doubts, clarify concepts, and get instant academic support within the StudyHub interface.'
                />
                <Feature
                  icon='📅'
                  title='Study Calendar'
                  description='Plan and organize your study sessions using a dynamic FullCalendar integration that supports reminders and visual scheduling.'
                />
                <Feature
                  icon='🧠'
                  title='Flashcard Generator'
                  description='Upload your PDFs and instantly generate flashcards to reinforce memory and boost retention for key concepts.'
                />
                <Feature
                  icon='⏲️'
                  title='Pomodoro Timer'
                  description='Use the built-in Pomodoro timer to stay focused and avoid burnout with structured study sprints and timed breaks.'
                />
              </div>

              <p className='leading-relaxed text-base md:text-lg text-gray-300'>
                BookAura creates an immersive and distraction-free experience for students looking to study smarter, not harder. It bridges passive reading with active learning to enhance academic outcomes.
              </p>
            </>
          ) : (
            <p className='mb-6 leading-relaxed text-base md:text-lg text-gray-300'>
              {project.full}
            </p>
          )}

          <div className='flex flex-wrap gap-3 mt-8 mb-6'>
            {project.stacks.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm rounded-full shadow-sm border bg-gray-700 border-gray-600 text-gray-200'
              >
                {tech}
              </span>
            ))}
          </div>

          <div className='text-center mt-6'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white hover:bg-gray-200 text-black text-sm font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md'
            >
              🔗 Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
