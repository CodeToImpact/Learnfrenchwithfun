/**
 * app.js — top-level navigation, sidebar, search, boot
 */
const appState = { mode:'course' }; // 'course' | 'gym'

function renderNav(){
  const nav=document.getElementById('navList');
  const gymActive = appState.mode==='gym' ? 'active' : '';
  nav.innerHTML = `
    <button class="nav-unit-btn gym-btn ${gymActive}" onclick="openGym()">
      <span class="nav-emoji">🏋️</span>
      <span class="nav-unit-label">Verb Gym<span class="nav-unit-num">Practice all 50 verbs</span></span>
    </button>
    <div class="side-section-label">The Course — 9 units</div>
    ${COURSE.map((u,i)=>`
      <div class="nav-unit">
        <button class="nav-unit-btn ${appState.mode==='course'&&i===courseState.current?'active':''} ${courseState.done.has(i)?'done':''}" onclick="goCourseUnit(${i})">
          <span class="nav-emoji">${u.emoji}</span>
          <span class="nav-unit-label">${u.title}<span class="nav-unit-num">Unit ${u.unit}</span></span>
          <span class="nav-check">✓</span>
        </button>
      </div>`).join('')}`;
}

function openGym(){
  appState.mode='gym';
  renderNav(); renderGym();
  if(window.innerWidth<=860) closeSidebar();
}

/* ---- sidebar search (jumps to a course unit) ---- */
function doSearch(){
  const q=document.getElementById('sideSearch').value.toLowerCase().trim();
  const hint=document.getElementById('searchHint');
  const nav=document.getElementById('navList');
  if(!q){ nav.style.display='block'; hint.style.display='none'; return; }
  const matches=[];
  COURSE.forEach((u,i)=>{ if(JSON.stringify(u).toLowerCase().includes(q)) matches.push(i); });
  const verbHit = VERBS.some(v=>v.n.includes(q)||v.m.includes(q));
  nav.style.display='none'; hint.style.display='block';
  let html='';
  if(verbHit) html+=`<button class="nav-unit-btn" style="margin-bottom:6px" onclick="openGym();clearSearch()"><span class="nav-emoji">🏋️</span><span class="nav-unit-label">Verb Gym<span class="nav-unit-num">matches a verb</span></span></button>`;
  if(matches.length) html+=`<div class="side-section-label">In the course</div>`+matches.map(i=>`
    <button class="nav-unit-btn" style="margin-top:4px" onclick="goCourseUnit(${i});clearSearch()">
      <span class="nav-emoji">${COURSE[i].emoji}</span>
      <span class="nav-unit-label">${COURSE[i].title}<span class="nav-unit-num">Unit ${COURSE[i].unit}</span></span>
    </button>`).join('');
  hint.innerHTML = html || `No match for "<strong>${q}</strong>". Try a verb, a word, or a topic.`;
}
function clearSearch(){ document.getElementById('sideSearch').value=''; doSearch(); }

/* ---- mobile sidebar ---- */
function toggleSidebar(){ document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); }
function closeSidebar(){ document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }

/* ---- boot ---- */
renderNav(); renderCourseUnit(); updateProgress();
