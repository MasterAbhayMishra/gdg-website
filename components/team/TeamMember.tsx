import Image from 'next/image'
import { TeamMember as TeamMemberType } from '@/types/team'

export default function TeamMember({ name, role, image }: TeamMemberType) {
  return (
    <div className="flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  )
}
