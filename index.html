import { useState } from "react";

const SPINE_COLORS = ["#4A3E8C", "#1D6B4F", "#8B3A3A", "#B07D3A", "#2C5F7A", "#5A4A2A"];

const INITIAL_READING = [
  {
    id: 1, title: "The Silmarillion", author: "J.R.R. Tolkien",
    status: "reading", progress: 42, total: 365, rating: null,
    color: "#4A3E8C", notes: "The Ainulindalë as theological document.",
  },
  {
    id: 2, title: "Faith, Hope and Poetry", author: "Malcolm Guite",
    status: "reading", progress: 88, total: 240, rating: null,
    color: "#1D6B4F", notes: "On the imagination as organ of truth.",
  },
  {
    id: 3, title: "The Divine Comedy", author: "Dante Alighieri",
    status: "reading", progress: 120, total: 798, rating: null,
    color: "#8B3A3A", notes: "Purgatorio — the mountain of the saved.",
  },
  {
    id: 4, title: "Beowulf", author: "trans. Seamus Heaney",
    status: "read", progress: 213, total: 213, rating: 5,
    color: "#5A4A2A", notes: "A hero who knows he is mortal. Christian scribe, pagan world.",
  },
  {
    id: 5, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky",
    status: "want", progress: 0, total: 796, rating: null,
    color: "#2C5F7A", notes: "",
  },
  {
    id: 6, title: "Till We Have Faces", author: "C.S. Lewis",
    status: "read", progress: 313, total: 313, rating: 5,
    color: "#B07D3A", notes: "The myth retold — the complaint against the gods answered.",
  },
];

const STATUS_LABELS = { reading: "Currently reading", read: "Finished", want: "Want to read" };
const STARS = [1, 2, 3, 4, 5];

export default function ReadingLife() {
  const [books, setBooks] = useState(INITIAL_READING);
  const [filter, setFilter] = useState("reading");

  const filtered = books.filter((b) => b.status === filter);

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {Object.entries(STATUS_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`tab-btn ${filter === key ? "active" : ""}`}
            onClick={() => setFilter(key)}
            style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0.35rem 0.85rem" }}
          >
            {label} ({books.filter((b) => b.status === key).length})
          </button>
        ))}
      </div>

      <div className="section">
        <p className="section-label">{STATUS_LABELS[filter]}</p>
        <div className="card" style={{ padding: "0 1.25rem" }}>
          {filtered.length === 0 && (
            <p className="serif-text" style={{ padding: "1rem 0", color: "var(--ink-ghost)" }}>
              Nothing here yet — add a book to begin.
            </p>
          )}
          {filtered.map((book) => (
            <div className="book-card" key={book.id}>
              <div
                className="book-spine"
                style={{ background: book.color }}
              >
                {book.title.split(" ").slice(0, 2).join(" ")}
              </div>
              <div style={{ flex: 1 }}>
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
                {book.status === "reading" && (
                  <>
                    <p className="book-progress">
                      p. {book.progress} of {book.total} · {Math.round((book.progress / book.total) * 100)}%
                    </p>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${(book.progress / book.total) * 100}%` }}
                      />
                    </div>
                  </>
                )}
                {book.status === "read" && book.rating && (
                  <p style={{ fontSize: "0.78rem", color: "var(--gold)", marginTop: "4px" }}>
                    {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
                  </p>
                )}
                {book.notes ? (
                  <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)", marginTop: "4px", fontStyle: "italic", fontFamily: "var(--font-serif)" }}>
                    {book.notes}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <button className="ghost-btn">+ Add book</button>
      </div>

      <div className="section">
        <p className="section-label">The Tolkien Reading List</p>
        <div className="lore-card">
          <p className="lore-label">Recommended</p>
          <p className="lore-text">
            Tolkien loved: Beowulf, the Elder Edda, the Finnish Kalevala, Sir Gawain and
            the Green Knight, Chaucer, George MacDonald, and William Morris. He read Old
            English and Old Norse for pleasure. A good library begins here.
          </p>
          <p className="source-line">After The Letters of J.R.R. Tolkien</p>
        </div>
      </div>
    </div>
  );
}
