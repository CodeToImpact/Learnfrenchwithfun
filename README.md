# 🇫🇷 Learning French with Fun

A complete, self-contained **A1 French course** with an embedded **Verb Gym** (flashcards, quizzes, grammar patterns) — built from real classroom notes for daily revision. No frameworks, no build step, no dependencies. Open `index.html` and learn.

![status](https://img.shields.io/badge/level-A1-2c5aa0) ![built with](https://img.shields.io/badge/built%20with-HTML%20%2B%20CSS%20%2B%20JS-d14d4d)

---

## ✨ What's inside

### 📘 The Course — 9 progressive units
Every topic from the notes, organised beginner → advanced, with plain-English explanations, example sentences, tips, rules, and an end-of-unit self-check quiz.

| # | Unit | Covers |
|---|------|--------|
| 1 | 👋 Greetings & First Words | hello, politeness, introductions, languages, goodbyes |
| 2 | 🧱 The Foundations | pronouns, être & avoir, alphabet, numbers, days, articles |
| 3 | 👨‍👩‍👧 People, Family & Describing | possessives, nationalities, professions, adjectives, colours, clothes |
| 4 | ⚙️ Verbs & Sentence Building | -ER verbs, negation, *mais*, questions, *quel* |
| 5 | 🏃 Daily Life & Activities | faire, jouer, aller, transport, places, prepositions, city description |
| 6 | 🕐 Time, Meals & Going Out | telling time, meals, sortir/voir/venir, outings |
| 7 | 💪 Wishes, Abilities & Commands | pouvoir/vouloir/devoir, *il faut*, imperative, *tout*, opinions |
| 8 | ✉️ Writing — Letters & Invitations | letter format, invitation/acceptance/refusal, *chez* |
| 9 | 🔤 Sounds, Accents & Punctuation | the 5 accents, pronunciation, punctuation, question revision |

### 🏋️ The Verb Gym — 4 practice modes
All 50 verbs from the course, four ways:
- **📋 Reference** — searchable, filterable conjugation tables
- **🃏 Flashcards** — tap-to-reveal, "Got it / Still learning", score + progress
- **✏️ Quiz** — 10 random multiple-choice questions with instant feedback and a grade
- **💡 Patterns** — 10 grammar patterns explained with examples

---

## 📁 Project structure

```
learnfrenchwithfun/
├── index.html            ← entry point
├── README.md
├── .gitignore
├── css/
│   └── style.css         ← one warm paper-and-tricolore theme for everything
└── js/
    ├── course-data.js    ← the 9-unit course content
    ├── verbs-data.js     ← 50 verbs + 10 grammar patterns
    ├── course.js         ← renders the course
    ├── verbs.js          ← renders the Verb Gym
    └── app.js            ← navigation, search, boot
```

---

## 🚀 Run it

Just open the file:
```bash
open index.html
```

Or serve locally:
```bash
python -m http.server 3000   # then visit http://localhost:3000
# or
npx serve .
```

---

## 🌐 Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Choose `main` branch, `/ (root)` folder, **Save**.
4. Your app goes live at `https://<username>.github.io/learnfrenchwithfun/`.

---

## 🗺️ Roadmap

- [ ] Save progress with `localStorage`
- [ ] Listening mode (Web Speech API for pronunciation)
- [ ] More tenses (passé composé, futur proche)
- [ ] Vocabulary flashcards (numbers, family, colours, clothes)
- [ ] Light / dark theme toggle

---

*Built with plain HTML, CSS, and vanilla JavaScript. Source content from a real A1 French class.*
