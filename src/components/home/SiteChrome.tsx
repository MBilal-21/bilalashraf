"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

// Runs before hydration (inlined in layout) so the saved theme applies without a flash.
export const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

// The <html data-theme> attribute is the source of truth; this hook just watches it.
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.dataset.theme !== "light",
    () => true,
  );

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 left-1/2 z-50 flex h-6 w-11 -translate-x-1/2 rounded-full bg-accent p-1 shadow-lg ring-2 ring-bg"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`block size-4 rounded-full border-2 border-on-accent ${dark ? "bg-on-accent" : "ml-auto bg-transparent"}`}
      />
    </button>
  );
}

// Small accent dot that trails the mouse; hidden on touch devices via the pointer media query.
export function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX + 18);
      y.set(e.clientY + 14);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden size-4 rounded-full bg-accent [@media(pointer:fine)]:block"
    />
  );
}
