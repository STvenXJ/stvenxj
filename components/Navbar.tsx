import Image from "next/image";
import MaxWidthDiv from "./MaxWidthDiv";
import Link from "next/link";
import DrawerNavbar from "./DrawerNavbar";
import { ModeToggle } from "./ModeToggle";
import Navlist from "./Navlist";

export default function Navbar() {
  return (
    <nav className="shadow-md h-14 border-b-muted border-b sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <MaxWidthDiv className="flex items-center justify-between h-full">
        <Link href="/" className="rounded-full overflow-hidden">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
        </Link>
        <div className="sm:space-x-4 space-x-2 flex items-center">
            <Navlist />
            <ModeToggle />
            <DrawerNavbar />
        </div>
      </MaxWidthDiv>
    </nav>
  );
}