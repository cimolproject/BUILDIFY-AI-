window.BuildifyLuau={
 export(model){
  if(!model)return "-- No model generated yet.";
  const q=s=>String(s).replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  const lines=["-- BUILDIFY AI | Generated Roblox Luau","-- Draft geometry. Adjust dimensions and placement in Studio.","local model = Instance.new(\"Model\")",`model.Name = "${q(model.name||"BuildifyModel")}"`,""];
  model.parts.forEach((p,i)=>{
   const [sx,sy,sz]=p.size,[x,y,z]=p.pos;
   lines.push(`local part${i+1} = Instance.new("Part")`,`part${i+1}.Name = "${q(p.name)}"`,`part${i+1}.Anchored = true`,`part${i+1}.Size = Vector3.new(${sx}, ${sy}, ${sz})`,`part${i+1}.Position = Vector3.new(${x}, ${y}, ${z})`,`part${i+1}.Color = Color3.fromRGB(${hex(p.color)})`,`part${i+1}.TopSurface = Enum.SurfaceType.Smooth`,`part${i+1}.BottomSurface = Enum.SurfaceType.Smooth`,`part${i+1}.Parent = model`,"");
  });
  lines.push("model.Parent = workspace");"";
  return lines.join("\\n");
  function hex(v){const h=String(v||"#cccccc").replace("#","");return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16)||0).join(", ")}
 }
};