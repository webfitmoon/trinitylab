# Diagnosis implementation and verification — 2026-09-10

## Source and scoring decision
- Source: trinity-webfit-kickoff-brief.html, section 5.2–5.6.
- All five questions and their option-to-type weights match the brief, including proposed Q4/Q5.
- Preserve the explicit scoring rule: A ×1, B ×2, C ×1.
- The source says B maximum is 5, but its option weights total 6 (1+2+1+1+1). This build does not silently replace the ×2 rule with max-score normalization. Correct raw maxima: A=10, B=6, C=10; adjusted maxima: A=10, B=12, C=10.
- Ties: Q1's type only if it is among the tied maximum types; otherwise C > A > B.
- Percentage bars use adjusted scores divided by their total. Largest remainders distribute rounding so the displayed sum is exactly 100. Type selection uses unrounded scores.
- These are self-reported learning suggestions, not validated cognitive measurements or grade predictions.
- Result practice copy is editorial copy based on the brief's direction and verified app functionality; it is not represented as teacher-approved prescription text.

## Implemented
- JSON questions/weights and result copy.
- One question at a time; choosing a button immediately advances.
- Short click guard prevents accidental duplicate selection during a transition.
- Previous-question control; editing retains other answers, recalculates the result.
- Result type, three percentage bars, illustrative expression, today/this-week/app guidance, parent explanation.
- Restart clears responses; reload clears personal results.
- Type-only share links and static A/B/C result pages with type-specific metadata.
- No personal responses or percentages in share URLs.
- Existing trial and inquiry links remain usable; no unverified 7-day entitlement is advertised.

## Not connected
No response storage API, anonymous analytics pipeline, lead collection, consent workflow, Kakao/SOLAPI delivery, personalized report delivery, subscription entitlement, book destination, or type-specific OG artwork was activated. This repository has no existing response/lead API. Those source sections require a confirmed backend, privacy/consent text, service availability and delivery settings. The UI accurately says responses are not stored.

## Verification
Run: node --test tests/diagnosis.test.mjs
- All 243 option combinations checked against an independent transcription of source mappings.
- 74 tied combinations; all follow the tie rule.
- Enumeration counts: A=71, B=95, C=77. These are combinatorial counts, not observed student statistics.
- Pure A/B/C, B ×2 tie case, Q1/fallback tie rules, invalid/incomplete input, 100% totals.
- Browser: A/B/C results, A/B 50:50 tie selected by Q1, answer review and editing, restart, mobile width 390 with no overflow.
- Browser: all three static result pages HTTP 200, invalid type HTTP 404; shared pages show no personal meters.
- Browser: all five questions and final calculation work offline after the page loads.
- Production build passed.
