import { TeamSection as TeamSectionType } from '@/types/team'
import TeamMember from './TeamMember'

export default function TeamSection({ title, lead, members }: TeamSectionType) {
  return (
    <>
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">{title}</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full mb-8">
          <TeamMember {...lead} />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
