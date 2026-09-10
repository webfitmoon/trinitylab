"use client";
import { useEffect, useRef, useState } from "react";
import config from "../content/diagnosis.json";
import { calculateDiagnosis } from "../lib/diagnosis.mjs";
import DiagnosisResult from "./diagnosis-result";

export default function StudyCheck() {
  const [answers, setAnswers] = useState(Array(config.questions.length).fill(null));
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const guard = useRef(false);
  const questionRef = useRef(null);
  const resultRef = useRef(null);
  useEffect(() => {
    if (!busy) return;
    const timer = setTimeout(() => { guard.current = false; setBusy(false); }, 300);
    return () => clearTimeout(timer);
  }, [busy]);
  function focusQuestion() { requestAnimationFrame(() => questionRef.current?.focus()); }
  function choose(choice) {
    if (guard.current) return;
    guard.current = true;
    setBusy(true);
    const next = [...answers]; next[step] = choice;
    setAnswers(next);
    if (step < config.questions.length - 1) { setStep(step + 1); focusQuestion(); }
    else { setResult(calculateDiagnosis(next)); requestAnimationFrame(() => resultRef.current?.focus()); }
  }
  function restart() { setAnswers(Array(config.questions.length).fill(null)); setStep(0); setResult(null); focusQuestion(); }
  const question = config.questions[step];
  return <div className="study-check diagnosis-quiz">
    {!result ? <>
      <p className="check-progress" aria-live="polite">총 {config.questions.length}문항 중 {step + 1}번째 질문</p>
      <progress className="check-progress-bar" value={step + 1} max={config.questions.length} aria-label="질문 진행 상황" />
      <fieldset key={step}><legend ref={questionRef} tabIndex={-1}>{question.title}</legend>
        <div className="diagnosis-choices">{question.options.map((option, index) => <button className="diagnosis-choice" key={option.text} type="button" disabled={busy} aria-pressed={answers[step] === index} onClick={() => choose(index)}><span aria-hidden="true">{index + 1}</span>{option.text}</button>)}</div>
      </fieldset>
      {step > 0 && <button className="btn secondary" type="button" disabled={busy} onClick={() => {setStep(step - 1);focusQuestion();}}>이전 질문</button>}
    </> : <section ref={resultRef} tabIndex={-1} className="check-result" aria-label="공부 습관 점검 결과">
      <DiagnosisResult type={result.type} percentages={result.percentages} />
      <div className="diagnosis-restart"><button type="button" onClick={restart}>다시 점검하기</button></div>
    </section>}
  </div>;
}
