// Age from birthday (October 17, 2008)
(function(){
  var b=new Date(2008,9,17), n=new Date();
  var a=n.getFullYear()-b.getFullYear();
  if(n<new Date(n.getFullYear(),9,17)) a--;
  document.getElementById('age').textContent=a;
  document.getElementById('yr').textContent=n.getFullYear();
})();
// Rotating role text in the hero
(function(){
  var roles=['IT student','future developer','honor student','lifelong learner'],i=0,el=document.getElementById('typed');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(function(){i=(i+1)%roles.length;el.textContent=roles[i];},2600);
})();
