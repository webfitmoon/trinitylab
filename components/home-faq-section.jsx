const questions = [
  { title: "어떤 학생에게 맞나요?", paragraphs: ["수능 기출을 꾸준히 풀지만 비슷한 문제를 다시 틀리거나, 오답을 모아두고 복습을 미루는 고3 학생이 활용하기 좋습니다. 틀린 문제를 다시 풀고, 처음 막혔던 부분을 확인하는 연습에 사용해 보세요."] },
  { title: "어떤 기기로 사용할 수 있나요?", paragraphs: ["별도 설치 없이 휴대폰·노트북·태블릿에서 이용할 수 있습니다. 문제 위에 직접 쓰려면 태블릿을 가로로 놓고 펜을 사용하는 것이 편합니다."] },
  { title: "무료인가요? 회원가입은 언제 필요한가요?", paragraphs: ["문제 풀이, 힌트와 해설, 오답 복습은 무료입니다. 로그인 없이 문제 연습을 시작할 수 있습니다. 결과를 계정에 저장하거나 손풀이를 제출할 때는 로그인이 필요하며, 무료 계정의 손풀이 채점에는 하루 이용 한도가 있습니다.", "카카오 또는 구글 계정으로 로그인합니다. 가입할 때 만 14세 이상 확인과 개인정보 처리방침 동의가 필요합니다."] },
  { title: "학습 기록과 손풀이는 어떻게 저장되나요?", paragraphs: ["시험지 한 회를 모두 풀었다면 로그인 후 ‘계정 저장’을 선택해 주세요. 일부 단원·번호 연습은 결과가 저장되지 않습니다. 문제마다 걸린 시간은 사용한 기기의 브라우저에 남고, ‘오래 걸린 문항 다시 보기’로 다시 푼 결과는 별도로 저장되지 않습니다.", "직접 쓴 풀이는 로그인 후 앱이 읽어낸 답을 확인하고 제출해야 저장됩니다. 제출 전에 다른 문제로 이동하거나 새로고침하면 필기가 사라질 수 있습니다. 채점은 제출한 답을 정답과 비교하며, 풀이의 모든 단계가 맞는지 확인하는 기능은 아닙니다."] },
  { title: "학부모는 어떤 부분을 함께 살펴보면 좋을까요?", paragraphs: ["맞힌 개수뿐 아니라 어떤 문제에서 막혔고, 다시 풀 때 혼자 풀어냈는지 함께 물어봐 주세요. 다음에 다시 풀 문제 한두 개를 정해보는 것도 좋습니다.", "학부모용 보고서나 선생님·조교의 개별 학습 관리는 기본 이용 범위와 별도로 확인해야 합니다. 필요한 도움이 있다면 카카오톡이나 이메일로 문의해 주세요."] },
];

export default function HomeFaqSection() {
  return <section className="section home-faq-section" id="faq"><div className="wrap home-faq-layout">
    <div className="section-head"><h2>풀어보기 전에<br />궁금한 점</h2><p>비용과 로그인, 기록 저장까지,<br />시작 전에 알아둘 내용을 모았습니다.</p></div>
    <div className="faq">{questions.map(question => <details key={question.title}><summary>{question.title}</summary><div className="home-faq-answer">{question.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></details>)}
      <details><summary>궁금한 점이나 문제 오류는 어디로 문의하나요?</summary><div className="home-faq-answer"><p>학생과 학부모 모두 <a href="https://pf.kakao.com/_xoSQsX">카카오톡 채널</a>이나 <a href="mailto:sungmin.t@maths.study">이메일</a>로 문의할 수 있습니다. 학년과 사용하는 기기, 궁금한 내용을 함께 알려 주세요.</p><p>현재 공개 베타로 운영 중이며, 시작 화면에 검수 중인 문제 안내가 표시될 수 있습니다. 문제·해설에 오류가 의심되면 시험지와 문항 번호를 함께 알려 주세요.</p></div></details>
    </div>
  </div></section>;
}
