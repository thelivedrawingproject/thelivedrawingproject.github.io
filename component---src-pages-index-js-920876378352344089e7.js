(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"portfolioPostsQuery",function(){return g});a(26),a(259);var n=a(0),r=a.n(n),l=a(33),c=a(151),s=a(161),o=(a(216),a(218)),m=a.n(o),i=a(217),u=a.n(i),d=a(162),E=a(154),v=!0;function f(e){var t=e.data,a=e.pageContext.locale,n=e.location,o=t.allMarkdownRemark.edges,i=d.b[a],f={year:"numeric",month:"long",day:"numeric"},g=function(e){var t=e.node;return r.a.createElement("div",{className:"post",onClick:function(){Object(l.navigate)(t.frontmatter.path+"#content")},key:t.id,style:{backgroundImage:"url("+t.frontmatter.image.childImageSharp.fixed.src+")"}},r.a.createElement("div",{className:"insideArea"},r.a.createElement("div",{className:"textArea"},r.a.createElement("span",{className:"postTitle"},t.frontmatter.title),r.a.createElement("span",{className:"post-meta postTag"},t.frontmatter.subtitle),r.a.createElement("span",{className:"post-meta postTag"},new Date(t.frontmatter.date).toLocaleDateString(a,f)))))};return r.a.createElement(c.a,{language:a,location:Object.assign({},n)},r.a.createElement(s.a,{title:"Home"}),v&&r.a.createElement("div",{className:"PerformanceMode",id:"performanceOverlay"},r.a.createElement("div",{className:"Logo"}),r.a.createElement("a",{href:"http://peinture.thelivedrawingproject.com"},i.clickHereToDraw),r.a.createElement("button",{onClick:function(){var e=document.getElementById("performanceOverlay");e.style.display="none",e.style.pointerEvents="none"}},i.goToWebsite)),r.a.createElement("div",{className:"FullPage HighlightEvent",style:{marginBottom:"10rem"}},r.a.createElement("h2",{className:"Subtitle"},r.a.createElement("strong",null,i.comeDrawWithUs)),r.a.createElement("a",{href:"http://peinture.thelivedrawingproject.com"},i.clickHereToDraw)),r.a.createElement("div",{className:"FullPage"},r.a.createElement("div",{className:"CenteredLogo"}),r.a.createElement("h1",{style:{opacity:0}},"The Live Drawing Project"),r.a.createElement("h2",{className:"Subtitle"},r.a.createElement("strong",null,i.realtimeCollaborativeDrawing))),r.a.createElement("div",{className:"ResponsiveIframe"},r.a.createElement("iframe",{title:"showcasevideo",src:"https://player.vimeo.com/video/311653956",frameBorder:"0",allowFullScreen:!0})),r.a.createElement("div",{className:"FullPageContainer"},r.a.createElement("h2",{className:"Punchline Accent"},i.letsDrawTogether)),r.a.createElement("div",{className:"Squares"},r.a.createElement("div",{className:"Square"},r.a.createElement("div",{className:"Icon"},r.a.createElement("div",{className:"Phone"})),r.a.createElement("div",{className:"Title"},i.drawOnYourPhone),r.a.createElement("div",{className:"SubText"},i.drawOnYourPhoneSubtext)),r.a.createElement("div",{className:"Square"},r.a.createElement("div",{className:"Icon"},r.a.createElement("div",{className:"Send"})),r.a.createElement("div",{className:"Title"},i.shareYourDrawing),r.a.createElement("div",{className:"SubText"},i.shareYourDrawingSubtext)),r.a.createElement("div",{className:"Square"},r.a.createElement("div",{className:"Icon"},r.a.createElement("div",{className:"Drawings"})),r.a.createElement("div",{className:"Title"},i.joinArtwork),r.a.createElement("div",{className:"SubText"},i.joinArtworkSubtext)),r.a.createElement("div",{className:"Square"},r.a.createElement("div",{className:"Icon"},r.a.createElement("div",{className:"Replay"})),r.a.createElement("div",{className:"Title"},i.iterate),r.a.createElement("div",{className:"SubText"},i.iterateSubtext))),r.a.createElement("div",{className:"FullPageContainer"},r.a.createElement("h2",{className:"Punchline Accent"},i.events)),r.a.createElement("div",{className:"home homePosts"},r.a.createElement("div",{className:"postGrid"},o.filter(function(e){return e.node.frontmatter.title.length>0}).filter(function(e){return e.node.frontmatter.language===a}).filter(function(e){return new Date<=new Date(e.node.frontmatter.date)}).map(g)),r.a.createElement("h2",{className:"Punchline"},i.pastEvents),r.a.createElement("div",{className:"postGrid"},o.filter(function(e){return e.node.frontmatter.title.length>0}).filter(function(e){return e.node.frontmatter.language===a}).filter(function(e){return new Date(e.node.frontmatter.date)<new Date}).map(g))),r.a.createElement("div",{className:"home homePosts"},r.a.createElement("div",{className:"moreProjects"},r.a.createElement(l.Link,{to:Object(E.b)(a,"/gallery")},i.gallery),r.a.createElement(l.Link,{to:Object(E.b)(a,"/bookings")},i.bookUs),r.a.createElement(l.Link,{to:Object(E.b)(a,"/contact")},"Contact"),r.a.createElement("a",{href:"fr"===a?u.a:m.a},i.downloadBrochure))))}var g="922983597"},259:function(e,t,a){"use strict";a(260)("fixed",function(e){return function(){return e(this,"tt","","")}})},260:function(e,t,a){var n=a(13),r=a(27),l=a(19),c=/"/g,s=function(e,t,a,n){var r=String(l(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-920876378352344089e7.js.map