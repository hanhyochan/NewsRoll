import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '뉴스를 읽자. - 뉴스롤',
    description: '뉴스가 어려운 사람들을 위한 뉴스 앱, 뉴스롤',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
