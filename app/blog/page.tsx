import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UmrahCheck Blog - Spartipps und Ratgeber für deine Umrah-Reise",
  description:
    "Entdecke echte Spartipps, ehrliche Preisanalysen und praktische Ratgeber für deine Umrah-Reise. Von praktizierenden Muslimen für Muslime – transparent und ohne versteckte Verkaufsabsichten.",
  alternates: {
    canonical: "https://umrahcheck.de/blog",
  },
  openGraph: {
    title: "UmrahCheck Blog",
    description:
      "Spartipps, Preisanalysen und Praxis-Guides rund um die Umrah – ehrlich & transparent.",
    url: "https://umrahcheck.de/blog",
    siteName: "UmrahCheck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmrahCheck Blog",
    description:
      "Spartipps, Preisanalysen und Praxis-Guides rund um die Umrah – ehrlich & transparent.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            UmrahCheck Blog
          </h1>
          <p className="mt-3 text-white/90">
            Spartipps, Preisanalysen &amp; ehrliche Ratgeber für deine Umrah.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <ul className="grid gap-6 sm:grid-cols-2">
          <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Warum Umrah-Reisen so teuer geworden sind</h2>
            <p className="mt-2 text-sm text-black/70">
              Die Kosten für Umrah-Reisen sind drastisch gestiegen. Erfahre die wahren Gründe und wie du trotzdem bis zu 2.000€ sparen kannst.
            </p>
            <Link
              href="/blog/umrah-preise-sparen"
              className="mt-3 inline-flex text-[--midnight] underline underline-offset-4"
            >
              Weiterlesen
            </Link>
          </li>

          <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Weitere Artikel kommen bald</h2>
            <p className="mt-2 text-sm text-black/70">
              Wir arbeiten an weiteren hilfreichen Artikeln rund um Umrah-Planung, Kosteneinsparungen und spirituelle Vorbereitung.
            </p>
            <Link
              href="/ki-analyse"
              className="mt-3 inline-flex text-[--midnight] underline underline-offset-4"
            >
              KI-Analyse starten
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}