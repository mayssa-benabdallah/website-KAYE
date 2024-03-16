'use client'
import React from 'react';
import NextLink from "next/link";
import { usePathname } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { ThemeSwitcher } from "@/components/Helpers/DarkModeToggle/DarkModeToggle";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from "next/image";


export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  function isActive(basePath) {
    return basePath === "/" ? pathname === basePath : pathname.startsWith(basePath);
  }

  const NavbarLink = ({ href, children }) => (
    <NavbarItem isActive={isActive(href)}>
      <Link href={href} as={NextLink} color="foreground">
        {children}
      </Link>
    </NavbarItem>
  );

  return (
    <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen} className='dark:bg-content1 border-b-1 border-secondary'>
      <NavbarBrand>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <Image
                width={200}
                height={200}
                alt="NextUI hero Image"
                src="/images/hero/logokaye.png"
                className='shadow-lg rounded-xl'
            />
            </AnimationOnScroll>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarLink href="/#about">c'est quoi</NavbarLink>
        <NavbarLink href="/tech-stack">télécharger</NavbarLink>
        <NavbarLink href="/#social">Contact</NavbarLink>
      </NavbarContent>
      
      <ThemeSwitcher />
      
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" color="foreground" className="w-full" size="lg">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects"color="foreground" className="w-full" size="lg">Projects</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tech-stack" color="foreground" className="w-full" size="lg">Tech Stack</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/#social" color="foreground" className="w-full" size="lg">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
      
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
    </Navbar>
  );
}
