import Container from '@/components/Layout/Container'
import {Link} from "@nextui-org/link";
import NextLink from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Links</h3>
                    <ul className="space-y-3">
                        <li><Link color='secondary' href="#" as={NextLink} className="text-[#feba3d]">Back to the top</Link></li>
                        <li><Link color='secondary' href="/projects" as={NextLink} className="text-[#feba3d]">View my Projects</Link></li>
                        <li><Link color='secondary' href="/tech-stack" as={NextLink} className="text-[#feba3d]">Tech Stack</Link></li>
                        <li><Link color='secondary' href="/terms" as={NextLink} className="text-[#feba3d]">Mention légales</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">More About Me</h3>
                    <p>I&apos;m a developer passionate about creating impactful solutions and pushing the boundaries of technology. Explore further and dive deep into my experiences and creations.</p>
                </div>
            </div>
            <div className="text-center border-t border-gray-700 pt-8">
                <p className="text-sm">© 2024 KAYE. All Rights Reserved.</p>
            </div>
        </Container>
    </footer>
  );
}
