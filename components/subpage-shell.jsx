import Link from "next/link";
import SiteHeader from "./site-header";
export default function SubpageShell({ label, title, description, children }) {
  return <><a className="skip" href="#main">본문으로 바로가기</a><SiteHeader /><main id="main" className="subpage"><header className="subpage-intro"><div className="wrap"><nav className="breadcrumbs" aria-label="현재 위치"><Link href="/">홈</Link><span aria-hidden="true">/</span><span>{label}</span></nav><p className="label">{label}</p><h1>{title}</h1><p className="subpage-lead">{description}</p></div></header>{children}</main><footer className="footer"><div className="wrap"><Link href="/">트리니티에듀랩</Link><p>© 2026 트리니티에듀랩</p><Link href="/trial">체험 안내</Link></div></footer></>;
}
export function PageBlock({ title, children, tint = false }) { return <section className={`subpage-block${tint ? " subpage-tint" : ""}`}><div className="wrap"><h2>{title}</h2>{children}</div></section>; }
