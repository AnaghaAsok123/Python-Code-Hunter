// Logo: change LOGO to point at a different image file if needed (also update the <img id="hl"> src in index.html).
const LOGO='logo.png', PASS=70, PIN='cozmek2026'; // PIN is client-side only: NOT secure.
const LV=[
{n:'Print & Play',ic:'🖨️',m:'🎉 Fantastic start! You’ve taken your first steps into Python. Ready to hunt some bugs?',b:'Hunt Bugs 🐛',s:'using print() to show messages, Python being case-sensitive, and writing comments'},
{n:'Bug Busters',ic:'🐛',m:'🐛 Bug hunter unlocked! You’re learning to spot mistakes like a real programmer. Let’s explore the power of operators!',b:'Explore Operators ⚙️',s:'spotting missing quotes or brackets, wrong capitalisation, bad variable names and indentation'},
{n:'Operator Explorer',ic:'⚙️',m:'⚙️ Great work! Operators are becoming familiar. You’re one step closer to thinking like a programmer!',b:'Unlock Variables 📦',s:'what + - * / // ** and % do, and when to use them'},
{n:'Variable Village',ic:'📦',m:'📦 Look at you go! You understand the building blocks of Python. One final mission stands between you and Python Pro status!',b:'Start Final Challenge 🚀',s:'variables, naming rules, data types, type casting and multiple assignment'},
{n:'Python Pro Challenge',ic:'🚀',m:'🏆 Mission accomplished! You’ve completed your Python Quest. Every coding expert started as a beginner—keep practising, keep exploring, and keep growing!',b:'View My Results 📊',s:'f-strings, printing several values and combining strings'}];
const T=['Print & Comments','Debugging','Operators','Variables & Types','f-strings & Output'];
const TL={mc:'Multiple choice',tf:'True or false',match:'Match it',error:'Find the error',code:'Choose the correct code',fill:'Fill in the blank'};
const PUR=['Addition','Subtraction','Multiplication','Division','Floor division (whole-number part)','Exponent (power)','Remainder (modulus)'];
const Q=[
// Level 1
{l:0,t:'mc',q:'What is the purpose of the print() function?',o:['Shows output on the screen','Reads a number typed by the user','Saves a file on the computer','Deletes a variable'],a:'Shows output on the screen',h:'Think about the function you use when you want Python to show a message on the screen.',e:'print() displays text or values on the screen.'},
{l:0,t:'mc',q:'Which statement correctly displays a message?',o:['print("Hello, Python!")','Print("Hello, Python!")','print Hello, Python!','show("Hello, Python!")'],a:'print("Hello, Python!")',h:'Look for the lowercase function name, brackets, and quotation marks around the text.',e:'Correct form: lowercase print, then brackets, with text inside quotes.'},
{l:0,t:'tf',q:'True or false: Python is case-sensitive, so name and Name are different.',o:['True','False'],a:'True',h:'Would Python treat a capital N and a small n as the same letter?',e:'Python treats uppercase and lowercase as different, so spelling and capitalisation matter.'},
{l:0,t:'mc',q:'What is the purpose of a comment, like the line below?',code:'# This line prints a greeting',o:['A note for humans that Python ignores','A command that runs faster','A way to create a variable','A way to stop the program'],a:'A note for humans that Python ignores',h:'Who is the note meant for: the computer or the person reading the code?',e:'Comments start with # and explain code. Python skips them when running.'},
{l:0,t:'fill',q:'Type the name of the built-in function that shows output (all lowercase).',a:['print','print()'],h:'It is the very first function you learned, and it has five letters.',e:'The function is print (written print()).'},
// Level 2
{l:1,t:'error',q:'Which line is missing a closing quotation mark?',o:['print("Hello)','print("Hello")','print(\'Hi\')','print("Hi there")'],a:'print("Hello)',h:'Check that every opening quote has a matching closing quote.',e:'The text "Hello starts a string but never closes it, causing a syntax error.'},
{l:1,t:'error',q:'Why does this code cause a problem?',code:'Print("Hello")',o:['Print should be lowercase: print','Hello needs no quotes','Brackets are not allowed','It needs a # at the start'],a:'Print should be lowercase: print',h:'Python pays attention to uppercase and lowercase letters. Check the spelling of the built-in function.',e:'The built-in function is print in lowercase. Print is not defined.'},
{l:1,t:'mc',q:'Which variable name breaks Python’s naming rules?',o:['2nd_place','total_marks','score1','student_name'],a:'2nd_place',h:'Variable names cannot start with a number.',e:'Names can contain letters, digits and underscores, but cannot begin with a digit.'},
{l:1,t:'error',q:'What is wrong with this code?',code:'if True:\nprint("Hi")',o:['The print line must be indented','True must be lowercase','There should be no colon','print needs capital P'],a:'The print line must be indented',h:'Lines inside an if block need to be pushed in a little from the left.',e:'Python uses indentation to show which lines belong to the if block.'},
{l:1,t:'error',q:'Which line is missing a closing parenthesis (bracket)?',o:['print("Hi"','print("Hi")','print("Hi", "there")','print(42)'],a:'print("Hi"',h:'Count the opening and closing brackets. Do they match?',e:'Every ( needs a matching ), otherwise Python reports a syntax error.'},
// Level 3
{l:2,t:'match',q:'Match each operator to its purpose.',p:[['+',PUR[0]],['-',PUR[1]],['*',PUR[2]],['/',PUR[3]],['//',PUR[4]],['**',PUR[5]],['%',PUR[6]]],h:'Think of how each symbol looks. A double star is like a “power”, and % hints at what is left over.',e:'+ add, - subtract, * multiply, / divide, // floor division, ** power, % remainder.'},
{l:2,t:'mc',q:'Which operator is used for multiplication?',o:['*','x','+','%'],a:'*',h:'It is a small star-shaped symbol on your keyboard.',e:'The asterisk * multiplies numbers in Python.'},
{l:2,t:'mc',q:'Which operator is used for division?',o:['/','\\','%','**'],a:'/',h:'It leans like a forward slash, the one you see in fractions.',e:'/ divides and gives a normal result, like 7 / 2 giving 3.5.'},
{l:2,t:'mc',q:'Which operator finds the remainder?',o:['%','//','/','**'],a:'%',h:'Imagine dividing items into equal groups. Which operator tells you what is left over?',e:'The modulus operator % gives what is left over after division.'},
{l:2,t:'mc',q:'Which operator represents exponentiation (raising to a power)?',o:['**','^','*','//'],a:'**',h:'It is made by repeating the multiplication symbol.',e:'Two stars ** raise a number to a power.'},
{l:2,t:'mc',q:'How is // different from /?',o:['// gives only the whole-number part of a division','// gives the remainder','// is used for comments','// multiplies two numbers'],a:'// gives only the whole-number part of a division',h:'One of them keeps the decimal part, the other drops it.',e:'/ gives the full result; // (floor division) keeps only the whole-number part.'},
// Level 4
{l:3,t:'mc',q:'What is a variable?',o:['A named container that stores a value','A type of comment','A built-in math operator','An error message'],a:'A named container that stores a value',h:'Picture a labelled box where you keep something to use later.',e:'A variable is a name that refers to a stored value, like age = 20.'},
{l:3,t:'mc',q:'Which is a valid variable name?',o:['student_name','2student','student-name','my name'],a:'student_name',h:'Python variable names cannot start with a number or contain a hyphen or space.',e:'Use letters, digits and underscores, and do not start with a digit.'},
{l:3,t:'match',q:'Match each value to its data type.',p:[['42','int'],['3.14','float'],['"Hello"','str'],['True','bool']],x:['int','float','str','bool'],h:'Whole number, decimal number, text in quotes, and yes/no value.',e:'42 is int, 3.14 is float, "Hello" is str, True is bool.'},
{l:3,t:'mc',q:'Why do we use type casting, such as int("5")?',o:['To convert a value from one type to another','To make code run faster','To add a comment','To delete a variable'],a:'To convert a value from one type to another',h:'Think about turning text that looks like a number into a real number.',e:'Type casting converts values between types, for example text to a number.'},
{l:3,t:'match',q:'Match each function to what it does.',p:[['int()','Converts to a whole number'],['float()','Converts to a decimal number'],['str()','Converts to text']],x:['Converts to a whole number','Converts to a decimal number','Converts to text'],h:'The name of each function hints at the type it creates.',e:'int() gives integers, float() decimals and str() text.'},
{l:3,t:'mc',q:'What does this line do?',code:'a, b, c = 1, 2, 3',o:['Assigns three values to three variables at once','Adds 1, 2 and 3 together','Creates one variable holding all three','Causes an error'],a:'Assigns three values to three variables at once',h:'Count the names on the left and the values on the right.',e:'Multiple assignment gives a=1, b=2, c=3 in a single line.'},
// Level 5
{l:4,t:'code',q:'Which is a correctly formatted f-string?',o:['print(f"My name is {name}")','print("My name is {name}")','print(f"My name is name")','print(f"My name is (name)")'],a:'print(f"My name is {name}")',h:'Look for an f before the quote, and curly braces around the variable.',e:'An f-string starts with f and puts variables inside { }.'},
{l:5-1,t:'mc',q:'How can you display text and a variable together with print()?',code:'marks = 85',o:['print("Marks:", marks)','print("Marks:" marks)','print["Marks:", marks]','print "Marks:", marks'],a:'print("Marks:", marks)',h:'Separate the different values inside the brackets with a comma.',e:'print() can take several values separated by commas.'},
{l:4,t:'mc',q:'Which is a suitable way to combine two strings?',code:'first = "Ada"\nlast = "Lovelace"',o:['print(first + " " + last)','print(first - last)','print(first / last)','print(first & last)'],a:'print(first + " " + last)',h:'Which operator can join pieces of text together?',e:'The + operator joins (concatenates) strings.'},
{l:4,t:'code',q:'Which code prints exactly: Python marks: 85 ?',code:'subject = "Python"\nmarks = 85',o:['print(f"{subject} marks: {marks}")','print("subject marks: marks")','print(f"subject marks: marks")','print(subject marks marks)'],a:'print(f"{subject} marks: {marks}")',h:'You want the values inside the variables, not the variable names as text.',e:'Curly braces in an f-string insert the variable values.'},
{l:4,t:'fill',q:'Complete the code to show Hello, Asha! (type the missing letter)',code:'name = "Asha"\nprint(___"Hello, {name}!")',a:['f','F'],h:'One small letter before the opening quote turns on variable insertion.',e:'The letter f makes it an f-string, so {name} is replaced by its value.'}
];
Q.forEach((q,i)=>q.id=i);
const OKM=['Correct! 🎉 You’re getting the hang of Python!','Brilliant! 💡 You understood that concept perfectly!','Awesome work! 🚀 Keep that coding energy going!'];
const NOM=['Almost there! 😊 Every mistake is a chance to learn.','No worries! 🐣 You’re learning. Take this with you to the next question!','Good try! 💪 Debugging is part of every programmer’s journey!'];
const $=s=>document.querySelector(s),app=$('#app');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.floor(Math.random()*a.length)];
let S=null,sel=null;
const save=()=>{try{sessionStorage.setItem('pq',JSON.stringify(S))}catch(e){}};
const load=()=>{try{return JSON.parse(sessionStorage.getItem('pq'))}catch(e){return null}};
const recs=()=>{try{return JSON.parse(localStorage.getItem('pq_results')||'[]')}catch(e){return []}};
const brandHdr=t=>{$('#hr').textContent=t};
function ptsOf(q){const r=S.ans[q.id];return r?r.pts:0}
function welcome(){
 brandHdr('Python Quest');const old=load();
 app.innerHTML=`<div class="card c"><img class="big" src="${LOGO}" alt="Cozmek logo"><h2 style="color:var(--pr);margin-bottom:0">Cozmek</h2><p class="mu" style="margin-top:0">Learning Platform</p>
 <h1>Python Quest: Level Up Your Coding Skills!</h1>
 <p>Welcome, Code Breakers! 🚀 Get ready to test your Python knowledge, solve challenges, and level up your coding skills!</p>
 <p><input type="text" id="nm" maxlength="40" placeholder="Enter your name or student ID" aria-label="Student name"></p>
 <p><button class="cta" id="go">Start Your Quest 🎮</button></p>
 ${old&&old.name&&old.screen!=='results'?'<p><button class="sec" id="rs">Resume as '+esc(old.name)+'</button></p>':''}
 <p><button class="sec" id="tc">👩‍🏫 Teacher area</button></p></div>
 <div class="note">5 levels · 27 questions · hints are optional (a correct answer after a hint still earns 8 of 10 points). Your progress is kept for this browser session only.</div>`;
 $('#go').onclick=()=>{const n=$('#nm').value.trim();if(!n){$('#nm').focus();$('#nm').style.borderColor='var(--no)';return}
  S={name:n,start:Date.now(),lv:0,qi:0,screen:'q',ord:LV.map((_,l)=>shuf(Q.filter(q=>q.l===l).map(q=>q.id))),ans:{},hint:{},saved:false};save();showQ()};
 if($('#rs'))$('#rs').onclick=()=>{S=old;go()};
 $('#tc').onclick=teacherLogin;
}
function go(){S.screen==='q'?showQ():S.screen==='end'?levelEnd():results()}
const total=()=>Q.length, doneN=()=>Object.keys(S.ans).length;
function showQ(){
 S.screen='q';save();sel=null;const q=Q[S.ord[S.lv][S.qi]],n=S.ord[S.lv].length,L=LV[S.lv];brandHdr(S.name);
 const r=S.ans[q.id];
 let body='';
 if(q.t==='match'){const opts=shuf(q.x||PUR);body=q.p.map((p,i)=>`<div class="mrow"><code>${esc(p[0])}</code><span>→</span><select data-i="${i}" ${r?'disabled':''}><option value="">Choose…</option>${opts.map(o=>`<option>${esc(o)}</option>`).join('')}</select></div>`).join('')}
 else if(q.t==='fill'){body=`<input type="text" id="fi" placeholder="Type your answer" autocomplete="off" ${r?'disabled':''}>`}
 else{const o=q.t==='tf'?q.o:(q._o&&q._o.l===q.id?q._o.v:(q._o={l:q.id,v:shuf(q.o)}).v);body=o.map((x,i)=>`<button class="opt" data-v="${esc(x)}" ${r?'disabled':''}>${esc(x)}</button>`).join('')}
 app.innerHTML=`<div class="card"><div class="bar"><i style="width:${doneN()/total()*100}%"></i></div>
 <div class="meta"><span>${L.ic} Level ${S.lv+1} of 5: ${L.n}</span><span>Question ${S.qi+1} of ${n} · ${doneN()}/${total()} done</span></div>
 <span class="tag">${TL[q.t]}</span><h2>${esc(q.q)}</h2>${q.code?`<pre>${esc(q.code)}</pre>`:''}${body}
 <div id="hh">${S.hint[q.id]?`<div class="hint">💡 ${esc(q.h)}</div>`:''}</div><div id="fb"></div>
 <div class="row"><button class="hb" id="hb">Need a Hint? 💡</button><button id="sb" disabled>Submit Answer</button><button id="nx" style="display:none"></button></div></div>`;
 const sub=$('#sb');
 const ready=()=>{if(q.t==='match')return[...app.querySelectorAll('select')].every(s=>s.value);if(q.t==='fill')return $('#fi').value.trim()!=='';return sel!==null};
 app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{app.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=b.dataset.v;sub.disabled=false});
 app.querySelectorAll('select').forEach(s=>s.onchange=()=>sub.disabled=!ready());
 if($('#fi'))$('#fi').oninput=()=>sub.disabled=!ready();
 $('#hb').onclick=()=>{S.hint[q.id]=1;save();$('#hh').innerHTML=`<div class="hint">💡 ${esc(q.h)}</div>`};
 sub.onclick=()=>{
  let given,ok;
  if(q.t==='match'){given=[...app.querySelectorAll('select')].map(s=>s.value);ok=q.p.every((p,i)=>given[i]===p[1])}
  else if(q.t==='fill'){given=$('#fi').value.trim();ok=q.a.includes(given.toLowerCase())||q.a.includes(given)}
  else{given=sel;ok=given===q.a}
  if(S.ans[q.id])return; // no duplicate scoring
  const used=!!S.hint[q.id];S.ans[q.id]={ok,hint:used,pts:ok?(used?8:10):0,given};save();lock(q,ok,given)};
 if(r)lock(q,r.ok,r.given,true);
}
function lock(q,ok,given,resumed){
 const r=S.ans[q.id];$('#sb').style.display='none';$('#hb').style.display='none';
 app.querySelectorAll('select,#fi').forEach(e=>e.disabled=true);
 app.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(b.dataset.v===q.a)b.classList.add('good');else if(b.dataset.v===given)b.classList.add('bad')});
 if(q.t==='match'){app.querySelectorAll('select').forEach((s,i)=>{s.value=given[i];s.style.borderColor=given[i]===q.p[i][1]?'var(--ok)':'var(--no)'})}
 if(q.t==='fill')$('#fi').value=given;
 let ans=q.t==='match'?q.p.map(p=>p[0]+' → '+p[1]).join('; '):q.t==='fill'?q.a[0]:q.a;
 $('#fb').innerHTML=ok?`<div class="fb ok"><b>${pick(OKM)}</b> (+${r.pts} points${r.hint?', hint used':''})<p>${esc(q.e)}</p></div>`:`<div class="fb no"><b>${pick(NOM)}</b> (0 points)<p><b>Correct answer:</b> ${esc(ans)}</p><p>${esc(q.e)}</p><p>Keep going. The next question is a fresh start! 🌟</p></div>`;
 const last=S.qi===S.ord[S.lv].length-1,nx=$('#nx');nx.style.display='';nx.textContent=last?'See Level Summary 🏁':'Next Question ➡️';
 nx.onclick=()=>{if(last){levelEnd()}else{S.qi++;showQ()}};
}
function lvStats(l){const ids=Q.filter(q=>q.l===l);return{n:ids.length,c:ids.filter(q=>S.ans[q.id]&&S.ans[q.id].ok).length,p:ids.reduce((a,q)=>a+ptsOf(q),0),max:ids.length*10,h:ids.filter(q=>S.hint[q.id]).length}}
function levelEnd(){
 S.screen='end';save();const l=S.lv,st=lvStats(l),L=LV[l];
 app.innerHTML=`<div class="card c"><div style="font-size:3rem">${L.ic}</div><h1>Level ${l+1} Complete: ${L.n}</h1>
 <div class="stat"><div><b>${st.p}/${st.max}</b>Level score</div><div><b>${st.c}/${st.n}</b>Correct answers</div><div><b>${st.h}</b>Hints used</div></div>
 <p class="mu">In this level you practised ${L.s}.</p><p style="font-size:1.1rem"><b>${L.m}</b></p>
 <button class="cta" id="cn">Continue to Next Level 🚀 — ${L.b}</button></div>`;
 $('#cn').onclick=()=>{if(l===4){S.lv=4;finish()}else{S.lv++;S.qi=0;showQ()}};
}
function build(){
 const lv=LV.map((_,l)=>lvStats(l)),tp={};
 Q.forEach(q=>{const k=T[q.l];tp[k]=tp[k]||[0,0];tp[k][0]+=ptsOf(q);tp[k][1]+=10});
 // topic list is per-level; finer concepts use question types below
 const sc=lv.reduce((a,x)=>a+x.p,0),mx=Q.length*10;
 return{name:S.name,date:new Date().toLocaleString(),score:sc,max:mx,pct:Math.round(sc/mx*1000)/10,correct:Q.filter(q=>S.ans[q.id]&&S.ans[q.id].ok).length,wrong:Q.filter(q=>S.ans[q.id]&&!S.ans[q.id].ok).length,hints:Object.keys(S.hint).length,lv:lv.map(x=>[x.p,x.max]),topics:tp,missed:Q.filter(q=>S.ans[q.id]&&!S.ans[q.id].ok).map(q=>q.id),secs:Math.round((Date.now()-S.start)/1000)};
}
function finish(){const r=build();if(!S.saved){const a=recs();a.push(r);try{localStorage.setItem('pq_results',JSON.stringify(a))}catch(e){}S.saved=true}S.screen='results';save();results()}
const stat=p=>p>=PASS?'<span class="pass">Pass ✅</span>':'<span class="need">Needs Improvement 🌱</span>';
function results(){
 S.screen='results';const r=build();brandHdr(S.name);
 app.innerHTML=`<div class="card c"><img src="${LOGO}" style="height:60px" alt="Cozmek"><h1>Your Python Quest Results 📊</h1><p>Well done, ${esc(r.name)}!</p>
 <div class="stat"><div><b>${r.score}/${r.max}</b>Total score</div><div><b>${r.pct}%</b>Percentage</div><div><b>${r.correct}/${r.correct+r.wrong}</b>Correct</div><div><b>${r.hints}</b>Hints used</div></div>
 <p style="font-size:1.2rem">${stat(r.pct)} <span class="mu">(pass mark ${PASS}%)</span></p></div>
 <div class="card"><h2>Level-wise performance</h2><div class="tw"><table><tr><th>Level</th><th>Score</th><th>%</th></tr>${r.lv.map((x,i)=>`<tr><td>${LV[i].ic} ${LV[i].n}</td><td>${x[0]}/${x[1]}</td><td>${Math.round(x[0]/x[1]*100)}%</td></tr>`).join('')}</table></div>
 <h2 style="margin-top:18px">Topic strengths</h2>${Object.entries(r.topics).map(([k,v])=>{const p=Math.round(v[0]/v[1]*100);return `<p>${p>=PASS?'💪 Strong':'🔁 Worth revising'}: <b>${k}</b> (${p}%)</p>`}).join('')}
 <p class="mu">Time taken: ${Math.floor(r.secs/60)} min ${r.secs%60}s (shown for information only, it does not affect your score).</p>
 <div class="row"><button id="rt">Restart 🔄</button><button class="sec" id="tc">Teacher area</button></div></div>
 <div class="note">Your result was saved in this browser only. It is not sent to a server, so please tell your teacher when you finish. Answers are checked against a key inside this page; no Python code is run.</div>`;
 $('#rt').onclick=()=>{try{sessionStorage.removeItem('pq')}catch(e){}welcome()};$('#tc').onclick=teacherLogin;
}
// ---------- Teacher ----------
function teacherLogin(){
 brandHdr('Teacher area');
 app.innerHTML=`<div class="card"><h2>👩‍🏫 Teacher area</h2><p><input type="password" id="pw" placeholder="Teacher PIN"></p><div class="row"><button id="ok">Enter</button><button class="sec" id="bk">Back</button></div><p id="er" class="need"></p>
 <div class="note">This PIN is checked in the browser and can be read in the page source, so it only keeps casual users out. It is not real security.</div></div>`;
 $('#ok').onclick=()=>{$('#pw').value===PIN?dash():$('#er').textContent='Incorrect PIN.'};$('#bk').onclick=()=>S&&S.screen==='results'?results():welcome();
}
function csv(){
 const a=recs(),h=['Name','Date','Total','Max','Percent','Status','Correct','Incorrect','Hints',...LV.map((l,i)=>'L'+(i+1)+' '+l.n),...T.map(t=>'Topic: '+t),'Missed questions','Revise','Time (s)'];
 const f=v=>'"'+String(v).replace(/"/g,'""')+'"';
 const rows=a.map(r=>[r.name,r.date,r.score,r.max,r.pct,r.pct>=PASS?'Pass':'Needs Improvement',r.correct,r.wrong,r.hints,...r.lv.map(x=>x[0]+'/'+x[1]),...T.map(t=>r.topics[t]?Math.round(r.topics[t][0]/r.topics[t][1]*100)+'%':''),r.missed.map(i=>'Q'+(i+1)).join(' '),T.filter(t=>r.topics[t]&&r.topics[t][0]/r.topics[t][1]*100<PASS).join('; '),r.secs]);
 return [h,...rows].map(r=>r.map(f).join(',')).join('\n');
}
function dash(tab){
 tab=tab||'d';brandHdr('Teacher dashboard');const a=recs().slice().sort((x,y)=>y.score-x.score);
 let b='';
 if(tab==='d'){
  b=a.length?`<div class="tw"><table><tr><th>#</th><th>Student</th><th>Score</th><th>%</th>${LV.map((l,i)=>`<th>L${i+1}</th>`).join('')}<th>Hints</th><th>Status</th></tr>${a.map((r,k)=>`<tr><td>${k+1}</td><td>${esc(r.name)}</td><td>${r.score}/${r.max}</td><td>${r.pct}</td>${r.lv.map(x=>`<td>${x[0]}/${x[1]}</td>`).join('')}<td>${r.hints}</td><td>${stat(r.pct)}</td></tr>`).join('')}</table></div>
  <h2 style="margin-top:20px">Details and revision needs</h2>${a.map(r=>`<p><b>${esc(r.name)}</b> (${r.date}): wrong ${r.missed.length?r.missed.map(i=>'Q'+(i+1)).join(', '):'none'}. Revise: ${T.filter(t=>r.topics[t]&&r.topics[t][0]/r.topics[t][1]*100<PASS).join(', ')||'nothing flagged'}</p>`).join('')}
  <h2>Class-wide topic averages</h2>${T.map(t=>{const v=a.filter(r=>r.topics[t]);const p=v.length?Math.round(v.reduce((s,r)=>s+r.topics[t][0]/r.topics[t][1]*100,0)/v.length):0;return `<p>${p>=PASS?'✅':'🔁'} ${t}: ${p}%</p>`}).join('')}`:'<p class="mu">No results yet in this browser.</p>';
  b+=`<div class="row"><button id="ex" ${a.length?'':'disabled'}>Export CSV ⬇️</button><button class="sec" id="cl" ${a.length?'':'disabled'}>Clear records</button></div>
  <div class="note"><b>Limitations:</b> results are stored only in this browser (localStorage). Students on other devices will not appear here, so export a CSV on each device. Nothing is stored on a server. Answers are checked against a key in the page and no student code is executed. Students can clear their browser data.</div>`;
 }else{
  b=`<p class="mu"><b>Marking scheme:</b> correct without hint = 10 · correct after hint = 8 · incorrect = 0 · each question scores once · pass mark ${PASS}% · time is information only.</p>`+LV.map((L,l)=>`<h2>${L.ic} Level ${l+1}: ${L.n}</h2>`+Q.filter(q=>q.l===l).map(q=>`<div class="card"><span class="tag">Q${q.id+1} · ${TL[q.t]}</span><p><b>${esc(q.q)}</b></p>${q.code?`<pre>${esc(q.code)}</pre>`:''}<p><b>Answer:</b> ${esc(q.t==='match'?q.p.map(p=>p[0]+' → '+p[1]).join('; '):q.t==='fill'?q.a.join(' / '):q.a)}</p><p><b>Explanation:</b> ${esc(q.e)}</p><p><b>Hint:</b> ${esc(q.h)}</p></div>`).join('')).join('');
 }
 app.innerHTML=`<div class="card"><h2>👩‍🏫 Teacher dashboard</h2><div class="tabs"><button class="${tab==='d'?'':'sec'}" id="t1">Results</button><button class="${tab==='r'?'':'sec'}" id="t2">Review mode</button><button class="sec" id="bk">Exit</button></div>${b}</div>`;
 $('#t1').onclick=()=>dash('d');$('#t2').onclick=()=>dash('r');$('#bk').onclick=welcome;
 if($('#ex'))$('#ex').onclick=()=>{const u=URL.createObjectURL(new Blob([csv()],{type:'text/csv'}));const l=document.createElement('a');l.href=u;l.download='python_quest_results.csv';document.body.appendChild(l);l.click();l.remove()};
 if($('#cl'))$('#cl').onclick=()=>{if(confirm('Delete all saved results in this browser?')){try{localStorage.removeItem('pq_results')}catch(e){}dash('d')}};
}
welcome();
