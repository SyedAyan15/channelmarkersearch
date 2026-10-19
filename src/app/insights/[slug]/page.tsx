import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CtaBand, DarkBanner } from "@/components/ui";
import { articles, getArticle } from "@/lib/insights";
import { formatDate } from "@/lib/jobs";

// Every slug is prerendered from local data, so this page renders its params directly
// rather than streaming them in behind a Suspense boundary.
export const instant = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const more = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <DarkBanner
        top={
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>
        }
        label={article.category}
        title={article.title}
        intro={`${formatDate(article.date)} · ${article.readTime}`}
      />

      <article className="container-x py-14 md:py-16">
        <div className="prose-article mx-auto max-w-2xl text-[1.05rem]">
          <p className="!text-xl !text-ink">{article.excerpt}</p>
          {article.body.map((block, i) => (
            <div key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {block.bullets && (
                <ul>
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-line pt-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-body">More articles</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {more.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="rounded-xl border border-line p-5 hover:border-navy/40"
              >
                <p className="text-sm text-navy">{a.category}</p>
                <p className="mt-1 font-semibold text-ink">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
