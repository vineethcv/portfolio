'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenText, Code2, Github, Globe, Mail, Pencil,
  ServerCog, ShieldCheck, TerminalSquare
} from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"projects" | "writing">("projects");

  const projects = [
    { title: "Playwright E2E + GitHub Actions", summary: "...", tags: ["QA", "E2E", "CI/CD"], link: "/projects/playwright-github-actions" },
    {
      title: "API Test Generator from Swagger",
      summary:
        "Generates contract + happy-path tests directly from OpenAPI, plugs into k6 for perf smoke.",
      tags: ["Automation", "OpenAPI", "Python"],
      link: "#",
    },
    {
      title: "Selenium → Playwright Migration",
      summary:
        "Design notes + code mods that cut flake by 70% and runtime by 55%.",
      tags: ["Migration", "Playwright", "DevEx"],
      link: "#",
    },
  ];

  const posts = [
    { title: "Keeping a Test Suite Healthy as Code Evolves", blurb: "...", link: "/writing/keeping-test-suites-healthy" },
    {
      title: "Notes on FastAPI + Pydantic Settings",
      blurb:
        "Type-safe configs, 12-factor envs, and why your defaults matter.",
      link: "#",
    },
    {
      title: "On Writing: Short Pieces, Sharp Edges",
      blurb:
        "A tiny essay on finding the shape of a story in 600 words.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <TerminalSquare className="w-5 h-5" />
            <span>Vineeth C. Vijayan</span>
            <span className="text-neutral-400 text-sm">· QA / DevOps</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#writing" className="hover:text-white">Writing</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              Building reliable software through <span className="text-white">tests, tooling</span> &
              <span className="text-white"> calm CI/CD</span>
            </motion.h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Senior QA / DevOps engineer. I design test architecture, migrate teams to modern automation, and
              wire quality into release pipelines. I also write short stories and technical essays.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10"
                href="#projects"
              >
                <span className="inline-flex items-center gap-2"><Code2 className="w-4 h-4" />See projects</span>
              </a>
              <a
                className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10"
                href="#writing"
              >
                <span className="inline-flex items-center gap-2"><Pencil className="w-4 h-4" />Read writing</span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-neutral-400">
              <a className="hover:text-white inline-flex items-center gap-2" href="#" title="GitHub">
                <Github className="w-4 h-4" />GitHub
              </a>
              <a className="hover:text-white inline-flex items-center gap-2" href="#" title="Blog">
                <Globe className="w-4 h-4" />Blog
              </a>
              <a className="hover:text-white inline-flex items-center gap-2" href="#contact" title="Email">
                <Mail className="w-4 h-4" />Contact
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, label: "Flake ↓ 70%" },
                { icon: <ServerCog className="w-5 h-5" />, label: "CI minutes ↓ 40%" },
                { icon: <Code2 className="w-5 h-5" />, label: "Playwright, k6" },
                { icon: <BookOpenText className="w-5 h-5" />, label: "Short stories" },
              ].map((kpi, i) => (
                <div key={i} className="rounded-2xl border border-neutral-800 p-4">
                  <div className="text-neutral-300 text-sm flex items-center gap-2">{kpi.icon}{kpi.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Recent highlights: migrated Selenium → Playwright, added shard-aware reporters, and introduced OpenAPI-driven API tests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Switcher */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="inline-flex rounded-2xl border border-neutral-800 p-1 bg-neutral-900" role="tablist">
          {[
            { id: "projects", label: "Projects" },
            { id: "writing", label: "Writing" },
          ].map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id as any)}
              className={`px-4 py-2 rounded-xl text-sm ${activeTab === id ? "bg-white/10 text-white" : "text-neutral-300 hover:text-white"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                href={p.link}
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-neutral-800 p-5 hover:border-neutral-700 bg-neutral-950"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-neutral-300 rounded-full border border-neutral-800 px-2 py-1">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-6xl px-4 py-10">
        {activeTab === "writing" && (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <motion.a
                href={p.link}
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-neutral-800 p-5 hover:border-700 bg-neutral-950"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
              </motion.a>
            ))}
          </div>
        )}
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-800 p-6 md:p-10 bg-neutral-950">
          <h2 className="text-xl md:text-2xl font-semibold">About</h2>
          <p className="mt-3 text-neutral-300 max-w-prose">
            I’ve spent 13+ years in QA across .NET, JavaScript, and Python ecosystems. I like clean interfaces, fast feedback loops,
            and pragmatic automation. Outside work, I write short stories and essays.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-neutral-800 p-6 md:p-10 bg-neutral-950">
          <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-neutral-300">
            Say hi at <a className="underline hover:text-white" href="mailto:vineethcvijayan@example.com">vineethcvijayan@example.com</a>.
          </p>
        </div>
        <footer className="mt-10 text-center text-sm text-neutral-500 pb-10">
          © {new Date().getFullYear()} Vineeth C. Vijayan
        </footer>
      </section>
    </div>
  );
}