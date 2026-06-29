(function(){var filterBar=document.getElementById("filterBar");var galleryGrid=document.getElementById("galleryGrid");var modalOverlay=document.getElementById("modalOverlay");var modalClose=document.getElementById("modalClose");var modalFullscreen=document.getElementById("modalFullscreen");var modalSidebar=document.getElementById("modalSidebar");var modalTabs=document.getElementById("modalTabs");var modalPanel=document.getElementById("modalPanel");var currentDemo=null;var currentTab=null;function initFilters(){var tags=new Set();DEMOS.forEach(function(d){d.tags.forEach(function(t){tags.add(t)})});var allBtn=document.createElement("button");allBtn.className="filter-tag active";allBtn.textContent="全部";allBtn.dataset.tag="all";allBtn.addEventListener("click",function(){setActiveFilter("all");renderCards("all")});filterBar.appendChild(allBtn);tags.forEach(function(t){var btn=document.createElement("button");btn.className="filter-tag";btn.textContent=t;btn.dataset.tag=t;btn.addEventListener("click",function(){setActiveFilter(t);renderCards(t)});filterBar.appendChild(btn)})}function setActiveFilter(tag){
var btns=filterBar.querySelectorAll(".filter-tag");
btns.forEach(function(b){b.classList.toggle("active",b.dataset.tag===tag)})}
function renderCards(filterTag){
galleryGrid.innerHTML="";
var filtered=filterTag==="all"?DEMOS:DEMOS.filter(function(d){return d.tags.indexOf(filterTag)!==-1});
filtered.forEach(function(demo){
var card=document.createElement("div");
card.className="demo-card";
card.innerHTML="<div class='demo-card-thumb'><iframe src='"+demo.thumbnail+"' loading='lazy'></iframe></div>"+
"<div class='demo-card-body'><div class='demo-card-name'>"+demo.name+"</div>"+
"<div class='demo-card-desc'>"+demo.description+"</div>"+
"<div class='demo-card-tags'>"+demo.tags.map(function(t){return "<span class='demo-card-tag'>"+t+"</span>"}).join("")+"</div></div>";
card.addEventListener("click",function(){openModal(demo)});
galleryGrid.appendChild(card)});
initScrollAnimation()}
function openModal(demo){
currentDemo=demo;
modalSidebar.innerHTML="<h2>"+demo.name+"</h2>"+
"<p class='desc'>"+demo.description+"</p>"+
"<div class='meta-section'><div class='meta-label'>Tags</div><div class='meta-tags'>"+
demo.tags.map(function(t){return "<span class='meta-tag'>"+t+"</span>"}).join("")+
"</div></div>"+
"<div class='meta-section'><div class='meta-label'>Documents</div><ul class='doc-list'>"+
(demo.urs?"<li>URS - "+demo.urs.split("/").pop()+"</li>":"")+
(demo.prd?"<li>PRD - "+demo.prd.split("/").pop()+"</li>":"")+
"</ul></div>";
var tabs=[];
if(demo.urs) tabs.push({type:"urs",label:"URS"});
if(demo.prd) tabs.push({type:"prd",label:"PRD"});
demo.prototypes.forEach(function(pt,i){tabs.push({type:"proto",label:pt.label,index:i})});
modalTabs.innerHTML=tabs.map(function(t,i){return "<div class='modal-tab"+(i===0?" active":"")+"' data-type='"+t.type+"' data-index='"+(t.index||0)+"'>"+t.label+"</div>"}).join("");
modalTabs.querySelectorAll(".modal-tab").forEach(function(tab){tab.addEventListener("click",function(){switchTab(demo,tab.dataset.type,parseInt(tab.dataset.index)||0)})});
modalOverlay.classList.add("active");
document.body.style.overflow="hidden";
switchTab(demo,tabs[0].type,tabs[0].index||0)}
function switchTab(demo,type,index){
modalTabs.querySelectorAll(".modal-tab").forEach(function(t){t.classList.remove("active")});
var activeTab=modalTabs.querySelector(".modal-tab[data-type='"+type+"'][data-index='"+index+"']");
if(activeTab) activeTab.classList.add("active");
modalPanel.innerHTML="<div class='loading'></div>";
if(type==="urs"||type==="prd"){
var url=type==="urs"?demo.urs:demo.prd;
fetch(url).then(function(r){return r.text()}).then(function(md){
var html=marked.parse(md);
modalPanel.innerHTML="<div class='md-content'>"+html+"</div>";
setTimeout(function(){
if(typeof mermaid!=="undefined"){
var els=modalPanel.querySelectorAll(".language-mermaid");
els.forEach(function(el){
try{
var code=el.textContent;
el.outerHTML="<div class='mermaid'>"+code+"</div>"
}catch(e){}
});
mermaid.run({querySelector:".mermaid"})
}
},100)
}).catch(function(){modalPanel.innerHTML="<div class='loading' style='color:#ef4444'>Failed to load document</div>"})
}else if(type==="proto"){
var proto=demo.prototypes[index];
modalPanel.innerHTML="<iframe class='prototype-frame' src='"+proto.url+"'></iframe>"
}}
function closeModal(){
modalOverlay.classList.remove("active");
document.body.style.overflow="";
modalPanel.innerHTML="";
currentDemo=null}
function initScrollAnimation(){
var observer=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:0.1});
document.querySelectorAll(".demo-card").forEach(function(card){observer.observe(card)})}
modalPanel.addEventListener("click",function(e){var a=e.target.closest("a");if(!a||!a.href||!currentDemo)return;var href=a.getAttribute("href");if(!href)return;var proto=currentDemo.prototypes.find(function(p){return href.indexOf(p.url.split("/").pop())!==-1||href===p.url});if(proto){e.preventDefault();var idx=currentDemo.prototypes.indexOf(proto);switchTab(currentDemo,"proto",idx)}});
modalClose.addEventListener("click",closeModal);
modalFullscreen.addEventListener("click",function(){modalOverlay.classList.toggle("fullscreen");modalFullscreen.textContent=modalOverlay.classList.contains("fullscreen")?"✕":"⛶"});
modalOverlay.addEventListener("click",function(e){if(e.target===modalOverlay) closeModal()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&modalOverlay.classList.contains("active")) closeModal()});
initFilters();
renderCards("all");
})();