"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileBreakpoint = 1040;

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (open) navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      const links = Array.from(navRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      } else if (event.key === "Tab" && links.length) {
        const first = toggleRef.current;
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth > mobileBreakpoint) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">Toggle navigation</span><span /><span /><span />
      </button>
      <nav ref={navRef} className={`site-nav${open ? " open" : ""}`} id="site-nav" aria-label="Main navigation">
        <a href="#work" onClick={() => setOpen(false)}>What we explore</a>
        <a href="#ada" onClick={() => setOpen(false)}>About Ada</a>
        <a href="#privacy" onClick={() => setOpen(false)}>Privacy</a>
        <a href="https://evhconsult.eu" onClick={() => setOpen(false)}>EVH Consult</a>
        <a href="https://ada.evhconsult.eu" onClick={() => setOpen(false)}>Ada</a>
        <a href="https://erwin.evhconsult.eu" onClick={() => setOpen(false)}>Erwin</a>
        <a className="button button-small contact-cta" href="https://evhconsult.eu/contact.html?source=ai.evhconsult.eu&path=%2F" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </>
  );
}
