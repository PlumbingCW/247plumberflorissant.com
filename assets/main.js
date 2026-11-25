(function(){
var b=document.body,de=document.documentElement,t=document.getElementById('menu-toggle');
function setMenu(o){b.classList.toggle('menu-open',o);de.style.overflow=o?'hidden':'';if(t){t.setAttribute('aria-expanded',o?'true':'false')}}
if(t){t.addEventListener('click',function(){setMenu(!b.classList.contains('menu-open'))})}
var c=document.getElementById('mob-close'),o=document.getElementById('mob-overlay');
if(c){c.addEventListener('click',function(){setMenu(false)})}
if(o){o.addEventListener('click',function(){setMenu(false)})}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setMenu(false)}});
window.addEventListener('resize',function(){if(window.innerWidth>900){setMenu(false)}});
document.querySelectorAll('.faq-q').forEach(function(q){
q.addEventListener('click',function(){
var item=q.closest('.faq-item'),a=item.querySelector('.faq-a'),open=!item.classList.contains('open');
item.classList.toggle('open',open);q.setAttribute('aria-expanded',open?'true':'false');
a.style.maxHeight=open?a.scrollHeight+'px':'0px';});});
})();
