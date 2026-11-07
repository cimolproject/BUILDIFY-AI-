// Local feedback scoring. This is not neural-network training.
(() => {
 const KEY="buildify_feedback_v1";
 const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{critical:0,reward:0,count:0,events:[]}}catch{return {critical:0,reward:0,count:0,events:[]}}};
 const save=x=>localStorage.setItem(KEY,JSON.stringify(x));
 window.BuildifyFeedback={
  add(type){const s=read();const weight=type==="critical"?4:10;s[type==="critical"?"critical":"reward"]+=weight;s.count++;s.events.push({type,weight,at:new Date().toISOString()});if(s.events.length>100)s.events.shift();save(s);return s},
  stats:read
 };
})();