const records = [
  { title: "완료한 회차 결과", text: "로그인 후 계정 저장을 선택합니다.", icon: <><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="m8 13 3 3 5-6" /></> },
  { title: "일부 단원·번호 연습", text: "회차 결과로 저장되지 않습니다. 시작 화면의 안내를 확인하세요.", icon: <><path d="M8 3h8l4 4v10M16 3v5h4M4 7v13h13M3 3l18 18" /></> },
  { title: "문항별 풀이 시간", text: "이 기기 브라우저에 남습니다. ‘오래 걸린 문항 다시 보기’에서 연습할 수 있으며, 재풀이 결과는 기록으로 저장하지 않습니다.", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { title: "손풀이", text: "로그인 후 읽은 답을 확인해 제출한 손풀이가 저장됩니다. 제출 전 필기는 이동·새로고침 시 사라질 수 있습니다.", icon: <><path d="m4 20 4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14 7l3 3M12 20h8" /></> },
];

export default function RecordSection() {
  return <section className="section record-section" id="records" aria-labelledby="record-title"><div className="wrap">
    <div className="section-head"><h2 id="record-title">무엇이 어디에 남나요?</h2><p>연습 방식에 따라 기록이 남는 곳과 저장 조건이 달라집니다.</p></div>
    <div className="record-cards">{records.map(record => <article key={record.title}>
      <span className="record-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{record.icon}</svg></span>
      <div><h3>{record.title}</h3><p>{record.text}</p></div>
    </article>)}</div>
  </div></section>;
}
