// Heuristic blockout generator: prompt keywords -> editable primitive building.
window.BuildifyReconstruction={
 generate(prompt,style="modern",dims={}){
  const p=(prompt||"").toLowerCase();
  const w=Number(dims.width)||24,h=Number(dims.height)||18,d=Number(dims.depth)||20;
  const floors=p.includes("3 lantai")||p.includes("tiga lantai")?3:(p.includes("2 lantai")||p.includes("dua lantai")?2:1);
  const parts=[{name:"Main Structure",size:[w,h*floors/1.7,d],pos:[0,h*floors/3.4,0],color:style==="traditional"?"#c9a77a":"#c8cbd2"}];
  if(p.includes("atap")||style==="traditional")parts.push({name:"Roof",size:[w*1.12,2,d*1.12],pos:[0,h*floors/1.7+1,0],color:style==="industrial"?"#59616b":"#555b66"});
  if(p.includes("balkon"))parts.push({name:"Front Balcony",size:[w*.55,1.1,3],pos:[0,h*.55,d/2+1.4],color:"#7d8792"});
  const windowCount=p.includes("jendela")?4:2;
  for(let i=0;i<windowCount;i++)parts.push({name:"Window "+(i+1),size:[w*.13,h*.18,.25],pos:[-w*.34+i*(w*.22),h*.48,d/2+.16],color:"#6ea7bd"});
  if(p.includes("pintu")||true)parts.push({name:"Entrance",size:[w*.16,h*.35,.3],pos:[w*.22,h*.18,d/2+.2],color:"#76533d"});
  if(p.includes("garasi"))parts.push({name:"Garage",size:[w*.38,h*.42,.35],pos:[-w*.25,h*.21,d/2+.2],color:"#626b76"});
  return {name:"Prompt Building",parts,floors,dimensions:{width:w,height:h,depth:d},source:"prompt"};
 },
 fromImages(images,dims){
  const loaded=images.filter(Boolean).length;
  return { ...this.generate("building with windows and entrance","modern",dims),name:"Reference Blockout",source:"images",imageCount:loaded,
   note:"Image files are loaded as references only; this prototype does not infer accurate 3D geometry from pixels."};
 }
};