import { Button } from '@nextui-org/button';
import { IconCode } from '@tabler/icons-react';
import Link from 'next/link';

export default function RecentHeading() {
    return (
        <div className="mt-10">
            <Button href="/projects" as={Link} size="lg" className="bg-gradient-to-tr from-[#feba3d] to-[#feba3d] text-white shadow-lg  gap-unit-1">
                <IconCode /> More Projects
            </Button>
        </div>
    );
}
