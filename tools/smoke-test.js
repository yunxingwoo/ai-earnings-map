#!/usr/bin/env node
/* tools/smoke-test.js — 无头冒烟测试: DOM stub + 顺序执行页面脚本链, 抓运行时错误 */
const fs = require('fs');
const path = require('path');
const ROOT = '/Users/lucky/ai-earnings-map';

function mkEl(){
  const el = {
    innerHTML:'', textContent:'', style:{}, dataset:{}, children:[],
    classList:{add(){},remove(){},toggle(){},contains(){return false}},
    insertAdjacentHTML(){}, insertAdjacentElement(pos,el){this.appendChild(el);return el;}, insertBefore(el){this.appendChild(el);return el;}, appendChild(c){this.children.push(c);return c;},
    remove(){}, addEventListener(){}, onclick:null,
    querySelector(){return mkEl()}, querySelectorAll(){return [mkEl(),mkEl(),mkEl(),mkEl(),mkEl()]},
    setAttribute(){}, getAttribute(){return null},
    parentElement:null, firstChild:null, nextSibling:null, lastChild:null,
    getBoundingClientRect(){return {bottom:0,right:0,top:0,left:0}},
    appendRow(){}, contains(){return true},
  };
  return el;
}
const elCache = {};
global.document = {
  getElementById:(id)=>{ elCache[id]=elCache[id]||mkEl(); return elCache[id]; },
  querySelector:()=>mkEl(),
  querySelectorAll:()=>[mkEl(),mkEl(),mkEl(),mkEl(),mkEl()],
  createElement:()=>mkEl(),
  addEventListener(){},
  body: mkEl(),
};
global.window = globalThis;
global.navigator = {};
global.location = {protocol:'file:', origin:''};
global.setTimeout = setTimeout; global.URL = URL;
// Blob/URL.createObjectURL stub (导出功能)
global.Blob = class{constructor(){}};
URL.createObjectOriginal = URL.createObjectURL;
URL.createObjectURL = ()=> 'blob:stub';
URL.revokeObjectURL = ()=>{};

function run(file, globals){
  let code = fs.readFileSync(path.join(ROOT,file),'utf8');
  // 顶层 const/let → globalThis 赋值(跨脚本共享;仅冒烟用)
  code = code.replace(/^(const|let) ([A-Z_][A-Z0-9_]*)/gm, 'globalThis.$2');
  code = code.replace(/^(const|let) ([a-zA-Z_$][\w$]*) =/gm, (m, kw, name)=> /^globalThis/.test(m)?m:('globalThis.'+name+' ='));
  try{
    (0,eval)(code);
    console.log('  ✓', file);
    return true;
  }catch(e){
    console.log('  ✗', file, '→', e.message);
    console.log('    ', (e.stack||'').split('\n')[1]||'');
    return false;
  }
}

const DATA = ['data/companies.js','data/metrics.js','data/sources.js','data/capacity.js','data/fx.js','data/calendar.js','data/valuation.js','data/guidance.js','data/signals-history.js'];
const HOME = [...DATA, 'js/calc.js', 'js/render-home.js', 'js/panels-home.js', 'js/pwa.js'];
const MAP  = [...DATA, 'js/calc.js', 'js/render-map.js', 'js/panels-map.js', 'js/pwa.js'];

console.log('── 首页链 ──');
let ok1 = true; for(const f of HOME) ok1 = run(f) && ok1;
console.log('── 地图页链 ──');
let ok2 = true; for(const f of MAP) ok2 = run(f) && ok2;
console.log(ok1&&ok2 ? 'SMOKE PASS' : 'SMOKE FAIL');
process.exit(ok1&&ok2?0:1);
