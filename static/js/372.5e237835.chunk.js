"use strict";(self.webpackChunkcryptoverse_recreation=self.webpackChunkcryptoverse_recreation||[]).push([[372],{7898:function(e,n,l){l(2791);var r=l(9385),s=l(184);function a(e){return e.loading?(0,s.jsx)(r.Z,{}):e.error?e.error:e.fulfilled?e.children:(0,s.jsx)(s.Fragment,{children:"Something has happened"})}a.defaultProps={loading:!0,fulfilled:!1,error:null,children:(0,s.jsx)(s.Fragment,{})},n.Z=a},372:function(e,n,l){l.r(n);l(2791);var r=l(7689),s=l(3958),a=l(7898),i=l(1389),t=l(3513),c=l(184),o={rows:{style:{minHeight:"72px",fontSize:"15px",justifyContent:"right",alignSelf:"right"}},headCells:{style:{paddingRight:"8px",fontSize:"15px",justifyContent:"left"}}};n.default=function(){var e,n=(0,r.UO)(),l=(0,s.Ps)({coinId:null===n||void 0===n?void 0:n.coinId}),d=l.isLoading,m=l.error,u=l.data,f=[{name:"Rank",selector:function(e){return e.rank}},{name:"Avatar",cell:function(e){return(0,c.jsx)("img",{src:e.iconUrl,alt:e.name,width:30,height:30})}},{name:"Name",selector:function(e){return e.name}},{name:"Number of Markets",selector:function(e){return e.numberOfMarkets}},{name:"BTC Price",cell:function(e){return(0,i.ZP)(parseFloat(e.btcPrice))}},{name:"Recommended",cell:function(e){return!0===e.recommended?(0,c.jsx)("i",{className:"bi bi-check-lg",style:{color:"green"}}):(0,c.jsx)("i",{className:"bi bi-slash-circle",style:{color:"red"}})}},{name:"Price",cell:function(e){return(0,i.ZP)(parseFloat(e.price))}},{name:"verify",cell:function(e){return!0===e.verified?(0,c.jsx)("i",{className:"bi bi-slash-circle fs-3",style:{color:"green"}}):(0,c.jsx)("i",{className:"bi bi-slash-circle fs-3",style:{color:"red"}})}},{name:"Coin Ranking Url",cell:function(e){return(0,c.jsx)("a",{href:e.coinrankingUrl,target:"_blank",rel:"noreferrer",className:"fs-3 text-dark",children:(0,c.jsx)("i",{className:"bi bi-link-45deg"})})}}];return(0,c.jsx)(a.Z,{fulfilled:Boolean(u),error:m,loading:d,children:(0,c.jsxs)("div",{className:"p-4 mb-5",children:[Boolean(u)&&(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)("h3",{className:"fw-normal mt-3",children:"Exchange Crypto Stats"}),(0,c.jsxs)("div",{className:"d-flex p-4 fs-4",children:[(0,c.jsxs)("div",{className:"d-flex flex-column mx-5",children:[(0,c.jsx)("span",{className:"fs-6 opacity-75",children:"24h Volume"}),(0,c.jsxs)("span",{children:[(0,c.jsx)("i",{className:"bi bi-lightning"}),(0,i.ZP)(Number(parseFloat(u.data.stats["24hVolume"]))||0)]})]}),(0,c.jsxs)("div",{className:"d-flex flex-column mx-5",children:[(0,c.jsx)("span",{className:"fs-6 opacity-75",children:"Total"}),(0,c.jsxs)("span",{children:[(0,c.jsx)("i",{className:"bi bi-hand-thumbs-up"}),(0,i.ZP)(parseFloat(u.data.stats.total))]})]})]})]}),(0,c.jsx)(t.ZP,{columns:f,data:(null===u||void 0===u||null===(e=u.data)||void 0===e?void 0:e.exchanges)||[],pagination:!0,customStyles:o,highlightOnHover:!0})]})})}}}]);
//# sourceMappingURL=372.5e237835.chunk.js.map