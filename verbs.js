/**
 * verbs.js — the Verb Gym: Reference, Flashcards, Quiz, Patterns
 */
const gym = {
  tab:'ref',
  refFilter:'all', allExpanded:false,
  fcFilter:'all', fcDeck:[], fcIdx:0, fcRight:0, fcWrong:0, fcRevealed:false,
  qzFilter:'all', qzQ:[], qzIdx:0, qzScore:0, qzAnswered:false,
  patternsRendered:false,
};

function renderGym(){
  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="unit-head">
      <span class="unit-eyebrow gym">🏋️ Verb Gym</span>
      <h2>Practice Your Verbs</h2>
      <p class="unit-intro">All 50 verbs from the course, four ways: browse the tables, drill with flashcards, test yourself with a quiz, or study the grammar patterns.</p>
    </div>
    <div class="gym-tabs">
      <button class="gym-tab ${gym.tab==='ref'?'on':''}" onclick="setGymTab('ref')">📋 Reference</button>
      <button class="gym-tab ${gym.tab==='flash'?'on':''}" onclick="setGymTab('flash')">🃏 Flashcards</button>
      <button class="gym-tab ${gym.tab==='quiz'?'on':''}" onclick="setGymTab('quiz')">✏️ Quiz</button>
      <button class="gym-tab ${gym.tab==='pat'?'on':''}" onclick="setGymTab('pat')">💡 Patterns</button>
    </div>
    <div id="gymBody"></div>`;
  renderGymTab();
  window.scrollTo({top:0,behavior:'smooth'});
}

function setGymTab(t){ gym.tab=t; renderGym(); }

function filterChips(scope, active){
  const opts=[['all','All'],['etre','Être/Avoir'],['er','-ER'],['irreg','Irregular'],['modal','Modal']];
  return `<div class="chips">${opts.map(([f,l])=>`<button class="chip ${active===f?'on':''}" onclick="${scope}('${f}')">${l}</button>`).join('')}</div>`;
}

function renderGymTab(){
  const body=document.getElementById('gymBody');
  if(gym.tab==='ref') body.innerHTML=refHTML();
  if(gym.tab==='flash'){ if(!gym.fcDeck.length) buildDeck(); body.innerHTML=flashHTML(); }
  if(gym.tab==='quiz'){ if(!gym.qzQ.length) buildQuiz(); body.innerHTML=quizHTML(); }
  if(gym.tab==='pat') body.innerHTML=patternsHTML();
}

/* ---- REFERENCE ---- */
function refHTML(){
  const list=getFilteredVerbs(gym.refFilter,'');
  return `
    <div class="toolbar">
      <input class="tb-search" id="refSearch" placeholder="🔍 Search verb or meaning…" oninput="searchRef()">
      ${filterChips('setRefFilter',gym.refFilter)}
      <button class="expand-btn" onclick="toggleExpandAll()">${gym.allExpanded?'Collapse all':'Expand all'}</button>
      <span class="count">${list.length} verbs</span>
    </div>
    <div id="refGrid">${refCards(list)}</div>`;
}
function refCards(list){
  if(!list.length) return '<p class="explain" style="text-align:center;color:var(--ink-soft)">No verbs found.</p>';
  return list.map(v=>`
    <div class="vcard ${gym.allExpanded?'open':''}">
      <div class="vhead" onclick="this.parentElement.classList.toggle('open')">
        <div class="vhead-left"><span class="vname">${v.n}</span><span class="vmean">${v.m}</span></div>
        <div style="display:flex;align-items:center"><span class="vtag tag-${v.t}">${TAG_LABELS[v.t]}</span><span class="vchev">▼</span></div>
      </div>
      <div class="vtable-wrap"><table class="vtable"><tbody>
        ${v.r.map(([p,c])=>`<tr><td>${p}</td><td class="cf">${c}</td></tr>`).join('')}
      </tbody></table></div>
    </div>`).join('');
}
function setRefFilter(f){ gym.refFilter=f; gym.allExpanded=false; renderGymTab(); }
function searchRef(){
  const q=document.getElementById('refSearch').value;
  document.getElementById('refGrid').innerHTML=refCards(getFilteredVerbs(gym.refFilter,q));
}
function toggleExpandAll(){ gym.allExpanded=!gym.allExpanded; renderGymTab(); }

/* ---- FLASHCARDS ---- */
function buildDeck(){
  const pool=getFilteredVerbs(gym.fcFilter,'');
  gym.fcDeck=shuffle(pool.flatMap(v=>v.r.map(([p,c])=>({verb:v.n,meaning:v.m,pro:p,conj:c}))));
  gym.fcIdx=0;gym.fcRight=0;gym.fcWrong=0;gym.fcRevealed=false;
}
function flashHTML(){
  const total=gym.fcDeck.length, done=gym.fcRight+gym.fcWrong;
  const pct=Math.round(done/Math.max(1,total)*100);
  let card;
  if(gym.fcIdx>=total){
    const got=Math.round(gym.fcRight/Math.max(1,total)*100);
    card=`<div class="done-screen"><div style="font-size:2.4rem">🎉</div><h3>Deck complete!</h3>
      <p>You got <strong style="color:var(--green)">${gym.fcRight}</strong> of ${total} (${got}%)</p>
      <button class="big-btn" onclick="restartDeck()">↺ Shuffle & restart</button></div>`;
  } else {
    const c=gym.fcDeck[gym.fcIdx];
    card=`<div class="fc-card" onclick="revealFc()">
      ${!gym.fcRevealed?`
        <div class="fc-lbl">Conjugate — tap to reveal</div>
        <div class="fc-verb">${c.verb}</div><div class="fc-sub">${c.meaning}</div>
        <div style="margin-top:14px;font-size:.82rem;color:var(--ink-soft)">with <span style="color:var(--bleu);font-weight:600">${c.pro}</span></div>
        <div class="fc-hint">Tap to reveal the answer</div>`:`
        <div class="fc-lbl">Answer</div><div class="fc-pro">${c.pro}</div><div class="fc-ans">${c.conj}</div>
        <div style="margin-top:10px;font-size:.77rem;color:var(--ink-soft)">${c.verb} · ${c.meaning}</div>`}
    </div>
    ${gym.fcRevealed?`<div class="fc-btns"><button class="fc-btn wrong" onclick="markFc(false)">✗ Still learning</button><button class="fc-btn right" onclick="markFc(true)">✓ Got it!</button></div>`:''}
    <div class="fc-counter">${gym.fcIdx+1} / ${total}</div>`;
  }
  return `<div class="fc-wrap">
    <div class="toolbar">${filterChips('setFcFilter',gym.fcFilter)}<button class="expand-btn" onclick="restartDeck()">↺ Restart</button></div>
    <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
    <div class="fc-stat">
      <div class="stat-box"><div class="stat-num">${total}</div><div class="stat-lbl">Total</div></div>
      <div class="stat-box s-green"><div class="stat-num">${gym.fcRight}</div><div class="stat-lbl">Got it</div></div>
      <div class="stat-box s-red"><div class="stat-num">${gym.fcWrong}</div><div class="stat-lbl">Review</div></div>
    </div>
    ${card}
  </div>`;
}
function setFcFilter(f){ gym.fcFilter=f; buildDeck(); renderGymTab(); }
function revealFc(){ if(!gym.fcRevealed){ gym.fcRevealed=true; renderGymTab(); } }
function markFc(ok){ if(ok)gym.fcRight++; else gym.fcWrong++; gym.fcIdx++; gym.fcRevealed=false; renderGymTab(); }
function restartDeck(){ buildDeck(); renderGymTab(); }

/* ---- QUIZ ---- */
function buildQuiz(){
  const pool=getFilteredVerbs(gym.qzFilter==='mixed'?'all':gym.qzFilter,'');
  const pairs=pool.flatMap(v=>v.r.map(([p,c])=>({verb:v.n,meaning:v.m,pro:p,conj:c})));
  const allConjs=[...new Set(pairs.map(x=>x.conj))];
  gym.qzQ=shuffle(pairs).slice(0,10).map(q=>{
    const wrong=shuffle(allConjs.filter(c=>c!==q.conj)).slice(0,3);
    return {...q,opts:shuffle([q.conj,...wrong])};
  });
  gym.qzIdx=0;gym.qzScore=0;gym.qzAnswered=false;
}
function quizHTML(){
  const total=gym.qzQ.length;
  if(gym.qzIdx>=total){
    const pct=Math.round(gym.qzScore/total*100);
    const grade=pct>=90?'A':pct>=70?'B':pct>=50?'C':'D';
    const msg={A:'Excellent ! Tu es formidable ! 🌟',B:'Très bien ! Keep it up! 👍',C:'Pas mal ! More practice will help 💪',D:"Continue à pratiquer ! You'll get there 📚"}[grade];
    const col={A:'var(--green)',B:'var(--bleu)',C:'var(--gold)',D:'var(--rouge)'}[grade];
    return `<div class="qz-wrap"><div class="done-screen"><h3>Quiz terminé !</h3>
      <div class="qz-pct" style="color:${col}">${pct}%</div>
      <p>${gym.qzScore} / ${total} correct · ${msg}</p>
      <button class="big-btn" onclick="restartQuiz()">↺ New quiz</button></div></div>`;
  }
  const q=gym.qzQ[gym.qzIdx];
  const pct=Math.round(gym.qzIdx/total*100);
  return `<div class="qz-wrap">
    <div class="toolbar">${filterChips('setQzFilter',gym.qzFilter)}<button class="chip ${gym.qzFilter==='mixed'?'on':''}" onclick="setQzFilter('mixed')">Mixed</button></div>
    <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
    <div class="qz-head"><span>Question ${gym.qzIdx+1} of ${total}</span><span>Score: ${gym.qzScore}</span></div>
    <div class="qz-card">
      <div class="qz-prompt">How do you conjugate…</div>
      <div class="qz-q">${q.verb}</div>
      <div class="qz-ctx">${q.meaning} · with <span style="color:var(--bleu)">${q.pro}</span></div>
      <div class="qz-opts">${q.opts.map(o=>`<button class="qz-opt" onclick="answerQz(this,'${escHtml(o)}','${escHtml(q.conj)}')">${o}</button>`).join('')}</div>
      <div class="qz-fb" id="qzFb"></div>
      <button class="big-btn" id="qzNext" style="display:none" onclick="nextQz()">Next →</button>
    </div>
  </div>`;
}
function setQzFilter(f){ gym.qzFilter=f; buildQuiz(); renderGymTab(); }
function answerQz(btn,chosen,correct){
  if(gym.qzAnswered) return;
  gym.qzAnswered=true;
  document.querySelectorAll('.qz-opt').forEach(b=>b.disabled=true);
  const fb=document.getElementById('qzFb');
  if(chosen===correct){ btn.classList.add('correct'); gym.qzScore++; fb.className='qz-fb show ok'; fb.textContent='✓ Correct ! Bien joué !'; }
  else { btn.classList.add('wrong'); document.querySelectorAll('.qz-opt').forEach(b=>{if(b.textContent.trim()===correct)b.classList.add('correct');}); fb.className='qz-fb show no'; fb.textContent='✗ The answer is: '+correct; }
  document.getElementById('qzNext').style.display='block';
}
function nextQz(){ gym.qzIdx++; gym.qzAnswered=false; renderGymTab(); }
function restartQuiz(){ buildQuiz(); renderGymTab(); }

/* ---- PATTERNS ---- */
function patternsHTML(){
  return PATTERNS_DATA.map((p,i)=>`
    <div class="pat">
      <div class="pat-title">${i+1}. ${p.title}</div>
      <div class="pat-sub">${p.sub}</div>
      <div class="rule">${p.rule}</div>
      ${p.examples.map(e=>`<div class="pat-eg"><span class="pat-key">${e.key}</span><span class="pat-sent">${e.sent}</span><span class="pat-trans">— ${e.trans}</span></div>`).join('')}
      ${p.conj.length?`<div class="conj-grid" style="margin-top:12px">${p.conj.map(([pr,f])=>`<div class="conj-cell"><span class="conj-pro">${pr}</span><span class="conj-form">${f}</span></div>`).join('')}</div>`:''}
    </div>`).join('');
}
