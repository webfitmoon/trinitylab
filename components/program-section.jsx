const tools = [
  { label: "01 / 기출 선택", title: "필요한 범위만 골라서", text: "수능·모의평가·학력평가 기출을 시험지, 단원, 문항 번호로 찾아 연습합니다." },
  { label: "02 / 손풀이 도구", title: "문제 위에 직접 쓰면서", text: "태블릿과 펜으로 풀이를 적고, 읽어낸 답을 확인·수정해 제출합니다. 로그인 후 제출한 손풀이는 계정에 보관됩니다." },
  { label: "03 / 풀이 커뮤니티", title: "다른 접근도 살펴보며", text: "같은 문항을 다른 학생은 어떻게 풀었는지 읽고, 내가 선택한 풀이와 비교할 수 있습니다." },
];
export default function ProgramSection() {
  return <section className="section tint" id="program"><div className="wrap"><div className="section-head"><h2>내 공부 방식에 맞춰 쓰는<br />세 가지 도구.</h2><p>연습 범위를 고르고, 손으로 풀고, 다른 접근을 살펴보세요.</p></div><div className="study-tools">{tools.map(tool => <article key={tool.label}><p className="label">{tool.label}</p><h3>{tool.title}</h3><p>{tool.text}</p></article>)}</div></div></section>;
}
