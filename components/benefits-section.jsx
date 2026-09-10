const benefits = [
  {
    icon: "target",
    title: "다시 풀 문제를 바로 찾습니다.",
    text: "채점 결과에서 맞힌 문항과 다시 확인할 문항을 구분해, 복습할 대상을 놓치지 않습니다.",
  },
  {
    icon: "lightbulb",
    title: "해설 없이 한 번 더 생각합니다.",
    text: "정답과 해설을 곧바로 보기 전에 힌트로 다시 시도하며, 스스로 풀어낼 기회를 만듭니다.",
  },
  {
    icon: "filter",
    title: "필요한 범위에 시간을 씁니다.",
    text: "시험지·단원·문항 번호로 연습 범위를 골라, 지금 필요한 문제부터 집중해서 풀 수 있습니다.",
  },
  {
    icon: "clock",
    title: "시간을 빼앗는 문항이 보입니다.",
    text: "문항별 풀이 시간을 확인하고 오래 걸린 문제를 다시 보며, 실전에서 막히는 지점을 점검합니다.",
  },
  {
    icon: "pen",
    title: "손풀이가 복습 자료로 남습니다.",
    text: "로그인 후 제출한 손풀이와 확인한 답을 함께 살펴보며, 처음 풀었던 과정을 되짚습니다.",
  },
  {
    icon: "compare",
    title: "한 가지 풀이에 갇히지 않습니다.",
    text: "같은 문항을 푼 다른 학생의 접근을 읽고 내 풀이와 비교하며, 새로운 해결 방법을 발견합니다.",
  },
];

function BenefitIcon({ name }) {
  const paths = {
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" /></>,
    lightbulb: <><path d="M9 18h6M10 22h4" /><path d="M8.2 15.5A7 7 0 1 1 15.8 15.5C15 16.1 15 17 15 18H9c0-1 0-1.9-.8-2.5Z" /></>,
    filter: <><path d="M4 5h16l-6.5 7.3V19l-3 1.5v-8.2L4 5Z" /><path d="M8 9h8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    pen: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path d="m13.5 8 3 3M8.5 19H20" /></>,
    compare: <><path d="M7 7h12M16 4l3 3-3 3M17 17H5M8 14l-3 3 3 3" /></>,
  };

  return <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></span>;
}

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
              <BenefitIcon name={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
