"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width:1024px)");
    const onResize = (event) => { if (event.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  return (<header className="header"><div className="wrap header-inner"><Link href="/" className="logo" aria-label="트리니티에듀랩 메인">{"트리니티에듀랩"}</Link><button className="menu" aria-controls="navigation" type="button" aria-expanded={open} onClick={() => setOpen(!open)} ref={buttonRef}>{open ? "닫기" : "메뉴"}</button><nav id="navigation" aria-label="주 메뉴" className={open ? "nav open" : "nav"} onClick={(event) => { if (event.target.closest("a")) setOpen(false); }}><Link href="/program" aria-current={pathname === "/program" ? "page" : undefined}>프로그램 소개</Link><Link href="/diagnosis" aria-current={pathname === "/diagnosis" ? "page" : undefined}>학습 자기점검</Link><Link href="/trial" className="btn" aria-current={pathname === "/trial" ? "page" : undefined}>체험 안내</Link></nav></div></header>);
}
