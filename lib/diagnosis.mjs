import config from "../content/diagnosis.json" with { type: "json" };
const types = ["A", "B", "C"];

export function selectType(scores, firstType) {
  const maximum = Math.max(...types.map(type => scores[type]));
  const winners = types.filter(type => scores[type] === maximum);
  return winners.includes(firstType) ? firstType : config.tiePriority.find(type => winners.includes(type));
}

export function calculateDiagnosis(answers) {
  if (!Array.isArray(answers) || answers.length !== config.questions.length || config.questions.some((q, i) => !Number.isInteger(answers[i]) || !q.options[answers[i]])) {
    throw new Error("Complete all diagnosis questions with valid choices.");
  }
  const raw = { A: 0, B: 0, C: 0 };
  answers.forEach((choice, index) => { const option = config.questions[index].options[choice]; raw[option.type] += option.weight; });
  const scores = Object.fromEntries(types.map(type => [type, raw[type] * config.multipliers[type]]));
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const exact = Object.fromEntries(types.map(type => [type, scores[type] / total * 100]));
  const percentages = Object.fromEntries(types.map(type => [type, Math.floor(exact[type])]));
  const remainder = 100 - Object.values(percentages).reduce((sum, value) => sum + value, 0);
  const order = [...types].sort((a, b) => (exact[b] - percentages[b]) - (exact[a] - percentages[a]) || types.indexOf(a) - types.indexOf(b));
  for (let i = 0; i < remainder; i++) percentages[order[i]]++;
  return { type: selectType(scores, config.questions[0].options[answers[0]].type), raw, scores, percentages, version: config.version };
}
