import{t as T}from"./constance-0ce55438.js";import{_ as c}from"./extends-98964cd2.js";import{j as i,u as p,T as E,_,a as h}from"./createTheme-82787413.js";import{r as m}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const v=m.createContext(null),d=v;function l(){return m.useContext(d)}const g=typeof Symbol=="function"&&Symbol.for,y=g?Symbol.for("mui.nested"):"__THEME_NESTED__";function j(e,t){return typeof t=="function"?t(e):c({},e,t)}function P(e){const{children:t,theme:o}=e,n=l(),s=m.useMemo(()=>{const r=n===null?o:j(n,o);return r!=null&&(r[y]=n!==null),r},[o,n]);return i.jsx(d.Provider,{value:s,children:t})}const a={};function f(e,t,o,n=!1){return m.useMemo(()=>{const s=e&&t[e]||t;if(typeof o=="function"){const r=o(s),u=e?c({},t,{[e]:r}):r;return n?()=>u:u}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,n])}function $(e){const{children:t,theme:o,themeId:n}=e,s=p(a),r=l()||a,u=f(n,s,o),x=f(n,r,o,!0);return i.jsx(P,{theme:x,children:i.jsx(E.Provider,{value:u,children:t})})}const b=["theme"];function M(e){let{theme:t}=e,o=_(e,b);const n=t[h];return i.jsx($,c({},o,{themeId:n?h:void 0,theme:n||t}))}const R={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[e=>M({theme:T,children:e()})]};export{R as default};
//# sourceMappingURL=preview-31074202.js.map
