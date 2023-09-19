import { draftMode } from 'next/headers';
import { getAllProjects } from '../../lib/api';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  featuredImageUrl: any;
  techStacks: { slug: string; name: string }[];
}

function Project({
  slug,
  projectTitle,
  shortDescription,
  featuredImageUrl,
  techStacks,
}: ProjectProps) {
  return (
    <Card className="py-4 h-full" shadow="lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
          {projectTitle}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link as={NextLink} href={`/projects/${slug}`}>
          <Image
            shadow="lg"
            as={NextImage}
            src={`${featuredImageUrl}?fit=fill&w=1136&h=639`}
            className="object-cover rounded-xl"
            width={1268}
            height={951}
          />
        </Link>
        <p className="card-text mt-5 text-sm">{shortDescription}</p>
      </CardBody>
      <CardFooter className="px-5">
        {techStacks.map((stack) => (
          <Chip
            key={stack.slug}
            variant="bordered"
            color="warning"
            className="mr-1"
          >
            <Link color='warning' as={NextLink} href={`/tech-stack/${stack.slug}`}>{stack.name}</Link>
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allProjects = await getAllProjects(isEnabled);

  return (
    <section id="projects" className="pt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto mb-20">
          <h1 className="custom-heading from-[#FF705B] to-[#FFB457]">
            My Projects
          </h1>
          <div className="pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {allProjects.map((project) => (
              <Project
                key={project.slug}  // Here's the change
                slug={project.slug}
                projectTitle={project.projectTitle}
                shortDescription={project.shortDescription}
                featuredImageUrl={project.featuredImage.url}
                techStacks={project.techStacksCollection.items}
              />
            ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
