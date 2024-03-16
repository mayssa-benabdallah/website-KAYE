import HomeSection from '@/components/Layout/Section/HomeSection';
import Container from '@/components/Layout/Container';
import Heading from '@/components/Layout/Heading/Heading';
import SkillsCard from './SkillsCard';
import SkillsData from './SkillsData';
import SkillsCerts from './SkillsCerts';

export default function AppSkills() {
  return (
    <HomeSection id="skills">
      <div className='skills-overlay'></div>
      <Container>
      <Heading title="Technical Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
          {SkillsData.map((skill, index) => (
            <SkillsCard key={index} {...skill} />
          ))}
        </div>
        <SkillsCerts />
      </Container>
    </HomeSection>
  );
}
