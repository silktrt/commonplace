import { useState } from "react";

const RHYTHMS = [
  { icon: "✦", name: "Prayer" },
  { icon: "📖", name: "Reading" },
  { icon: "⛪", name: "Liturgy" },
  { icon: "🚶", name: "Exercise" },
  { icon: "🍽", name: "Family meal" },
  { icon: "🚪", name: "Hospitality" },
  { icon: "✏️", name: "Writing" },
  { icon: "🎵", name: "Music" },
  { icon: "🌙", name: "Rest" },
];

export default function RuleOfLife() {
  const [observed, setObserved] = useState({});

  function toggle(name) {
    setObserved((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  const count = Object.values(observed).filter(Boolean).length;

  return (
    <div>
      <div className="section">
        <p className="section-label">Today's Rhythms</p>
        <div className="card">
          <div className="rhythm-grid">
            {RHYTHMS.map((r) => (
              <div
                key={r.name}
                className={`rhythm-tile ${observed[r.name] ? "observed" : ""}`}
                onClick={() => toggle(r.name)}
                role="checkbox"
                aria-checked={!!observed[r.name]}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && toggle(r.name)}
              >
                <div className="rhythm-icon">{r.icon}</div>
                <div className="rhythm-name">{r.name}</div>
              </div>
            ))}
          </div>
          <p className="rhythm-note">
            {count === 0
              ? "These are not achievements but pilgrimages. Mark what was given to you today."
              : count < 4
              ? `${count} rhythm${count > 1 ? "s" : ""} observed. Not all those who wander are lost.`
              : `${count} rhythms observed today. "In the end it's only a passing thing, this shadow." — Samwise Gamgee`}
          </p>
        </div>
      </div>

      <div className="section">
        <p className="section-label">On the Rule</p>
        <div className="card">
          <p className="serif-text">
            A rule of life is not a productivity system. It is an ordering of the day toward
            the things that matter — toward God, toward family, toward the good, the true,
            and the beautiful. Benedict wrote his Rule for monks; we borrow its spirit for
            the household.
          </p>
          <p className="serif-text" style={{ marginTop: "0.75rem" }}>
            Mark each rhythm not as a task completed but as a grace received. On the days
            when nothing is marked, the rule has still done its work — you noticed the absence,
            and that noticing is itself a kind of prayer.
          </p>
        </div>
      </div>

      <div className="section">
        <p className="section-label">The Tolkien Note</p>
        <div className="lore-card">
          <p className="lore-label">On ordered life</p>
          <p className="lore-text">
            "I am in fact a Hobbit in all but size. I like gardens, tree-lined avenues,
            pipe-weed, good plain food, and I detest French cooking; I like, and even dare
            to wear in these dull days, ornamental waistcoats. I am fond of mushrooms
            (out of a field); have a very simple sense of humour… I go to bed late and get
            up late (when possible). I do not travel much."
          </p>
          <p className="source-line">J.R.R. Tolkien · letter to Deborah Webster, 1958</p>
        </div>
      </div>
    </div>
  );
}
