var o=Object.defineProperty;var a=(t,e)=>o(t,"name",{value:e,configurable:!0});import{c as r}from"./dom.utils-bd8c7a66.js";import{j as n}from"./jsx-runtime-bb315772.js";import{Q as i}from"./stories.settings-7ac24d87.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function c({children:t,type:e,qa:s}){const l=r({"a-label":!0,[`a-label--${[e]}`]:!!e});return n("span",{className:l,"data-qa":s,children:t})}a(c,"Label");const f={title:"React/Atoms/Label",component:c,parameters:{docs:{description:{component:"A label is a small alphabetical (letters only) label component that accompanies other elements, such as text in tables, lists, etc. and is primarily used to indicate a status associated with the accompanying element."}}},args:{children:"default label"},argTypes:{type:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["default","primary","success","warning","danger"],description:"Sets the type for the component. Can be omitted for default."},children:{control:"text",table:{type:{summary:"string"}},description:"Sets the label text."},qa:i}},h="",g=["label"];export{g as __namedExportsOrder,f as default,h as label};
//# sourceMappingURL=Label.stories-5bbf7233.js.map