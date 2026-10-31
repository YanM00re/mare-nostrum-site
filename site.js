/* Переключатель темы для всех страниц сайта: авто → светлая → тёмная. Выбор хранится в браузере. */
(function(){
  var btn=document.getElementById("themeBtn"); if(!btn) return;
  var ORDER=["auto","light","dark"], NAME={auto:"авто",light:"светлая",dark:"тёмная"};
  function load(){ try{ return localStorage.getItem("mn-theme")||"auto"; }catch(e){ return "auto"; } }
  function apply(t){
    if(t==="auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme",t);
    btn.textContent="Тема: "+NAME[t]; btn.dataset.t=t;
    try{ localStorage.setItem("mn-theme",t); }catch(e){}
    window.dispatchEvent(new Event("mn-theme"));
  }
  btn.addEventListener("click",function(){ apply(ORDER[(ORDER.indexOf(btn.dataset.t||"auto")+1)%ORDER.length]); });
  apply(load());
})();
