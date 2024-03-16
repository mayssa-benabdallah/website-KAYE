import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function HeroCta() {
    return (
        <div>
            <Button as={Link} href="/#about" size="lg" className="bg-gradient-to-tr from-[#feba3d] to-[#feba3d] text-white shadow-lg">
                Télécharger l'application 
            </Button>
        </div>
    );
}
