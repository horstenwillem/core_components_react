var T=Object.defineProperty;var f=(t,r)=>T(t,"name",{value:r,configurable:!0});import{c as x}from"./dom.utils-bd8c7a66.js";import{S,D as U,T as D,c as l,a as M}from"./layout.settings-9902fce9.js";import{a as B}from"./render.utils-ff559992.js";import{r as H}from"./index-d23035ce.js";import{l as _}from"./log.utils-f56af116.js";import{a as $}from"./jsx-runtime-bb315772.js";function j({addOn:t,ariaLabel:r,children:h,className:p,disabled:m,emphasis:o,fullWidth:g,htmlType:b,id:y,onClick:E,qa:v,size:i,theme:s,title:A,...e}){var a,c;const u={"a-button":!0,[`a-button--${S[i||U]}`]:!!i,[`a-button--${s}`]:!!s&&!(s===D.NEUTRAL&&o===l.HIGH),"a-button--outlined":o===l.MEDIUM,"a-button--text":o===l.LOW,"a-button--full":!!g,"has-icon":(t==null?void 0:t.type)==="icon"&&!["left","right"].includes((t==null?void 0:t.align)||""),"has-icon-left":(t==null?void 0:t.type)!=="avatar"&&(t==null?void 0:t.align)==="left","has-icon-right":(t==null?void 0:t.type)!=="avatar"&&(t==null?void 0:t.align)==="right"||(t==null?void 0:t.type)==="spinner"&&(t==null?void 0:t.align)!=="left","has-avatar":(t==null?void 0:t.type)==="avatar","has-avatar-with-inset":(t==null?void 0:t.type)==="avatar"&&(!!((a=t.avatarProps)!=null&&a.letter)||!!((c=t.avatarProps)!=null&&c.image)),[`${p}`]:!!p},I=x(u);return H.exports.useEffect(()=>{(t==null?void 0:t.type)==="icon"&&!["left","right"].includes((t==null?void 0:t.align)||"")&&!r&&_("Using an Icon Button without an aria-label")},[t,r]),$("button",{id:y,className:I,title:A,onClick:E,type:b,"aria-label":r,"data-qa":v,disabled:m,...e["aria-haspopup"]?{"aria-haspopup":!0}:{},...e["aria-expanded"]===!0||e["aria-expanded"]===!1?{"aria-expanded":e["aria-expanded"]}:{},children:[B(t,i),u["has-icon"]?null:h]})}f(j,"Button");j.defaultProps={htmlType:"button",emphasis:M};export{j as B};
//# sourceMappingURL=Button-7c46b3a8.js.map