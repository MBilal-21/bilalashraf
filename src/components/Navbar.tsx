'use client';
import * as React from "react";
import { HamburgerMenuIcon} from "@radix-ui/react-icons";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Projects", href: "/projects", current: false },
  { name: "Skills", href: "/skills", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current:
      pathname === item.href ||
      pathname.startsWith(item.href + "/") ||
      (item.href === "/" && pathname === "/"),
  }));


  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={classNames(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-gray-800 shadow-lg" : " shadow-none"
      )}
    >

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-label="Open main menu"
            >
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </div>
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-8 w-auto sm:ml-0 rounded-full sm:shrink-0 mr-2 sm:mr-4"
            />
            <div className="flex shrink-0 items-center">
              <Link href="#" className="text-white text-lg font-bold">
                Bilal&#39;s Portfolio
              </Link>
            </div>
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {updatedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Right icons */}

        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {updatedNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
