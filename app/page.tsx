import AppHero from '@/components/Home/Hero/Hero';
import AppAbout from '@/components/Home/About/About';
import AppSkills from '@/components/Home/Skills/Skills';
import AppSocial from '@/components/Home/Social/Social';

export default async function Home() {
  return (
    <>
      <AppHero />
      <AppSkills />
      <AppAbout />
      <AppSocial />
    </>
  );
}
