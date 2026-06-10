const PROMPTS = [
  { q: "Tolkien said myth was the only way to communicate certain truths. Was he right — and if so, what does that mean for how we read Scripture?", tags: "Theology · Myth · Tolkien" },
  { q: "The LCMS holds to the one-year lectionary. Is there something spiritually different about hearing the same texts every year rather than always encountering something new?", tags: "Liturgy · Lutheran tradition" },
  { q: "Was Beowulf written by a Christian who admired the old heroic world, or a pagan poem that monks preserved because they found something in it worth keeping?", tags: "Literature · Old English · Christianity" },
  { q: "What is the difference between nostalgia and love for a true home? Tolkien called it Sehnsucht — is that a Christian longing or a pagan one?", tags: "Philosophy · Tolkien · Joy" },
  { q: "Why did Tolkien distrust allegory, and was he right to? What is the difference between allegory and applicability?", tags: "Literature · Tolkien · Interpretation" },
  { q: "Malcolm Guite argues that the imagination is an organ of truth, not merely a faculty of invention. Does that change how you read a poem or a novel?", tags: "Poetics · Guite · Imagination" },
  { q: "Is beauty a theological category? If God is beautiful, what does that mean for art, music, and architecture — including church architecture?", tags: "Theology · Aesthetics · Worship" },
  { q: "What is a good death? What did the ancient and medieval Christian traditions know about dying that we have mostly forgotten?", tags: "Philosophy · Death · Christian tradition" },
  { q: "Luther said the Christian life is one of perpetual repentance. Is that a burden or a freedom — or both?", tags: "Lutheran theology · Law and Gospel" },
  { q: "Hospitality is a command, not a suggestion. What does it require of us that comfort does not?", tags: "Christian life · Household · Virtue" },
  { q: "Is there a difference between a fairy story and a parable? What did Tolkien mean when he said the Gospel was the greatest fairy story — and it was true?", tags: "Tolkien · Eucatastrophe · Gospel" },
  { q: "What would it mean for a household to have a culture — its own books, music, traditions, rhythms — rather than simply borrowing one from the surrounding world?", tags: "Household · Formation · Culture" },
];

export default function Discussion() {
  return (
    <div>
      <div className="section">
        <p className="section-label">Questions for a long evening</p>
        <p className="serif-text" style={{ marginBottom: "1.25rem", color: "var(--ink-faint)" }}>
          These are made for conversation around a table, not argument on a screen. Take one at a time. Linger.
        </p>
        {PROMPTS.map((p, i) => (
          <div className="prompt-card" key={i}>
            <p className="prompt-q">{p.q}</p>
            <p className="prompt-meta">{p.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
