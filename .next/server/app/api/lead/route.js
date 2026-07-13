(()=>{var e={};e.id=908,e.ids=[908],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},59348:(e,r,a)=>{"use strict";a.r(r),a.d(r,{patchFetch:()=>u,routeModule:()=>l,serverHooks:()=>v,workAsyncStorage:()=>p,workUnitAsyncStorage:()=>c});var i={};a.r(i),a.d(i,{POST:()=>n});var t=a(96559),s=a(48088),o=a(37719),d=a(32190);async function n(e){try{let{name:r,organization:a,email:i,phone:t,state:s,service:o,conversation:n}=await e.json(),l=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f4f7fb; margin: 0; padding: 20px; }
    .card { background: white; border-radius: 12px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #1a6fa8, #0e4d7a); padding: 28px 32px; }
    .header h1 { color: white; margin: 0; font-size: 20px; }
    .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .badge { display: inline-block; background: #dcfce7; color: #166534; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1e293b; font-weight: 500; }
    .divider { border: none; border-top: 1px solid #e8edf3; margin: 24px 0; }
    .convo { background: #f8fafc; border-radius: 8px; padding: 16px; font-size: 13px; color: #475569; line-height: 1.7; white-space: pre-wrap; max-height: 260px; overflow-y: auto; }
    .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e8edf3; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🔔 New Lead from HBS Chatbot</h1>
      <p>A visitor completed lead qualification on your website</p>
    </div>
    <div class="body">
      <div class="badge">✅ Lead Captured</div>
      <div class="field"><div class="label">Name</div><div class="value">${r||"—"}</div></div>
      <div class="field"><div class="label">Organization</div><div class="value">${a||"—"}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${i}" style="color:#1a6fa8">${i||"—"}</a></div></div>
      <div class="field"><div class="label">Phone</div><div class="value">${t||"—"}</div></div>
      <div class="field"><div class="label">State</div><div class="value">${s||"—"}</div></div>
      <div class="field"><div class="label">Service Needed</div><div class="value">${o||"—"}</div></div>
      <hr class="divider">
      <div class="label">Conversation Summary</div>
      <div class="convo">${n||"No conversation recorded."}</div>
    </div>
    <div class="footer">Sent by HBS Website Chatbot \xb7 hello@hiredbillingsupport.com</div>
  </div>
</body>
</html>`,p=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:"HBS Chatbot <onboarding@resend.dev>",to:[process.env.LEAD_EMAIL||"hello@hiredbillingsupport.com"],subject:`🔔 New HBS Lead: ${r||i||"Website Visitor"} — ${o||"General Inquiry"}`,html:l})});if(!p.ok){let e=await p.text();return console.error("Resend error:",e),d.NextResponse.json({error:"Email failed"},{status:500})}return d.NextResponse.json({success:!0})}catch(e){return console.error("Lead route error:",e),d.NextResponse.json({error:"Server error"},{status:500})}}let l=new t.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/lead/route",pathname:"/api/lead",filename:"route",bundlePath:"app/api/lead/route"},resolvedPagePath:"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\api\\lead\\route.js",nextConfigOutput:"",userland:i}),{workAsyncStorage:p,workUnitAsyncStorage:c,serverHooks:v}=l;function u(){return(0,o.patchFetch)({workAsyncStorage:p,workUnitAsyncStorage:c})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),i=r.X(0,[447,580],()=>a(59348));module.exports=i})();