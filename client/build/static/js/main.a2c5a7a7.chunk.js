(this["webpackJsonpnhl-sfn"]=this["webpackJsonpnhl-sfn"]||[]).push([[0],{47:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(17),r=a.n(c),l=a(4),i=a(14),o=a(15),u="SET_NATIONALITY",d="SET_DATE",j={selectedDate:function(){var e=new Date,t=new Date(e);return t.setDate(t.getDate()-1),t}(),selectedNationality:""},m=Object(i.b)({selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{selectedNationality:t.payload});case d:return Object(o.a)(Object(o.a)({},e),{},{selectedDate:t.payload});default:return Object(o.a)({},e)}}}),f=Object(i.c)(m),b=(a(47),a(19)),x=a(3),h=a(0),y=function(e){return Object(h.jsx)("div",{children:"Players!"})},p=a(5),v=a.n(p),O=a(12),g=a(6),N=a(18),w=a.n(N),D=function(){var e=Object(O.a)(v.a.mark((function e(t){var a,s,n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t,s=0;s<t.length;s++)n={id:t[s].teams.home.team.id,name:t[s].teams.home.team.name,abbreviation:t[s].teams.home.team.abbreviation},c={id:t[s].teams.away.team.id,name:t[s].teams.away.team.name,abbreviation:t[s].teams.away.team.abbreviation},r=t[s].scoringPlays,t[s].points=S(r,n,c);return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t,a){var s={team:t,players:new Map},n={team:a,players:new Map};e.forEach((function(e){e.team.id===s.team.id?k(s.players,e.players):k(n.players,e.players)}));var c={team:t,players:Array.from(s.players.values())};return{away:{team:a,players:Array.from(n.players.values())},home:c}},k=function(e,t){t.forEach((function(t){if(e.get(t.player.id)){var a=e.get(t.player.id);C(a,t)}else{if("Goalie"===t.playerType)return;var s=E(t);e.set(t.player.id,s)}}))},C=function(e,t){"Scorer"===t.playerType?e.stats.goals++:"Assist"===t.playerType&&e.stats.assists++},E=function(e){var t={goals:0,assists:0};return"Scorer"===e.playerType?t.goals++:"Assist"===e.playerType&&t.assists++,{player:e.player,stats:t}},T=function(){var e=Object(O.a)(v.a.mark((function e(t){var a,s,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("http://localhost:1234/api/v1"+"/scores/".concat(t));case 3:return a=e.sent,e.next=6,D(a.data.data);case 6:return s=e.sent,e.abrupt("return",{success:a.data.success,data:s});case 10:return e.prev=10,e.t0=e.catch(0),n={success:!1,data:e.t0.message},e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t;if(e.team)return Object(h.jsxs)("div",{className:"flex flex-col w-32 ",children:[Object(h.jsx)("div",{className:"flex justify-center items-center ",children:Object(h.jsx)("i",{className:"w-16 ",children:Object(h.jsx)("img",{src:"http://localhost:1234/api/v1"+"/images/".concat(e.team.team.id),alt:""})})}),Object(h.jsxs)("div",{className:"mt-2 text-center leading-none text-current flex flex-col justify-end box-border",children:[Object(h.jsx)("p",{className:"font-normal",children:e.team.team.teamName}),(t=e.team.leagueRecord,Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"text-gray-500 text-sm",children:[t.wins,"-",t.losses,"-",t.ot]})}))]})]})},L=function(e){return Object(h.jsxs)("div",{className:"flex items-center justify-between w-40 font-medium",children:[Object(h.jsx)("h1",{className:"text-2xl ".concat(e.info.homeScore>e.info.awayScore?"":"text-gray-400"),children:e.info.homeScore}),Object(h.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(h.jsx)("h4",{className:"",children:e.info.status}),"Final"!==e.info.status?Object(h.jsx)("h5",{className:"font-normal text-gray-400",children:function(e){var t=new Date(e),a="";return a=0===t.getMinutes()?"00":t.getMinutes().toString(),"".concat(t.getHours()<10?"0":"").concat(t.getHours(),":").concat(a)}(e.info.startTime)}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsx)("h1",{className:"text-2xl ".concat(e.info.awayScore>e.info.homeScore?"":"text-gray-400"),children:e.info.awayScore})]})},F=function(e){return Object(h.jsx)("button",{className:"m-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-1 px-2 rounded focus:outline-none max-h-9 flex",onClick:e.onClick,children:Object(h.jsx)("span",{children:"left"===e.orientation.toLowerCase()?Object(h.jsx)(h.Fragment,{children:"<"}):Object(h.jsx)(h.Fragment,{children:">"})})})},I=function(e){var t=e.split(" ");return t.length>2?"".concat(t[0][0],".").concat(t[1]," ").concat(t[2]):"".concat(t[0][0],".").concat(t[1])},M=function(e){return Object(h.jsxs)("div",{children:[I(e.player.player.fullName),": ",e.player.stats.goals,"+",e.player.stats.assists]})},z=Object(l.b)((function(e){return{selectedNationality:e.selections.selectedNationality}}))((function(e){var t=n.a.useState(!1),a=Object(g.a)(t,2),s=a[0],c=a[1];n.a.useEffect((function(){c(!1)}),[e.stats]);var r=function(e){return e.stats.assists+e.stats.goals};return Object(h.jsxs)("div",{className:" text-sm flex p-1 ml-1",children:[Object(h.jsx)("div",{className:"text-gray-800 font-medium flex self-center content-center",children:e.stats.team.abbreviation}),Object(h.jsx)("div",{className:"ml-2 w-auto font-medium text-gray-500 flex flex-col self-center overflow-auto max-h-28",children:function(){var t=e.stats.players.sort((function(e,t){return r(t)-r(e)})).sort((function(t,a){return(a.player.nationality===e.selectedNationality?1:-1)-(t.player.nationality===e.selectedNationality?1:-1)}));return Object(h.jsxs)(h.Fragment,{children:[t.length>0?t.slice(0,s?t.length:4).map((function(t,a){return Object(h.jsx)("div",{className:"".concat(t.player.nationality===e.selectedNationality?"font-bold":""),children:Object(h.jsx)(M,{player:t})},a)})):Object(h.jsx)("div",{children:"none"}),t.length>4&&!s?Object(h.jsx)("button",{onClick:function(){return c(!0)},className:"text-xs text-gray-900 hover:text-pink-600 focus:outline-none",children:"more..."}):null]})}()})]})})),B=function(e){return Object(h.jsxs)("div",{children:[I(e.name),": ",e.value," ",e.category]})},H=Object(l.b)((function(e){return{selectedNationality:e.selections.selectedNationality}}))((function(e){return n.a.useEffect((function(){}),[e.selectedNationality]),console.log(e.leaders),e.leaders?Object(h.jsxs)("div",{className:" text-sm flex p-1 ml-1",children:[Object(h.jsx)("div",{className:"text-gray-800 font-medium",children:e.abbreviation}),Object(h.jsxs)("div",{className:"ml-2 w-auto font-medium text-gray-500",children:[Object(h.jsx)(B,{name:e.leaders[0].leaders[0].person.fullName,category:e.leaders[0].leaderCategory,value:e.leaders[0].leaders[0].value}),Object(h.jsx)(B,{name:e.leaders[1].leaders[0].person.fullName,category:e.leaders[1].leaderCategory,value:e.leaders[1].leaders[0].value}),Object(h.jsx)(B,{name:e.leaders[2].leaders[0].person.fullName,category:e.leaders[2].leaderCategory,value:e.leaders[2].leaders[0].value})]})]}):Object(h.jsx)(h.Fragment,{children:"N/A"})})),J=function(e){var t=n.a.useState(0),a=Object(g.a)(t,2),s=a[0],c=a[1];return Object(h.jsxs)("div",{className:"flex w-full justify-between items-center mx-2",children:[Object(h.jsx)(F,{onClick:function(){c(1)},orientation:"left"}),Object(h.jsx)("div",{className:"w-full justify-center flex",children:0===s?Object(h.jsxs)("div",{className:"flex justify-center flex-row p-1",children:[Object(h.jsx)(H,{abbreviation:e.homeAbbr,leaders:e.homeLeaders}),Object(h.jsx)(H,{abbreviation:e.awayAbbr,leaders:e.awayLeaders})]}):Object(h.jsxs)("div",{className:"flex justify-center flex-row p-1",children:[Object(h.jsx)(z,{stats:e.points.home}),Object(h.jsx)(z,{stats:e.points.away})]})}),Object(h.jsx)(F,{onClick:function(){c(0)},orientation:"right"})]})},P=function(e){return n.a.useEffect((function(){}),[]),Object(h.jsxs)("div",{className:"flex transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48 overflow-auto",children:[Object(h.jsxs)("div",{className:"flex justify-center items-center content-center w-full",children:[Object(h.jsx)(A,{team:e.game.teams.home}),Object(h.jsx)("div",{children:Object(h.jsx)(L,{info:{homeScore:e.game.teams.home.score,awayScore:e.game.teams.away.score,status:e.game.status.detailedState,startTime:e.game.gameDate}})}),Object(h.jsx)("div",{children:Object(h.jsx)(A,{team:e.game.teams.away})})]}),Object(h.jsx)("div",{className:"hidden lg:flex w-full",children:Object(h.jsx)(J,{points:e.game.points,homeLeaders:e.game.teams.home.team.teamLeaders,awayLeaders:e.game.teams.away.team.teamLeaders,homeAbbr:e.game.teams.home.team.abbreviation,awayAbbr:e.game.teams.away.team.abbreviation})})]})},R=Object(l.b)((function(e){return{selectedNationality:e.selections.selectedNationality,selectedDate:e.selections.selectedDate}}))((function(e){var t=n.a.useState(!1),a=Object(g.a)(t,2),s=a[0],c=a[1],r=n.a.useState(),l=Object(g.a)(r,2),i=l[0],o=l[1],u=n.a.useCallback(Object(O.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],e.scores.forEach((function(t){t.points.away.players.forEach((function(t){t.player.nationality===e.selectedNationality&&a.push(t)})),t.points.home.players.forEach((function(t){t.player.nationality===e.selectedNationality&&a.push(t)}))})),a.sort((function(e,t){return t.stats.goals+t.stats.assists-(e.stats.goals+e.stats.assists)})),o(a);case 4:case"end":return t.stop()}}),t)}))),[e.scores,e.selectedNationality]);return n.a.useEffect((function(){c(!0),u(),c(!1)}),[e.selectedDate,e.scores,u]),s?Object(h.jsx)("div",{className:"animate-pulse spinner flex container justify-center items-center content-center p-2 my-4 h-64",children:"Loading..."}):Object(h.jsx)("div",{className:"flex w-full flex-wrap justify-center mb-2",children:i&&i.length>0?i.slice(0,10).map((function(e,t){return Object(h.jsxs)("div",{className:"min-w-2/4 p-2 m-2 bg-gray-100 shadow-lg md:rounded text-sm",children:[t+1,". ",e.player.fullName," ",e.stats.goals,"+",e.stats.assists]},e.player.id)})):Object(h.jsx)("div",{children:"No players for selected country :("})})})),_={weekday:"long",day:"numeric",month:"short"},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=new Date(e).setDate(new Date(e).getDate()+t),s=new Date(a).toISOString().slice(0,10);return s},U=function(e,t){var a=new Date(e);return a.setDate(e.getDate()+t),a.toLocaleDateString("en-us",_)},W=Object(l.b)((function(e){return{selectedDate:e.selections.selectedDate}}))((function(e){var t=n.a.useState(!0),a=Object(g.a)(t,2),s=a[0],c=a[1],r=n.a.useState(null),l=Object(g.a)(r,2),i=l[0],o=l[1],u=n.a.useState(null),d=Object(g.a)(u,2),j=d[0],m=d[1],f=n.a.useCallback(Object(O.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(G(e.selectedDate));case 2:(a=t.sent).success?o(a.data):m(a.data);case 4:case"end":return t.stop()}}),t)}))),[e.selectedDate]);return n.a.useEffect((function(){if(e.selectedDate){c(!0);var t=setTimeout((function(){f(),c(!1)}),1e3);return function(){return clearTimeout(t)}}}),[f,e.selectedDate]),s||!i?Object(h.jsxs)("div",{className:"flex flex-col overflow-auto sm:w-5/6 w-full my-48",children:[Object(h.jsx)("div",{className:"flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"}),Object(h.jsx)("div",{className:"flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"}),Object(h.jsx)("div",{className:"flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"})]}):j?Object(h.jsx)("div",{children:j}):Object(h.jsx)("div",{className:"flex flex-col overflow-auto sm:w-5/6 w-full ",children:i||s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R,{scores:i}),i.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(P,{game:e})},t)}))]}):Object(h.jsx)("div",{children:"Loading..."})})})),Y=function(e,t){var a=new Date(e).setDate(new Date(e).getDate()+t);return new Date(a)},Z=Object(l.b)((function(e){return{selectedNationality:e.selections.selectedNationality}}))((function(e){var t=Object(l.c)();return Object(h.jsx)("div",{className:" ",children:Object(h.jsxs)("div",{className:"relative inline-flex ",children:[Object(h.jsx)("svg",{className:"w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none font-mono",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232",children:Object(h.jsx)("path",{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299",fillRule:"nonzero"})}),Object(h.jsx)("form",{className:"text-sm transition-all ",children:Object(h.jsxs)("select",{value:e.selectedNationality,onChange:function(e){return t((a=e.target.value,{type:u,payload:a}));var a},className:"bg-gray-100 h-8 pl-3 pr-8 border-none active:border-none focus:outline-none appearance-none cursor-pointer",children:[Object(h.jsx)("option",{value:"",className:" truncate md:overflow-clip",children:e.options.header}),e.options.content.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})})]})})})),q=Object(l.b)((function(e){return{selectedDate:e.selections.selectedDate}}))((function(e){var t=Object(l.c)();return Object(h.jsx)(h.Fragment,{children:e.selectedDate?Object(h.jsx)("div",{className:"flex justify-evenly w-full h-full",children:Object(h.jsxs)("div",{className:"sm:w-4/6 w-full flex justify-evenly text-sm md:text-base",children:[Object(h.jsx)("div",{className:"hover:border-pink-700 border-b-2 border-transparent",children:Object(h.jsx)("button",{className:"focus:outline-none h-full",onClick:function(a){return t(function(e){var t=Y(e,-1);return{type:d,payload:t}}(e.selectedDate))},children:U(e.selectedDate,-1)})}),Object(h.jsx)("div",{className:"border-b-2 border-pink-700 ",children:Object(h.jsx)("button",{className:"focus:outline-none border-transparent h-full",children:U(e.selectedDate,0)})}),Object(h.jsx)("div",{className:"hover:border-pink-700 border-b-2 border-transparent",children:Object(h.jsx)("button",{className:"focus:outline-none h-full border-transparent",onClick:function(a){return t(function(e){var t=Y(e,1);return{type:d,payload:t}}(e.selectedDate))},children:U(e.selectedDate,1)})})]})}):null})})),K={header:"Choose nationality",content:["FIN","SWE","CAN","USA","CZE"]},Q=Object(l.b)((function(e){return{selectedNationality:e.selections.selectedNationality}}))((function(e){return Object(h.jsx)("div",{className:"flex flex-col overflow-auto sm:w-5/6 w-full sm:my-2",children:Object(h.jsxs)("div",{className:" bg-gray-100 shadow rounded h-14 mb-3 flex items-center sm:justify-items-center",children:[Object(h.jsx)(Z,{options:K}),Object(h.jsx)(q,{})]})})})),V=function(){return Object(h.jsxs)("div",{className:"flex flex-col items-center justify-center  ",children:[Object(h.jsx)(Q,{}),Object(h.jsx)(W,{})]})},X=function(e){var t=n.a.useState(!1),a=Object(g.a)(t,2),s=a[0],c=a[1],r=n.a.useState([]),l=Object(g.a)(r,2),i=l[0],o=l[1];return n.a.useEffect((function(){c(!0),function(){var e=Object(O.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat("http://localhost:1234/api/v1","/teams"));case 3:t=e.sent,o(t.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()(),c(!1)}),[]),!i&&s?Object(h.jsx)("div",{children:"Loading..."}):Object(h.jsx)("div",{children:i.map((function(e,t){return Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("i",{className:"w-10",children:Object(h.jsx)("img",{src:"".concat("http://localhost:1234/api/v1","/images/")+e.id,alt:""})}),e.name]},t)}))})},$=function(){return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"flex flex-1 flex-col h-screen font-mono",children:[Object(h.jsx)("div",{className:"fixed top-0 w-full flex h-24 bg-gray-900 justify-items-center items-center  border-b-2 border-pink-700 text-gray-50 ",children:Object(h.jsxs)("nav",{className:"flex flex-auto justify-evenly transition-colors items-center",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("span",{className:"hover:text-gray-400",children:"Scores"})}),Object(h.jsx)(b.b,{to:"/teams",children:Object(h.jsx)("span",{className:"hover:text-gray-400",children:"Teams"})})]})}),Object(h.jsx)("div",{className:"mt-24 overflow-auto flex-col flex-auto items-center justify-center bg-gray-200 sm:p-10",children:Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.a,{exact:!0,path:"/",component:V}),Object(h.jsx)(x.a,{path:"/scores",component:V}),Object(h.jsx)(x.a,{path:"/teams",component:X}),Object(h.jsx)(x.a,{path:"/players",component:y})]})})]})})};r.a.render(Object(h.jsx)(l.a,{store:f,children:Object(h.jsx)(n.a.Fragment,{children:Object(h.jsx)($,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a2c5a7a7.chunk.js.map