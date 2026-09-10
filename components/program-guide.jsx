import Link from "next/link";
import { PageBlock } from "./subpage-shell";

export default function ProgramGuide() {
  return <div className="program-guide">
    <nav className="wrap program-guide-nav" aria-label="프로그램 이용 안내 목차">
      <a href="#choose">연습 범위 고르기</a><a href="#retry">힌트로 다시 풀기</a><a href="#handwriting">손풀이 활용하기</a><a href="#review">다음 복습 정하기</a>
    </nav>
    <div id="choose"><PageBlock title="오늘 공부할 목적부터 정해 보세요.">
      <p>같은 기출문제도 어떻게 고르느냐에 따라 연습의 목적이 달라집니다. 전체 흐름을 점검할지, 막히는 단원을 다시 볼지 먼저 정하면 문제를 고르는 기준이 생깁니다.</p>
      <div className="subpage-grid">
        <article><h3>여러 단원을 이어서 풀어보고 싶다면</h3><p>시험지를 골라 한 회차를 풀어보세요. 끝까지 푼 뒤 맞힌 문항과 다시 확인할 문항을 함께 살펴보면, 이번 회차에서 어디에 막혔는지 돌아볼 수 있습니다.</p></article>
        <article><h3>특정 개념에서 자꾸 막힌다면</h3><p>단원별로 범위를 좁혀 연습해 보세요. 예를 들어 수열 문제에서 풀이의 시작을 잡기 어렵다면, 해당 단원의 문제를 풀며 조건을 해석하고 첫 식을 세우는 과정을 점검합니다.</p></article>
        <article><h3>특정 문항 번호를 집중해서 풀고 싶다면</h3><p>문항 번호로 범위를 선택해 필요한 문제를 찾아보세요. 번호별 연습에서는 분량을 선택할 수 있습니다. 일부 단원·번호 연습은 회차 기록으로 남지 않으므로 시작 화면의 저장 안내를 확인해 주세요.</p></article>
      </div>
    </PageBlock></div>
    <div id="retry"><PageBlock title="틀린 문항은 해설을 읽기 전에 다시 생각합니다." tint>
      <div className="subpage-split"><div><p>해설을 읽고 이해한 것과 혼자서 풀이를 시작하는 것은 다릅니다. 채점 결과에서 다시 확인할 문항을 골랐다면, 먼저 내가 어느 지점까지 풀 수 있는지 확인해 보세요.</p>
      <ol className="subpage-list"><li><h3>막힌 지점을 짚습니다.</h3><p>조건을 식으로 바꾸지 못했는지, 계산 도중 멈췄는지, 답을 고르는 과정에서 실수했는지 자신의 풀이를 살펴봅니다.</p></li><li><h3>힌트를 읽고 다시 시도합니다.</h3><p>힌트에서 얻은 단서를 바탕으로 다음 식이나 풀이 방향을 직접 적어보세요. 답만 바꾸기보다 풀이를 어디서 이어갈지 생각하는 연습입니다.</p></li><li><h3>필요할 때 해설을 확인합니다.</h3><p>그래도 해결되지 않으면 해설과 자신의 풀이를 비교합니다. 설명을 읽은 뒤에는 해설을 가리고 첫 단계부터 다시 시작해 보세요.</p></li></ol></div>
      <figure><img src="/media/result-hint-1180.png" width="1180" height="820" alt="결과에서 문항별 힌트를 확인하는 실제 앱 화면" loading="lazy" /><figcaption>결과·힌트 화면을 보며 자신의 풀이와 비교해 보세요.</figcaption></figure></div>
    </PageBlock></div>
    <div id="handwriting"><PageBlock title="손으로 쓴 풀이를, 다음 복습에도 활용하세요.">
      <p>문제 위에 풀이를 적으면 답뿐 아니라 자신이 어떤 순서로 접근했는지도 돌아볼 수 있습니다. 태블릿 가로 화면과 펜을 사용하면 문제를 보면서 필기하기 편합니다.</p>
      <div className="subpage-grid"><article><h3>읽어낸 답을 직접 확인합니다.</h3><p>필기를 마친 뒤 앱이 읽어낸 답이 의도한 값과 같은지 확인하세요. 다르게 읽었다면 수정한 후 제출합니다. 제출한 답을 정답과 비교하는 기능이며, 풀이의 모든 단계가 옳은지 판단하는 기능은 아닙니다.</p></article><article><h3>보관하려면 로그인 후 제출합니다.</h3><p>로그인 후 답을 확인해 제출한 손풀이가 계정에 저장됩니다. 제출 전 필기는 문항 이동이나 새로고침 때 사라질 수 있으므로, 남겨둘 풀이는 제출 여부를 확인해 주세요.</p></article></div>
      <aside className="program-guide-tip"><h3>복습할 때는 이 부분을 살펴보세요.</h3><p>처음 세운 식, 조건을 빠뜨린 지점, 계산을 고친 흔적을 찾아보세요. ‘답을 틀렸다’에서 한 걸음 더 나아가 다음 풀이에서 무엇을 확인할지 정하는 데 활용할 수 있습니다.</p></aside>
    </PageBlock></div>
    <div id="review"><PageBlock title="결과를 확인했다면, 다음에 풀 문제를 정합니다." tint>
      <p>모든 문제를 처음부터 다시 풀 필요는 없습니다. 틀렸던 문항과 오래 걸렸던 문항을 살펴보고, 다음 공부에서 확인할 대상을 골라보세요.</p>
      <div className="subpage-grid"><article><h3>틀렸던 문항: 혼자 풀 수 있는지 확인</h3><p>완료한 회차 결과를 남기려면 로그인 후 계정 저장을 선택합니다. 복습할 때는 답을 기억하는 데 그치지 않도록 풀이의 이유를 직접 설명하며 다시 풀어보세요.</p></article><article><h3>오래 걸린 문항: 멈춘 지점 확인</h3><p>문항별 풀이 시간은 이 기기 브라우저에 남습니다. ‘오래 걸린 문항 다시 보기’로 연습하면서 어떤 부분에서 시간이 걸렸는지 돌아보세요. 이 재풀이 결과는 기록으로 저장되지 않습니다.</p></article><article><h3>다른 학생의 풀이: 접근 방식 비교</h3><p>풀이 커뮤니티에서 같은 문항의 다른 접근을 읽어보세요. 어떤 조건부터 사용했는지, 내 풀이와 어디서 갈라지는지 비교한 뒤 이해한 방법을 직접 적용해 보는 것을 권합니다.</p></article><article><h3>다음 연습: 확인할 행동 하나 선택</h3><p>‘조건을 식 옆에 표시하기’, ‘계산을 마친 뒤 부호 확인하기’처럼 다음 풀이에서 해볼 행동을 하나 정해보세요. 이는 스스로 적용해 볼 학습 예시이며, 앱이 실수 원인을 자동으로 진단하는 것은 아닙니다.</p></article></div>
    </PageBlock></div>
    <PageBlock title="내 공부에 맞는 방식으로 시작해 보세요."><p>문제 연습은 로그인 없이 시작할 수 있습니다. 계정에 결과를 남기거나 손풀이를 제출할 때는 로그인이 필요합니다. 공개 베타의 문항 검수 안내와 손풀이 하루 이용 한도는 시작 전에 확인해 주세요.</p><div className="actions"><a className="btn" href="https://111sm.app/mathematics">문제 골라 연습하기</a><Link className="btn secondary" href="/trial">기기·계정 준비 안내</Link></div></PageBlock>
  </div>;
}
