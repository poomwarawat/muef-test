(this["webpackJsonpmuef-test"]=this["webpackJsonpmuef-test"]||[]).push([[1],{494:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(479),c=a(480),m=a(6),o=a(8),E=a(48),u=a(168),s=function(e){var t=e.result,a=t[0].INH,s=t[1].SHF,i=t[2].EC,d=t[3].WM,C=t[4].PO,_=t[6].gender,p=t[7].birthday.year,g=Object(l.useState)([]),h=Object(m.a)(g,2),T=h[0],S=h[1];if(T.length>0)var b={labels:["INH","SHF","EC","WM","PO"],chartArea:{backgroundColor:"rgba(251, 85, 85, 0.4)"},datasets:[{label:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19 5 \u0e14\u0e49\u0e32\u0e19",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[T[0].T_SCORE_INH.score,T[0].T_SCORE_SHF.score,T[0].T_SCORE_EC.score,T[0].T_SCORE_WM.score,T[0].T_SCORE_PO.score]}]},O={labels:["ISCI","FI","EMI"],datasets:[{label:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19 3 \u0e14\u0e49\u0e32\u0e19",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[T[0].T_SCORE_ISCI.score,T[0].T_SCORE_FI.score,T[0].T_SCORE_EMI.score]}]};return Object(l.useEffect)((function(){102===e.code?o.a.get("/get-result-score-102/".concat(a,"/").concat(s,"/").concat(i,"/").concat(d,"/").concat(C,"/").concat(_,"/").concat(p)).then((function(e){e.data&&S(T.concat(e.data))})):o.a.get("/get-result-score/".concat(a,"/").concat(s,"/").concat(i,"/").concat(d,"/").concat(C,"/").concat(_,"/").concat(p)).then((function(e){e.data&&S(T.concat(e.data))}))}),[]),n.a.createElement("div",null,n.a.createElement("h3",null,"\u0e40\u0e14\u0e47\u0e01\u0e21\u0e35\u0e04\u0e30\u0e41\u0e19\u0e19\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e01\u0e32\u0e23\u0e17\u0e31\u0e01\u0e29\u0e30\u0e14\u0e49\u0e32\u0e19\u0e01\u0e32\u0e23\u0e04\u0e34\u0e14\u0e40\u0e0a\u0e34\u0e07\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23 (EF) \u0e41\u0e22\u0e01\u0e23\u0e32\u0e22\u0e14\u0e49\u0e32\u0e19 5 \u0e14\u0e49\u0e32\u0e19\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"),n.a.createElement("div",{className:"mt-2 rada-graph"},n.a.createElement("div",null,n.a.createElement(E.a,{data:b,width:10,height:300,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{displayColors:!1,titleFontSize:16,bodyFontSize:14,xPadding:10,yPadding:10,callbacks:{label:function(e,t){return"".concat(e.value)}}}}}))),0!==T.length&&T.map((function(e,t){return n.a.createElement("div",{className:"mt-3",key:t},n.a.createElement(r.a,{className:"topic-result"},n.a.createElement(c.a,{md:6},n.a.createElement("h5",{className:"topic-result"},"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d")),n.a.createElement(c.a,{md:6},n.a.createElement("h5",{className:"topic-result"},"\u0e1c\u0e25\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19"))),n.a.createElement(r.a,null,n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e2b\u0e22\u0e38\u0e14 \u0e01\u0e32\u0e23\u0e22\u0e31\u0e1a\u0e22\u0e31\u0e49\u0e07\u0e1e\u0e24\u0e15\u0e34\u0e01\u0e23\u0e23\u0e21 (Inhibitory control)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T[0].T_SCORE_INH.resultText[1]," ",T[0].T_SCORE_INH.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19/\u0e04\u0e27\u0e32\u0e21\u0e22\u0e37\u0e14\u0e2b\u0e22\u0e38\u0e48\u0e19\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e34\u0e14 (Shift/Cognitive flexibility)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T[0].T_SCORE_SHF.resultText[1]," ",T[0].T_SCORE_SHF.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e2d\u0e32\u0e23\u0e21\u0e13\u0e4c (Emotional control)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T[0].T_SCORE_EC.resultText[1]," ",T[0].T_SCORE_EC.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e02\u0e13\u0e30\u0e17\u0e33\u0e07\u0e32\u0e19 (Working memory)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T[0].T_SCORE_WM.resultText[1]," ",T[0].T_SCORE_WM.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 (Plan/Organize)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T[0].T_SCORE_PO.resultText[1]," ",T[0].T_SCORE_PO.resultText[2]))))})),n.a.createElement("div",null,n.a.createElement("h3",null,"\u0e40\u0e14\u0e47\u0e01\u0e21\u0e35\u0e04\u0e30\u0e41\u0e19\u0e19\u0e15\u0e31\u0e27\u0e1a\u0e48\u0e07\u0e0a\u0e35\u0e49 \u0e1e\u0e31\u0e12\u0e19\u0e32\u0e01\u0e32\u0e23\u0e14\u0e49\u0e32\u0e19\u0e1e\u0e24\u0e15\u0e34\u0e01\u0e23\u0e23\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e1c\u0e25\u0e15\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e15\u0e19\u0e40\u0e2d\u0e07\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22 \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"),n.a.createElement("div",{className:"mt-2 rada-graph"},n.a.createElement("div",null,n.a.createElement(E.a,{data:O,width:10,height:300,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{displayColors:!1,titleFontSize:16,bodyFontSize:14,xPadding:10,yPadding:10,callbacks:{label:function(e,t){return"".concat(e.value)}}}}}))),n.a.createElement(r.a,{className:"topic-result mt-3"},n.a.createElement(c.a,{md:6},n.a.createElement("h5",{className:"topic-result"},"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d")),n.a.createElement(c.a,{md:6},n.a.createElement("h5",{className:"topic-result"},"\u0e1c\u0e25\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19"))),n.a.createElement(r.a,null,n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e14\u0e49\u0e32\u0e19\u0e01\u0e32\u0e23\u0e22\u0e31\u0e1a\u0e22\u0e31\u0e49\u0e07\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e15\u0e19\u0e40\u0e2d\u0e07 (Inhibitory Self-Control)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T.length>0&&T[0].T_SCORE_ISCI.resultText[1]," ",T.length>0&&T[0].T_SCORE_ISCI.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e14\u0e49\u0e32\u0e19\u0e01\u0e32\u0e23\u0e04\u0e34\u0e14\u0e22\u0e37\u0e14\u0e2b\u0e22\u0e38\u0e48\u0e19 (Cognitive Flexibility)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T.length>0&&T[0].T_SCORE_FI.resultText[1]," ",T.length>0&&T[0].T_SCORE_FI.resultText[2])),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,"\u0e14\u0e49\u0e32\u0e19\u0e1e\u0e38\u0e17\u0e18\u0e34\u0e1b\u0e31\u0e0d\u0e0d\u0e32 (Metacognition)")),n.a.createElement(c.a,{md:6},n.a.createElement("p",null,T.length>0&&T[0].T_SCORE_EMI.resultText[1]," ",T.length>0&&T[0].T_SCORE_EMI.resultText[2])))),n.a.createElement("div",null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("h3",null,"\u0e2a\u0e23\u0e38\u0e1b\u0e1c\u0e25\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19")),n.a.createElement(r.a,null,n.a.createElement(c.a,{md:12},T.length>0&&n.a.createElement("div",null,console.log(T[0].T_SCORE_GEC.resultText),n.a.createElement("p",null,T[0].T_SCORE_GEC.resultText[0]," ",T[0].T_SCORE_GEC.resultText[1]," ",T[0].T_SCORE_GEC.resultText[2]))))),T.length>0&&n.a.createElement(u.a,{result:T[0],profile:t,code:e.code,graph1:b,graph2:O}))};t.default=function(e){var t=e.result,a=t[6].gender,l=t[7].birthday,m="";return m="male"===a?"\u0e0a\u0e32\u0e22":"\u0e2b\u0e0d\u0e34\u0e07",n.a.createElement("div",{className:"result-output"},t&&n.a.createElement("div",null,n.a.createElement("h3",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19"),n.a.createElement(r.a,null,n.a.createElement(c.a,{md:3},n.a.createElement("p",null,"\u0e0a\u0e37\u0e48\u0e2d : ",t[8].firstname," ",t[9].lastname)),n.a.createElement(c.a,{md:4},n.a.createElement("p",null,"\u0e40\u0e1e\u0e28 : ",m)),n.a.createElement(c.a,{md:3},n.a.createElement("p",null,"\u0e2d\u0e32\u0e22\u0e38 : ",l.year," \u0e1b\u0e35 ",l.month," \u0e40\u0e14\u0e37\u0e2d\u0e19 ",l.day," ","\u0e27\u0e31\u0e19"))),n.a.createElement(r.a,null,n.a.createElement(c.a,{md:3},n.a.createElement("p",null,"\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14 : ",t[11].birthdayDate)),n.a.createElement(c.a,{md:4},n.a.createElement("p",null,"\u0e23\u0e2b\u0e31\u0e2a : ",t[10].codeId)),n.a.createElement(c.a,{md:3},n.a.createElement("p",null,"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19 : ",t[12].create))),n.a.createElement("h3",null,"\u0e04\u0e30\u0e41\u0e19\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e41\u0e1a\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a"),n.a.createElement("div",{className:"mt-3"},n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e2b\u0e22\u0e38\u0e14 \u0e01\u0e32\u0e23\u0e22\u0e31\u0e1a\u0e22\u0e31\u0e49\u0e07\u0e1e\u0e24\u0e15\u0e34\u0e01\u0e23\u0e23\u0e21 (Inhibitory control) : ",t[0].INH," ","\u0e04\u0e30\u0e41\u0e19\u0e19"),n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19/\u0e04\u0e27\u0e32\u0e21\u0e22\u0e37\u0e14\u0e2b\u0e22\u0e38\u0e48\u0e19\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e34\u0e14 (Shift/Cognitive flexibility) :"," ",t[1].SHF," \u0e04\u0e30\u0e41\u0e19\u0e19"),n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e2d\u0e32\u0e23\u0e21\u0e13\u0e4c (Emotional control) : ",t[2].EC," \u0e04\u0e30\u0e41\u0e19\u0e19"),n.a.createElement("p",null,"\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e02\u0e13\u0e30\u0e17\u0e33\u0e07\u0e32\u0e19 (Working memory) : ",t[3].WM," \u0e04\u0e30\u0e41\u0e19\u0e19"),n.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 (Plan/Organize) : ",t[4].PO," \u0e04\u0e30\u0e41\u0e19\u0e19")),n.a.createElement(s,{code:e.code,result:t})))}}}]);
//# sourceMappingURL=1.4819e59a.chunk.js.map