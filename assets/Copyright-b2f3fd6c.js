var m=Object.defineProperty;var e=(t,s)=>m(t,"name",{value:s,configurable:!0});import{r as u}from"./index-d23035ce.js";import{c as h}from"./dom.utils-1db2b487.js";import{a as g,j as i}from"./jsx-runtime-bb315772.js";function x({sign:t,label:s,link:n,forImage:a,qa:p}){const[l,r]=u.exports.useState(!1),o=e(()=>a&&r(!0),"expand"),c=e(()=>a&&r(!1),"shrink"),d=h({"a-copyright":!0,"m-image__copyright":!!a});return g(`${n?"a":"div"}`,{href:n,className:d,"aria-expanded":!!(a&&l),"data-qa":p,onFocus:o,onBlur:c,onMouseEnter:o,onMouseLeave:c,children:[i("span",{className:"a-copyright__sign",children:t}),s?i("span",{className:"a-copyright__label",children:s}):null]})}e(x,"Copyright");x.defaultProps={forImage:!0,sign:"©"};export{x as C};
//# sourceMappingURL=Copyright-b2f3fd6c.js.map