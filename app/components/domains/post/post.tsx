import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";
import { Tip } from "./components";

type ImageEyecatch = {
  src: string;
  emoji?: undefined;
};

type EmojiEyecatch = {
  src?: undefined;
  alt?: undefined;
  emoji: string;
};

type Props = {
  title: string;
  publishedAt: Date;
  children: ReactNode;
} & (ImageEyecatch | EmojiEyecatch);

const components = {
  Tip: Tip,
};

export const Post = ({ title, publishedAt, children, src, emoji }: Props) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{publishedAt.toDateString()}</p>
      <MDXProvider components={components}>{children}</MDXProvider>
    </article>
  );
};
