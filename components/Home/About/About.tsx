import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import AboutText from '@/components/Home/About/AboutText';
import AboutPhotos from '@/components/Home/About/AboutPhotos';

export default function AppAbout() {
  return (
    <HomeSection id="about">
      <Container>
      <Heading title="Télécharger" className="text-orange"  />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <p className="text-center font-bold text-xl font-montserrat">
            T'as un iPhone? <br></br>Clique ici ! 👇
          </p>
          <p className="text-center font-bold text-xl">
            T'as un Android?<br></br> Clique ici ! 👇
          </p>     <div></div> 
          <div></div> 
            </div>
        <AboutText />
        <AboutPhotos />
      </Container>
    </HomeSection>
  );
}
