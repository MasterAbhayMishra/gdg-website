import TeamSection from '../components/team/TeamSection'
import { TeamSection as TeamSectionType } from '../types/team'

const teamData: TeamSectionType[] = [
  {
    title: 'GDG Club Lead',
    lead: {
      name: 'Jayesh Shete',
      role: 'Club Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [],
  },
  {
    title: 'Web Development',
    lead: {
      name: 'Aakhyan Jeyush',
      role: 'Web Dev Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [
      { name: 'Alice Johnson', role: 'Frontend Developer', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Bob Williams', role: 'Backend Developer', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Charlie Brown', role: 'Full Stack Developer', image: '/placeholder.svg?height=128&width=128' },
    ],
  },
  {
    title: 'Competitive Programming',
    lead: {
      name: 'Eva Davis',
      role: 'CP Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [
      { name: 'Frank Miller', role: 'Algorithm Specialist', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Grace Wilson', role: 'Data Structures Expert', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Henry Taylor', role: 'Problem Solver', image: '/placeholder.svg?height=128&width=128' },
    ],
  },
  {
    title: 'Design',
    lead: {
      name: 'Olivia Martin',
      role: 'Design Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [
      { name: 'Sophia Anderson', role: 'UI Designer', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Liam Thompson', role: 'UX Designer', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Ava White', role: 'Graphic Designer', image: '/placeholder.svg?height=128&width=128' },
    ],
  },
  {
    title: 'Management',
    lead: {
      name: 'Noah Clark',
      role: 'Management Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [
      { name: 'Emma Lewis', role: 'Event Coordinator', image: '/placeholder.svg?height=128&width=128' },
      { name: 'James Hall', role: 'Resource Manager', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Mia Scott', role: 'Logistics Specialist', image: '/placeholder.svg?height=128&width=128' },
    ],
  },
  {
    title: 'Content',
    lead: {
      name: 'Isabella King',
      role: 'Content Lead',
      image: '/placeholder.svg?height=128&width=128',
    },
    members: [
      { name: 'Ethan Green', role: 'Content Writer', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Charlotte Adams', role: 'Social Media Manager', image: '/placeholder.svg?height=128&width=128' },
      { name: 'Daniel Baker', role: 'Video Editor', image: '/placeholder.svg?height=128&width=128' },
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center text-gray-900">Our Team</h1>
      {teamData.map((section, index) => (
        <TeamSection key={index} {...section} />
      ))}
    </div>
  )
}
