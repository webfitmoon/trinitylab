import Link from "next/link";

function Screen({ src, alt, caption }) {
  return <figure className="guide-screen"><img src={src} alt={alt} width="1180" height="820" loading="lazy" /><figcaption>{caption}</figcaption></figure>;
}

export default function ProgramGuide() {
  return <div className="program-guide program-guide-compact">
    <section className="subpage-block" id="choose"><div className="wrap guide-visual-row">
      <div>
        <h2>오늘 필요한 기출부터<br />골라보세요.</h2>
        <p>시험지 한 회를 풀거나, 필요한 단원과 문항 번호만 골라 연습하세요.<br />수능·모의평가·학력평가 기출에서 오늘 공부할 범위를 찾을 수 있습니다.</p>
        <details className="guide-storage"><summary>로그인 없이 시작할 수 있나요?</summary><p>문제 연습은 로그인 없이 시작할 수 있습니다.<br />일부 단원·번호 연습은 회차 결과로 저장되지 않으니,<br />시작 화면의 저장 안내를 확인해 주세요.</p></details>
      </div>
      <Screen src="/media/math-shelf-20260905.png" alt="시험지·단원·문항 번호로 기출을 고르는 실제 앱 화면" caption="시험지·단원·문항 번호로 기출 선택" />
    </div></section>
    <section className="subpage-block" id="retry"><div className="wrap guide-visual-row">
      <div id="handwriting">
        <h2>직접 풀고,<br />막히면 힌트로 다시 생각하세요.</h2>
        <p>태블릿과 펜으로 문제 위에 풀이를 적어보세요.<br />막힌 문제는 해설을 보기 전에 힌트로 한 번 더 시도해 보세요.</p>
        <details className="guide-storage"><summary>손풀이 이용·저장 안내</summary><p>손풀이는 로그인 후 이용하며, 무료 계정의 채점에는 하루 이용 한도가 있습니다.<br />앱이 읽어낸 답을 확인·수정해 제출하면 풀이가 저장됩니다.</p><p>제출 전 필기는 문제 이동이나 새로고침 때 사라질 수 있습니다.<br />채점은 제출 답을 정답과 비교하며, 풀이의 모든 단계를 확인하는 기능은 아닙니다.</p></details>
      </div>
      <Screen src="/media/practice-pad-1180.png" alt="태블릿에서 문제 위에 직접 필기하고 답을 확인하는 실제 앱 화면" caption="문제 위에 직접 쓰는 손풀이" />
    </div></section>
    <section className="subpage-block" id="review"><div className="wrap guide-visual-row">
      <div>
        <h2>틀린 문제는 다시 풀고,<br />다른 풀이도 살펴보세요.</h2>
        <p>해설을 이해했다면 가리고 다시 풀어보세요.<br />다른 학생의 풀이와 비교하며 놓친 조건이나 다르게 접근한 부분을 찾아보세요.</p>
        <details className="guide-storage"><summary>복습 기록은 어떻게 남나요?</summary><p>시험지 한 회를 완료한 뒤 로그인하고 ‘계정 저장’을 선택하면 결과가 남습니다.<br />문항별 풀이 시간은 사용한 기기의 브라우저에 남습니다.</p><p>‘오래 걸린 문항 다시 보기’로 연습할 수 있지만,<br />그 재풀이 결과는 별도로 저장되지 않습니다.<br />틀린 이유는 해설과 자신의 풀이를 비교해 직접 확인해 주세요.</p></details>
      </div>
      <Screen src="/media/app-home-1180.png" alt="다른 학생들이 올린 풀이를 살펴보는 실제 앱 화면" caption="같은 문제를 푼 다른 학생의 풀이 비교" />
    </div></section>
    <section className="subpage-block program-guide-cta"><div className="wrap">
      <h2>오늘 공부할 문제부터 골라보세요.</h2>
      <p>공개 베타에서 무료로 시작할 수 있습니다.</p>
      <div className="actions"><a className="btn" href="https://111sm.app/">문제 풀어보기</a><Link className="text-link" href="/trial">처음 이용하는 방법</Link></div>
    </div></section>
  </div>;
}
