(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r);n(13),n(15);var o=n(1);n(17);var u=function(){var e=Object(a.useState)("X"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(Array(9).fill("")),u=Object(o.a)(c,2),m=u[0],i=u[1],E=Object(a.useState)(),s=Object(o.a)(E,2),f=s[0],b=s[1],d=Object(a.useState)(Array(9).fill(!1)),v=Object(o.a)(d,2),O=v[0],k=v[1],A=function(e){if(""===m[e]&&!f){var t=m;t[e]=n,i(t),console.log(t),r("X"===n?"O":"X"),function(e){var t={across:[[0,1,2],[3,4,5],[6,7,8]],down:[[0,3,6],[1,4,7],[2,5,8]],diagonal:[[0,4,8],[2,4,6]]};for(var n in t)t[n].forEach(function(t){if(""!==e[t[0]]&&""!==e[t[1]]&&""!==e[t[2]]&&e[t[0]]===e[t[1]]&&e[t[1]]===e[t[2]]){b(e[t[0]]);var n=O;n[t[0]]=!0,n[t[1]]=!0,n[t[2]]=!0,k(n),console.log(O)}})}(t),console.log("Clicked "+e)}},j=function(e){var t=e.num,n={backgroundColor:O[t]?"#d4e054":"black",color:O[t]?"black":"#50a3a2"};return l.a.createElement("td",{style:n,onClick:function(){return A(t)}},m[t])};return l.a.createElement("div",null,l.a.createElement("h1",null,"TIC TAC TOE"),l.a.createElement("br",null),!f&&l.a.createElement("h3",null,"Turn: ",n),f&&l.a.createElement("h3",{className:"result"},"Winner is ",f),l.a.createElement("div",{className:"container"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement(j,{num:0}),l.a.createElement(j,{num:1}),l.a.createElement(j,{num:2})),l.a.createElement("tr",null,l.a.createElement(j,{num:3}),l.a.createElement(j,{num:4}),l.a.createElement(j,{num:5})),l.a.createElement("tr",null,l.a.createElement(j,{num:6}),l.a.createElement(j,{num:7}),l.a.createElement(j,{num:8}))))),f&&l.a.createElement("button",{onClick:function(){return r("X"),i(Array(9).fill("")),b(null),void k(Array(9).fill(!1))}},"PLAY AGAIN"),l.a.createElement("p",{className:"footer"},"Developed by Vikash Anand S"))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)))},4:function(e,t,n){e.exports=n(19)}},[[4,2,1]]]);
//# sourceMappingURL=main.9d06e8b9.chunk.js.map