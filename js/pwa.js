/* js/pwa.js — PWA 注册(manifest link 由 html 提供); https/localhost 才生效 */
(function(){
  if(!('serviceWorker' in navigator)) return;
  if(!/^https?:$/.test(location.protocol)) return; // file:// 不注册
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js').catch(()=>{ /* 静默失败,不影响页面 */ });
  });
})();
