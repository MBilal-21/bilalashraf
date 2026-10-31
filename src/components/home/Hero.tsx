"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "./content";

const ease = [0.22, 1, 0.36, 1] as const;
const wordClass =
  "overflow-hidden pb-[0.06em] font-display text-[18vw] leading-[0.9] font-bold whitespace-nowrap uppercase tracking-tight text-ink md:text-[6.6vw] xl:text-[6.5rem]";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden px-4 pt-32 pb-20 md:px-10 md:pt-44 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease }}
        className="mx-auto mb-10 flex max-w-7xl justify-center text-center md:mb-24"
      >
        <p className="flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm text-ink">
          <span className="size-2 shrink-0 animate-pulse rounded-full bg-live" />
          {profile.openTo}
        </p>
      </motion.div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-5">
        {/* Left word */}
        <motion.div style={{ x: leftX }} className="relative order-2 self-start md:order-none md:self-auto md:justify-self-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-2xl uppercase tracking-wide text-ink md:absolute md:bottom-full md:left-0 md:text-4xl md:whitespace-nowrap"
          >
            {profile.name}
          </motion.p>
          <h1 className={wordClass}>
            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}>
              {profile.role[0]}
            </motion.span>
          </h1>
        </motion.div>

        {/* Photo card with the "Hi" bubble */}
        <motion.div style={{ y: photoY }} className="relative order-1 md:order-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="w-56 overflow-hidden rounded-2xl sm:w-64 md:w-64 lg:w-72 xl:w-[340px]"
          >
            <Image
              src="/assets/images/site/hero.jpg"
              alt={profile.name}
              width={900}
              height={955}
              priority
              className="aspect-[5/7] h-auto w-full object-cover object-top"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: [0, -8, 0] }}
            transition={{
              scale: { type: "spring", stiffness: 260, damping: 18, delay: 0.9 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            className="absolute -bottom-8 -left-8 grid size-20 place-items-center rounded-full bg-accent text-3xl text-on-accent md:-bottom-10 md:-left-14 md:size-28 md:text-4xl lg:size-32 lg:text-5xl"
          >
            Hi
          </motion.div>
        </motion.div>

        {/* Right word */}
        <motion.div style={{ x: rightX }} className="relative order-3 self-start md:order-none md:self-auto md:text-right">
          <h1 className={wordClass}>
            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease }}>
              {profile.role[1]}
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-3 max-w-xs text-base text-ink/85 md:absolute md:top-full md:right-0 md:w-80 md:max-w-none md:text-lg"
          >
            {profile.intro}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
