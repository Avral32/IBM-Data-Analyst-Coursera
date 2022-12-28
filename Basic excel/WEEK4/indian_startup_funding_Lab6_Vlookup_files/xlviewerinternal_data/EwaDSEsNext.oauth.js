'use strict';(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[16],{1229:function(u,D,a){u=a(0);var c=a(944),b=a(4);class e{}Object(u.a)(e,"LokiTokenResult",null,[]);class f{constructor(t){this.xWb=t}whd(){const t=this.gZh();return t?f.Qrd?new Promise((z,r)=>{this.xWb.continueWith(()=>{this.xWb.Ch||this.xWb.Wf?r(Error.create("Error downloading auth library")):this.xWb.result.UL("Loki",t).then(n=>{n=b.AFrameworkApplication.fa.qa("ForceLokiFallbackToACLPTokenIsEnabled")?this.jZh():
n.IsSuccess&&n.Token?Object.assign(new e,{isSuccess:!0,token:n.Token,errorMessage:null}):Object.assign(new e,{isSuccess:!1,token:null,errorMessage:JSON.stringify(n)});z(n);return n})})}):Promise.resolve(Object.assign(new e,{isSuccess:!1,token:null,errorMessage:"Not attempting to fetch token because host is not an O365 host."})):Promise.resolve(Object.assign(new e,{isSuccess:!1,token:null,errorMessage:String.format("Could not get Loki App Id for HostAuthorityType: [{0}]",c.a.s0e())}))}jZh(){const t=
b.AFrameworkApplication.fa.Xa("LokiUserDataSignature")||"";return Object.assign(new e,{isSuccess:!0,token:t,errorMessage:null})}gZh(){let t=null;const z=c.a.Tbc();2===z?t=b.AFrameworkApplication.fa.Xa("LokiAADAppId"):1===z&&(t=b.AFrameworkApplication.fa.Xa("LokiMSAAppId"));return t}static get Qrd(){return b.AFrameworkApplication.fa.qa("IsO365CommercialHost")||b.AFrameworkApplication.fa.qa("IsO365ConsumerHost")}}Object(u.a)(f,"LokiTokenManager",null,[275]);var d=a(248),h=a(83),m=a(518);class l{get name(){return"Common.App.LivePersonaUtils"}init(){h.a.instance.resolve("Common.ILokiTokenManager")}dispose(){}Vh(t){t.register(f,
"Common.App.LivePersonaUtils.LokiTokenManager").as("Common.ILokiTokenManager").xc().Fc(()=>new f(m.a.mr(t.Ub("Common.App.OAuth.IOAuthManager"))))}static main(){d.a.instance.Ei(new l)}}Object(u.a)(l,"LivePersonaUtilsPackage",null,[4,5]);a.d(D,"a",function(){return v});const v=()=>{Type.registerNamespace("Common.App.LivePersonaUtils");l.main()}},1252:function(u,D,a){var c=a(9);u=a(0);var b=a(83),e=a(222),f=a(7),d=a(15),h=a(764);class m{constructor(z){this.oAuthManager=z}UL(z,r){return this.oAuthManager?
this.oAuthManager.UL(z,r).then(n=>{n.IsSuccess||d.ULS.sendTraceTag(51401292,0,15,"Error retrieving auth token. Message: "+n.ErrorMessage+" Error code: "+n.ErrorCode+" App name: "+z);return Object(f.a)(new h.a,{IsSuccess:n.IsSuccess,Token:n.Token,ErrorCode:n.ErrorCode,ErrorMessage:n.ErrorMessage})}):(d.ULS.sendTraceTag(537154971,0,10,"Oauth manager is null"),Promise.resolve(Object(f.a)(new h.a,{IsSuccess:!1,Token:null,ErrorCode:"FailedToResolve",ErrorMessage:"Failed to resolve IOAuthManager from the container."})))}cNa(){return this.oAuthManager?
this.oAuthManager.cNa():null}}Object(u.a)(m,"OAuthManagerWrapper",null,[273]);var l=a(695);class v extends e.a{constructor(z){super();this.$=z;this.Fb()}create(){this.ob(Object(l.a)(this.$.da,349,()=>new m(b.a.instance.resolve("Common.App.OAuth.IOAuthManager"))))}static ka(z){z.da.Ga(350,new v(z))}}Object(u.a)(v,"OAuthManagerFactory",e.a,[]);a.d(D,"a",function(){return t});const t=()=>{c.a.Fa(z=>{v.ka(z)})}},1278:function(u,D,a){u=a(0);var c=a(15),b=a(840),e=a(920),f=a(4),d=a(97),h=a(729),m=a(248),
l=a(41),v=a(40),t=a(27),z=a(111),r=a(83),n=a(189);class w{get name(){return"Common.App.OAuth.OAuthPackage"}Vh(A){A.register(236,"Common.App.OAuth.IOAuthManager").xc().Fc(()=>new b.OAuthManager)}init(){const A=r.a.instance.resolve("Common.App.OAuth.IOAuthManager");this.AWj(A)}AWj(A){const y=f.AFrameworkApplication.fa.Xa("FileSource");if(f.AFrameworkApplication.fa.qa("IsO365ConsumerHost")||f.AFrameworkApplication.fa.qa("IsO365CommercialHost")||"WopiTest"===y){var x=h.a.yah;if(x&&x.IsEnabled){var F=
x.Application,I=h.a.authority;if(void 0!==F&&null!==F&&F.length&&void 0!==I&&null!==I&&I.length){var L=e.a[A.VS],X=t.a.GHa,P=A.Bv();try{var G=new Map;void 0!==G&&null!==G?(G.set("SupportStatus",L),G.set("Browser",X),G.set("AuthStrategy",P)):G=null}catch(H){G=null}d.Health.instance.recordKpiUsageForAlertableKpi("WacCorePFT","WacOAuthFC",G);var C=v.a.Ud();A.UL("Core",F).then(H=>{const J=Math.floor(v.a.Ud()-C);L=e.a[A.VS];X=t.a.GHa;P=A.Bv();c.ULS.sendTraceTag(562943369,3E3,50,'OAuthManager attempted to get a Core token to the WAC FrontEnd API in {0} ms. Success={1}, SupportStatus={2}, ErrorCode="{3}", Host="{4}", Browser="{5}", AuthStrategy="{6}"',
J,H.IsSuccess,L,H.ErrorCode,y,X,P);G&&(G.set("SupportStatus",L),G.set("Browser",X),G.set("AuthStrategy",P));var M=Object.assign(new n.a,{durationMs:J,extendedProperties:G});if(H.IsSuccess){if(d.Health.instance.recordKpiSuccess("WacCorePFT",M),M=x.Endpoint){var S=v.a.Ud();f.AFrameworkApplication.Bd.mob(M,1,null,{["Authorization"]:"Bearer "+H.Token},"OAuthManagerValidateAccess",void 0,void 0,void 0,2E4).continueWith(W=>{var O=Math.floor(v.a.Ud()-S),T=null;W.Ch?W="Canceled":W.Wf?W="Faulted":(T=W.result,
W=T.succeeded?"Completed":"Failed");O={["TaskResult"]:W,["BrowserTokenDurationMS"]:J,["BrowserValidationDurationMS"]:O};T&&(O.HttpStatus=T.Hg.data.httpStatus,T.succeeded&&(T=l.a(T.Hg.data.te),O.ServerValidationDurationMS=T.ElapsedMilliseconds,O.ServerValidationResult=T.ValidatedToken,O.KMSI=T.KMSI,O.Scopes=T.Scopes,O.TokenExpirationS=Math.floor(parseInt(T.Expiration)-(new Date).getTime()/1E3)));c.ULS.sendTraceTag(520632322,3E3,"Completed"===W?50:15,z.a.toJSON(O))})}}else d.Health.instance.recordKpiFailure("WacCorePFT",
H.ErrorCode,!1,!1,M)}).catch(H=>{var J=Math.floor(v.a.Ud()-C);J=Object.assign(new n.a,{durationMs:J,extendedProperties:G});d.Health.instance.recordKpiFailure("WacCorePFT","UNEXPECTED CATCH: "+H.toString(),!1,!1,J)})}}}}dispose(){}static main(){m.a.instance.Ei(new w)}static bgj(){m.a.instance.Ei(new w,0,!0)}}Object(u.a)(w,"OAuthPackage",null,[4,5]);a.d(D,"a",function(){return B});const B=A=>{Type.registerNamespace("Common.App.OAuth");A?w.bgj():w.main()}},1466:function(u,D,a){a.r(D);u=a(1278);D=a(1229);
a=a(1252);Type.registerNamespace("_Ewa");Type.registerNamespace("Common.App.AppsForOfficeCommon");Object(u.a)();Object(D.a)();Object(a.a)()},840:function(u,D,a){a.r(D);u=a(0);var c=a(15);const b=(V,ra)=>{var N=V.osg;if(!N){N=[];for(var ea in V)"string"===typeof ea&&N.push({key:ea,value:V[ea]});N.sort((Ba,ka)=>Ba.value-ka.value);V.osg=N}N=[];for(ea=1;0<ra;)ra&1&&V[ea]&&N.push(V[ea]),ea<<=1,ra>>=1;if(N.length&&0===ra)return N.reverse().join(", ")};var e=a(920),f;(function(V){V[V.external=0]="external";
V[V.msa=1]="msa";V[V.aad=2]="aad"})(f||(f={}));Object(u.b)("AuthorityType",f);class d{}Object(u.a)(d,"OAuthResult",null,[]);class h{constructor(V){this.DAg=V}initialize(){return Promise.resolve(0)}Rlc(){return Promise.resolve(0)}UL(){c.ULS.sendTraceTag(574239257,3E3,50,"Automation flag set.  Returning Mock Token.");return Promise.resolve(Object.assign(new d,{IsSuccess:!0,Token:this.DAg}))}WCc(){return Promise.resolve(Object.assign(new d,{IsSuccess:!1,ErrorCode:"authTokenStrategy_loginNotSupported",
ErrorMessage:"This Token Strategy does not support login flow, TryLogin could not be completed"}))}xBc(){return!1}Nxb(){return"MockAuthTokenStrategy"}}Object(u.a)(h,"MockAuthTokenStrategy",null,[292]);var m=a(944);class l{static get(V,ra,N){if(!N)return V;let ea=0;return Promise.race([V,new Promise(Ba=>{ea=window.setTimeout(()=>{Ba(ra)},N)})]).then(Ba=>{window.clearTimeout(ea);return Promise.resolve(Ba)}).catch(()=>{window.clearTimeout(ea);return Promise.resolve(ra)})}}Object(u.a)(l,"PromiseWithTimeout",
null,[]);var v=a(4),t=a(729);class z{constructor(V,ra,N,ea,Ba){this.scope=this.resource=null;this.silentLogin=!1;this.correlationId=this.options=null;this.resource=V;this.scope=ra;this.silentLogin=N;this.options=ea;this.correlationId=Ba}}Object(u.a)(z,"TokenRequestParameters",null,[313]);var r=a(27),n=a(83);class w{constructor(){this.Fne=null;let V=v.AFrameworkApplication.fa.Xa(v.AFrameworkApplication.x8),ra=v.AFrameworkApplication.fa.Xa(v.AFrameworkApplication.rgg);this.NYa=String.format("ParentFrameTokenStrategy uiHost={0} uiHostIntegrationType={1}",
V&&""!==V?V:"Unspecified",ra&&""!==ra?ra:"Unspecified")}initialize(){return new Promise(V=>{n.a.instance.Ub("Common.App.WopiIdentity.IWopiIdentity").execute(ra=>{this.Fne=ra;V(0)})})}Bi(V){const ra=["HTTPS:","API:"];let N=!1;const ea=V.toLocaleUpperCase();for(const Ba of ra)if(ea.startsWith(Ba)){N=!0;break}return N||this.Ypi(V)?V+"/.default":V}Ypi(V){return RegExp("/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i").test(V)}Rlc(){return Promise.resolve(0)}UL(V,ra,N,ea,Ba,
ka,Ka){if(r.a.aya){Ba=t.a.u4j;if(!Ba)return ra=Object.assign(new d,{IsSuccess:!1,ErrorCode:"TeamsNoAllowListFound",ErrorMessage:"No app list was found."}),Promise.resolve(ra);if(!Array.contains(Ba,V))return ra=Object.assign(new d,{IsSuccess:!1,ErrorCode:"TeamsDisallowedApp",ErrorMessage:"Disallowed appName: "+V}),Promise.resolve(ra)}V=this.Bi(N);N=new z(N,V,!ea,null,v.AFrameworkApplication.userSessionId);return this.Fne.getAccessToken(N,ra,Ka).then(Oa=>Object.assign(new d,{IsSuccess:!0,Token:Oa.accessToken}),
Oa=>Object.assign(new d,{IsSuccess:!1,ErrorCode:Oa}))}WCc(){return Promise.resolve(Object.assign(new d,{IsSuccess:!1,ErrorCode:"authTokenStrategy_loginNotSupported",ErrorMessage:"This Token Strategy does not support login flow, TryLogin could not be completed"}))}xBc(){return!1}Nxb(){return this.NYa}}Object(u.a)(w,"ParentFrameTokenStrategy",null,[292]);var B=a(84),A=a(848),y=a(187);class x{constructor(){this.reject=this.resolve=null;this.startTime=0;this.gPf=this.Fxe=null}}Object(u.a)(x,"PromiseWrapper",
null,[]);class F{constructor(V=0){this.oC=0;this.Klb=!1;this.Qm=new y.a;this._timeout=V}enqueue(V){return new Promise((ra,N)=>{this.Qm.add(Object.assign(new x,{gPf:V,resolve:ra,reject:N}));this.process()})}process(){if(this.Klb||this.oC===this.Qm.count)return!1;const V=this.Qm.oa(this.oC++);try{this.Klb=!0,V.gPf().then(ra=>{this.Klb=!1;this.g4c(V,ra,null,!0)}).catch(ra=>{this.Klb=!1;this.g4c(V,null,ra,!1)})}catch(ra){this.Klb=!1,this.g4c(V,null,ra,!1)}return!0}g4c(V,ra,N,ea){if(ea){const Ba=()=>{V.resolve(ra);
this.process()};0<this._timeout?window.setTimeout(()=>{Ba()},this._timeout):Ba()}else{const Ba=()=>{V.reject(N);this.process()};0<this._timeout?window.setTimeout(()=>{Ba()},this._timeout):Ba()}}}Object(u.a)(F,"PromiseQueue",null,[]);class I{constructor(){this.correlationId=this.resolve=null}}Object(u.a)(I,"ResolveWithCorrelation",null,[]);var L=a(82),X=a(146),P=a(820),G=a(164);class C extends X.a{constructor(V,ra,N,ea,Ba,ka,Ka){super(!1,!1,!0);this.d9d=this.S1=null;this.qY=V;this.fCg=N;this.$v=ea;
this.PFg=Ba;this.HEa=ka;this.it=document.createElement("iframe");this.it.id="SharedAuthInteractiveFrame";this.it.setAttribute("name","SharedAuthInteractiveFrame");this.it.setAttribute("title","SharedAuthInteractiveFrame");this.it.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups");this.it.style.border="0";this.it.style.height="48px";this.it.style.width="190px";$addHandler(this.it,"error",Object(B.a)(this,this.UZi,"onSharedAuthFrameError"));V=String.format("{0}{1}{2}{3}{4}{5}{6}{7}{8}",
this.qY,ra,"?replyUrl=",window.location.protocol,"//",window.location.host,"&interactive=1","&WacUserType=",v.AFrameworkApplication.userType);Ka&&(V+="&vnext=1");this.it.src=V;this.Mvg=new Promise(Oa=>{this.d9d=Oa});this.e9d=!1}Nzc(){this.S1={["id"]:"SharedAuthConsentDialog",["bodyControls"]:{["promptMessage"]:this.fCg,["errorText"]:CommonUIStrings.l_InternalError,["rtl"]:v.AFrameworkApplication.isRtl,["frameLoaded"]:!1,["createFrame"]:Object(B.a)(this,this.tdh,"createFrame"),["resolveDialogStyles"]:this.d9d}};
this.Rb=5;this.initializeAndShow(CommonUIStrings.l_SignIn,Object(B.a)(this,this.ADj,"sharedAuthConsentDialogHandler"),this.S1)}lEc(V=!1,ra=!1,N=5){this.S1&&this.S1.bodyControls&&(V!==Object(L.a)(Object,this.S1.bodyControls).frameLoaded&&(Object(L.a)(Object,this.S1.bodyControls).frameLoaded=V),ra!==Object(L.a)(Object,this.S1.bodyControls).frameLoadSuccess&&(Object(L.a)(Object,this.S1.bodyControls).frameLoadSuccess=ra),N!==this.S1.dialogButtonsOption&&(this.S1.dialogButtonsOption=null,this.Rb=N),this.update(this.S1))}VJj(V,
ra){const N=new P.a(G.a.EDj);N.Values={["signInLabel"]:CommonUIStrings.l_SignIn,["cancelLabel"]:CommonUIStrings.l_DialogCancel,["rtl"]:v.AFrameworkApplication.isRtl,["messageCorrelationId"]:V,["dialogStyles"]:ra};this.$v.DSa(N,this.it.contentWindow,this.qY)}mZe(){this.lEc(!0,!1,6)}get s6f(){return this.it}get Ymh(){return this.Mvg.then(V=>{this.e9d=!0;return V})}get Zmh(){return this.e9d}UZi(){this.mZe()}tdh(){return this.it}ADj(V){0===V&&(this.PFg.reject(Object.assign(new d,{ErrorCode:"UserCancelled",
ErrorMessage:"The interactive flow was cancelled by the user"})),this.HEa(null))}}Object(u.a)(C,"SharedAuthConsentDialog",X.a,[314]);var H=a(1239),J=a(97),M=a(135),S=a(40),W=a(170),O=a(189);class T{constructor(){this.it=null;this.TUb=0;this.Ukb=this.bZa=this.sHc=this.HEa=this.tM=this.Eme=null;this.$v=new H.a(null,null);this.sZb=v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SharedAuthVNext",!1);this.NYa="SharedAuthTokenStrategy "+(this.sZb?"BrowserAuth 1.20210701.2/MSAL 2.11.0":
"BrowserAuth 1.20210426.1/MSAL 2.11.0");this.qY=t.a.CDj;this.Hke=t.a.BDj;this.Q9d=t.a.enableConsoleLogging;this.cwg=v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.OAuthPopupFlashEnabled",!1);this.qEg=v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.OAuthSkipUpnCheckEnabled",this.sZb);this.Gra={};this.Byg=new F(1500)}Nxb(){return this.NYa}initialize(){var {OAuthManager:V}=a(840);if("loadFrame"in this.Gra)return this.Gra.loadFrame.Fxe;
if(!this.qY)return J.Health.instance.recordKpiFailure(V.kpiName,"SharedAuthFrameOriginNotSet",!1,!1,null),c.ULS.sendTraceTag(562381581,3E3,10,"SharedAuthTokenStrategy Init failed: No Shared Frame Origin Path"),Promise.reject(1);V=this.eBc("loadFrame");this.TUb=S.a.Ud();var ra=this.qY+this.Hke+"?replyUrl="+window.location.protocol+"//"+window.location.host+"&usid="+v.AFrameworkApplication.userSessionId+"&WacUserType="+v.AFrameworkApplication.userType;this.sZb&&(ra+="&vnext=1");this.it=document.createElement("iframe");
this.ohi(this.it);this.it.style.cssText="height:0;width:0;display:none;";this.it.id="SharedAuthFrame";this.it.setAttribute("name","SharedAuthFrame");this.it.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups");this.it.setAttribute("title","SharedAuthFrame");this.it.src=ra;document.body.appendChild(this.it);ra=S.a.Ud()-this.TUb;c.ULS.sendTraceTag(573112899,3E3,50,"SharedAuthTokenStrategy Create: Frame Appended to Document. E/T:[{0}]. sharedAuthFrame.Src={1}",ra,this.it.src);
return V}Rlc(V){this.sHc=V;const ra=new P.a(G.a.v6f);ra.Values=this.hxe(V);V=this.eBc("initFrame");this.$v.DSa(ra,this.it.contentWindow,this.qY);c.ULS.sendTraceTag(573112900,3E3,50,"SharedAuthTokenStrategy Init: Called package initialize.");return V}UL(V,ra,N,ea,Ba,ka){const Ka=new P.a(G.a.FDj),Oa=this.C6e();Ka.Values=this.Lfg(V,ra,N,ea,Ba,ka,Oa);V=this.eBc(Oa);ea&&v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SharedAuthInteractiveConsentUI",!1)?this.Byg.enqueue(()=>
new Promise(wa=>{this.RVj(ka,Ka,wa,Oa)})):(this.$v.DSa(Ka,this.it.contentWindow,this.qY),c.ULS.sendTraceTag(573112901,3E3,50,"SharedAuthTokenStrategy TryGetToken: Called TryGetToken for app {0}",ra));return V}RVj(V,ra,N,ea){const Ba=this.Gra[ea];Ba&&(this.bZa=ra,this.HEa=Object.assign(new I,{resolve:N,correlationId:ea}),this.tM=new C(this.qY,this.Hke,V,this.$v,Ba,N,this.sZb),this.tM.Nzc())}C6e(){return W.a.create().toString()}Lfg(V,ra,N,ea,Ba,ka,Ka){const Oa={};Oa.appName=V;Oa.appId=ra;Oa.target=
N;Oa.withPopup=ea;Oa.claims=Ba;Oa.promptMessage=ka;Oa.messageCorrelationId=Ka;return Oa}ohi(V){$addHandler(V,"load",Object(B.a)(this,this.PUi,"onIFrameLoaded"));$addHandler(V,"error",Object(B.a)(this,this.Apc,"onIFrameError"));this.$v.CGa(this.qY);this.$v.uo(G.a.y6f);this.$v.em(G.a.y6f,Object(B.a)(this,this.jZi,"onScriptLoaded"));this.$v.uo(G.a.x6f);this.$v.em(G.a.x6f,Object(B.a)(this,this.iZi,"onScriptInitialized"));this.$v.uo(G.a.t6f);this.$v.em(G.a.t6f,Object(B.a)(this,this.qUi,"onGetTokenResponse"));
this.$v.uo(G.a.z6f);this.$v.em(G.a.z6f,Object(B.a)(this,this.iWi,"onLoginResponse"));this.$v.uo(G.a.w6f);this.$v.em(G.a.w6f,Object(B.a)(this,this.lVi,"onInteractiveFlowReady"));this.$v.uo(G.a.u6f);this.$v.em(G.a.u6f,Object(B.a)(this,this.IUi,"onHideDialog"));this.$v.uo(G.a.r6f);this.$v.em(G.a.r6f,Object(B.a)(this,this.xPi,"onCloseDialog"))}eBc(V){const ra=new x;ra.startTime=S.a.Ud();const N=new Promise((ea,Ba)=>{ra.resolve=ea;ra.reject=Ba});ra.Fxe=N;this.Gra[V]=ra;return N}PUi(){const V=S.a.Ud()-
this.TUb;c.ULS.sendTraceTag(572346566,3E3,50,"WACOAuth.aspx iFrame loaded successfully. E/T:[{0}]",V)}Apc(V){const {OAuthManager:ra}=a(840),N=S.a.Ud()-this.TUb,ea=Object.assign(new O.a,{durationMs:N});J.Health.instance.recordKpiFailure(ra.kpiName,"SharedAuthWACOAuthAspxFrameError",!1,!0,ea);c.ULS.sendTraceTag(572346567,3E3,10,"WACOAuth.aspx iFrame failed to load after {0} ms: {1}",N,this.Q9d?JSON.stringify(V):"")}jZi(V){const {OAuthManager:ra}=a(840),N=this.Gra.loadFrame;var ea=S.a.Ud()-N.startTime,
Ba=V.Values.AuthLibrary.toString();V=V.Values.Success.toString();c.ULS.sendTraceTag(573112902,3E3,50,"SharedAuthTokenStrategy OnScriptLoaded. Success={0} AuthLibrary={1} E/T: [{2}]",V,Ba,ea);Ba&&(this.NYa="SharedAuthTokenStrategy "+Ba);Ba=Boolean.parse(V);Ba||(V=M.a.hs(),void 0!==V&&null!==V&&(V.set("AuthLibrary",this.Nxb()),ea=Object.assign(new O.a,{durationMs:ea,extendedProperties:V}),J.Health.instance.recordKpiFailure(ra.kpiName,"SharedAuthStrategyInitFailed",!1,!0,ea)));N.resolve(Ba?0:1)}iZi(V){if(V.Values.interactive&&
this.bZa&&this.bZa.Values.messageCorrelationId){const N=this.bZa.Values.messageCorrelationId.toString();if(V.Values.interactive&&this.tM){this.tM.Ymh.then(ea=>{this.$v.DSa(this.bZa,this.tM.s6f.contentWindow,this.qY);this.tM.VJj(N,ea);this.tM.lEc(!0,!0);this.bZa=null});return}}V=this.Gra.initFrame;const ra=S.a.Ud()-V.startTime;c.ULS.sendTraceTag(573112903,3E3,50,"SharedAuthTokenStrategy OnScriptInitialized. E/T: [{0}]",ra);V.resolve(0)}qUi(V){if(V.Values.messageCorrelationId&&V.Values.messageCorrelationId.toString()){var ra=
V.Values.messageCorrelationId.toString(),N=this.Gra[ra];if(N){var ea=S.a.Ud()-N.startTime;c.ULS.sendTraceTag(573112906,3E3,50,"SharedAuthTokenStrategy OnGetTokenResponse. E/T: [{0}]",ea);V.Values.isSuccess&&V.Values.isSuccess?N.resolve(V.Values.response):N.reject(V.Values.response);this.agg(ra)}else c.ULS.sendTraceTag(573112905,3E3,10,"SharedAuthTokenStrategy OnGetTokenResponse called with an unregistered messageCorrelationId")}else c.ULS.sendTraceTag(573112904,3E3,10,"SharedAuthTokenStrategy OnGetTokenResponse called without valid messageCorrelationId")}lVi(){if(this.tM.Zmh)this.tM.mZe();
else if(this.sHc&&this.tM){const V=new P.a(G.a.v6f);V.Values=this.hxe(this.sHc,!0);this.$v.DSa(V,this.tM.s6f.contentWindow,this.qY)}}IUi(){this.tM&&this.tM.Wyb()}xPi(V){V.Values.cancelled&&V.Values.cancelled&&V.Values.messageCorrelationId&&this.agg(V.Values.messageCorrelationId.toString());this.tM&&this.tM.hide()}hxe(V,ra=!1){const N={};N.appIds=this.rPh();N.upn=V.loginHint;N.authority=V.authority;N.authorityType=b(f,V.authorityType);N.tenantId=V.tenantId;N.correlationId=v.AFrameworkApplication.userSessionId;
N.enableConsoleLogging=this.Q9d;N.enablePopupFlash=this.cwg;N.skipUpnCheck=this.qEg;N.interactive=ra;return N}rPh(){const V=[],ra=t.a.KYc;for(let N in ra)Array.add(V,ra[N]);return V}WCc(V,ra,N,ea,Ba,ka){const Ka=new P.a(G.a.DDj),Oa=this.C6e();Ka.Values=this.Lfg(V,ra,N,ea,Ba,ka,Oa);this.Eme=Ka;V=this.eBc(Oa);c.ULS.sendTraceTag(555049437,3E3,50,"SharedAuthTokenStrategy TryLogin: Called TryLogin for app {0}",ra);this.EHj();return V}xBc(){return!0}EHj(){this.Ukb||(this.Ukb=new A.a(CommonUIStrings.l_WAC_OAuth_CompleteSignIn_Title,
CommonUIStrings.l_WAC_OAuth_CompleteSignIn_Body,null),this.Ukb.id=16,this.Ukb.Jrd=!1,this.Ukb.addButton(CommonUIStrings.l_WAC_OAuth_CompleteSignIn_Button,()=>{c.ULS.sendTraceTag(527827290,3E3,50,"SharedAuthTokenStrategy TryLogin: User Clicked Login");this.$v.DSa(this.Eme,this.it.contentWindow,this.qY)},CommonUIStrings.l_WAC_OAuth_CompleteSignIn_Button,!0),c.ULS.sendTraceTag(555049438,3E3,10,"Failed to add entry to business bar. Login message could not be shown to user."))}iWi(V){if(V.Values.messageCorrelationId&&
V.Values.messageCorrelationId.toString()){var ra=this.Gra[V.Values.messageCorrelationId.toString()];if(ra){var N=S.a.Ud()-ra.startTime;c.ULS.sendTraceTag(555049441,3E3,50,"SharedAuthTokenStrategy OnLoginResponse. E/T: [{0}]",N);V.Values.isSuccess&&V.Values.isSuccess?ra.resolve(V.Values.response):ra.reject(V.Values.response)}else c.ULS.sendTraceTag(555049440,3E3,10,"SharedAuthTokenStrategy OnLoginResponse called with an unregistered messageCorrelationId")}else c.ULS.sendTraceTag(555049439,3E3,10,"SharedAuthTokenStrategy OnLoginResponse called without valid messageCorrelationId")}agg(V){this.HEa&&
this.HEa.correlationId===V&&(this.HEa.resolve(null),this.HEa=null)}}Object(u.a)(T,"SharedAuthTokenStrategy",null,[292]);class Y{constructor(V){this.JRc=V;this.NYa="UnsupportedAuthTokenStrategy Reason="+e.a[this.JRc]}initialize(){return Promise.resolve(0)}Rlc(){return Promise.resolve(0)}UL(){return Promise.resolve(Object.assign(new d,{IsSuccess:!1,ErrorCode:e.a[this.JRc],ErrorMessage:"Unable to get a token. Reason: ["+e.a[this.JRc]+"]"}))}WCc(){return Promise.resolve(Object.assign(new d,{IsSuccess:!1,
ErrorCode:"authTokenStrategy_loginNotSupported",ErrorMessage:"This Token Strategy does not support login flow, TryLogin could not be completed"}))}xBc(){return!1}Nxb(){return this.NYa}}Object(u.a)(Y,"UnsupportedAuthTokenStrategy",null,[292]);var va=a(718);a.d(D,"OAuthManager",function(){return ca});class ca{constructor(V=null){this.VS=0;this.rP=null;this.OCg=0;const ra=S.a.Ud();this.ryg=this.lmh(V).then(N=>N?this.Ffi():(c.ULS.sendTraceTag(527827277,3E3,15,"DetermineAuthLibrary failed leaving {0} in {1} ms, all future TryGetToken requests will fail.",
this.Bv(),Math.floor(S.a.Ud()-ra)),N=M.a.hs(),void 0!==N&&null!==N&&(N.set("AuthLibrary",this.Bv()),N=Object.assign(new O.a,{durationMs:Math.floor(S.a.Ud()-ra),extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"StrategyPickFailed",!1,!0,N)),Promise.resolve(1))).then(N=>0!==N?Promise.resolve(N):this.sAi())}mmh(){var V=t.a.NIi;V&&0<V.length?(this.VS=1,this.rP=new h(V)):v.AFrameworkApplication.fa.qa("IsO365ConsumerHost")||v.AFrameworkApplication.fa.qa("IsO365CommercialHost")?v.AFrameworkApplication.fa.qa("IsAnonymousUser")?
(this.VS=2,this.rP=new Y(this.VS)):(V=m.a.getAuthContext().loginHint)&&V.length?t.a.bzb?(this.VS=1,this.rP=new w):(this.VS=1,this.rP=new T):(this.VS=3,this.rP=new Y(this.VS)):(this.VS=4,this.rP=new Y(this.VS))}Bv(){return this.rP?this.rP.Nxb()||"Unknown":"None"}lmh(V=null){c.ULS.sendTraceTag(562128578,3E3,50,"Creating OAuthManager.");const ra=S.a.Ud();return v.AFrameworkApplication.fa.Qgd().then(N=>{N?(this.mmh(),V&&(this.rP=V),c.ULS.sendTraceTag(42084323,3E3,50,"Creation succeeded OAuthManager successfully in {4} ms with clientVer={0}, appVer={1}, docVer={2}, strategy={3}",
t.a.clientVersion,t.a.appVersion,t.a.jph,this.Bv(),Math.floor(S.a.Ud()-ra))):c.ULS.sendTraceTag(562128579,3E3,15,"Creation failed for OAuthManager, unable to get app settings after {0} ms, all future TryGetToken requests will fail.",Math.floor(S.a.Ud()-ra));return Promise.resolve(N)},()=>{c.ULS.sendTraceTag(562128580,3E3,15,"Creation failed for OAuthManager, unable to get app settings after {0} ms, all future TryGetToken requests will fail.",Math.floor(S.a.Ud()-ra));return Promise.resolve(!1)})}Ffi(){c.ULS.sendTraceTag(573390991,
3E3,50,"Initializing {0}",this.Bv());const V=S.a.Ud();return l.get(this.rP.initialize(),2,t.a.NId).then(ra=>{if(0===ra)c.ULS.sendTraceTag(42084353,3E3,50,"Initialization succeeded for {0} in {1} ms.",this.Bv(),Math.floor(S.a.Ud()-V));else if(1===ra){c.ULS.sendTraceTag(527827291,3E3,15,"Initialization failed for {0} in {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-V));var N=M.a.hs();void 0!==N&&null!==N&&(N.set("AuthLibrary",this.Bv()),N=Object.assign(new O.a,{durationMs:Math.floor(S.a.Ud()-
V),extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"StrategyInitFailed",!1,!0,N))}else 2===ra&&(c.ULS.sendTraceTag(42267908,3E3,15,"Initialization timed out for {0} after {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-V)),N=M.a.hs(),void 0!==N&&null!==N&&(N.set("AuthLibrary",this.Bv()),N=Object.assign(new O.a,{durationMs:Math.floor(S.a.Ud()-V),extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"StrategyInitTimedOut",!1,!0,N)));
return Promise.resolve(ra)},()=>{c.ULS.sendTraceTag(574239256,3E3,15,"Initialization failed for {0} after {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-V));return Promise.resolve(1)})}sAi(){c.ULS.sendTraceTag(562128581,3E3,50,"Loading {0}",this.Bv());const V=S.a.Ud();return l.get(this.rP.Rlc(m.a.getAuthContext()),2,t.a.NId).then(ra=>{if(0===ra)c.ULS.sendTraceTag(562128582,3E3,50,"Load succeeded for {0} in {1} ms.",this.Bv(),Math.floor(S.a.Ud()-V));else if(1===ra){c.ULS.sendTraceTag(562128583,
3E3,15,"Load failed for {0} after {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-V));var N=M.a.hs();void 0!==N&&null!==N&&(N.set("AuthLibrary",this.Bv()),N=Object.assign(new O.a,{durationMs:Math.floor(S.a.Ud()-V),extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"StrategyLoadFailed",!1,!0,N))}else 2===ra&&(c.ULS.sendTraceTag(558469660,3E3,15,"Load timed out for {0} after {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-
V)),N=M.a.hs(),void 0!==N&&null!==N&&(N.set("AuthLibrary",this.Bv()),N=Object.assign(new O.a,{durationMs:Math.floor(S.a.Ud()-V),extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"StrategyLoadTimedOut",!1,!0,N)));return Promise.resolve(ra)},()=>{c.ULS.sendTraceTag(562128584,3E3,15,"Load failed for {0} after {1} ms, all future TryGetToken requests will fail.",this.Bv(),Math.floor(S.a.Ud()-V));return Promise.resolve(1)})}UL(V,ra,N=null){return this.UCc(V,ra,!1,null,"",N)}Mfg(V,ra,
N,ea,Ba=null){return this.UCc(V,ra,!0,N,ea,Ba)}UCc(V,ra,N,ea,Ba,ka,Ka=0){Ka+=1;c.ULS.sendTraceTag(42084352,3E3,50,"OAuthManager TryGetToken(appName={0}, target={1}) called.  Using strategy {2} - attempt {3}",V,this.jSa(V,ra),this.Bv(),Ka);var Oa=M.a.hs();void 0!==Oa&&null!==Oa&&(Oa.set("AuthLibrary",this.Bv()),Oa.set("AppName",V),Oa.set("Target",this.jSa(V,ra)),J.Health.instance.recordKpiUsage(ca.kpiName,0,"WacOAuthFC",Oa));if(!t.a.isEnabled){var wa;return this.Lwd((wa=new d,wa.IsSuccess=!1,wa.Token=
null,wa.ErrorCode="NotEnabled",wa.ErrorMessage="OAuthManager is disabled.",wa),V)}const qa=t.a.KYc[V];if(void 0===qa||null===qa){c.ULS.sendTraceTag(41961345,3E3,15,"Auth context not found. Ensure that your app [{0}] is listed in the OAuthManagerApplications setting.",V);var aa;return this.Lwd((aa=new d,aa.IsSuccess=!1,aa.Token=null,aa.ErrorCode="DisallowedApp",aa.ErrorMessage="Disallowed appName: "+V,aa),V)}const ia=S.a.Ud(),Ha=this;Oa=this.ryg.then(Za=>Ha.oli(V,qa,ra,N,ea,Ba,ka,Za));wa=N?0:t.a.NId;
let Z;aa=(Z=new d,Z.IsSuccess=!1,Z.Token=null,Z.ErrorCode="authTokenStrategy_timeout",Z.ErrorMessage="Auth Strategy timed out after ["+wa+"] ms when fetching token",Z);let la=this,Xa=this;return l.get(Oa,aa,wa).then(Za=>Ka<=ca.tHi&&(Za.ErrorCode===ca.Sdg||Za.ErrorCode===ca.yOj)?(c.ULS.sendTraceTag(573175516,3E3,50,"TryGetToken attempt {0} timed out after {1} ms - retrying",Ka,Math.floor(S.a.Ud()-ia)),la.UCc(V,ra,N,ea,Ba,ka,Ka)):Za.ErrorCode===ca.Inf&&!N&&(c.ULS.sendTraceTag(561517645,3E3,50,"TryGetToken attempt {0} failed with ITP error.  3P Cookies are [{1}]. Retry: [{2]}]",
Ka,ca.IPe),ca.msh&&la.rP.xBc()&&la.rP.WCc(V,qa,ra,N,ea,Ba).then(xa=>Promise.resolve(la.hmc(xa,V,ra,qa,ia))).catch(()=>{let xa;const fa=(xa=new d,xa.IsSuccess=!1,xa.Token=null,xa.ErrorCode="authTokenStrategy_failure",xa.ErrorMessage="LoginPopup failed, GetToken could not be called",xa);return Promise.resolve(la.hmc(fa,V,ra,qa,ia))}),ca.IPe)?la.UCc(V,ra,!0,ea,Ba,ka,Ka):Promise.resolve(la.hmc(Za,V,ra,qa,ia))).catch(()=>{let Za;const xa=(Za=new d,Za.IsSuccess=!1,Za.Token=null,Za.ErrorCode="authTokenStrategy_failure",
Za.ErrorMessage="Auth Strategy failed with an unknown error",Za);return Promise.resolve(Xa.hmc(xa,V,ra,qa,ia))})}oli(V,ra,N,ea,Ba,ka,Ka,Oa){return 1===Oa||2===Oa?this.Lwd(Object.assign(new d,{IsSuccess:!1,Token:null,ErrorCode:1===Oa?"InitFailed":"InitTimedOut",ErrorMessage:"Auth Strategy Failed to Init or Load"}),V):this.rP.UL(V,ra,N,ea,Ba,ka,Ka).then(wa=>Promise.resolve(this.sxf(wa,!0,V))).catch(wa=>Promise.resolve(this.sxf(wa,!1,V)))}hmc(V,ra,N,ea,Ba){const ka={};Ba=S.a.Ud()-Ba;ka.IsSuccess=V.IsSuccess;
ka.ErrorCode=V.IsSuccess?"Success":V.ErrorCode||"";ka.ErrorMessage=V.IsSuccess?"Success":this.jSa(ra,V.ErrorMessage||"");ka.Target=this.jSa(ra,N||"");ka.TimeInMS=Math.floor(Ba);ka.AuthLibrary=this.Bv();ka.AppName=ra;ka.AuthorityType=b(f,m.a.Tbc());ka.UserType=this.U6h(m.a.getAuthContext());ka.IsAuthSupportedInSession=e.a[this.VS];ka.RequestCount=++this.OCg;ka.AppId=ea;c.ULS.sendTraceTag(593863640,3E3,50,JSON.stringify(ka));V.IsSuccess||(N=M.a.hs(),void 0!==N&&null!==N&&(N.set("AppName",ra),N.set("AuthLibrary",
this.Bv()),N.set("ErrorCode",V.ErrorCode),N.set("ErrorMessage",this.jSa(ra,V.ErrorMessage)),ra=Object.assign(new O.a,{durationMs:Ba,extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"TryGetTokenFailure",!1,!0,ra)));return V}Lwd(V,ra){c.ULS.sendTraceTag(578435090,3E3,15,"OAuthManager failed without invoking GetToken. AppName: '{0}', Reason: '{1}'",ra,this.jSa(ra,V.ErrorMessage));const N=M.a.hs();void 0!==N&&null!==N&&(N.set("AppName",ra),N.set("AuthLibrary",this.Bv()),N.set("ErrorCode",
V.ErrorCode),N.set("ErrorMessage",this.jSa(ra,V.ErrorMessage)),ra=Object.assign(new O.a,{extendedProperties:N}),J.Health.instance.recordKpiFailure(ca.kpiName,"FailureBeforeGetToken",!1,!0,ra));return Promise.resolve(V)}Jif(V){return V===va.a.gCc}jSa(V,ra){return this.Jif(V)&&ra?"REDACTED":ra}U6h(V){return v.AFrameworkApplication.fa.qa("IsAnonymousUser")?"anonymous":!V.loginHint||1>V.loginHint.length?"empty":-1<V.loginHint.indexOf("guest#")?"guest":-1<V.loginHint.indexOf("ext#")?"external":0>V.upn.indexOf("@")?
"no-at":"supported"}cNa(){return 1===this.VS}sxf(V,ra,N){let ea=null,Ba=null,ka=null,Ka=null;V?V.ErrorCode||V.ErrorMessage?(Ba=V.ErrorCode?V.ErrorCode:ca.NVe,ka=V.ErrorMessage?V.ErrorMessage:"No message"):V.Token?ra?ea=V.Token:(Ba=ca.Xgj,ka="A rejected promise returned a token."):(Ba=ca.NVe,ka=JSON.stringify(V)):(Ba=ca.gLi,ka="No result came from Auth Token Strategy");V&&V.Telemetry&&!this.Jif(N)&&(Ka=V.Telemetry,c.ULS.sendTraceTag(579166408,3E3,50,JSON.stringify(Ka)));if(Ba===ca.YIi||Ba===ca.gTj)Ba=
ca.Sdg,ka="Auth Library Timed Out";Ba===ca.BUg&&-1<ka.indexOf(ca.IGg)&&(Ba=ca.Inf);if(Ba||ka)ea=null;return Object.assign(new d,{IsSuccess:!!ea,Token:ea,ErrorCode:Ba,ErrorMessage:ka,Telemetry:Ka})}static get IPe(){return v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.OAuthInteractiveFallbackEnabled",!1)}static get msh(){return v.AFrameworkApplication.fa.getBooleanFeatureGate("Microsoft.Office.SharedOnline.OAuthLoginFlowEnabled",!1)}}ca.gTj="token_renewal_error";ca.NVe=
"Exception";ca.gLi="NoResult";ca.Xgj="RejectToken";ca.YIi="monitor_window_timeout";ca.Sdg="Timeout";ca.yOj="authTokenStrategy_timeout";ca.BUg="login_required";ca.IGg="AADSTS50058";ca.Inf="Cookies Disabled";ca.kpiName="OAuthManager";ca.tHi=2;Object(u.a)(ca,"OAuthManager",null,[236])},920:function(u,D,a){a.d(D,"a",function(){return c});u=a(0);var c;(function(b){b[b.unknown=0]="unknown";b[b.supported=1]="supported";b[b.userUnsupportedAnonymous=2]="userUnsupportedAnonymous";b[b.userUnsupportedNoLoginHint=
3]="userUnsupportedNoLoginHint";b[b.hostUnsupported=4]="hostUnsupported"})(c||(c={}));Object(u.b)("SupportStatus",c)}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDSEsNext.oauth.js.map/d1f1bb8d4270ad7c106f99178dc3e23f/EwaDSEsNext.oauth.js.map