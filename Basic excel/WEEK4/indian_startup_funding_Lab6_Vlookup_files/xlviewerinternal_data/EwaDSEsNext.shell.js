'use strict';(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[33],{1256:function(u,D,a){u=a(0);var c=a(552),b=a(84),e=a(15),f=a(157),d=a(4),h=a(41),m=a(80),l=a(766);class v{constructor(n,w){this.eTc=this.dTc=null;this.LYa=new f.a;this.yh=n;this.oGa=w.appSettings[v.M4j]||""}get YDj(){return this.LYa.task}get B3(){return this.yh.value}Wnj(){const n={};n[v.ebi]=d.AFrameworkApplication.Zi;n["Content-Type"]="application/json; charset=utf-8";e.ULS.sendTraceTag(6612806,215,50,"Client is sending a request to get the code for the O365 switcher");
const w=m.a.Ol(this.oGa+v.ZDj,v.PMi,d.AFrameworkApplication.sa.Pa.Fj.toString());this.B3.Rm(w,1,"",n,!0,2,Object(b.a)(this,this.QGb,"onSuccessCallback"),Object(b.a)(this,this.cGb,"onFailureCallback"),null,void 0,void 0,void 0,void 0,"20")}iDi(n){try{const w={};w.FlightName=n.FlightName;w.SessionID=n.SessionID;e.ULS.sendTraceTag(594883776,215,50,h.c(w))}catch(w){e.ULS.sendTraceTag(594883747,215,10,"Unable to log NavBarData")}}QGb(n){if((n=n.data.te)&&n.length)try{const w=h.a(n);this.dTc=w.NavBarDataJson;
e.ULS.sendTraceTag(41551899,215,50,"Skipping call to TryLoadResources for React Shared Header.");this.dTc?({At:this.eTc}=h.d(w.NavBarDataJson)).returnValue?(this.iDi(this.eTc),this.LYa.setResult(this.eTc)):(e.ULS.sendTraceTag(7660113,215,10,"Failed to deserialize : {0}",{["ShellData"]:l.a.igb(this.dTc)}),this.LYa.Rs()):(e.ULS.sendTraceTag(9000737,215,15,"ShellData is null"),this.LYa.Rs())}catch(w){e.ULS.sendTraceTag(6362370,215,10,"Unable to parse the response from O365ShellServiceProxy."),this.LYa.Rs()}else e.ULS.sendTraceTag(6362369,
215,10,"Response from O365ShellServiceProxy is null.")}cGb(){this.LYa.Rs();e.ULS.sendTraceTag(7608091,215,10,"Call to O365ShellServiceProxy failed.")}static get instance(){return v.Ma||(v.Ma=v.nwb())}static nwb(){return new v(new c.a(()=>d.AFrameworkApplication.Bd),d.AFrameworkApplication.fa,d.AFrameworkApplication.sa.Pa.Fj)}}v.ebi="X-qs";v.PMi="at";v.ZDj="O365ShellServiceProxy.ashx";v.Ma=null;v.M4j="ShellWebServiceBase";Object(u.a)(v,"O365ShellActor",null,[269]);var t=a(248);class z{constructor(){this.gb=
null}get name(){return"Common.App.O365Shell"}Vh(n){this.gb=n;this.gb.register(v,"Common.App.O365Shell.O365ShellActor").as("Common.App.O365Shell.IO365ShellActor").xc().Fc(()=>new v(new c.a(()=>d.AFrameworkApplication.Bd),d.AFrameworkApplication.fa,d.AFrameworkApplication.sa.Pa.Fj))}init(){d.AFrameworkApplication.fa.Fv(Object(b.a)(this,this.NB,"onFullAppSettingsReady"))}NB(){d.AFrameworkApplication.useO365ShellService&&d.AFrameworkApplication.sa.Pa.Fs&&this.gb.resolve("Common.App.O365Shell.O365ShellActor").Wnj()}dispose(){}static main(){t.a.instance.Ei(new z)}}
Object(u.a)(z,"PackageManager",null,[4,5]);a.d(D,"a",function(){return r});const r=()=>{Type.registerNamespace("Common.App.O365Shell");z.main()}},1402:function(u,D,a){a.r(D);u=a(1256);Object(u.a)()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDSEsNext.shell.js.map/c05a8a0e9166e2096dc91e6e5f254e6f/EwaDSEsNext.shell.js.map