import{r as i,f as b,j as e}from"./index-C2-WljFT.js";const c={"contact-container":"_contact-container_1uoix_1","submit-btn":"_submit-btn_1uoix_25"},j=()=>{const[s,r]=i.useState({name:"",surname:"",email:"",message:""}),[x,o]=i.useState(""),{lang:t}=b(),a=n=>{const{name:m,value:u}=n.target;m==="message"&&u.length>800?o("Message should not be longer than 800 letters"):o(""),r(g=>({...g,[m]:u}))},l=n=>{n.preventDefault(),console.log(s),r({name:"",surname:"",email:"",message:""})};return e.jsx("div",{className:c["contact-container"],children:e.jsxs("form",{id:"nameform",onSubmit:l,children:[e.jsxs("label",{children:[t==="eng"?"Enter your name:":"სახელი",e.jsx("input",{type:"text",name:"name",value:s.name,onChange:a})]}),e.jsx("br",{}),e.jsxs("label",{children:[t==="eng"?"Enter your surname:":"გვარი",e.jsx("input",{type:"text",name:"surname",value:s.surname,onChange:a})]}),e.jsx("br",{}),e.jsxs("label",{children:[t==="eng"?"Enter your email:":"მეილი",e.jsx("input",{type:"email",name:"email",value:s.email,onChange:a})]}),e.jsx("br",{}),e.jsxs("label",{children:[t==="eng"?"Message":"მესიჯი",e.jsx("textarea",{name:"message",value:s.message,onChange:a,onKeyDown:n=>{n.key==="Enter"&&l(n)}})]}),e.jsx("p",{style:{color:"red"},children:x}),e.jsx("br",{}),e.jsx("button",{className:c["submit-btn"],type:"submit",value:"Submit",children:t==="eng"?"Send":"გაგზავნა"})]})})},d=()=>e.jsx("div",{children:e.jsx(j,{})});export{d as default};
