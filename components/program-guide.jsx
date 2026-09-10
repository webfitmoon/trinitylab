import Link from "next/link";
import { PageBlock } from "./subpage-shell";

function GuideIcon({ kind }) {
  const shapes = {
    paper: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    compare: <path d="M4 7h15l-3-3M20 17H5l3 3M19 7l-3 3M5 17l3-3" />,
  };
  return <span className="guide-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{shapes[kind]}</svg></span>;
}

function Screen({ src, alt, caption }) {
  return <figure className="guide-screen"><img src={src} alt={alt} width="1180" height="820" loading="lazy" /><figcaption>{caption}</figcaption></figure>;
}

export default function ProgramGuide() {
  return <div className="program-guide">
    <nav className="wrap program-guide-nav" aria-label="프로그램 이용 안내 목차">
      <a href="#choose">연습 범위 고르기</a><a href="#retry">힌트로 다시 풀기</a><a href="#handwriting">손풀이 활용하기</a><a href="#review">복습할 문제 고르기</a>
    </nav>
    <div id="choose"><PageBlock title="오늘 필요한 문제부터 고르세요.">
      <p>시험지 한 회를 풀지, 부족한 단원을 연습할지 오늘의 공부에 맞춰 골라보세요.</p>
      <div className="guide-visual-row">
        <div className="guide-options">
          <article><GuideIcon kind="paper" /><div><h3>시험지 한 회를 모두 풀고 싶다면</h3><p>시험지를 선택하세요. 여러 단원을 함께 풀고, 결과에서 다시 확인할 문항을 구분합니다.</p></div></article>
          <article><GuideIcon kind="target" /><div><h3>특정 개념에서 자꾸 막힌다면</h3><p>단원별로 범위를 좁히세요. 예를 들어 수열 문제의 조건을 해석하고 첫 식을 세우는 연습에 집중할 수 있습니다.</p></div></article>
          <article><GuideIcon kind="grid" /><div><h3>특정 번호를 집중해서 풀고 싶다면</h3><p>문항 번호와 연습 분량을 선택하세요. 일부 단원·번호 연습은 회차 기록으로 남지 않으므로 시작 안내를 확인해 주세요.</p></div></article>
        </div>
        <Screen src="/media/math-shelf-20260905.png" alt="시험지·단원·문항 번호로 기출 연습 범위를 선택하는 앱 화면" caption="실제 앱 화면 · 오늘 공부할 범위 선택" />
      </div>
    </PageBlock></div>
    <div id="retry"><PageBlock title="해설을 보기 전에, 한 번 더 생각해 보세요." tint>
      <div className="guide-visual-row"><div><p>채점 후 바로 해설을 읽기보다, 어디까지 혼자 풀 수 있는지 확인해 보세요.</p>
        <ol className="guide-retry-steps">
          <li><h3>막힌 지점 찾기</h3><p>조건을 이해하는 단계, 식을 세우는 단계, 계산 중 어디에서 막혔는지 살펴보세요.</p></li>
          <li><h3>힌트로 다시 시도하기</h3><p>힌트를 읽고 다음 식을 직접 적어보세요. 답보다 풀이를 이어가는 데 집중합니다.</p></li>
          <li><h3>해설과 비교하기</h3><p>그래도 어렵다면 해설을 확인하세요. 이해한 뒤에는 해설을 가리고 처음부터 다시 풀어봅니다.</p></li>
        </ol></div>
        <Screen src="/media/result-hint-1180.png" alt="채점 결과와 문항별 힌트를 확인하는 앱 화면" caption="실제 앱 화면 · 결과 확인 후 힌트로 재도전" />
      </div>
    </PageBlock></div>
    <div id="handwriting"><PageBlock title="직접 쓴 풀이를, 복습할 때 다시 보세요.">
      <div className="guide-visual-row"><div><p>태블릿과 펜으로 문제 위에 풀어보세요. 복습할 때 처음 세운 식과 계산을 고친 흔적을 되짚을 수 있습니다.</p>
        <div className="guide-handwriting-flow" aria-label="손풀이 제출 순서"><span>직접 쓰기</span><span aria-hidden="true">→</span><span>앱이 읽어낸 답 확인</span><span aria-hidden="true">→</span><span>수정·제출</span></div>
        <h3>제출 전에 답을 확인하세요.</h3><p>앱이 읽어낸 답이 직접 쓴 답과 같은지 확인하고 수정합니다. 채점은 제출 답을 정답과 비교하며, 풀이의 모든 단계를 판단하지는 않습니다.</p>
        <aside className="program-guide-tip"><h3>남겨둘 풀이는 로그인 후 제출</h3><p>제출한 손풀이는 계정에 저장됩니다. 제출 전 필기는 문항 이동이나 새로고침 때 사라질 수 있습니다.</p></aside></div>
        <Screen src="/media/practice-pad-1180.png" alt="수학 문제 위에 직접 필기하고 제출 답을 확인하는 손풀이 화면" caption="실제 앱 화면 · 문제를 보면서 직접 필기" />
      </div>
    </PageBlock></div>
    <div id="review"><PageBlock title="다음에 다시 풀 문제를 골라보세요." tint>
      <p>틀린 문제와 시간이 오래 걸린 문제를 먼저 살펴보세요. 다른 학생의 풀이를 비교해 보는 것도 좋습니다.</p>
      <div className="guide-review-cards">
        <article><GuideIcon kind="target" /><h3>틀렸던 문항</h3><p>답을 기억하는 데 그치지 않고, 풀이의 이유를 설명하며 다시 풀어보세요.</p></article>
        <article><GuideIcon kind="clock" /><h3>오래 걸린 문항</h3><p>‘오래 걸린 문항 다시 보기’로 돌아가 어느 지점에서 시간이 걸렸는지 확인하세요.</p></article>
        <article><GuideIcon kind="compare" /><h3>다른 학생의 풀이</h3><p>같은 문항에 어떤 조건부터 사용했는지 비교하고, 이해한 방법을 직접 적용해 보세요.</p></article>
      </div>
      <div className="guide-visual-row guide-community"><div><h3>다음에는 무엇을 다르게 해볼까요?</h3><p>예를 들어 ‘조건을 식 옆에 표시하기’, ‘계산 뒤 부호 확인하기’처럼 시도할 행동 하나를 정해 보세요.</p><p>다른 학생의 풀이를 읽으며 자신과 다르게 푼 부분을 찾아보세요. 앱이 틀린 이유를 자동으로 판단하는 것은 아니므로, 해설과 직접 비교해 확인해 주세요.</p>
        <details className="guide-storage"><summary>복습 기록은 어디에 남나요?</summary><p>완료한 회차 결과는 로그인 후 계정 저장을 선택합니다. 문항별 풀이 시간은 이 기기 브라우저에 남으며, ‘오래 걸린 문항 다시 보기’의 재풀이 결과는 기록으로 저장되지 않습니다.</p></details></div>
        <Screen src="/media/app-home-1180.png" alt="다른 학생들이 올린 풀이를 살펴볼 수 있는 앱 홈 화면" caption="실제 앱 화면 · 다른 학생의 접근 살펴보기" />
      </div>
    </PageBlock></div>
    <PageBlock title="오늘 공부할 문제부터 골라보세요."><p>문제 연습은 로그인 없이 시작할 수 있습니다. 계정 저장과 손풀이 제출에는 로그인이 필요합니다. 공개 베타의 문항 검수 안내와 손풀이 하루 이용 한도를 확인해 주세요.</p><div className="actions"><a className="btn" href="https://111sm.app/mathematics">문제 골라 연습하기</a><Link className="btn secondary" href="/trial">처음 이용하는 방법</Link></div></PageBlock>
  </div>;
}
