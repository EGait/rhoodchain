"use client";

// components/HeroChat.tsx
// A front-and-center "ask anything" bar for your homepage hero.
// Drop <HeroChat /> into your hero (e.g. app/page.tsx). It calls the same
// /api/chat route — feed-grounded, with web-search fail-safe.

import { useEffect, useRef, useState } from "react";
import { CHAT_MODELS, DEFAULT_MODEL_KEY } from "../lib/models";

const API_URL = "/api/chat";

// Starter prompts — tuned to what RhoodChain actually covers.
const SUGGESTIONS = [
  "What's trending on Robinhood Chain today?",
  "What are stock-paired memecoins?",
  "What can I do on RhoodChain?",
];

type Msg = {
  role: "user" | "assistant" | "error";
  content: string;
  sources?: { title: string; url: string }[];
  model?: string;
};

// Handles Markdown links [label](url), bare URLs, and internal paths like /lsts.
// All links open in a new tab so the conversation stays put.
function renderContent(text: string) {
  const regex =
    /(\[[^\]]+\]\([^)]+\))|(https?:\/\/[^\s)]+)|(\/[a-zA-Z][a-zA-Z0-9-]*(?:\/[a-zA-Z0-9-]+)*)/g;
  return text
    .split(regex)
    .filter(Boolean)
    .map((part, i) => {
      const md = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (md) {
        return (
          <a key={i} href={md[2]} target="_blank" rel="noopener noreferrer" className="hc-link">
            {md[1]}
          </a>
        );
      }
      if (/^https?:\/\//.test(part)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="hc-link">
            {part}
          </a>
        );
      }
      if (/^\/[a-zA-Z]/.test(part)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="hc-link">
            {part}
          </a>
        );
      }
      return part;
    });
}

export default function HeroChat({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<string>(DEFAULT_MODEL_KEY);
  const [mounted, setMounted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Skip server rendering so the scoped styles are always in place before the
  // component paints (prevents a flash of unstyled content on first load).
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Only nudge into view when the user just sent a message, and keep it within
    // the thread ("nearest") so it doesn't yank the whole page down.
    if (messages.length && messages[messages.length - 1].role === "user") {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, loading]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;

    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const history = next.filter((m) => m.role !== "error");
      while (history.length && history[0].role === "assistant") history.shift();

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
          model,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply, sources: data.sources, model: data.model },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        { role: "error", content: "Couldn't reach the assistant — try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <section className="hc-wrap">
      {!compact && (
        <>
          <h1 className="hc-title">
            Ask the <span className="hc-grad">Robinhood Chain feed</span> anything
          </h1>
          <p className="hc-sub">Live news, projects, and DeFi — answered in plain English.</p>
        </>
      )}

      <div className="hc-toprow">
        <span className="hc-ailabel">✦ AI assistant</span>
        <select
          className="hc-model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          aria-label="Choose model"
        >
          {CHAT_MODELS.map((m) => (
            <option key={m.key} value={m.key}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      <div className="hc-bar">
        <input
          className="hc-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask(input)}
          placeholder="e.g. what's new on Robinhood Chain this week?"
          aria-label="Ask the feed"
        />
        <button className="hc-ask" onClick={() => ask(input)} disabled={loading || !input.trim()}>
          {loading ? "…" : "Ask"}
        </button>
      </div>

      <div className="hc-chips">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="hc-chip" onClick={() => ask(s)}>
            {s}
          </button>
        ))}
      </div>

      {messages.length > 0 && (
        <div className="hc-thread">
          {messages.map((m, i) => (
            <div key={i} className={`hc-msg hc-${m.role}`}>
              <div className="hc-bubble">{renderContent(m.content)}</div>
              {m.role === "assistant" && m.model && (
                <div className="hc-answeredby">answered by {m.model}</div>
              )}
              {m.sources && m.sources.length > 0 && (
                <div className="hc-sources">
                  <span className="hc-srclabel">From the web:</span>
                  {m.sources.map((s, j) => (
                    <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" className="hc-src">
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {loading && <div className="hc-msg hc-assistant"><div className="hc-bubble hc-dots">Thinking…</div></div>}
          <div ref={endRef} />
        </div>
      )}

      <style jsx>{`
        .hc-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 8px 16px;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #e2f5e6;
        }
        .hc-title {
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .hc-grad {
          background: linear-gradient(135deg, #15803D, #22c55e);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hc-sub { color: #8b9c8f; font-size: 16px; margin: 0 0 24px; }

        .hc-ailabel {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(34,197,94, 0.75);
        }
        .hc-toprow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .hc-model {
          background: rgba(34,197,94, 0.08);
          color: #86EFAC;
          border: 1px solid rgba(34,197,94, 0.3);
          border-radius: 8px;
          padding: 5px 8px;
          font-size: 12px;
          font-family: inherit;
          cursor: pointer;
        }
        .hc-model:focus { outline: none; border-color: #22c55e; }
        .hc-model option {
          background: #161e16;
          color: #e2f5e6;
        }

        .hc-bar {
          display: flex;
          gap: 8px;
          padding: 6px;
          background: rgba(18, 18, 24, 0.9);
          border: 1px solid rgba(34,197,94, 0.25);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        .hc-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e2f5e6;
          font: inherit;
          font-size: 16px;
          padding: 12px 14px;
        }
        .hc-input::placeholder { color: #6b7a6d; }
        .hc-ask {
          border: none;
          border-radius: 11px;
          padding: 0 22px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          color: #08100c;
          background: #22c55e;
          min-width: 64px;
        }
        .hc-ask:hover:not(:disabled) { background: #15803D; }
        .hc-ask:disabled { opacity: 0.5; cursor: default; }

        .hc-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }
        .hc-chip {
          background: rgba(34,197,94, 0.08);
          border: 1px solid rgba(34,197,94, 0.3);
          color: #22c55e;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .hc-chip:hover { border-color: #22c55e; background: rgba(34,197,94, 0.16); }

        .hc-thread {
          margin-top: 22px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .hc-msg { display: flex; flex-direction: column; gap: 6px; }
        .hc-user { align-items: flex-end; }
        .hc-assistant, .hc-error { align-items: flex-start; }
        .hc-bubble {
          max-width: 88%;
          padding: 12px 15px;
          border-radius: 14px;
          font-size: 15px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .hc-user .hc-bubble {
          background: #22c55e;
          color: #08100c;
          font-weight: 500;
        }
        .hc-assistant .hc-bubble {
          background: #161e16;
          border: 1px solid rgba(34,197,94, 0.15);
        }
        .hc-error .hc-bubble { background: #3a1a20; color: #ffb4b4; }
        .hc-dots { color: #8b9c8f; }
        .hc-answeredby {
          font-size: 11px;
          color: #6b7a6d;
          letter-spacing: 0.02em;
        }
        .hc-link {
          color: #86EFAC;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .hc-user .hc-link { color: #08100c; }

        .hc-sources { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
        .hc-srclabel { font-size: 11px; color: #6b7a6d; }
        .hc-src {
          font-size: 12px;
          color: #86EFAC;
          text-decoration: none;
          background: #121912;
          border: 1px solid rgba(34,197,94, 0.2);
          border-radius: 999px;
          padding: 3px 10px;
          max-width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hc-src:hover { border-color: #22c55e; }

        @media (prefers-reduced-motion: reduce) {
          .hc-chip { transition: none; }
        }
      `}</style>
    </section>
  );
}