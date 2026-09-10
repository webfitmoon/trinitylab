import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import DiagnosisResult from "../../../../components/diagnosis-result";
import types from "../../../../content/diagnosis-results.json";

export function generateStaticParams() { return Object.keys(types).map(type => ({type:type.toLowerCase()})); }
export async function generateMetadata({ params }) {
  const { type } = await params;
  const info = types[type.toUpperCase()];
  return info ? {title: info.name + " | 트리니티에듀랩 학습 유형", description: info.summary, openGraph:{title: info.name + " | 트리니티에듀랩",description:info.summary,url:"https://trinitylab-gamma.vercel.app/diagnosis/result/"+type}} : {};
}
export default async function ResultPage({ params }) {
  const { type } = await params;
  if (!["a","b","c"].includes(type)) notFound();
  return <><a className="skip" href="#main">본문으로 바로가기</a><SiteHeader /><main id="main" className="section"><div className="wrap diagnosis-static"><h1 className="diagnosis-page-title">학습 유형 안내</h1><DiagnosisResult type={type.toUpperCase()} /><div className="actions"><Link className="btn secondary" href="/diagnosis">나의 유형 진단하기</Link></div></div></main></>;
}
