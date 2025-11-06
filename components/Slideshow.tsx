"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

export type Slide = {
  title: string;
  subtitle?: string;
  bullets?: string[];
  leftColumn?: React.ReactNode;
  rightColumn?: React.ReactNode;
  footer?: string;
  hero?: { title: string; blurb: string };
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback((delta: number) => {
    setIndex((i) => Math.max(0, Math.min(count - 1, i + delta)));
  }, [count]);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key.toLowerCase() === "l") go(1);
    if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key.toLowerCase() === "h") go(-1);
    if (e.key === "Home") setIndex(0);
    if (e.key === "End") setIndex(count - 1);
  }, [go, count]);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const current = slides[index];

  const progress = useMemo(() => ((index + 1) / count) * 100, [index, count]);

  return (
    <main className="deck">
      <section className="slide" aria-roledescription="slide" aria-label={`${index + 1} of ${count}`}>
        <header>
          <h1>{current.title}</h1>
          {current.subtitle && <div className="subtitle">{current.subtitle}</div>}
        </header>

        <div className="content">
          {current.hero ? (
            <div className="hero">
              <h1>{current.hero.title}</h1>
              <p>{current.hero.blurb}</p>
            </div>
          ) : current.leftColumn || current.rightColumn ? (
            <div className="grid2">
              <div className="card">{current.leftColumn}</div>
              <div className="card">{current.rightColumn}</div>
            </div>
          ) : current.bullets ? (
            <div className="card"><BulletList items={current.bullets} /></div>
          ) : null}
        </div>

        <footer className="footer">
          <div>{current.footer ?? ""}</div>
          <div className="controls">
            <button className="button" onClick={() => setIndex(0)}>? Start</button>
            <button className="button" onClick={() => go(-1)} disabled={index === 0}>? Prev</button>
            <div className="small" style={{padding: "8px 6px", minWidth: 90, textAlign: "center"}}>
              {index + 1} / {count}
            </div>
            <button className="button" onClick={() => go(1)} disabled={index === count - 1}>Next ?</button>
          </div>
        </footer>
      </section>

      <div style={{ width: "min(1200px, 92vw)", height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 9999, overflow: "hidden", marginTop: 10 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }} />
      </div>
    </main>
  );
}
