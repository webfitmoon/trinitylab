import "./globals.css";

export const viewport = { colorScheme: "light" };

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
  "title": "트리니티에듀랩 | 메인 시안 2026.09.08",
  "description": "오늘의 오답을 다음 훈련으로 연결하는 11실모의고사",
  "robots": {
    "index": false,
    "follow": false
  }
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body className="trinity">{children}</body></html>;
}
