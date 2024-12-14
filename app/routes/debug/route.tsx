import { Post } from "~/components/domains";
import type { Route } from "./+types/route";
import SampleMDX from "./sample.mdx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Debug" },
    { name: "description", content: "This is a debug page." },
  ];
}

export default function View() {
  return (
    <Post
      title="これはデバッグ用のページです"
      emoji="🐝"
      publishedAt={new Date()}
    >
      <SampleMDX />
    </Post>
  );
}
