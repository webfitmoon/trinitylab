const records = [
  { title: "시험지 한 회를 모두 풀었다면", text: "로그인한 뒤 ‘계정 저장’을 선택하면 결과를 남길 수 있습니다.", icon: <><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="m8 13 3 3 5-6" /></> },
  { title: "단원이나 문항 번호로 연습했다면", text: "일부 연습은 회차 결과로 저장되지 않습니다. 문제를 시작하기 전 저장 안내를 확인해 주세요.", icon: <><path d="M8 3h8l4 4v10M16 3v5h4M4 7v13h13M3 3l18 18" /></> },
  { title: "문제마다 걸린 시간", text: "문제를 푼 기기의 브라우저에 남습니다. ‘오래 걸린 문항 다시 보기’로 다시 연습할 수 있지만, 그 결과는 별도로 저장되지 않습니다.", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { title: "직접 쓴 풀이", text: "로그인 후 앱이 읽어낸 답을 확인해 제출하면 저장됩니다. 제출하기 전에 다른 문제로 이동하거나 새로고침하면 필기가 사라질 수 있습니다.", icon: <><path d="m4 20 4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14 7l3 3M12 20h8" /></> },
];

export default function RecordSection() {
  return <section className="section record-section" id="records" aria-labelledby="record-title"><div className="wrap">
    <div className="section-head"><h2 id="record-title">풀었던 문제와 기록,<br />다시 확인할 수 있나요?</h2><p>다음에 다시 보려면 저장 방법을 확인해 주세요. 연습한 방식에 따라 남는 기록이 다릅니다.</p></div>
    <div className="record-cards">{records.map(record => <article key={record.title}>
      <span className="record-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{record.icon}</svg></span>
      <div><h3>{record.title}</h3><p>{record.text}</p></div>
    </article>)}</div>
  </div></section>;
}
