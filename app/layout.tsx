import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'フォトLab',
  description: '写真・カメラ上達情報',
  openGraph: { title: 'フォトLab', description: '写真・カメラ上達情報', type: 'website', locale: 'ja_JP', siteName: 'フォトLab' },
  twitter: { card: 'summary_large_image', title: 'フォトLab', description: '写真・カメラ上達情報' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "フォトLab", "description": "写真・カメラ上達情報", "url": "https://photo-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}