"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { FIRM, NAV_LINKS, NAV_CTA_LABEL } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 60);
        ticking.current = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "nav-blur fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300",
        "shadow-[0_1px_0_0_var(--hairline)]"
      )}
      style={{
        backgroundColor: solid
          ? "rgba(250,250,248,0.97)"
          : "rgba(250,250,248,0.82)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-[clamp(20px,5vw,64px)]">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-mono text-mono-label font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-70"
        >
          {FIRM}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "nav-link relative text-small font-medium text-ink-muted transition-colors hover:text-ink",
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left",
                  "after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:ease-out",
                  "hover:after:scale-x-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm",
                  active && "text-ink after:scale-x-100"
                )}
              >
                <ScrambleText trigger="hover" duration={300}>{label}</ScrambleText>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }), "no-underline")}
          >
            <ScrambleText trigger="hover" duration={380}>{NAV_CTA_LABEL}</ScrambleText>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open navigation"
          className="flex size-10 items-center justify-center rounded-card text-ink-muted transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon size={20} />
        </button>
      </div>

      {/* Mobile sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full max-w-xs bg-canvas pt-16">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 px-6"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-input px-3 py-3 text-title font-medium text-ink-muted transition-colors hover:bg-surface-sunk hover:text-ink",
                    active && "text-ink"
                  )}
                >
                  <ScrambleText trigger="hover" duration={340}>{label}</ScrambleText>
                </Link>
              );
            })}
            <div className="mt-6 pt-6 border-t border-hairline">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "w-full justify-center no-underline")}
              >
                <ScrambleText trigger="hover" duration={380}>{NAV_CTA_LABEL}</ScrambleText>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
