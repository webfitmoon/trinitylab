const benefits = [
  {
    title: "다시 풀 문제를 바로 찾습니다.",
    text: "채점 결과에서 맞힌 문항과 다시 확인할 문항을 구분해, 복습할 대상을 놓치지 않습니다.",
  },
  {
    title: "해설 없이 한 번 더 생각합니다.",
    text: "정답과 해설을 곧바로 보기 전에 힌트로 다시 시도하며, 스스로 풀어낼 기회를 만듭니다.",
  },
  {
    title: "필요한 범위에 시간을 씁니다.",
    text: "시험지·단원·문항 번호로 연습 범위를 골라, 지금 필요한 문제부터 집중해서 풀 수 있습니다.",
  },
  {
    title: "시간을 빼앗는 문항이 보입니다.",
    text: "문항별 풀이 시간을 확인하고 오래 걸린 문제를 다시 보며, 실전에서 막히는 지점을 점검합니다.",
  },
  {
    title: "손풀이가 복습 자료로 남습니다.",
    text: "로그인 후 제출한 손풀이와 확인한 답을 함께 살펴보며, 처음 풀었던 과정을 되짚습니다.",
  },
  {
    title: "한 가지 풀이에 갇히지 않습니다.",
    text: "같은 문항을 푼 다른 학생의 접근을 읽고 내 풀이와 비교하며, 새로운 해결 방법을 발견합니다.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section benefits-section" aria-labelledby="benefits-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="benefits-title">반복되는 오답 고민이,<br />다음 공부의 기준으로 바뀝니다.</h2>
          <p>틀린 문제를 그냥 넘기지 않을 때, 한 번의 풀이에서 얻을 수 있는 여섯 가지 이점입니다.</p>
        </div>
        <div className="benefit-cards">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-mark" aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
