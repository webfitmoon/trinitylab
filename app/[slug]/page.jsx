import { notFound } from "next/navigation";
import SubpageShell, { PageBlock } from "../../components/subpage-shell";
import ProgramGuide from "../../components/program-guide";
import StudyCheck from "../../components/study-check";
const pages = {
  program: { label: "프로그램 소개", title: "문제 선택부터, 틀린 문제를 다시 풀기까지.", description: "11실모의고사에서 필요한 기출을 고르고, 힌트와 해설을 활용해 다시 풀어보세요. 기능별 사용 방법과 저장되는 기록을 안내합니다." },
  diagnosis: { label: "학습 자기점검", title: "수능 수학, 평소 공부 습관을 점검해 보세요.", description: "최근 공부 모습을 떠올리며 5개 질문에 답해 보세요. 개념 연결, 시간 배분, 오답 복습 중 먼저 점검할 부분과 연습 방법을 안내합니다." },
  trial: { label: "체험 안내", title: "설치 없이, 첫 연습을 시작하세요.", description: "별도 신청 없이 문제를 골라 풀어볼 수 있습니다. 처음 이용하는 학생과 학부모를 위해 기기, 로그인, 기록 저장 방법을 안내합니다." },
};
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; return page ? { title: `${page.label} | 트리니티에듀랩`, description: page.description } : {}; }
export default async function Page({ params }) {
  const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; if (!page) notFound();
  return <SubpageShell {...page}>
    {slug === "program" && <ProgramGuide />}
    {slug === "diagnosis" && <><PageBlock title="최근의 공부 모습을 골라주세요."><StudyCheck /></PageBlock></>}
    {slug === "trial" && <><PageBlock title="처음에는 이렇게 이용해 보세요."><ol className="subpage-list"><li><h3>앱에서 시험지나 연습 범위를 고릅니다.</h3><p>학년과 시험지를 고르거나, 필요한 단원·문항 번호를 선택해 주세요. 시작 전에 풀 문제 수와 저장 안내를 확인합니다.</p></li><li><h3>‘어떻게 풀까요?’에서 ‘한 문항씩’을 선택합니다.</h3><p>답을 고를 때마다 정답과 해설을 확인하는 연습 모드입니다. 문제를 하나씩 확인하며 이어서 풀 수 있고, 기본 시험지는 30문항입니다.</p></li><li><h3>틀린 문항의 힌트를 보고 다시 생각합니다.</h3><p>바로 해설을 읽기 전에 풀이를 시도해 보세요. 번호별 연습에서 분량을 고를 수 있지만, 해당 연습은 회차 결과로 저장되지 않습니다.</p></li><li><h3>다음에 볼 기록은 저장해 주세요.</h3><p>완료한 회차는 로그인 후 계정 저장을 선택합니다. 손풀이 기능은 로그인과 제출이 필요합니다. 자세한 저장 방식은 <a href="/program#review">프로그램 소개</a>에서 확인해 주세요.</p></li></ol><a className="btn" href="https://111sm.app/mathematics">11실모의고사에서 연습 시작</a><p className="subpage-note">공개 베타 · 무료 시작 · 별도 설치 불필요</p></PageBlock><PageBlock title="시작 전에 확인해 주세요." tint><div className="subpage-grid"><article><h3>기기</h3><p>휴대폰과 노트북의 브라우저에서 이용할 수 있습니다. 문제 위에 직접 필기하려면 태블릿 가로 화면과 펜이 편합니다.</p></article><article><h3>로그인이 필요한 때</h3><p>문제 연습은 로그인 없이 시작할 수 있습니다. 계정 저장과 손풀이는 로그인이 필요하며, 가입 시 만 14세 이상 확인과 개인정보 처리방침 동의가 필요합니다.</p></article><article><h3>이용 범위</h3><p>손풀이 채점은 무료 계정의 하루 이용 한도가 있습니다. 선생님의 개별 관리나 보호자 보고서의 제공 여부는 별도로 문의해 주세요.</p></article></div></PageBlock></>}
  </SubpageShell>;
}
