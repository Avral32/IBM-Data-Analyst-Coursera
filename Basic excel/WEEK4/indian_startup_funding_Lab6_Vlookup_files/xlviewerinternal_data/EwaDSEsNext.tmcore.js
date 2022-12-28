'use strict';(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[32],{1221:function(u,D,a){a.r(D);u=a(0);var c=a(15);class b{constructor(m,l,v,t,z,r){m&&(this.N=m);l&&(this.S=l);v&&(this.M=v);t&&(this.F=t);null!=z&&(this.L=z);null!=r&&(this.C=r)}}Object(u.a)(b,"SerializableExceptionEntry",null,[]);class e{constructor(m,l,v,t,z){this.T=m;this.L=l;this.S=v;this.I=t;this.V=z}}Object(u.a)(e,"SerializableLogCache",null,[]);class f{constructor(m,l,v,t,z,r,n=!1,w=null,B=null){this.T=
this.G=0;this.C=this.M=null;this.D=0;this.G=r;this.T=t;this.M=m;this.C=l;this.D=1E3*z+v;n&&(this.O=1);w&&(this.A=w);B&&(this.E=B)}$2g(){if(!this.E)return 0;let m=7,l=0;this.E.N&&(m+=6+f.R$(this.E.N),l++);this.E.S&&(m+=6+f.R$(this.E.S),l++);this.E.M&&(m+=6+f.R$(this.E.M),l++);this.E.F&&(m+=6+f.R$(this.E.F),l++);this.E.L&&(m+=6+f.R$(this.E.L),l++);this.E.C&&(m+=6+f.R$(this.E.C),l++);1<l&&(m+=l-1);return m}w8g(){let m=a(1221).LogCache.mCi+f.R$(this.G)+f.R$(this.T)+this.M.length+f.R$(this.C)+f.R$(this.D)+
this.$2g();1===this.O&&(m+=6);if(this.A){m+=7;for(let l=0,v=this.A.length;l<v;++l)m+=this.A[l].length+3}return m}static R$(m){return(""+m).length}}Object(u.a)(f,"SerializableLogEntry",null,[]);var d=a(379);a.d(D,"LogCache",function(){return h});class h{constructor(m,l,v){this.xUc=0;this.ZVb=null;this.Ogb=this.mZb=this.Hib=0;this.yTc=m;this.NXa=l;this.X9=v;this.yTc=262144>m?m:262144;this.uAg=this.yTc-4*(this.NXa+25);this.reset()}reset(){this.ZVb=[];this.Hib=25;this.xUc=(new Date).getTime()}get count(){return this.ZVb.length}get HQb(){return this.mZb}set HQb(m){this.mZb=
m}wJg(m){if(m){m.message=this.QPb(m.message,"message",m.tag);var l=m.Abd;l&&(l.name=this.QPb(l.name,"Exception.Name",m.tag),l.stack=this.QPb(l.stack,"Exception.Stack",m.tag),l.message=this.QPb(l.message,"Exception.Message",m.tag),l.file=this.QPb(l.file,"Exception.File",m.tag));if(m.Hg)for(var v=0;v<m.Hg.length;v++)m.Hg[v].length>this.NXa&&(m.Hg[v]=m.Hg[v].substr(0,this.NXa-13)+"... [trimmed]",c.ULS.sendTraceTag(3465240,100,50,"Trimmed arg {0} for log {1}",v,d.a(m.tag)));l=l?new b(l.name,l.stack,l.message,
l.file,l.line,l.column):null;m=new f(m.message,m.category,m.level,m.timestamp-this.xUc,m.nxd,m.tag,m.mri,m.Hg,l);l=m.w8g();0<this.mZb&&l+this.Hib>this.mZb&&(v=this.count,this.reset(),c.ULS.sendTraceTag(0,100,15,"The log size is too large to be accepted by the server, throwing away {0} logs.",v));Array.add(this.ZVb,m);this.Hib+=l}}QPb(m,l,v){let t=m;m&&m.length>this.NXa&&(t=m.substr(0,this.NXa-13)+"... [trimmed]",c.ULS.sendTraceTag(3465240,100,50,"Trimmed {0} for log {1}",l,d.a(v)));return t}get Zni(){return this.Hib>
this.uAg}serialize(){return c.ULS.hc(new e(this.xUc,this.ZVb,this.X9,this.Ogb,1))}get jWd(){return this.yTc}get Rwd(){return this.NXa}}h.mCi=31;Object(u.a)(h,"LogCache",null,[53,54])},1445:function(u,D,a){a.r(D);u=a(628);D=a(0);var c=a(15),b=a(84),e=a(80);class f{constructor(){$addHandler(document,"securitypolicyviolation",Object(b.a)(this,this.FHf,"onSecurityPolicyViolationEventHandler"))}FHf(aa){aa=aa.rawEvent;let ia=aa.blockedURI;ia=e.a.Mda(ia);const Ha={};Ha.effectiveDirective=aa.effectiveDirective;
Ha.violatedDirective=aa.violatedDirective;Ha.originalPolicy=aa.originalPolicy;Ha.blockedURI=ia;Ha.disposition=aa.disposition;c.ULS.sendTraceTag(588084128,306,15,"{0}",Ha)}dispose(){$removeHandler(document,"securitypolicyviolation",Object(b.a)(this,this.FHf,"onSecurityPolicyViolationEventHandler"))}}Object(D.a)(f,"ContentSecurityPolicyListener",null,[2]);var d=a(248);class h{constructor(){this.gb=null}get name(){return"Common.App.ContentSecurityPolicy"}init(){this.gb.resolve("Common.App.ContentSecurityPolicy.ContentSecurityPolicyListener")}dispose(){const aa=
this.gb.Jh("Common.App.ContentSecurityPolicy.ContentSecurityPolicyListener");aa&&aa.dispose()}Vh(aa){this.gb=aa;this.gb.register(f,"Common.App.ContentSecurityPolicy.ContentSecurityPolicyListener").xc().Fc(()=>new f)}static main(){d.a.instance.Ei(new h)}}Object(D.a)(h,"ContentSecurityPolicyPackage",null,[4,5]);var m=a(41);class l{constructor(){this.File=this.Message=null;this.Column=this.Line=0;this.ClientAppVersion=this.Stack=null;this.AppMode=this.AppType=0;this.DeobfuscateWithSourceMaps=!1;this.DataPlumber=
this.SessionStartInfoJson=null;this.IsShuttingDown=!1;this.ErrorName=this.Flight=null}ZQd(){return m.c(this)}}Object(D.a)(l,"DiagnosticsRequest",null,[]);var v=a(4),t=a(481),z=a(464),r=a(30);class n{constructor(aa,ia,Ha,Z,la){this.pGa=aa;this.tDa=ia;this.J1=Ha;this.iHc=Z;this.Yyg=la}a2f(aa,ia){try{this.Rdh().send(this.KNh(aa,ia))}catch(Ha){c.ULS.sendTraceTag(6161306,201,10,"Could not send error report [{0}]",Ha.toString())}}Rdh(){const aa=new XMLHttpRequest;aa.open("POST",this.pGa,!0);aa.setRequestHeader("Content-Type",
"text/json; charset=utf-8");v.AFrameworkApplication.userSessionId&&aa.setRequestHeader(z.a.MEc,r.a.Nka(v.AFrameworkApplication.userSessionId));this.tDa&&aa.setRequestHeader(z.a.kza,this.tDa);if(v.AFrameworkApplication.Bd){const ia=v.AFrameworkApplication.Bd.lP;ia&&aa.setRequestHeader(z.a.mFc,ia)}return aa}KNh(aa,ia){if(!aa)return null;ia=ia?"<stack>"+ia+"</stack>":"";const Ha=new l;Ha.Message=aa.message;Ha.File=aa.source;Ha.Line=aa.line;Ha.Column=aa.column;Ha.Stack=ia;Ha.ClientAppVersion=this.tDa;
Ha.AppType=this.J1;Ha.AppMode=this.iHc;Ha.DeobfuscateWithSourceMaps=this.Yyg;v.AFrameworkApplication.fa.qa("JavaScriptCrashJsonTagEnabled")&&(Ha.SessionStartInfoJson=v.AFrameworkApplication.fa.appSettings.SessionStartInfoJson||"",v.AFrameworkApplication.gf&&(Ha.DataPlumber=m.c(v.AFrameworkApplication.gf)),Ha.IsShuttingDown=v.AFrameworkApplication.Lg,Ha.Flight=v.AFrameworkApplication.wF,Ha.ErrorName=t.a.K1e(aa));return Ha.ZQd()}}Object(D.a)(n,"JavascriptErrorReporter",null,[437]);class w{build(aa,
ia,Ha,Z,la){return new n(aa,ia,Ha,Z,la)}}Object(D.a)(w,"JavascriptErrorReporterFactory",null,[424]);class B{Vh(aa){aa.register(w,"Common.App.Diagnostics.JavascriptErrorReporterFactory").as("Common.IJavascriptErrorReporterFactory").xc().Fc(()=>new w)}get name(){return"Common.App.Diagnostics"}init(){}dispose(){}static main(){d.a.instance.Ei(new B)}}Object(D.a)(B,"DiagnosticsPackage",null,[4,5]);var A=a(53),y=a(100),x=a(222),F=a(37),I=a(157),L=a(416),X=a(38),P=a(59),G=a(43),C=a(1221);class H{constructor(aa=
null,ia=null,Ha=null,Z=null,la=null,Xa=null,Za=null,xa=null){this.Rwd=3072;this.jWd=65536;this.Tjg=6E4;this.Bdg=2E3;this.MLe=1E4;this.Nwe=5E3;this.Kwe=!1;this.HQb=0;null!=aa&&(this.Rwd=aa);null!=ia&&(this.jWd=ia);null!=Ha&&(this.Tjg=Ha);null!=Z&&(this.Bdg=Z);null!=la&&(this.MLe=la);null!=Xa&&(this.Nwe=Xa);null!=Za&&(this.Kwe=Za);null!=xa&&0<xa&&(this.HQb=xa)}}Object(D.a)(H,"UlsUploadConfiguration",null,[]);var J=a(379);class M{constructor(aa,ia,Ha=null){this.mUb=0;this.qKc=!1;this.iFb=0;this.Oib=
null;this.nnb=0;this.Gg=null;this.NSd=this._disposing=!1;this.tC=this.uUc=this.MSb=this.HTb=0;this.wxc=!1;this.$Va=0;Ha||(Ha=new H);this.VSc=aa;this.cfa=ia;this.cfa.toLowerCase().startsWith("http:")&&document.URL.toLowerCase().startsWith("https:")&&c.ULS.disable();this.VFg=Ha.Tjg;this.uFg=Ha.Bdg;this.Ivg=Ha.MLe;this.WFg=Ha.Nwe;this.mtg=Ha.Kwe;this.kra=new C.LogCache(Ha.jWd,Ha.Rwd,aa);this.kra.HQb=Ha.HQb;this.YNd();this.pYf();this.qYf()}pYf(){this.Oib=[];this.qKc=!1}qV(aa){1<this.pgb?256>this.Oib.length?
Array.add(this.Oib,aa):this.qKc=!0:(this.kra.wJg(aa),this.KCi(aa)&&!this.RMe()?(this.QYe("LogIndicatesError in HandleTrace"),c.ULS.sendTraceTag(3731793,100,200,"Flushing error-level log (tag {0}) synchronously",J.a(aa.tag))):this.kra.Zni&&(this.Gvb(!1,!0),c.ULS.sendTraceTag(3731794,100,200,"Flushing asynchronously due to cache size")))}KCi(aa){return!!aa&&(1===aa.nxd||10===aa.level)}RMe(){return!1}dispose(){this._disposing||(this._disposing=!0,this.CJh(),c.ULS.QSd(null),window.clearTimeout(this.$Va),
window.clearTimeout(this.HTb),window.clearTimeout(this.MSb),this.MSb=this.HTb=this.$Va=0)}CJh(){this.mode=2;this.b$e();this.wxc=!1;this.aQe();this.QYe("FlushForAppClose")}GQb(aa,ia){aa.Ogb=this.iFb;return this.Ujg(aa.serialize(),ia)?(this.iFb++,!0):!1}Ujg(aa,ia){ia=this.mtg||!ia;this.Gg&&ia||(this.Gg=new XMLHttpRequest);if(0===this.Gg.readyState||4===this.Gg.readyState)return this.Gg.open("POST",this.cfa,ia),this.Gg.setRequestHeader("Content-Type","application/json"),this.Gg.setRequestHeader(M.nRd,
this.VSc),ia&&(this.Gg.timeout=this.WFg),this.Gg.send(aa),!0;c.ULS.sendTraceTag(3731796,100,50,"Could not initiate upload {0}",{["UploadId"]:this.iFb,["XhrReadyState"]:this.Gg.readyState});return!1}S0i(){this.Gg&&this.Gg.abort()}Oyc(aa,ia,Ha){try{return window.setTimeout(()=>{c.ULS.sendTraceTag(3731797,100,200,"Timeout ({0} ms) set by {1} is now firing.",ia,Ha);aa()},ia)}catch(Z){c.ULS.sendTraceTag(0,100,15,"SetTimeoutToLogOriginAndExecute: Calling Window.SetTimeout() failed with exception: {0}",
Z.toString());if(!this.NSd){this.NSd=!0;try{aa()}finally{this.NSd=!1}}return 0}}qYf(){try{window.clearTimeout(this.HTb)}catch(aa){c.ULS.sendTraceTag(0,100,15,"ResetDelayedLoggingTimer: Calling Window.ClearTimeout() failed with exception: {0}",aa.toString())}this.HTb=this.Oyc(Object(b.a)(this,this.b$e,"handleDelayedLogs"),this.Ivg,"ResetDelayedLoggingTimer")}get pgb(){return c.ULS.pgb+this.nnb}b$e(){const aa=this.Oib.length;if(aa){var ia=this.Oib,Ha=this.qKc;this.pYf();c.ULS.sendTraceTag(3731798,100,
50,"HandleDelayedLogs {0}",{["Count"]:aa,["Limit"]:256,["ExceededLimit"]:Ha});this.nnb++;for(Ha=0;Ha<aa;Ha++)this.qV(ia[Ha]);this.nnb--}this.qYf()}YNd(){try{window.clearTimeout(this.MSb)}catch(aa){c.ULS.sendTraceTag(0,100,15,"ResetCadenceTimer: Calling Window.ClearTimeout() failed with exception: {0}",aa.toString())}this.MSb=this.Oyc(Object(b.a)(this,this.Gvb,"flushImpl"),this.VFg,"ResetCadenceTimer")}get mode(){return this.tC}set mode(aa){const ia=this.tC;this.tC=aa;if(0===this.tC&&0!==ia)try{const Ha=
this.uUc;this.uUc=0;window.clearTimeout(Ha)}catch(Ha){c.ULS.sendTraceTag(0,100,15,"set_Mode: Calling Window.ClearTimeout() failed with exception: {0}",Ha.toString())}else 0!==this.tC&&0===ia&&(this.uUc=this.Oyc(Object(b.a)(this,this.aQe,"endThrottling"),this.uFg,"ThrottlingMode Setter"))}aQe(){this.mode=0;this.wxc&&(this.wxc=!1,this.Gvb())}CNb(aa){return 2===this.mode||1===this.mode&&!aa}QYe(aa){c.ULS.sendTraceTag(3731800,100,200,"Flushing Synchronous due to {0}",aa);this.Gvb(!0)}Evb(){this.OYe(0)}OYe(aa){this.$Va||
(this.$Va=this.Oyc(Object(b.a)(this,this.Gvb,"flushImpl"),aa,"FlushAsynchronous"))}Gvb(aa,ia){this.nnb++;try{window.clearTimeout(this.$Va)}catch(Z){c.ULS.sendTraceTag(0,100,15,"FlushImpl: Calling Window.ClearTimeout() failed with exception: {0}",Z.toString())}this.$Va=0;if(this.kra.count)if(!ia&&this.CNb(aa))c.ULS.sendTraceTag(3731801,100,200,"Not flushing ({0}) due to throttling",aa?"sync":"async"),this.wxc=!0;else{this.mode=aa?2:1;this.YNd();c.ULS.sendTraceTag(3731803,100,200,"Flushing ({0}) cached bULS logs ({1} logs)",
aa?"sync":"async",this.kra.count);try{var Ha=this.GQb(this.kra,aa)}catch(Z){this.S0i(),Ha=!1}Ha?(this.kra.reset(),this.mUb=0):(this.mUb++,this.mUb<M.Xuf?this.OYe(M.QOd):(this.kra.reset(),this.iFb++,this.mUb=0))}else this.YNd();this.nnb--}lyb(){}Aob(){}}M.Xuf=3;M.QOd=15E3;M.nRd="X-UserSessionId";Object(D.a)(M,"UploadingUlsHost",null,[28,2]);class S{constructor(aa,ia,Ha,Z){this.Ogb=aa;this.bxe=ia;this.sessionId=Ha;this.version=Z}}Object(D.a)(S,"UploadState",null,[]);var W=a(83),O=a(530);class T extends Sys.EventArgs{constructor(aa){super();
this.Hg=aa}}Object(D.a)(T,"UlsLoggingEventArgs",Sys.EventArgs,[]);var Y=a(176);class va extends M{constructor(aa,ia,Ha,Z,la){super(v.AFrameworkApplication.userSessionId,va.nMh(va.EQh(aa,Z),ia,Ha),new H(void 0,v.AFrameworkApplication.J7h(),Z.ud("BulsUploadFrequencyInMs",6E4),void 0,void 0,void 0,void 0,v.AFrameworkApplication.O2b));this.bSc=this.anb=this.XG=null;this.yh=Ha;this.sDa=Z;(this.Ymb=this.sDa.Xa("RemoteUlsETag"))&&va.$Of(this.sDa.Xa("RemoteUlsSuppressions"));la&&la.DXc(Object(b.a)(this,this.PZi,
"onSettingsRefreshed"))}get events(){return this.XG||(this.XG=new Sys.EventHandlerList)}Aob(aa){this.events.addHandler(va.ugg,aa)}get sHb(){return null}get PKf(){return null}get f_c(){return this.sDa.qa("BUlsExceptionLoggingIsEnabled")}PZi(aa,ia){ia.o8a(va.HYd)&&(this.anb=this.a8e())}$Qh(){return Error().stack}a8e(){let aa=null;if(this.sDa.$p(va.HYd)){aa=new Y.a;const ia=this.sDa.Fw(va.HYd);for(let Ha=0;Ha<ia.length;Ha++)aa.ia(ia[Ha],!0)}return aa}qV(aa){this.anb||(this.anb=this.a8e());if(this.anb&&
this.anb.lb(aa.tag))try{!aa.Abd&&this.f_c?aa.Abd=new O.a(Error()):aa.message+=". JsCallStack: "+this.$Qh()}catch(Ha){aa.message+=" [Failed to add callstack for this tag. BUlsExceptionLoggingIsEnabled="+this.f_c+" ("+Ha.message+")]"}super.qV(aa);const ia=this.events.getHandler(va.ugg);aa=new T(aa);ia&&ia(null,aa)}GQb(aa,ia){if(this.yh){if(!this.bHj)return!1;const Ha=aa.serialize();if(0<v.AFrameworkApplication.O2b&&Ha.length>v.AFrameworkApplication.O2b)return!1;aa.Ogb=this.iFb++;if(this.dGj())return this.Axc(this.cfa,
Ha),!0;this.Nqe(this.cfa,Ha,ia&&!this.sHb?0:3,1,ia&&v.AFrameworkApplication.Lg,aa.Ogb,this.sHb,this.PKf);return!0}return super.GQb(aa,ia)}SEd(aa){try{if(aa&&aa.data&&aa.data.responseHeaders&&va.tfc in aa.data.responseHeaders){var ia=aa.data.responseHeaders[va.tfc];ia!==this.Ymb&&(this.Ymb=ia,va.$Of(aa.data.responseHeaders[va.ybf]))}}catch(Ha){c.ULS.sendTraceTag(593847297,100,50,"Failed to process tag suppressions. [Message: {0}] [Stack: {1}]",Ha.message,Ha.stack)}}iDd(aa){const ia=aa.data;if(!ia)c.ULS.sendTraceTag(5002497,
100,15,"Request Item is null! RequestFailedEventArgs = {0}",aa);else if(13===ia.status)c.ULS.sendTraceTag(6399108,100,50,"Request timed out in the ClientRequestManager queue. Falling back to default XHR."),this.Ujg(ia.request.get_body(),!1);else if(!ia.responseHeaders)c.ULS.sendTraceTag(5002498,100,15,"Item.ResponseHeader is null! RequestItem id = {0}, responseXml = {1}, data = {2}, HttpStatusCode = {3}",ia.id,ia.QRa,ia.te,ia.httpStatus);else if(!(va.Iki in ia.responseHeaders||(aa=ia.httpStatus,400<=
aa&&499>=aa))){var Ha=ia.state;Ha.bxe>=M.Xuf||window.setTimeout(()=>{this.Nqe(ia.request.get_url(),ia.request.get_body(),3,Ha.bxe+1,!1,Ha.Ogb,Ha.sessionId,Ha.version)},M.QOd)}}Nqe(aa,ia,Ha,Z,la,Xa,Za,xa){this.yh.Rm(aa,2,ia,this.Hdh(),!1,Ha,Object(b.a)(this,this.SEd,"onSuccessfulUpload"),Object(b.a)(this,this.iDd,"onFailedUpload"),new S(Xa,Z,Za,xa),null,la,this.sDa.ud("BulsClientRequestManagerQueueTimeInMS",3E4),void 0,"19",Za,void 0,xa,[va.tfc,va.ybf])}Hdh(){let aa=null;this.Ymb&&(aa={},aa[va.tfc]=
this.Ymb);if(this.f_c){const ia=v.AFrameworkApplication.sa;let Ha=null;ia&&(Ha=ia.Pa);Ha&&(aa||(aa={}),aa[va.qci]=Ha.H6,aa[va.rci]=Ha.Fj,aa[va.wci]=v.AFrameworkApplication.jni?"1":"0")}return aa}Axc(aa,ia){this.yh.Axc(aa,ia)}dGj(){return v.AFrameworkApplication.Lg||v.AFrameworkApplication.jtd}get cqj(){this.bSc||(this.bSc=this.sDa.ud("bULSUploadRetryDelayWhenDisconnectedInMilliseconds",6E4));return this.bSc}get bHj(){const aa=this.yh.S7a;return aa&&(new Date).getTime()-this.yh.wyi.getTime()>=this.cqj?
!0:!aa}static EQh(aa,ia){ia=ia.Xa("BulsEndpointUrl");return void 0!==ia&&null!==ia&&""!==ia?ia:aa}static nMh(aa,ia,Ha){aa=va.kIg(aa,ia);return aa=va.tLg(aa,Ha)}static tLg(aa,ia){if(!ia)return aa;ia=ia.lP;return ia?aa=e.a.Ol(aa,z.a.nFc,ia):aa}static kIg(aa,ia){return ia?e.a.Ol(aa,"build",v.AFrameworkApplication.buildVersion):aa}static $Of(aa){c.ULS.s4b();if(aa){aa=aa.split(",");for(const ia of aa)aa=parseInt(ia),!isNaN(aa)&&isFinite(aa)&&c.ULS.S_b(aa)}}}va.tfc="X-bULS-SuppressionETag";va.ybf="X-bULS-SuppressedTags";
va.qci="X-bULS-OfficeAppMode";va.rci="X-bULS-OfficeAppType";va.wci="X-bULS-UseSourceMaps";va.ugg="CommonUlsTraceEventKey";va.HYd="TagCallStackInclusionList";va.Iki="X-InvalidUlsJson";Object(D.a)(va,"CommonUlsHost",M,[]);var ca=a(96),V=a(1);class ra extends va{constructor(aa){super(aa,!1,v.AFrameworkApplication.Bd,W.a.instance.Jh("Common.IRefreshableAppSettings")||v.AFrameworkApplication.fa,W.a.instance.Jh("Common.IRefreshableAppSettings"));this.QWj="usu";this.NWj="ufu";this.jb=null;this.Sa=new ca.a}get $(){this.jb||
(this.jb=0<P.a.getRegisteredEwaInstances().length?P.a.Hr(document.body):null);return this.jb}qV(aa){1===aa.nxd&&V.EwaSettings.isChangeGateEnabled("OfficeVSO:5335621_IdentifyClientAsserts")&&(aa.message="Assert: "+aa.message);super.qV(aa)}RMe(){return!0}GQb(aa,ia){if(v.AFrameworkApplication.Lg&&v.AFrameworkApplication.Xcb)return!1;let Ha=null;this.$&&(Ha=this.$.Jb.Ac("UserAction","CommonUlsHostOverrides:UploadLogs"));ia=!v.AFrameworkApplication.Xcb&&ia;aa=super.GQb(aa,ia);Ha&&Ha.stop();return aa}SEd(aa){super.SEd(aa);
this.Sa.raiseEvent(this.QWj,aa)}iDd(aa){super.iDd(aa);this.Sa.raiseEvent(this.NWj,aa)}}Object(D.a)(ra,"CommonUlsHostOverrides",va,[423,28,2]);class N{ach(aa){return new ra(aa)}}Object(D.a)(N,"CommonHostFactory",null,[436]);var ea=a(57);class Ba extends X.a{constructor(aa){super();this.X4b=aa;Sys.Application.registerDisposableObject(this)}Aob(aa){this.X4b.Aob(aa)}qV(aa){this.X4b.qV(aa)}lyb(aa){this.X4b.lyb(aa)}Evb(){this.X4b.Evb()}static ka(aa,ia=null){const Ha=new I.a;Object(L.a)(Ba,v.AFrameworkApplication.vUa)||
(ia=ia||new N,G.a.Nhi(()=>{if(v.AFrameworkApplication.browserUlsIsEnabled){var Z=aa+"/RemoteUls.ashx";Ba.$&&(Z=Ba.BKg(Z));Z=ia.ach(Z);v.AFrameworkApplication.vUa=Z;c.ULS.ZSa(50);c.ULS.QSd(Z);Ha.setResult(new Ba(Z))}else c.ULS.disable()},!v.AFrameworkApplication.ZEj()));return Ha.task}static BKg(aa){const ia=Ba.$&&ea.d(Ba.$)?Ba.$.workbookContext.BuildVersion:Ba.$.va.BuildVersion;return e.a.Ol(aa,"officeserverversion",ia)}static get $(){Ba.jb||(Ba.jb=0<P.a.getRegisteredEwaInstances().length?P.a.Hr(document.body):
null);return Ba.jb}}Ba.jb=null;Object(D.a)(Ba,"EwaUlsHost",X.a,[423,28,2]);class ka extends x.a{constructor(aa){super();this.boa=aa;this.Fb()}create(){F.TaskExtensions.Aa(Ba.ka(this.boa),aa=>{aa=aa.result;y.a.Ul.Ga(135,aa);this.ob(aa)},this.la)}}Object(D.a)(ka,"EwaUlsHostFactory",x.a,[]);var Ka=a(148),Oa=a(35);class wa{constructor(aa){this.age=null;this.bxi=aa}get cBd(){return this.age||(this.age={})}x9i(aa,ia,Ha){!aa&&ia.source&&(aa=Oa.a.xq(this.cBd,ia.source)+1,this.cBd[ia.source]=aa,aa-1&aa||c.ULS.sendTraceTag(537155536,
0,15,`${aa} errors seen for location=${ia.source}`));ia.source&&1!==Oa.a.xq(this.cBd,ia.source,1)||(c.ULS.sendTraceTag(537155535,0,50,"JavaSctipCrashProcessor.ProcessJavascriptError: Sending request to log JavaScript crash in the server"),this.bxi.a2f(ia,Ha))}}Object(D.a)(wa,"JavaScriptCrashProcessor",null,[233]);var qa=a(66);Type.registerNamespace("_Ewa");Object(u.a)();Type.registerNamespace("Common.App.ContentSecurityPolicy");h.main();Type.registerNamespace("Common.App.Diagnostics");B.main();Type.registerNamespace("DiagUse");
y.a.Ul.Ga(43,new ka(A.a.current.mL.ServerUriBase));(()=>{try{Ka.a.i9e().continueWith(aa=>{try{if(y.a.Ul.za(42))c.ULS.sendTraceTag(537155532,0,50,"JavaScriptCrashProcessorBootstrapper: already initialized");else{const ia=aa.result,Ha=W.a.instance.resolve("Common.IJavascriptErrorReporterFactory").build(A.a.current.mL.ServerUriBase+ia.LayoutsRelativeUri+"/diagnostics.ashx",ia.BuildVersion,1,0,!0);y.a.Ul.Ga(42,new wa(Ha));c.ULS.sendTraceTag(537155533,0,50,"JavaScriptCrashProcessorBootstrapper: initialized and ready to be used")}}catch(ia){c.ULS.sendTraceTag(537155531,
0,15,`JavaScriptCrashProcessorBootstrapper: An exception occured while initializing JavascriptErrorProcessor, Message: ${ia.message}, Callstack: ${ia.stack}`)}},3,null,qa.a.current)}catch(aa){c.ULS.sendTraceTag(537155530,0,15,`JavaScriptCrashProcessorBootstrapper: an exception occured, Message: ${aa.message}, Callstack: ${aa.stack}`)}})()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDSEsNext.tmcore.js.map/7c881a2b5952e8e714390dd5d9651e4c/EwaDSEsNext.tmcore.js.map