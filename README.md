import { useState } from "react";
import { TODAY } from "../data/liturgical";

export default function DailyPage() {
  const [checkedIntentions, setCheckedIntentions] = useState({});
  const d = TODAY;

  function toggleIntention(i) {
    setCheckedIntentions((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  return (
    <div>
      {/* Liturgical Day */}
      <div className="section">
        <p className="section-label">Liturgical Day</p>
        <div className="liturgy-banner">
          <div className="liturgy-bar" style={{ background: d.color }} />
          <div className="liturgy-body">
            <p className="liturgy-main">{d.liturgicalName}</p>
            <p className="liturgy-sub">{d.seasonName}</p>
            <p className="liturgy-propers">{d.propers}</p>
          </div>
        </div>
      </div>

      {/* Morning Prayer */}
      <div className="section">
        <p className="section-label">Morning Prayer</p>
        <div className="card">
          <p className="serif-text">{d.morningPrayer.text}</p>
          <p className="source-line">{d.morningPrayer.source}</p>
        </div>
      </div>

      {/* Collect */}
      <div className="section">
        <p className="section-label">Collect of the Day</p>
        <div className="card">
          <p className="collect-text">{d.collect.text}</p>
          <p className="collect-amen">{d.collect.conclusion}</p>
          <p className="source-line">{d.collect.source}</p>
        </div>
      </div>

      {/* Psalm */}
      <div className="section">
        <p className="section-label">Psalm of the Day</p>
        <div className="card">
          <div className="psalm-header">
            <span className="psalm-title">{d.psalm.title}</span>
            <span className="psalm-subtitle">{d.psalm.subtitle}</span>
          </div>
          {d.psalm.verses.map((v) => (
            <div className="psalm-verse" key={v.num}>
              <span className="psalm-num">{v.num}</span>
              <span className="psalm-line">
                {v.text.map((segment, i) =>
                  segment === "LORD"
                    ? <span className="psalm-lord" key={i}>Lord</span>
                    : <span key={i}>{segment}</span>
                )}
              </span>
            </div>
          ))}
          {d.psalm.gloria && (
            <p className="psalm-gloria">
              Glory be to the Father and to the Son and to the Holy Spirit; as it was in the beginning, is now, and will be forever. Amen.
            </p>
          )}
          <p className="source-line" style={{ marginTop: "0.5rem" }}>{d.psalm.source}</p>
        </div>
      </div>

      {/* Scripture — Gospel */}
      <div className="section">
        <p className="section-label">Holy Gospel</p>
        <div className="card">
          <p className="ref-line">{d.scripture.reference} · {d.scripture.heading}</p>
          <p className="serif-text-primary">{d.scripture.text}</p>
          <p className="source-line">{d.scripture.version}</p>
        </div>
      </div>

      {/* Scripture — Epistle */}
      <div className="section">
        <p className="section-label">Epistle</p>
        <div className="card">
          <p className="ref-line">{d.epistle.reference} · {d.epistle.heading}</p>
          <p className="serif-text-primary">{d.epistle.text}</p>
          <p className="source-line">{d.epistle.version}</p>
        </div>
      </div>

      {/* Commemoration */}
      <div className="section">
        <p className="section-label">Commemoration</p>
        <div className="card">
          <div className="saint-row">
            <div className="saint-glyph">{d.commemoration.glyph}</div>
            <div>
              <p className="saint-dates">{d.commemoration.calendarNote}</p>
              <p className="saint-name">{d.commemoration.name}</p>
              <p className="saint-desc">{d.commemoration.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Malcolm Guite Poem */}
      <div className="section">
        <p className="section-label">Daily Poem</p>
        <div className="card">
          <p className="poem-title">{d.poem.title}</p>
          <p className="poem-lines">{d.poem.lines}</p>
          <p className="poem-author">
            {d.poem.author} · <em>{d.poem.collection}</em>
          </p>
          {d.poem.note && (
            <p className="source-line" style={{ marginTop: "0.5rem" }}>{d.poem.note}</p>
          )}
        </div>
      </div>

      {/* Tolkien passage */}
      <div className="section">
        <p className="section-label">From the Legendarium</p>
        <div className="lore-card">
          <p className="lore-label">{d.tolkienPassage.label}</p>
          <p className="lore-text">{d.tolkienPassage.text}</p>
          <p className="source-line">{d.tolkienPassage.source}</p>
        </div>
      </div>

      {/* Quotation */}
      <div className="section">
        <p className="section-label">Daily Quotation</p>
        <div className="card">
          <p className="quote-text">{d.quotation.text}</p>
          <p className="quote-source">{d.quotation.source}</p>
        </div>
      </div>

      {/* Intentions */}
      <div className="section">
        <p className="section-label">Today's Intentions</p>
        <div className="card">
          <ul className="intentions-list">
            {d.intentions.map((intention, i) => (
              <li className="intention-item" key={i}>
                <span
                  className={`check-ring ${checkedIntentions[i] ? "checked" : ""}`}
                  onClick={() => toggleIntention(i)}
                  role="checkbox"
                  aria-checked={!!checkedIntentions[i]}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === " " && toggleIntention(i)}
                />
                <span className={`intention-text ${checkedIntentions[i] ? "checked" : ""}`}>
                  {intention}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
