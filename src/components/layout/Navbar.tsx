"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-navy-950/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 md:px-8" style={{ height: 72 }}>
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {NAV_ITEMS.map((item) => {
            const hasChildren = "children" in item && !!item.children;
            const itemHref: string = item.href;
            const active =
              pathname === itemHref ||
              (pathname.startsWith(itemHref) && itemHref !== "/");
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasChildren && setMenuOpen(item.label)}
                onMouseLeave={() => hasChildren && setMenuOpen(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group inline-flex items-center gap-1 rounded-md px-4 py-2 text-body-sm font-medium transition-colors",
                    active ? "text-white" : "text-gray-300 hover:text-white",
                  )}
                  aria-haspopup={hasChildren ? "true" : undefined}
                  aria-expanded={hasChildren ? menuOpen === item.label : undefined}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        menuOpen === item.label && "rotate-180",
                      )}
                      aria-hidden
                    />
                  )}
                </Link>
                {hasChildren && (
                  <MegaMenu
                    item={item as never}
                    open={menuOpen === item.label}
                    onClose={() => setMenuOpen(null)}
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/demo"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Request Demo →
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-md text-gray-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
