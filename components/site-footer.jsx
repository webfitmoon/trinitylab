import Link from "next/link";
export default function SiteFooter() {
  return <footer className="footer"><div className="wrap"><Link href="/">트리니티에듀랩</Link><p>© 2026 트리니티에듀랩</p><nav className="footer-legal" aria-label="이용 안내"><Link href="/trial">체험 안내</Link><Link href="/privacy"><strong>개인정보처리방침</strong></Link><Link href="/terms">이용약관</Link></nav></div></footer>;
}
