const questions = [
  { title: "어떤 학생에게 맞나요?", paragraphs: ["수학 문제를 꾸준히 풀지만 비슷한 문제를 다시 틀리거나, 오답을 정리해도 다시 풀지 못하는 고등학생에게 맞습니다. 문제를 푼 뒤 힌트로 다시 생각하고, 자신의 풀이를 돌아보는 연습에 활용해 보세요."] },
  { title: "어떤 기기로 사용할 수 있나요?", paragraphs: ["별도 설치 없이 휴대폰·노트북·태블릿의 브라우저에서 이용합니다. 문제 위에 직접 쓰는 손풀이 기능은 태블릿 가로 화면과 펜을 사용할 때 가장 편합니다."] },
  { title: "무료인가요? 회원가입은 언제 필요한가요?", paragraphs: ["문제 풀이, 힌트와 해설, 오답 복습은 무료이며 문제 연습은 로그인 없이 시작할 수 있습니다. 계정에 결과를 저장하거나 손풀이를 제출할 때는 로그인이 필요합니다. 손풀이 채점은 무료 계정에 하루 이용 한도가 있습니다.", "카카오 또는 구글 계정으로 로그인하며, 가입 시 만 14세 이상 확인과 개인정보 처리방침 동의가 필요합니다. 선생님·조교의 개별 코멘트나 학습 관리, 보호자 보고서는 기본 제공 기능으로 안내하지 않으며 별도 제공 여부를 문의해 주세요."] },
  { title: "학습 기록과 손풀이는 어떻게 저장되나요?", paragraphs: ["완료한 회차 결과는 로그인 후 계정 저장을 선택합니다. 일부 단원·번호 연습은 회차 결과로 남지 않으므로 시작 화면의 안내를 확인해 주세요. 문항별 풀이 시간은 이 기기 브라우저에 남으며, ‘오래 걸린 문항 다시 보기’의 재풀이 결과는 기록으로 저장되지 않습니다.", "손풀이는 로그인 후 앱이 읽어낸 답을 확인·수정해 제출할 때 저장됩니다. 제출 전 필기는 문항 이동이나 새로고침 때 사라질 수 있습니다. 채점은 제출 답을 정답과 비교하는 기능이며, 풀이의 모든 단계가 맞는지 판단하지는 않습니다."] },
];

export default function HomeFaqSection() {
  return <section className="section home-faq-section" id="faq"><div className="wrap home-faq-layout">
    <div className="section-head"><h2>풀어보기 전에<br />궁금한 점</h2><p>기기와 비용부터 기록 보관까지,<br />시작 전에 알아둘 내용을 모았습니다.</p></div>
    <div className="faq">{questions.map(question => <details key={question.title}><summary>{question.title}</summary><div className="home-faq-answer">{question.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></details>)}
      <details><summary>궁금한 점이나 문제 오류는 어디로 문의하나요?</summary><div className="home-faq-answer"><p>학생과 학부모 모두 <a href="https://pf.kakao.com/_xoSQsX">카카오톡 채널</a>이나 <a href="mailto:sungmin.t@maths.study">이메일</a>로 문의할 수 있습니다. 학년, 이용 기기, 궁금한 기능을 알려주시면 안내에 도움이 됩니다.</p><p>공개 베타로, 시작 화면에 검수를 기다리는 문항 안내가 표시될 수 있습니다. 문제·해설에 오류가 의심되면 시험지와 문항 번호를 함께 알려 주세요.</p></div></details>
    </div>
  </div></section>;
}
