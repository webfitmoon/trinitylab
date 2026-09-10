import Link from "next/link";
import { notFound } from "next/navigation";
import SubpageShell, { PageBlock } from "../../components/subpage-shell";
import ProgramSection from "../../components/program-section";
import TrainingSection from "../../components/training-section";
import FaqSection from "../../components/faq-section";
import StudyCheck from "../../components/study-check";
const pages = {
  program: { label: "프로그램 소개", title: "풀고 난 뒤의 공부까지 이어가세요.", description: "11실모의고사에서 문제를 고르고, 결과를 확인하고, 힌트로 다시 생각하는 방법을 안내합니다. 실제 기능과 기록이 남는 범위를 함께 살펴보세요." },
  diagnosis: { label: "학습 자기점검", title: "나는 틀린 뒤에 무엇을 하고 있을까요?", description: "최근 공부한 모습을 다섯 가지 질문으로 돌아보세요. 답변에 따라 먼저 시도해 볼 공부 행동과 앱 이용 방법을 안내합니다." },
  trial: { label: "체험 안내", title: "설치 없이, 첫 연습을 시작하세요.", description: "공개 베타에서 문제를 직접 풀어볼 수 있습니다. 별도 체험 신청서를 제출하지 않아도 시작할 수 있으며, 도움이 필요하면 문의 채널을 이용해 주세요." },
};
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; return page ? { title: `${page.label} | 트리니티에듀랩`, description: page.description } : {}; }
export default async function Page({ params }) {
  const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; if (!page) notFound();
  return <SubpageShell {...page}>
    {slug === "program" && <><PageBlock title="정답 표시 다음에는, 힌트부터."><div className="subpage-split"><div><p>결과에서 다시 확인할 문항을 고르고, 해설을 펼치기 전에 힌트로 한 번 더 생각해 보세요. 설명을 읽은 뒤에는 혼자 풀이를 시작할 수 있는지 확인합니다.</p><Link className="btn" href="/trial">첫 연습 방법 보기</Link></div><figure><img src="/media/result-hint-1180.png" width="1180" height="820" alt="실제 앱의 결과와 문항별 힌트 화면" /><figcaption>11실모의고사 실제 결과·힌트 화면</figcaption></figure></div></PageBlock><TrainingSection /><ProgramSection /><PageBlock title="어디서 시작할지 망설여진다면." tint><p>현재 오답을 어떻게 다루는지 돌아보고, 다음 연습에서 바꿀 행동 하나를 골라보세요.</p><Link className="btn" href="/diagnosis">학습 자기점검하기</Link></PageBlock></>}
    {slug === "diagnosis" && <><PageBlock title="최근의 공부 모습을 골라주세요."><StudyCheck /></PageBlock><PageBlock title="이 점검은 무엇을 알려주나요?" tint><p>성적이나 수학 능력을 측정하는 검사가 아닙니다. 선택한 공부 습관에 맞춰 연습 방향을 제안하는 참고용 자기점검입니다. 응답은 서버로 전송하거나 브라우저에 저장하지 않으며, 새로고침하면 사라집니다.</p><Link className="text-link" href="/program">실제 앱 기능과 기록 방식 확인하기</Link></PageBlock></>}
    {slug === "trial" && <><PageBlock title="처음에는 이렇게 이용해 보세요."><ol className="subpage-list"><li><h3>앱에서 시험지나 연습 범위를 고릅니다.</h3><p>학년과 시험지, 단원, 문항 번호 중 필요한 범위를 선택해 주세요. 시작 전에 문항 수와 저장 안내를 확인합니다.</p></li><li><h3>‘어떻게 풀까요?’에서 ‘한 문항씩’을 선택합니다.</h3><p>답을 고를 때마다 정답과 해설을 확인하는 연습 모드입니다. 한 문제만 제공하는 체험은 아니며, 기본 시험지는 30문항입니다.</p></li><li><h3>틀린 문항의 힌트를 보고 다시 생각합니다.</h3><p>바로 해설을 읽기 전에 풀이를 시도해 보세요. 번호별 연습에서 분량을 고를 수 있지만, 해당 연습은 회차 결과로 저장되지 않습니다.</p></li><li><h3>기록을 남길 때는 저장 방식을 확인합니다.</h3><p>완료한 회차는 로그인 후 계정 저장을 선택합니다. 손풀이 기능은 로그인과 제출이 필요합니다. 자세한 보관 방식은 아래 FAQ를 확인해 주세요.</p></li></ol><a className="btn" href="https://111sm.app/mathematics">11실모의고사에서 연습 시작</a><p className="subpage-note">공개 베타 · 무료 시작 · 별도 설치 불필요</p></PageBlock><PageBlock title="체험 전 준비할 것." tint><div className="subpage-grid"><article><h3>기기</h3><p>휴대폰과 노트북의 브라우저에서 이용할 수 있습니다. 문제 위에 직접 필기하려면 태블릿 가로 화면과 펜이 편합니다.</p></article><article><h3>계정과 동의</h3><p>문제 연습은 로그인 없이 시작할 수 있습니다. 계정 저장과 손풀이는 로그인이 필요하며, 가입 시 만 14세 이상 확인과 개인정보 처리방침 동의가 필요합니다.</p></article><article><h3>이용 범위</h3><p>손풀이 채점은 무료 계정의 하루 이용 한도가 있습니다. 선생님의 개별 관리나 보호자 보고서의 제공 여부는 별도로 문의해 주세요.</p></article></div></PageBlock><FaqSection /><PageBlock title="이용 방법이나 체험 상담이 필요하다면."><p>학생의 학년, 사용 기기, 궁금한 기능을 함께 알려 주세요. 앱 오류 문의라면 시험지와 문항 번호를 적어 주세요.</p><div className="subpage-links"><a href="https://pf.kakao.com/_xoSQsX">카카오톡으로 문의하기</a><a href="mailto:sungmin.t@maths.study">이메일로 문의하기</a></div></PageBlock></>}
  </SubpageShell>;
}
