import Link from "next/link";
import SiteHeader from "./site-header";
export default function SubpageShell({ label, title, description, children }) {
  const intro = {
    "프로그램 소개": { lines: ["문제를 고르는 순간부터,", "다시 풀어내는 순간까지."], points: ["기출 범위 선택", "힌트로 재도전", "손풀이 기록", "오답 복습"] },
    "학습 자기점검": { lines: ["틀린 문제를 만난 뒤,", "나는 어떻게 공부하고 있을까요?"], points: ["다섯 가지 질문", "한 문항씩 진행", "공부 습관 돌아보기", "응답 저장 없음"] },
  }[label];
  return <><a className="skip" href="#main">본문으로 바로가기</a><SiteHeader /><main id="main" className="subpage"><header className={`subpage-intro${intro ? " subpage-intro-editorial" : ""}`}><div className="wrap"><p className="label">{label}</p><h1>{intro ? <>{intro.lines[0]}<br />{intro.lines[1]}</> : title}</h1><p className="subpage-lead">{description}</p>{intro && <ul className="subpage-intro-points" aria-label="페이지 안내">{intro.points.map(point => <li key={point}>{point}</li>)}</ul>}</div></header>{children}</main><footer className="footer"><div className="wrap"><Link href="/">트리니티에듀랩</Link><p>© 2026 트리니티에듀랩</p><Link href="/trial">체험 안내</Link></div></footer></>;
}
export function PageBlock({ title, children, tint = false }) { return <section className={`subpage-block${tint ? " subpage-tint" : ""}`}><div className="wrap"><h2>{title}</h2>{children}</div></section>; }
