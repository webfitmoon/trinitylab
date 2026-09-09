export default function TrainingSection() {
  return <section className="section white" id="training"><div className="wrap">
    <div className="section-head"><h2>틀린 문제를 발견했다면,<br />이렇게 다시 공부하세요.</h2><p>결과를 확인한 뒤 무엇을 하면 되는지, 세 단계로 살펴보세요.</p></div>
    <div className="review-walkthrough"><ol className="training review-steps">
      <li><div><h3>시험지를 풀고 결과를 확인합니다.</h3><p>원하는 회차를 골라 풀어보세요. 채점 결과에서 맞힌 문항과 다시 확인할 문항을 구분할 수 있습니다.</p></div></li>
      <li><div><h3>해설 전에 힌트로 다시 생각합니다.</h3><p>막힌 문항의 힌트를 읽고 풀이를 시도해 보세요. 그래도 어렵다면 해설을 확인합니다.</p></div></li>
      <li><div><h3>결과를 저장하고, 오답을 다시 풉니다.</h3><p>로그인 후 완료한 회차 결과를 계정에 저장하세요. 저장한 기록에서 틀린 문항을 골라 복습합니다.</p></div></li>
    </ol><figure className="real-screen"><a href="/media/result-hint-1180.png" target="_blank" rel="noopener" aria-label="채점 결과와 힌트 화면 크게 보기"><img src="/media/result-hint-1180.png" alt="다시 확인할 문항에 힌트와 해설 보기 버튼이 표시된 실제 결과 화면" width="1180" height="820" loading="lazy" /></a><figcaption>실제 앱 화면 · 채점 결과와 힌트<span>크게 보기 ↗</span></figcaption></figure></div>
  </div></section>;
}
