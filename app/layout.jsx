import "./globals.css";
import PageMotion from "../components/page-motion";

export const viewport = { colorScheme: "light" };

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
  "title": "트리니티에듀랩 | 수능 수학 기출 풀이와 오답 복습",
  "description": "풀어본 문제가 수능에서 맞히는 문제가 되도록. 기출 풀이부터 힌트, 해설, 오답 복습까지 트리니티에듀랩에서 이어가세요.",
  "robots": {
    "index": false,
    "follow": false
  }
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body className="trinity">{children}<PageMotion /></body></html>;
}
