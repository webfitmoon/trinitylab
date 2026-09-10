"use client";
import { useRef, useState } from "react";
import Link from "next/link";
const questions = [
  { title: "틀린 문제를 확인한 뒤에는?", options: ["해설을 보고 다음 문제로 넘어가요", "나중에 보려고 표시만 해 둬요", "해설을 덮고 다시 풀어봐요"], action: "해설 전에 힌트로 한 번 더 시도해 보세요.", detail: "정답을 읽는 것에서 멈추지 않고, 다음 풀이의 첫 줄을 직접 적어봅니다." },
  { title: "비슷한 문제를 또 틀리면?", options: ["왜 또 틀렸는지 잘 모르겠어요", "이유는 알지만 따로 남기지 않아요", "놓친 조건이나 개념을 적어둬요"], action: "틀린 이유를 한 문장으로 적어보세요.", detail: "놓친 조건, 떠올리지 못한 개념, 계산 실수 중 실제로 있었던 일을 자신의 노트에 남겨보세요." },
  { title: "오답을 다시 푸는 시점은?", options: ["거의 다시 보지 않아요", "시험 직전에 한꺼번에 봐요", "다음 공부 시간에 다시 풀어요"], action: "다음 공부의 첫 문제로 오답 하나를 골라보세요.", detail: "완료한 회차 결과를 저장할 경우 계정 저장을 선택하고, 저장되지 않는 연습은 다시 볼 문항을 따로 적어두세요." },
  { title: "문제별로 시간이 얼마나 걸리는지?", options: ["잘 모르겠어요", "오래 걸리는 느낌만 알아요", "문항별 시간을 확인해요"], action: "오래 걸린 문항을 따로 살펴보세요.", detail: "앱의 ‘오래 걸린 문항 다시 보기’를 활용할 수 있습니다. 시간은 해당 브라우저에 남으며 재풀이 결과는 별도 기록으로 저장되지 않습니다." },
  { title: "다음에 풀 문제를 고를 때는?", options: ["늘 하던 순서대로 풀어요", "틀린 문제를 생각나면 골라요", "부족한 단원이나 문항을 골라요"], action: "연습 범위를 한 번 좁혀보세요.", detail: "시험지 전체가 부담스럽다면 단원이나 문항 번호로 필요한 범위를 고르세요. 문항 수와 기록 저장 여부를 시작 전에 확인합니다." },
];
export default function StudyCheck() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(false);
  const questionRef = useRef(null);
  const resultRef = useRef(null);
  const question = questions[step];
  const selected = questions.filter((_, i) => answers[i] !== "2");

  function focusQuestion() { requestAnimationFrame(() => questionRef.current?.focus()); }
  function submit(event) {
    event.preventDefault();
    if (answers[step] === undefined) return;
    if (step < questions.length - 1) {
      setStep(step + 1);
      focusQuestion();
    } else {
      setResult(true);
      requestAnimationFrame(() => resultRef.current?.focus());
    }
  }
  function restart() { setAnswers({}); setStep(0); setResult(false); focusQuestion(); }

  return <div className="study-check">
    {!result ? <>
      <p className="check-progress" aria-live="polite">총 {questions.length}문항 중 {step + 1}번째 질문</p>
      <progress className="check-progress-bar" value={step + 1} max={questions.length} aria-label="질문 진행 상황" />
      <form onSubmit={submit}>
        <fieldset key={step}>
          <legend ref={questionRef} tabIndex={-1}>{question.title}</legend>
          {question.options.map((text, j) => <label key={text}>
            <input type="radio" name={`question-${step}`} value={j} required checked={answers[step] === String(j)} onChange={event => setAnswers({ ...answers, [step]: event.target.value })} />
            <span>{text}</span>
          </label>)}
        </fieldset>
        <div className="check-navigation">
          {step > 0 && <button className="btn secondary" type="button" onClick={() => { setStep(step - 1); focusQuestion(); }}>이전 질문</button>}
          <button className="btn" type="submit">{step === questions.length - 1 ? "결과 보기" : "다음 질문"}</button>
        </div>
      </form>
    </> : <section ref={resultRef} tabIndex={-1} className="check-result" aria-label="자기점검 결과">
      <h2>다음 연습에서 하나만 시도해 보세요.</h2>
      <p>선택한 응답을 바탕으로 정리했습니다. 점수나 능력 등급을 매기는 결과는 아닙니다.</p>
      {selected.length ? selected.map(q => <article key={q.title}><h3>{q.action}</h3><p>{q.detail}</p></article>) : <article><h3>지금의 복습 습관을 다른 문제에서도 이어가세요.</h3><p>응답에서는 다시 풀기, 기록, 연습 범위 선택을 하고 있다고 답했습니다. 낯선 시험지에서도 같은 과정을 이어갈 수 있는지 확인해 보세요.</p></article>}
      <Link className="btn" href="/trial">이 방향으로 연습 시작하기</Link>
      <button className="text-link" type="button" onClick={() => { setResult(false); focusQuestion(); }}>답변 다시 확인하기</button>
      <button className="text-link" type="button" onClick={restart}>처음부터 다시 점검</button>
    </section>}
  </div>;
}
