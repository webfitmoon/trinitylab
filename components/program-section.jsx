const tools = [
  { label: "01 / 기출 선택", title: "오늘 공부할 문제만 골라서", text: "시험지 한 회를 풀거나, 필요한 단원과 문항 번호만 골라 연습하세요. 수능·모의평가·학력평가 기출에서 찾을 수 있습니다.", image: "/media/math-shelf-20260905.png", alt: "시험지, 단원, 문항 번호 중 연습 범위를 고르는 실제 화면" },
  { label: "02 / 손풀이 도구", title: "종이에 풀듯, 문제 위에 직접", text: "태블릿과 펜으로 풀이를 적어보세요. 앱이 읽어낸 답을 확인하고 제출하면 됩니다. 로그인 후 제출한 손풀이는 계정에 저장됩니다.", image: "/media/practice-pad-1180.png", alt: "수학 문제 위 풀이 종이에 직접 필기하고 답을 고르는 실제 화면" },
  { label: "03 / 풀이 커뮤니티", title: "같은 문제의 다른 풀이도", text: "다른 학생은 어떤 조건부터 보고, 어떤 식을 세웠는지 살펴보세요. 자신의 풀이와 비교하며 다른 방법을 배울 수 있습니다.", image: "/media/app-home-1180.png", alt: "다른 학생들의 풀이를 구경할 수 있는 실제 앱 홈 화면" },
];
export default function ProgramSection() {
  return <section className="section tint" id="program"><div className="wrap"><div className="section-head"><h2>필요한 문제를 고르고,<br />직접 풀고, 다른 풀이도 살펴보세요.</h2><p>평소 공부에 필요한 기능을 골라 활용해 보세요.</p></div><div className="study-tools">{tools.map(tool => <article key={tool.label}><div className="study-tool-copy"><p className="label">{tool.label}</p><h3>{tool.title}</h3><p>{tool.text}</p></div><figure><img src={tool.image} alt={tool.alt} width="1180" height="820" loading="lazy" /></figure></article>)}</div></div></section>;
}
