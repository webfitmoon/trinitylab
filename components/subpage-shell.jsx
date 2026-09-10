import Link from "next/link";
import SiteHeader from "./site-header";
export default function SubpageShell({ label, title, description, children }) {
  const intro = {
    "프로그램 소개": { lines: ["문제 선택부터,", "틀린 문제를 다시 풀기까지."], descriptionLines: description.split(/(?<=\.)\s+/), points: ["기출 선택", "직접 풀기와 힌트", "오답 복습"] },
    "학습 자기점검": { lines: ["수능 수학, 어디서 막히나요?", "평소 공부 습관부터 살펴보세요."], descriptionLines: ["최근 공부 모습을 떠올리며 5개 질문에 답해 보세요.", "개념 연결, 시간 배분, 오답 복습 중 먼저 점검할 부분과 연습 방법을 안내합니다."], note: "(5문항 30초 소요)" },
  }[label];
  return <><a className="skip" href="#main">본문으로 바로가기</a><SiteHeader /><main id="main" className="subpage"><header className={`subpage-intro${intro ? " subpage-intro-editorial" : ""}`}><div className="wrap"><p className="label">{label}</p><h1>{intro ? <>{intro.lines[0]}<br />{intro.lines[1]}</> : title}</h1><p className="subpage-lead">{intro?.descriptionLines ? <>{intro.descriptionLines[0]}<br />{intro.descriptionLines[1]}</> : description}</p>{intro?.note && <p className="note" style={{ marginTop: 16 }}>{intro.note}</p>}{intro?.points && <ul className="subpage-intro-points" aria-label="페이지 안내">{intro.points.map(point => <li key={point}>{point}</li>)}</ul>}</div></header>{children}</main><footer className="footer"><div className="wrap"><Link href="/">트리니티에듀랩</Link><p>© 2026 트리니티에듀랩</p><Link href="/trial">체험 안내</Link></div></footer></>;
}
export function PageBlock({ title, children, tint = false }) { return <section className={`subpage-block${tint ? " subpage-tint" : ""}`}><div className="wrap"><h2>{title}</h2>{children}</div></section>; }
