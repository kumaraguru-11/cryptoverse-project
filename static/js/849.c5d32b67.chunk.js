"use strict";(self.webpackChunkcryptoverse_recreation=self.webpackChunkcryptoverse_recreation||[]).push([[849],{7898:function(e,n,a){a(2791);var l=a(9385),r=a(184);function s(e){return e.loading?(0,r.jsx)(l.Z,{}):e.error?e.error:e.fulfilled?e.children:(0,r.jsx)(r.Fragment,{children:"Something has happened"})}s.defaultProps={loading:!0,fulfilled:!1,error:null,children:(0,r.jsx)(r.Fragment,{})},n.Z=s},1849:function(e,n,a){a.r(n);a(2791);var l=a(7689),r=a(3958),s=a(7898),i=a(1389),t=a(3513),c=a(184),o={rows:{style:{minHeight:"72px",fontSize:"15px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"15px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}};n.default=function(){var e,n=(0,l.UO)(),a=(0,r.Ge)({coinId:null===n||void 0===n?void 0:n.coinId}),d=a.isLoading,m=a.error,u=a.data,h=[{name:"Rank",selector:function(e){return e.rank}},{name:"Avatar",cell:function(e){return(0,c.jsx)("img",{src:e.exchange.iconUrl,alt:e.exchange.name,width:30,height:30})}},{name:"Name",selector:function(e){return e.exchange.name}},{name:"Market Share",selector:function(e){return e.marketShare}},{name:"BTC Price",cell:function(e){return(0,i.ZP)(parseFloat(e.btcPrice))}},{name:"Recommended",cell:function(e){return!0===e.recommended?(0,c.jsx)("i",{className:"bi bi-check-lg",style:{color:"green"}}):(0,c.jsx)("i",{className:"bi bi-slash-circle",style:{color:"red"}})}},{name:"Price",cell:function(e){return(0,i.ZP)(parseFloat(e.price))}},{name:"24h Volume",cell:function(e){return(0,i.ZP)(parseFloat(e["24hVolume"]))}}];return(0,c.jsx)(s.Z,{fulfilled:Boolean(u),error:m,loading:d,children:(0,c.jsxs)("div",{className:"p-4 mb-5",children:[u&&(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)("h3",{className:"fw-normal mt-3",children:"Market Crypto Stats"}),(0,c.jsxs)("div",{className:"d-flex p-4 fs-4",children:[(0,c.jsxs)("div",{className:"d-flex flex-column mx-5",children:[(0,c.jsx)("span",{className:"fs-6 opacity-75",children:"24h Volume"}),(0,c.jsxs)("span",{children:[(0,c.jsx)("i",{className:"bi bi-lightning"}),(0,i.ZP)(Number(parseFloat(u.data.stats["24hVolume"]))||0)]})]}),(0,c.jsxs)("div",{className:"d-flex flex-column mx-5",children:[(0,c.jsx)("span",{className:"fs-6 opacity-75",children:"Total"}),(0,c.jsxs)("span",{children:[(0,c.jsx)("i",{className:"bi bi-hand-thumbs-up"}),(0,i.ZP)(parseFloat(u.data.stats.total))]})]})]})]}),(0,c.jsx)(t.ZP,{columns:h,data:(null===u||void 0===u||null===(e=u.data)||void 0===e?void 0:e.markets)||[],pagination:!0,customStyles:o,highlightOnHover:!0})]})})}}}]);
//# sourceMappingURL=849.c5d32b67.chunk.js.map