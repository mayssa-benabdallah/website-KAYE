import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import SocialText from '@/components/Home/Social/SocialText';
import SocialCards from '@/components/Home/Social/SocialCards';
import { ContactForm } from './ContactForm';

export default function AppSocial() {
    return (
        <HomeSection id='social'>
            <Container>
            <Heading title="Contacter nous " className="text-2xl" /> {/* Apply text-2xl to make the heading size 18px */}
                <SocialText />
                <ContactForm />
                <SocialCards />
            </Container>
        </HomeSection>
    );
}
