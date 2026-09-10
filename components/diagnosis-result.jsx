"use client";
import Link from "next/link";
import types from "../content/diagnosis-results.json";

export default function DiagnosisResult({ type, percentages }) {
  const info = types[type];
  return <div className="diagnosis-result-content" data-result-type={type}>
    <p className="diagnosis-type-label">유형 {type}</p>
    <h2>{info.name}</h2><p className="diagnosis-summary">{info.summary}</p>
    {percentages ? <div className="diagnosis-ratios" aria-label="세 유형의 응답 점수 비율">
      {Object.entries(types).map(([key, value]) => <div key={key} className={key === type ? "diagnosis-axis is-primary" : "diagnosis-axis"}>
        <div><span>{key} · {value.name}</span><strong>{percentages[key]}%</strong></div>
        <div className="diagnosis-axis-track" role="meter" aria-label={value.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentages[key]}><span style={{width: percentages[key] + "%"}} /></div>
      </div>)}
      <p className="note">선택한 답을 바탕으로 계산한 비율입니다. 수학 실력이나 성적을 뜻하지 않습니다.</p>
    </div> : <p className="note">이 페이지는 유형 안내입니다. 개인 응답·점수 비율은 포함하지 않습니다.</p>}
    <div className="diagnosis-example"><span>이런 공부 모습과 비슷할 수 있어요</span><p>“{info.example}”</p></div>
    <div className="diagnosis-prescription">
      <article><h3>오늘 해볼 연습</h3><p>{info.today}</p></article>
      <article><h3>이번 주 이어갈 연습</h3><p>{info.week}</p></article>
      <article><h3>앱에서 이렇게 연습해 보세요</h3><p>{info.app}</p></article>
    </div>
    <details><summary>조금 더 자세히 연습하려면?</summary><p><strong>{info.method}</strong><br />{info.methodNote}</p></details>
    <details><summary>학부모님은 이렇게 도와주세요.</summary><p>{info.parent}</p></details>
    <details><summary>결과는 어떻게 정해지나요?</summary><p>고른 답을 개념 연결, 시간 배분, 오답 복습의 세 방향으로 나누어 먼저 점검할 부분을 안내합니다. 평소 공부 모습에 대한 답을 바탕으로 한 참고 안내이며, 성적이나 능력을 측정한 결과는 아닙니다. 실제 문제를 풀 때의 모습과 함께 살펴보세요.</p></details>
    <div className="actions"><Link className="btn" href="/trial">연습 방법 확인하기</Link></div>
  </div>;
}
