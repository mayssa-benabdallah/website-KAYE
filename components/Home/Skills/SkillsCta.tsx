import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function SkillsCta() {
    return (
        <div className="mt-10">
            <Button as={Link} href="/tech-stack" size="lg" className="bg-gradient-to-tr from-[#feba3d] to-[#feba3d] text-white shadow-lg">
                Projects by Tech Stack
            </Button>
        </div>
    );
}
