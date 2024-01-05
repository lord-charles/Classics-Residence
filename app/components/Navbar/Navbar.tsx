import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', },
    { name: 'Contact', href: '/contact' }
  
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
      <Disclosure
        as="nav"
        className="navbar overflow-x-hidden w-screen"
        style={{ backgroundColor: "transparent" }}
      >
        <>
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <div className="relative flex h-12 md:h-20 items-center">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                {/* LOGO */}

                <div className="flex flex-shrink-0 items-center">
                  <div className="shrink-0 mr-4">
                    {/* Logo */}
                    <Link href="/" className="block" aria-label="Cruip">
                      <svg
                        className="w-10 h-10 fill-current text-green-600"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-2 mr-5">
                  {navigation.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))}
                </div>
              </div>

              {/* SIGNIN DIALOG */}

              <Signdialog />

              {/* REGISTER DIALOG */}

              <Registerdialog />

              {/* DRAWER FOR MOBILE VIEW */}

              {/* DRAWER ICON */}

              <div className="block lg:hidden">
                <Bars3Icon
                  className="block h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              {/* DRAWER LINKS DATA */}

              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
              </Drawer>
            </div>
          </div>
        </>
      </Disclosure>
    );
};

export default Navbar;
