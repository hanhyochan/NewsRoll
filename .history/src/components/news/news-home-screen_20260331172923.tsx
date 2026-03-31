import { heroNews } from '@/lib/mock-news';

const toneClass = {
    neutral: 'bg-[#E0E0E0] text-[#212121]',
    orange: 'bg-[#FF6F0E] text-white',
    brown: 'bg-[#A1401A] text-white',
} as const;

const reactionToneClass = {
    positive: 'text-[#E7342F]',
    negative: 'text-[#2D4BC7]',
    neutral: 'text-[#616161]',
} as const;

function AppLogo() {
    return (
        <div className="flex items-center gap-4 text-white">
            <div className="text-[13px] font-semibold tracking-[-0.2px]">??</div>
            <div className="grid grid-cols-2 gap-[3px]">
                {Array.from({ length: 4 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-[6px] w-[6px] rounded-[2px] border border-white/90"
                    />
                ))}
            </div>
        </div>
    );
}

function StatusBar() {
    return (
        <div className="flex items-center justify-between px-4 pt-3 text-sm text-white">
            <span className="font-semibold tracking-[0.02em]">9:09</span>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/90" />
                <span className="h-2 w-4 rounded-full bg-white/90" />
                <span className="h-2 w-6 rounded-sm border border-white/90" />
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="px-[20px] pb-10 pt-3 text-white">
            <div className="flex items-center justify-end gap-4">
                <span className="h-2 w-2 rounded-full bg-[#FF9B26]" />
                <button
                    type="button"
                    aria-label="??"
                    className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-accent)] shadow-[0_10px_24px_rgba(255,125,115,0.35)]"
                >
                    <BellIcon />
                </button>
            </div>

            <div className="mt-10 space-y-6">
                <p className="text-[18px] leading-6 tracking-[-0.3px]">
                    ????? <span className="font-bold">???</span>?!
                </p>

                <div className="space-y-1">
                    <p className="text-[44px] font-medium leading-9 tracking-[-0.06em] text-[var(--brand-soft)]">
                        11,343<span className="ml-1 text-2xl font-normal text-white">?</span>
                    </p>
                    <p className="text-4xl leading-9 tracking-[-0.03em] text-white">
                        ??? ??? ????.
                    </p>
                </div>

                <div className="inline-flex rounded-full bg-white/20 p-1 backdrop-blur-sm">
                    <button
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--brand-deep)]"
                        aria-label="?? ??"
                    >
                        <ListIcon />
                    </button>
                    <button
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full text-white"
                        aria-label="??? ??"
                    >
                        <GridIcon />
                    </button>
                </div>
            </div>
        </header>
    );
}

function SearchFab() {
    return (
        <button
            type="button"
            aria-label="??"
            className="absolute right-4 top-[398px] z-20 grid h-[90px] w-[90px] place-items-center rounded-full bg-[var(--brand-soft)] shadow-[var(--shadow-float)]"
        >
            <SearchIcon />
        </button>
    );
}

type ReactionBarProps = {
    reactions: (typeof heroNews)[number]['reactions'];
};

function ReactionBar({ reactions }: ReactionBarProps) {
    return (
        <div className="flex items-center justify-center rounded-full bg-white px-6 py-4 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
            {reactions.map((reaction, index) => (
                <div key={reaction.label} className="flex items-center gap-2">
                    <span className="text-lg">
                        {reaction.label === '???' ? '?' : reaction.label === '???' ? '?' : '?'}
                    </span>
                    <span className={`text-sm font-semibold ${reactionToneClass[reaction.tone]}`}>
                        {reaction.count}
                    </span>
                    {index < reactions.length - 1 ? (
                        <span className="mx-4 h-10 w-px bg-[#E8E8E8]" />
                    ) : null}
                </div>
            ))}
        </div>
    );
}

type PollCardProps = {
    question: string;
    choices: (typeof heroNews)[number]['pollChoices'];
    count: number;
};

function PollCard({ question, choices, count }: PollCardProps) {
    return (
        <section className="rounded-[10px] bg-[var(--surface-muted)] px-4 py-6">
            <h3 className="text-[18px] font-medium leading-6 tracking-[-0.02em] text-black">
                {question}
            </h3>
            <div className="mt-4 space-y-3">
                {choices.map((choice) => (
                    <button
                        key={choice.label}
                        type="button"
                        className="flex w-full items-center justify-between rounded-[10px] bg-white px-3 py-3 text-left text-base leading-6 tracking-[-0.02em] text-[#424242] shadow-[0_4px_12px_rgba(17,17,17,0.04)]"
                    >
                        <span className="max-w-[220px]">{choice.label}</span>
                        <span
                            className={`grid h-5 w-5 place-items-center rounded-full border ${choice.selected ? 'border-[#111111] bg-[#111111] text-white' : 'border-[#D9D9D9] text-transparent'}`}
                        >
                            ?
                        </span>
                    </button>
                ))}
            </div>
            <p className="mt-4 text-[13px] font-medium text-[#616161]">
                <span className="font-semibold">{count}?</span>? ?????.
            </p>
        </section>
    );
}

type NewsCardProps = {
    item: (typeof heroNews)[number];
};

function NewsCard({ item }: NewsCardProps) {
    return (
        <article className="rounded-[20px] bg-white px-4 py-6 shadow-[var(--shadow-card)]">
            <div className="space-y-4">
                <span
                    className={`inline-flex rounded-full px-3 py-2 text-[13px] font-semibold leading-none ${toneClass[item.categoryTone]}`}
                >
                    {item.category}
                </span>
                <div>
                    <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">
                        {item.title}
                    </h2>
                    <p className="mt-4 text-[13px] text-[var(--text-muted)]">{item.publishedAt}</p>
                </div>

                <div className="flex items-center justify-end gap-4 text-[#BDBDBD]">
                    <ShareIcon />
                    <BookmarkIcon />
                </div>

                <div className="overflow-hidden rounded-[10px]">
                    <div className="relative h-[184px] rounded-[10px] bg-[linear-gradient(180deg,#c7d8ef_0%,#e9eef6_28%,#c7b9ad_100%)]">
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(62,58,58,0.28)_100%)]" />
                        <div className="absolute bottom-3 right-3 rounded-full bg-black/20 px-2 py-1 text-[12px] text-white/70">
                            ????: 0000?????
                        </div>
                        <div className="absolute bottom-0 left-6 flex gap-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-10 rounded-t-[6px] bg-[linear-gradient(180deg,#7b7b82_0%,#b6b8c0_100%)]"
                                    style={{ height: `${72 + (index % 3) * 20}px` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4 text-[16px] leading-6 tracking-[-0.02em] text-[#424242]">
                    {item.summary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-[#616161]">
                <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(135deg,#f2f2f2_0%,#bcbcbc_100%)] text-[11px] font-bold text-[#4b4b4b]">
                        {item.publisher.slice(0, 1)}
                    </div>
                    <span className="text-sm font-medium">{item.publisher}</span>
                </div>
                <span className="h-4 w-px bg-[#D7D7D7]" />
                <span className="text-[15px] font-medium">{item.reporter}</span>
            </div>

            <button
                type="button"
                className="mt-6 h-12 w-full rounded-[10px] border border-[var(--line)] bg-white text-base font-medium text-[#616161]"
            >
                ?? ?? ??
            </button>

            <div className="mt-6 rounded-[10px] border border-[#EFEAF8] bg-white px-4 py-3">
                <ReactionBar reactions={item.reactions} />
            </div>

            <div className="mt-6">
                <PollCard
                    question={item.pollQuestion}
                    choices={item.pollChoices}
                    count={item.pollCount}
                />
            </div>

            <button
                type="button"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--brand-lime)] text-base font-semibold text-black"
            >
                <CommentIcon />
                ?? ????
            </button>
        </article>
    );
}

function BottomNav() {
    const items = [
        { label: '?', active: true, icon: <HomeIcon /> },
        { label: '??', icon: <GlobeIcon /> },
        { label: '???', icon: <SoundIcon /> },
        { label: '???', icon: <UserIcon /> },
        { label: '???', icon: <HelpIcon /> },
    ];

    return (
        <nav className="sticky bottom-0 flex h-[60px] items-center justify-between border-t border-[#E0E0E0] bg-white px-9">
            {items.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className={`grid place-items-center gap-1 text-[11px] ${item.active ? 'text-[var(--brand-soft)]' : 'text-black'}`}
                    aria-label={item.label}
                >
                    {item.icon}
                </button>
            ))}
        </nav>
    );
}

export function NewsHomeScreen() {
    return (
        <div className="relative min-h-screen bg-[var(--brand-deep)]">
            <Header />
            <SearchFab />
            <section className="rounded-t-[20px] bg-[#f6f3fb] px-4 pb-6 pt-12 shadow-[0_-8px_30px_rgba(9,2,35,0.18)]">
                <div className="space-y-6">
                    {heroNews.map((item) => (
                        <NewsCard key={`${item.category}-${item.title}`} item={item} />
                    ))}
                </div>
            </section>
            <BottomNav />
        </div>
    );
}

function BellIcon() {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
            <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111111"
            strokeWidth="2"
        >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
        </svg>
    );
}

function ListIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M7 5h8M7 10h8M7 15h8" />
            <circle cx="4" cy="5" r="1" fill="currentColor" />
            <circle cx="4" cy="10" r="1" fill="currentColor" />
            <circle cx="4" cy="15" r="1" fill="currentColor" />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <rect x="3" y="3" width="5" height="5" rx="1" />
            <rect x="12" y="3" width="5" height="5" rx="1" />
            <rect x="3" y="12" width="5" height="5" rx="1" />
            <rect x="12" y="12" width="5" height="5" rx="1" />
        </svg>
    );
}

function HomeIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 4 9v10a1 1 0 0 0 1 1h4v-6h6v6h4a1 1 0 0 0 1-1V9z" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
    );
}

function SoundIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M11 5 6 9H3v6h3l5 4z" />
            <path d="M15 9a4 4 0 0 1 0 6" />
            <path d="M17.5 6.5a7.5 7.5 0 0 1 0 11" />
        </svg>
    );
}

function UserIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c1.5-3.5 4.3-5 8-5s6.5 1.5 8 5" />
        </svg>
    );
}

function HelpIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
    );
}

function ShareIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="18" cy="5" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="19" r="2" />
            <path d="m8 12 8-6M8 12l8 6" />
        </svg>
    );
}

function BookmarkIcon() {
    return (
        <svg
            width="20"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M6 4h12v16l-6-3-6 3z" />
        </svg>
    );
}

function CommentIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
        </svg>
    );
}
