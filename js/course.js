/**
 * course.js — renders the 9-unit course into #main
 */
const courseState = { current:0, done:new Set() };

function blockHTML(b){
  switch(b.type){
    case 'explain': return `<p class="explain">${b.text}</p>`;
    case 'vocab': return `<table class="vocab"><tbody>${b.items.map(([a,c])=>`<tr><td>${a}</td><td>${c}</td></tr>`).join('')}</tbody></table>`;
    case 'examples': return `<div class="eg">${b.items.map(e=>`<div class="eg-row"><span class="eg-fr">${e.fr}</span><span class="eg-en">${e.en}</span></div>`).join('')}</div>`;
    case 'tip': return `<div class="tip"><span class="ti">💡</span><div>${b.text}</div></div>`;
    case 'rule': return `<div class="rule">${b.text}</div>`;
    case 'conj': return `<div class="conj"><div class="conj-label">${b.label}</div><div class="conj-grid">${b.rows.map(([p,f])=>`<div class="conj-cell"><span class="conj-pro">${p}</span><span class="conj-form">${f}</span></div>`).join('')}</div></div>`;
    case 'eg-block': return `<div class="eg">${b.lines.map(l=>`<div class="eg-row"><span class="eg-fr" style="font-weight:500">${l}</span></div>`).join('')}</div>`;
    default: return '';
  }
}

function renderCourseUnit(){
  const u = COURSE[courseState.current];
  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="unit-head">
      <span class="unit-eyebrow">${u.emoji} Unit ${u.unit} of ${COURSE.length}</span>
      <h2>${u.title}</h2>
      <p class="unit-intro">${u.intro}</p>
    </div>
    ${u.lessons.map(l=>`
      <div class="lesson">
        <div class="lesson-title"><span class="dot"></span>${l.title}</div>
        ${l.blocks.map(blockHTML).join('')}
      </div>`).join('')}
    ${renderCoursePractice(u)}
    <div class="complete-bar">
      <span class="ct">${courseState.done.has(courseState.current)?'✓ Unit completed — nice work!':'Finished reviewing this unit?'}</span>
      <button class="btn ${courseState.done.has(courseState.current)?'btn-done':'btn-primary'}" onclick="toggleCourseDone()">
        ${courseState.done.has(courseState.current)?'✓ Completed':'Mark as done'}
      </button>
    </div>
    <div class="nav-arrows">
      <button class="btn btn-ghost" onclick="goCourseUnit(${courseState.current-1})" ${courseState.current===0?'style=visibility:hidden':''}>← Previous</button>
      <button class="btn btn-ghost" onclick="goCourseUnit(${courseState.current+1})" ${courseState.current===COURSE.length-1?'style=visibility:hidden':''}>Next →</button>
    </div>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderCoursePractice(u){
  if(!u.quiz||!u.quiz.length) return '';
  return `<div class="practice">
    <div class="practice-head">✏️ Quick practice — check yourself</div>
    ${u.quiz.map((q,qi)=>`
      <div class="pq">
        <div class="pq-text">${qi+1}. ${q.q}${q.context?` <span style="color:var(--ink-soft);font-weight:400">(${q.context})</span>`:''}</div>
        <div class="pq-opts">
          ${q.opts.map(o=>`<button class="pq-opt" onclick="answerCoursePQ(this,${courseState.current},${qi})" data-opt="${escHtml(o)}">${o}</button>`).join('')}
        </div>
        <div class="pq-fb" id="fb-${courseState.current}-${qi}"></div>
      </div>`).join('')}
  </div>`;
}

function answerCoursePQ(btn, ui, qi){
  const q = COURSE[ui].quiz[qi];
  const chosen = btn.getAttribute('data-opt');
  const parent = btn.closest('.pq-opts');
  parent.querySelectorAll('.pq-opt').forEach(b=>b.disabled=true);
  const fb = document.getElementById(`fb-${ui}-${qi}`);
  if(chosen===q.answer){
    btn.classList.add('correct');
    fb.className='pq-fb show ok'; fb.textContent='✓ Correct! '+(q.why||'');
  } else {
    btn.classList.add('wrong');
    parent.querySelectorAll('.pq-opt').forEach(b=>{ if(b.getAttribute('data-opt')===q.answer) b.classList.add('correct'); });
    fb.className='pq-fb show no'; fb.textContent='✗ Not quite — '+(q.why||('The answer is '+q.answer));
  }
}

function goCourseUnit(i){
  if(i<0||i>=COURSE.length) return;
  appState.mode='course';
  courseState.current=i;
  renderNav(); renderCourseUnit();
  if(window.innerWidth<=860) closeSidebar();
}

function toggleCourseDone(){
  const c=courseState.current;
  if(courseState.done.has(c)) courseState.done.delete(c); else courseState.done.add(c);
  updateProgress(); renderNav(); renderCourseUnit();
}

function updateProgress(){
  const pct = Math.round(courseState.done.size/COURSE.length*100);
  document.getElementById('progFill').style.width=pct+'%';
  document.getElementById('progText').textContent=`${courseState.done.size}/${COURSE.length}`;
}
