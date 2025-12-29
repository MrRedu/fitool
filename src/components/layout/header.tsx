'use client';

import { MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const TOOLS = [
  {
    title: 'Herramientas',
    description: 'Overview of your activity',
    href: '#',
  },
  {
    title: 'Calculadoras',
    description: 'Track your performance',
    href: '#',
  },
  // {
  //   title: 'Settings',
  //   description: 'Configure your preferences',
  //   href: '#',
  // },
  // {
  //   title: 'Integrations',
  //   description: 'Connect with other tools',
  //   href: '#',
  // },
  // {
  //   title: 'Storage',
  //   description: 'Manage your files',
  //   href: '#',
  // },
  // {
  //   title: 'Support',
  //   description: 'Get help when needed',
  //   href: '#',
  // },
];

const NAVS = [
  {
    title: 'Membresías',
    href: '/#pricing',
  },
  {
    title: 'Contacto',
    href: '/#contact',
  },
];

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <section
      className={cn('py-4 px-2 sticky top-0 z-50 backdrop-blur-3xl', className)}
      id="header"
    >
      <div className="container w-full mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/fitool.svg"
              className="max-h-8 w-full"
              alt="FiTool logo"
            />
            <span className="text-lg font-semibold tracking-tighter sr-only">
              FiTool
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {TOOLS.map(({ href, title, description }, index) => (
                      <NavigationMenuLink
                        href={href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div key={title}>
                          <p className="mb-1 font-semibold text-foreground">
                            {title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {NAVS.map(({ href, title }, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div /> {/* push nav to center */}
          {/* <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
          </div> */}
          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <img
                      src="/fitool.svg"
                      className="max-h-8 w-full"
                      alt="FiTool logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter sr-only">
                      FiTool
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Recursos
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {TOOLS.map(({ href, title, description }, index) => (
                          <a
                            href={href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={title}>
                              <p className="mb-1 font-semibold text-foreground">
                                {title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Templates
                  </a>
                  <a href="#" className="font-medium">
                    Blog
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                </div>
                {/* <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};
