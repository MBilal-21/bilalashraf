'use client';
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { navigation } from "@/components/home/content";

const sectionIds = navigation.map((item) => item.href.split("#")[1]).filter(Boolean);

// Tracks which home page section is in the middle of the viewport.
function useActiveSection(enabled: boolean) {
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const activeSection = useActiveSection(onHome);

  const isActive = (href: string) => {
    const id = href.split("#")[1];
    // Plain page links (e.g. /projects) are active on that page and its subpages.
    if (!id) return pathname.startsWith(href);
    return onHome && activeSection === id;
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-md rounded-[28px] bg-soft/90 p-2 shadow-lg backdrop-blur-md md:w-auto md:max-w-none md:rounded-full">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          <Link href="/#home" className="block size-10 shrink-0 overflow-hidden rounded-full" aria-label="Home">
            <Image src="/assets/images/site/hero.jpg" alt="Bilal Ashraf" width={80} height={80} className="size-full object-cover object-top" />
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-[15px] transition-colors hover:text-accent ${isActive(item.href) ? "text-accent" : "text-ink"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="hidden rounded-full bg-ink px-7 py-2 text-[15px] text-bg transition-colors hover:bg-accent hover:text-on-accent md:inline-block"
          >
            Contact
          </Link>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="mr-1 rounded-full p-2 text-ink md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <Cross1Icon className="size-5" /> : <HamburgerMenuIcon className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                {[...navigation, { name: "Contact", href: "/#contact" }].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-1.5 font-display text-3xl uppercase ${isActive(item.href) ? "text-accent" : "text-ink"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
