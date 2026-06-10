import { useState } from "react";

const INITIAL_ENTRIES = [
  {
    id: 1, type: "Passage · Tolkien",
    text: "All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost.",
    source: "The Fellowship of the Ring · Bilbo's verse for Aragorn",
    date: "June 2026",
  },
  {
    id: 2, type: "Collect · Luther",
    text: "God certainly gives daily bread to everyone without our prayers, even to all evil people, but we pray in this petition that God would lead us to realize this and to receive our daily bread with thanksgiving.",
    source: "Luther's Small Catechism · Fourth Petition",
    date: "June 2026",
  },
  {
    id: 3, type: "Poem · George Herbert",
    text: "Love bade me welcome: yet my soul drew back, guilty of dust and sin. But quick-eyed Love, observing me grow slack, drew nearer to me, sweetly questioning, if I lack'd any thing.",
    source: "George Herbert · Love (III), The Temple",
    date: "May 2026",
  },
  {
    id: 4, type: "Malcolm Guite",
    text: "Poetry is the art of recovering the salutary shock of wonder. And wonder, as Aristotle knew, is the beginning of philosophy — and also, as the Psalmist knew, of praise.",
    source: "Malcolm Guite · Faith, Hope and Poetry",
    date: "May 2026",
  },
  {
    id: 5, type: "Personal reflection",
    text: "The morning office takes twelve minutes. The whole day is different for it. I do not understand the mechanism but I no longer need to.",
    source: "Personal · June 2026",
    date: "June 2026",
  },
  {
    id: 6, type: "Sermon note",
    text: "The parable of the Great Banquet does not say the excuses were unreasonable. A field, oxen, a new wife — these are not sins. They are goods. And that is the point: lesser goods can crowd out the greatest Good.",
    source: "Trinity 2 · Notes",
    date: "June 2026",
  },
];

const TYPES = ["All", "Passage", "Poem", "Quotation", "Reflection", "Sermon note", "Collect"];

export default function Commonplace() {
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? entries
    : entries.filter((e) => e.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              fontSize: "0.72rem",
              padding: "0.3rem 0.7rem",
              borderRadius: "99px",
              border: "1px solid var(--border)",
              background: filter === t ? "var(--gold)" : "transparent",
              color: filter === t ? "white" : "var(--ink-faint)",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="section">
        <p className="section-label">
          {filter === "All" ? `${entries.length} entries` : `${filtered.length} ${filter.toLowerCase()} entries`}
        </p>
        <div className="card" style={{ padding: "0 1.25rem" }}>
          {filtered.map((entry) => (
            <div className="cp-entry" key={entry.id}>
              <p className="cp-type">{entry.type}</p>
              <p className="cp-text">{entry.text}</p>
              <p className="cp-source">{entry.source}</p>
            </div>
          ))}
        </div>
        <button className="ghost-btn">+ Add entry</button>
      </div>

      <div className="section">
        <p className="section-label">On the Commonplace Book</p>
        <div className="lore-card">
          <p className="lore-label">The practice</p>
          <p className="lore-text">
            Scholars for centuries kept notebooks of passages, quotations, and observations —
            not to show learning but to deepen it. Milton kept one. Locke wrote a method
            for indexing it. Tolkien filled notebooks with invented languages and mythologies.
            The commonplace book is not a scrapbook; it is a mind made visible.
          </p>
          <p className="source-line">After Ann Moss · Printed Commonplace Books and the Structuring of Renaissance Thought</p>
        </div>
      </div>
    </div>
  );
}
