export type Reaction = {
  label: string;
  count: number;
  tone: "positive" | "negative" | "neutral";
};

export type PollChoice = {
  label: string;
  selected?: boolean;
};

export type NewsCard = {
  category: string;
  categoryTone: "neutral" | "orange" | "brown";
  title: string;
  publishedAt: string;
  summary: string[];
  publisher: string;
  reporter: string;
  reactions: Reaction[];
  pollQuestion: string;
  pollChoices: PollChoice[];
  pollCount: number;
};
