import type { ReactNode } from 'react';

type MobileFrameProps = {
    children: ReactNode;
};

export function MobileFrame({ children }: MobileFrameProps) {
    return (
        <main className="mx-auto min-h-screen w-full max-w-[320px] bg-[var(--brand-deep)] shadow-[var(--shadow-card)]">
            {children}
        </main>
    );
}
