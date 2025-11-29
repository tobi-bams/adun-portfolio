"use client";

import * as React from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <header className="w-full border-b border-white/10 bg-[#030303]">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 h-16">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/Avatar.jpg" alt="Logo" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={`${navigationMenuTriggerStyle()} font-inter text-base font-normal tracking-normal bg-transparent text-[#B3B3B3] hover:bg-transparent hover:!text-[#B3B3B3] hover:underline underline-offset-4 focus:bg-transparent focus:text-[#B3B3B3]`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button className="rounded-2xl cursor-pointer bg-white text-black hover:bg-neutral-200">
          Hire Me
        </Button>
      </div>
    </header>
  );
};

export default Header;
