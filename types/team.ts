export interface TeamMember {
    name: string;
    role: string;
    image: string;
  }
  
  export interface TeamSection {
    title: string;
    lead: TeamMember;
    members: TeamMember[];
  }
  
  