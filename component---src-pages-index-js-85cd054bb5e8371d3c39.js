(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"portfolioPostsQuery",function(){return u});a(223);var n=a(0),r=a.n(n),c=a(33),l=a(148),o=a(163),i=(a(225),a(227)),s=a.n(i);function m(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement("div",{className:"CenteredLogo"}),r.a.createElement("div",{className:"home homePosts"},r.a.createElement("div",{className:"moreProjects"},r.a.createElement("p",null,"Realtime collaborative drawing"),r.a.createElement("p",null,"Digital Art Installations and Performances"),r.a.createElement("h2",null,"Our Events")),r.a.createElement("div",{className:"postGrid"},t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.a.createElement("div",{className:"post",onClick:function(){Object(c.navigate)(t.frontmatter.path+"#content")},key:t.id},r.a.createElement("div",{className:"postHeader",style:{backgroundImage:"url("+t.frontmatter.image.childImageSharp.fixed.src+")"}},r.a.createElement("div",{className:"inside"},r.a.createElement("span",{className:"postTitle"},t.frontmatter.title),r.a.createElement("span",{className:"post-meta postTag"},t.frontmatter.subtitle))))})),r.a.createElement("div",{className:"moreProjects"},r.a.createElement(c.Link,{to:"/contact"},"Contact Us"),r.a.createElement(c.Link,{to:"/gallery"},"Our Gallery"),r.a.createElement("a",{href:s.a},"Our Brochure (in French)"))))}var u="3212459193"},223:function(e,t,a){"use strict";a(224)("fixed",function(e){return function(){return e(this,"tt","","")}})},224:function(e,t,a){var n=a(13),r=a(26),c=a(17),l=/"/g,o=function(e,t,a,n){var r=String(c(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},225:function(e,t,a){},227:function(e,t,a){e.exports=a.p+"res/flyer-01abcaadebafbe82a6bc5cc2c5755962.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-85cd054bb5e8371d3c39.js.map