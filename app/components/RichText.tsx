import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RichText({ content }: { readonly content: string }) {
  return (
    <section className="rich-text py-6">
      <Markdown children={content} remarkPlugins={[remarkGfm]} />
    </section>
  );
}