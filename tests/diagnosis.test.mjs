import test from "node:test";
import assert from "node:assert/strict";
import { calculateDiagnosis, selectType } from "../lib/diagnosis.mjs";

// Independent transcription of the brief's option mapping.
const mapping = [["A","B","C"],["C","B","A"],["A","B","C"],["A","B","C"],["C","A","B"]];
const weights = [[2,1,2],[2,2,2],[2,1,2],[2,1,2],[2,2,1]];
test("pure A, B and C response profiles", () => {
  for (const [answers,type,raw] of [
    [[0,2,0,0,1],"A",{A:10,B:0,C:0}],
    [[1,1,1,1,2],"B",{A:0,B:6,C:0}],
    [[2,0,2,2,0],"C",{A:0,B:0,C:10}],
  ]) {
    const result=calculateDiagnosis(answers);
    assert.equal(result.type,type);
    assert.deepEqual(result.raw,raw);
    assert.equal(result.percentages[type],100);
  }
});
test("B is multiplied by two, not divided by its maximum", () => {
  const r=calculateDiagnosis([1,1,0,0,1]);
  assert.deepEqual(r.raw,{A:6,B:3,C:0});
  assert.deepEqual(r.scores,{A:6,B:6,C:0});
  assert.equal(r.type,"B"); // tied, Q1 points to B
});
test("tie uses Q1 only among winners; fallback is C then A then B",()=>{
  assert.equal(selectType({A:4,B:2,C:4},"A"),"A");
  assert.equal(selectType({A:4,B:2,C:4},"B"),"C");
  assert.equal(selectType({A:4,B:4,C:2},"C"),"A");
  assert.equal(selectType({A:2,B:6,C:2},"A"),"B");
});
test("invalid or incomplete responses cannot produce a diagnosis",()=>{
  for(const value of [null,{},[],[0,0],[0,0,0,0],[0,0,0,0,0,0],["0",0,0,0,0],[3,0,0,0,0],[-1,0,0,0,0],[null,0,0,0,0]]) {
    assert.throws(()=>calculateDiagnosis(value));
  }
});
test("all 243 combinations match brief and percentages total exactly 100",()=>{
  const distribution={A:0,B:0,C:0}; let ties=0;
  for(let n=0;n<243;n++){
    let x=n; const answers=Array.from({length:5},()=>{const v=x%3;x=Math.floor(x/3);return v;});
    const raw={A:0,B:0,C:0};
    answers.forEach((a,i)=>raw[mapping[i][a]]+=weights[i][a]);
    const scores={A:raw.A,B:raw.B*2,C:raw.C};
    const winners=["A","B","C"].filter(t=>scores[t]===Math.max(...Object.values(scores)));
    if(winners.length>1)ties++;
    const expected=winners.includes(mapping[0][answers[0]]) ? mapping[0][answers[0]] : ["C","A","B"].find(t=>winners.includes(t));
    const result=calculateDiagnosis(answers);
    assert.deepEqual(result.raw,raw);
    assert.deepEqual(result.scores,scores);
    assert.equal(result.type,expected);
    assert.equal(Object.values(result.percentages).reduce((a,b)=>a+b,0),100);
    for(const value of Object.values(result.percentages)) assert.ok(Number.isInteger(value)&&value>=0&&value<=100);
    distribution[result.type]++;
  }
  assert.ok(ties>0);
  assert.ok(Object.values(distribution).every(n=>n>0));
  console.log({combinations:243,ties,distribution});
});
