@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500&display=swap');

/* ── Tokens ────────────────────────────────────────────── */
:root {
  --ink:        #1C1917;
  --ink-mid:    #44403C;
  --ink-faint:  #78716C;
  --ink-ghost:  #A8A29E;
  --parchment:  #F7F3EC;
  --parchment2: #EDE8DF;
  --parchment3: #E2DBD0;
  --gold:       #B07D3A;
  --gold-light: #D4A853;
  --violet:     #4A3E8C;
  --violet-lt:  #6B5FBF;
  --green-lit:  #1D6B4F;
  --border:     rgba(28,25,23,0.12);
  --border-lt:  rgba(28,25,23,0.07);

  --font-serif:   'EB Garamond', 'Crimson Pro', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --max-width: 600px;
}

/* ── Reset ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; -webkit-text-size-adjust: 100%; }
body {
  background: var(--parchment);
  color: var(--ink);
  font-family: var(--font-body);
  min-height: 100vh;
  line-height: 1.5;
}

/* ── App shell ─────────────────────────────────────────── */
.app-shell {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 4rem;
}

/* ── Header ────────────────────────────────────────────── */
.app-header {
  padding: 2rem 1.25rem 0;
  text-align: center;
}
.header-date {
  font-family: var(--font-body);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-ghost);
  margin-bottom: 0.2rem;
}
.header-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.header-sub {
  font-family: var(--font-serif);
  font-size: 0.85rem;
  color: var(--ink-ghost);
  font-style: italic;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
}
.header-rule {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0 -1.25rem;
  position: relative;
}
.header-rule::after {
  content: '✦';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--parchment);
  padding: 0 0.75rem;
  color: var(--gold);
  font-size: 0.7rem;
}

/* ── Tab nav ───────────────────────────────────────────── */
.tab-nav {
  display: flex;
  gap: 0;
  overflow-x: auto;
  padding: 0 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
  scrollbar-width: none;
  border-bottom: 1px solid var(--border);
}
.tab-nav::-webkit-scrollbar { display: none; }
.tab-btn {
  flex-shrink: 0;
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  padding: 0.5rem 0.85rem;
  background: none;
  border: none;
  color: var(--ink-faint);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.15s, border-color 0.15s;
}
.tab-btn:hover { color: var(--ink-mid); }
.tab-btn.active {
  color: var(--ink);
  border-bottom-color: var(--gold);
  font-weight: 500;
}

/* ── Main content ──────────────────────────────────────── */
.app-main {
  padding: 0 1.25rem;
}

/* ── Section ───────────────────────────────────────────── */
.section {
  margin-bottom: 2rem;
}
.section-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-ghost);
  margin-bottom: 0.6rem;
  font-family: var(--font-body);
}

/* ── Cards ─────────────────────────────────────────────── */
.card {
  background: #FDFAF5;
  border: 1px solid var(--border-lt);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  box-shadow: 0 1px 3px rgba(28,25,23,0.05);
}

/* ── Liturgical banner ─────────────────────────────────── */
.liturgy-banner {
  display: flex;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-lt);
  box-shadow: 0 1px 3px rgba(28,25,23,0.05);
}
.liturgy-bar { width: 7px; flex-shrink: 0; }
.liturgy-body {
  background: #FDFAF5;
  padding: 0.85rem 1rem;
  flex: 1;
}
.liturgy-main {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
}
.liturgy-sub {
  font-size: 0.8rem;
  color: var(--ink-mid);
  margin-top: 2px;
}
.liturgy-propers {
  font-size: 0.72rem;
  color: var(--ink-ghost);
  margin-top: 4px;
  font-style: italic;
  font-family: var(--font-serif);
}

/* ── Serif text blocks ─────────────────────────────────── */
.serif-text {
  font-family: var(--font-serif);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--ink-mid);
}
.serif-text-primary {
  font-family: var(--font-serif);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--ink);
}
.source-line {
  font-size: 0.7rem;
  color: var(--ink-ghost);
  margin-top: 0.5rem;
  font-style: italic;
  font-family: var(--font-serif);
}
.ref-line {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-ghost);
  margin-bottom: 0.4rem;
}

/* ── Psalm ─────────────────────────────────────────────── */
.psalm-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-lt);
}
.psalm-title { font-family: var(--font-serif); font-size: 1rem; font-weight: 600; color: var(--ink); }
.psalm-subtitle { font-size: 0.75rem; color: var(--ink-ghost); font-style: italic; font-family: var(--font-serif); }
.psalm-verse { display: flex; gap: 0.6rem; margin-bottom: 0.5rem; }
.psalm-num { font-size: 0.65rem; color: var(--gold); min-width: 1rem; padding-top: 0.3rem; font-weight: 600; letter-spacing: 0.04em; }
.psalm-line { font-family: var(--font-serif); font-size: 0.95rem; line-height: 1.8; color: var(--ink); }
.psalm-lord { font-variant: small-caps; font-size: 1em; }
.psalm-gloria {
  font-family: var(--font-serif);
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--ink-faint);
  font-style: italic;
  margin-top: 0.75rem;
  border-top: 1px solid var(--border-lt);
  padding-top: 0.75rem;
}

/* ── Collect ───────────────────────────────────────────── */
.collect-text {
  font-family: var(--font-serif);
  font-size: 1rem;
  line-height: 1.85;
  color: var(--ink);
}
.collect-amen {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--ink-mid);
  font-style: italic;
  margin-top: 0.4rem;
}

/* ── Saint ─────────────────────────────────────────────── */
.saint-row { display: flex; gap: 0.85rem; align-items: flex-start; }
.saint-glyph {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--parchment2);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--gold);
  font-size: 0.85rem;
}
.saint-name { font-size: 0.9rem; font-weight: 500; color: var(--ink); }
.saint-dates { font-size: 0.7rem; color: var(--ink-ghost); margin-bottom: 3px; }
.saint-desc { font-size: 0.82rem; color: var(--ink-mid); line-height: 1.55; }

/* ── Poetry ────────────────────────────────────────────── */
.poem-title { font-size: 0.78rem; font-weight: 500; color: var(--ink); letter-spacing: 0.03em; margin-bottom: 0.6rem; }
.poem-author { font-size: 0.7rem; color: var(--ink-ghost); margin-top: 0.5rem; font-style: italic; font-family: var(--font-serif); }
.poem-lines { font-family: var(--font-serif); font-size: 0.95rem; line-height: 1.9; color: var(--ink-mid); white-space: pre-line; }

/* ── Lore card (Tolkien) ───────────────────────────────── */
.lore-card {
  border-left: 3px solid var(--violet-lt);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 0.75rem 1rem;
  background: var(--parchment2);
}
.lore-label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--violet-lt);
  margin-bottom: 4px;
}
.lore-text {
  font-family: var(--font-serif);
  font-size: 0.93rem;
  line-height: 1.75;
  color: var(--ink-mid);
  font-style: italic;
}

/* ── Quotation ─────────────────────────────────────────── */
.quote-text {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--ink);
}
.quote-text::before { content: '\201C'; color: var(--gold); }
.quote-text::after  { content: '\201D'; color: var(--gold); }
.quote-source { font-size: 0.75rem; color: var(--ink-ghost); margin-top: 0.4rem; font-family: var(--font-serif); font-style: italic; }

/* ── Intentions / checklist ────────────────────────────── */
.intentions-list { list-style: none; }
.intention-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--border-lt);
  font-size: 0.88rem;
  color: var(--ink);
  line-height: 1.45;
}
.intention-item:last-child { border-bottom: none; }
.check-ring {
  width: 19px; height: 19px;
  border-radius: 50%;
  border: 1.5px solid var(--ink-ghost);
  flex-shrink: 0;
  cursor: pointer;
  margin-top: 1px;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, border-color 0.15s;
}
.check-ring.checked { background: var(--green-lit); border-color: var(--green-lit); }
.check-ring.checked::after {
  content: '';
  display: block;
  width: 5px; height: 9px;
  border: 1.5px solid white;
  border-top: none; border-left: none;
  transform: rotate(45deg) translate(-1px, -1px);
}
.intention-text.checked { text-decoration: line-through; color: var(--ink-ghost); }

/* ── Rule of life grid ─────────────────────────────────── */
.rhythm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.rhythm-tile {
  background: var(--parchment2);
  border: 1px solid var(--border-lt);
  border-radius: var(--radius-md);
  padding: 0.85rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.rhythm-tile.observed {
  border-color: var(--green-lit);
  background: #FDFAF5;
}
.rhythm-icon { font-size: 1.3rem; margin-bottom: 0.3rem; }
.rhythm-name { font-size: 0.7rem; color: var(--ink-mid); }
.rhythm-tile.observed .rhythm-name { color: var(--green-lit); }
.rhythm-note {
  font-family: var(--font-serif);
  font-size: 0.82rem;
  color: var(--ink-ghost);
  font-style: italic;
  margin-top: 1rem;
  line-height: 1.65;
  text-align: center;
}

/* ── Discussion prompts ────────────────────────────────── */
.prompt-card {
  border-left: 3px solid var(--violet-lt);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 0.75rem 1rem;
  background: var(--parchment2);
  margin-bottom: 0.85rem;
}
.prompt-q { font-family: var(--font-serif); font-size: 0.95rem; line-height: 1.65; color: var(--ink); }
.prompt-meta { font-size: 0.68rem; color: var(--ink-ghost); margin-top: 4px; letter-spacing: 0.06em; text-transform: uppercase; }

/* ── Commonplace entries ───────────────────────────────── */
.cp-entry {
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border-lt);
}
.cp-entry:last-child { border-bottom: none; }
.cp-type { font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
.cp-text { font-family: var(--font-serif); font-size: 0.93rem; line-height: 1.65; color: var(--ink); font-style: italic; }
.cp-source { font-size: 0.75rem; color: var(--ink-mid); margin-top: 4px; }

/* ── Reading Life ──────────────────────────────────────── */
.book-card {
  display: flex;
  gap: 0.85rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border-lt);
  align-items: flex-start;
}
.book-card:last-child { border-bottom: none; }
.book-spine {
  width: 32px; min-height: 48px;
  border-radius: 3px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem;
  color: white;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  letter-spacing: 0.05em;
  font-weight: 500;
  font-family: var(--font-body);
  padding: 6px 4px;
  text-align: center;
}
.book-title { font-size: 0.9rem; font-weight: 500; color: var(--ink); }
.book-author { font-size: 0.78rem; color: var(--ink-faint); margin-top: 1px; font-style: italic; font-family: var(--font-serif); }
.book-progress { font-size: 0.72rem; color: var(--ink-ghost); margin-top: 4px; }
.progress-bar { height: 3px; background: var(--parchment3); border-radius: 99px; margin-top: 5px; overflow: hidden; }
.progress-fill { height: 100%; background: var(--gold); border-radius: 99px; }

/* ── Poetry corner ─────────────────────────────────────── */
.memorization-card { padding: 1rem 1.25rem; }
.mem-progress {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin: 0.75rem 0;
}
.mem-word {
  font-family: var(--font-serif);
  font-size: 0.88rem;
  color: var(--ink-ghost);
  background: var(--parchment2);
  border-radius: var(--radius-sm);
  padding: 2px 6px;
  cursor: pointer;
}
.mem-word.learned { background: var(--green-lit); color: white; }
.mem-word.active { background: var(--gold); color: white; }

/* ── Utility ───────────────────────────────────────────── */
.ghost-btn {
  background: none;
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
  width: 100%;
  padding: 0.7rem;
  color: var(--ink-ghost);
  font-size: 0.82rem;
  cursor: pointer;
  font-family: var(--font-body);
  margin-top: 0.75rem;
  transition: border-color 0.15s, color 0.15s;
}
.ghost-btn:hover { border-color: var(--gold); color: var(--gold); }

em { font-style: italic; }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
