"use client";
import { useState } from "react";
import Link from "next/link";
import types from "../content/diagnosis-results.json";

export default function DiagnosisResult({ type, percentages }) {
  const info = types[type];
  const [shareMessage, setShareMessage] = useState("");
  async function copyLink() {
    const url = new URL("/diagnosis/result/" + type.toLowerCase(), window.location.origin).href;
    try { await navigator.clipboard.writeText(url); setShareMessage("유형 안내 링크를 복사했습니다. 개인 응답과 비율은 공유되지 않습니다."); }
    catch { setShareMessage("아래 ‘유형 안내 페이지’의 주소를 복사해 주세요."); }
  }
  return <div className="diagnosis-result-content" data-result-type={type}>
    <p className="diagnosis-type-label">유형 {type}</p>
    <h2>{info.name}</h2><p className="diagnosis-summary">{info.summary}</p>
    {percentages ? <div className="diagnosis-ratios" aria-label="세 유형의 응답 점수 비율">
      {Object.entries(types).map(([key, value]) => <div key={key} className={key === type ? "diagnosis-axis is-primary" : "diagnosis-axis"}>
        <div><span>{key} · {value.name}</span><strong>{percentages[key]}%</strong></div>
        <div className="diagnosis-axis-track" role="meter" aria-label={value.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentages[key]}><span style={{width: percentages[key] + "%"}} /></div>
      </div>)}
      <p className="note">응답에 따른 점수 비율이며, 능력 점수나 해당 유형일 확률이 아닙니다.</p>
    </div> : <p className="note">이 페이지는 유형 안내입니다. 개인 응답·점수 비율은 포함하지 않습니다.</p>}
    <div className="diagnosis-example"><span>이 유형을 이해하는 예시 표현</span><p>“{info.example}”</p></div>
    <div className="diagnosis-prescription">
      <article><h3>오늘 할 것</h3><p>{info.today}</p></article>
      <article><h3>이번 주 할 것</h3><p>{info.week}</p></article>
      <article><h3>111sm에서 활용하기</h3><p>{info.app}</p></article>
    </div>
    <details><summary>추천 훈련 방향을 더 알고 싶어요.</summary><p><strong>{info.method}</strong><br />{info.methodNote}</p></details>
    <details><summary>이 결과를 부모님께 설명하면</summary><p>{info.parent}</p></details>
    <details><summary>결과는 어떻게 정해지나요?</summary><p>5개 응답의 A·B·C 점수를 합산하고 B점수에 2를 곱해 비교합니다. 최고점이 같으면 동점 유형 중 첫 질문의 유형을 우선하고, 해당하지 않으면 C → A → B 순서로 정합니다. 비율은 보정된 점수의 합을 100%로 환산합니다. 자기보고식 학습 참고용이며, 성적·인지 능력을 측정하거나 1등급을 보장하지 않습니다.</p></details>
    <div className="actions"><Link className="btn" href="/trial">이 유형의 연습 시작하기</Link><a className="btn secondary" href="https://pf.kakao.com/_xoSQsX">맞춤 학습·체험 문의</a></div>
    <div className="diagnosis-share"><button type="button" onClick={copyLink}>유형 링크 복사</button><Link href={"/diagnosis/result/" + type.toLowerCase()}>유형 안내 페이지</Link></div>
    <p role="status" className="note">{shareMessage}</p>
    <nav className="diagnosis-other-types" aria-label="다른 유형 보기">{Object.entries(types).filter(([key]) => key !== type).map(([key,value]) => <Link key={key} href={"/diagnosis/result/" + key.toLowerCase()}>{value.name} 보기</Link>)}</nav>
  </div>;
}
