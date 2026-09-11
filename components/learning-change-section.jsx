const moments = [
  { title: "해설을 덮은 순간", before: <>해설을 읽을 때는 이해한 것 같은데,<br />다음 날 같은 문제의 첫 식부터 막힌다면.</>, after: <>바로 해설을 펴는 대신 힌트로 다시 시작해 보세요.<br />풀이를 확인한 뒤에는 가리고, 첫 식부터 끝까지 직접 써보세요.</> },
  { title: "다음 공부를 시작할 때", before: <>오답노트에 틀린 문제는 쌓여 있는데,<br />무엇부터 다시 볼지 몰라 새 문제집을 펼친다면.</>, after: <>막혔던 단원과 문항 번호부터 골라보세요.<br />새 문제를 풀기 전에, 어제 못 풀었던 문제를 먼저 시도해 보세요.</> },
  { title: "다른 풀이를 만났을 때", before: <>정답을 맞히면 공부를 마치고,<br />내가 쓴 방법 외에 다른 접근은 떠올리지 못한다면.</>, after: <>같은 문제를 푼 다른 학생의 풀이를 살펴보세요.<br />어떤 조건부터 사용했는지 비교하고, 그 방법으로도 다시 풀어보세요.</> },
];
export default function LearningChangeSection() {
  return <section className="section learning-change" id="learning-change" aria-labelledby="learning-change-title"><div className="wrap">
    <div className="section-head"><h2 id="learning-change-title">해설을 이해하는 공부에서,<br />혼자 풀어내는 공부로.</h2><p>해설을 읽으면 알겠는데, 혼자 풀면 다시 막힌다면.<br />다음 공부에서 무엇을 바꿀 수 있을까요?</p></div>
    <div className="learning-moments">{moments.map(moment => <article className="learning-moment" key={moment.title}><h3>{moment.title}</h3><div className="learning-comparison"><div className="learning-before"><span>이런 모습이라면</span><p>{moment.before}</p></div><span className="learning-arrow" aria-hidden="true">→</span><div className="learning-after"><span>이렇게 바꿔보세요</span><p>{moment.after}</p></div></div></article>)}</div>
    <p className="learning-takeaway">오늘 공부의 끝을, 해설을 읽은 순간이 아니라<br /><strong>혼자 다시 풀어본 순간으로 바꿔보세요.</strong></p>
  </div></section>;
}
