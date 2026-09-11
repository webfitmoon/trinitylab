import Link from "next/link";
import RecordSection from "./record-section";

function Screen({ src, alt, caption }) {
  return <figure className="guide-screen"><img src={src} alt={alt} width="1180" height="820" loading="lazy" /><figcaption>{caption}</figcaption></figure>;
}

export default function ProgramGuide() {
  return <div className="program-guide program-guide-compact">
    <section className="subpage-block" id="choose"><div className="wrap guide-visual-row">
      <div>
        <h2>오늘 필요한 기출부터<br />골라보세요.</h2>
        <p>시험지 한 회를 풀거나, 필요한 단원과 문항 번호만 골라 연습하세요.<br />수능·모의평가·학력평가 기출에서 오늘 공부할 범위를 찾을 수 있습니다.</p>
        <details className="guide-storage"><summary>로그인 없이 시작할 수 있나요?</summary><p>문제 연습은 로그인 없이 시작할 수 있습니다.<br />연습 방식별 기록 보관은 아래 <a href="#records">저장 안내</a>에서 확인해 주세요.</p></details>
      </div>
      <Screen src="/media/math-shelf-20260905.png" alt="시험지·단원·문항 번호로 기출을 고르는 실제 앱 화면" caption="시험지·단원·문항 번호로 기출 선택" />
    </div></section>
    <section className="subpage-block" id="retry"><div className="wrap guide-visual-row">
      <div id="handwriting">
        <h2>직접 풀고,<br />막히면 힌트로 다시 생각하세요.</h2>
        <p>태블릿과 펜으로 문제 위에 풀이를 적어보세요.<br />막힌 문제는 해설을 보기 전에 힌트로 한 번 더 시도해 보세요.</p>
        <details className="guide-storage"><summary>손풀이 이용·저장 안내</summary><p>손풀이는 로그인 후 이용하며, 무료 계정의 채점에는 하루 이용 한도가 있습니다.<br />앱이 읽어낸 답을 확인·수정한 뒤 제출해 주세요.</p><p>채점은 제출 답을 정답과 비교하며, 풀이의 모든 단계를 확인하는 기능은 아닙니다.<br />기록 보관은 아래 <a href="#records">저장 안내</a>를 확인해 주세요.</p></details>
      </div>
      <Screen src="/media/practice-pad-1180.png" alt="태블릿에서 문제 위에 직접 필기하고 답을 확인하는 실제 앱 화면" caption="문제 위에 직접 쓰는 손풀이" />
    </div></section>
    <section className="subpage-block" id="review"><div className="wrap guide-visual-row">
      <div>
        <h2>틀린 문제는 다시 풀고,<br />다른 풀이도 살펴보세요.</h2>
        <p>해설을 이해했다면 가리고 다시 풀어보세요.<br />다른 학생의 풀이와 비교하며 놓친 조건이나 다르게 접근한 부분을 찾아보세요.</p>
        <p className="note">틀린 이유는 해설과 자신의 풀이를 비교해 직접 확인해 주세요.<br />기록 보관은 아래 <a href="#records">저장 안내</a>에서 확인할 수 있습니다.</p>
      </div>
      <Screen src="/media/app-home-1180.png" alt="다른 학생들이 올린 풀이를 살펴보는 실제 앱 화면" caption="같은 문제를 푼 다른 학생의 풀이 비교" />
    </div></section>
    <RecordSection />
    <section className="subpage-block program-guide-cta"><div className="wrap">
      <h2>오늘 공부할 문제부터 골라보세요.</h2>
      <p>공개 베타에서 무료로 시작할 수 있습니다.</p>
      <div className="actions"><a className="btn" href="https://111sm.app/">문제 풀어보기</a><Link className="text-link" href="/trial">처음 이용하는 방법</Link></div>
    </div></section>
  </div>;
}
