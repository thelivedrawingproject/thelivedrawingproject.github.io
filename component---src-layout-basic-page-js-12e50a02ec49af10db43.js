(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return g});n(26);var a=n(0),r=n.n(a),i=n(154),o=(n(197),n(203)),l=n.n(o),c=n(159),s=n(153),m=new l.a({createElement:r.a.createElement,components:{"photo-grid":c.b}}).Compiler;function u(e){var t=e.data,n=e.location,a=t.markdownRemark;return r.a.createElement(i.a,{language:a.frontmatter.language,location:Object.assign({},n)},r.a.createElement(s.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.frontmatter.subtitle||null,pathname:a.frontmatter.path,article:!0}),r.a.createElement("div",{className:"Page"},r.a.createElement("article",{className:"card article",id:"content"},r.a.createElement("header",{className:"header",style:{paddingTop:"1em",paddingBottom:"2em"}}),r.a.createElement("div",{className:"content",itemProp:"articleBody"},m(a.htmlAst)))))}var g="4286300394"},153:function(e,t,n){"use strict";var a=n(162),r=n(0),i=n.n(r),o=n(202),l=n(1),c=n.n(l),s=n(33),m=n(163),u=n.n(m),g=n(164),p=n.n(g),d=function(e){var t=e.title,n=e.description,r=e.image,l=e.pathname,c=e.author,m=e.article;return i.a.createElement(s.StaticQuery,{query:A,render:function(e){var a=e.site.siteMetadata,s=a.defaultTitle,g=a.titleTemplate,d=a.defaultDescription,A=a.siteUrl,h=a.defaultImage,v=a.defaultAuthor,f=a.siteName,y={title:t||s,description:n||d,image:""+A+(r||h),url:""+A+(l||"/"),author:c||v,siteName:f||t||s};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Helmet,{title:y.title,titleTemplate:g,link:[{rel:"shortcut icon",type:"image/png",href:""+u.a}]},y.title&&i.a.createElement("title",null,y.title),i.a.createElement("meta",{name:"robots",content:"all"}),i.a.createElement("meta",{name:"viewport",content:"user-scalable=no, width=device-width"}),y.keywords&&i.a.createElement("meta",{name:"keywords",content:y.keywords}),y.description&&i.a.createElement("meta",{name:"description",content:y.description}),y.url&&i.a.createElement("meta",{property:"og:url",content:y.url}),i.a.createElement("meta",{property:"og:type",content:m?"article":"website"}),!m||!y.author?null:i.a.createElement("meta",{property:"og:article:author",content:y.author}),y.title&&i.a.createElement("meta",{property:"og:title",content:y.title}),y.description&&i.a.createElement("meta",{property:"og:description",content:y.description}),i.a.createElement("meta",{property:"og:image",content:p.a}),i.a.createElement("meta",{property:"og:image:secure_url",content:p.a}),i.a.createElement("meta",{property:"og:image:type",content:"image/jpeg"}),y.title&&i.a.createElement("meta",{property:"og:site_name",content:y.siteName})))},data:a})};t.a=d,d.propTypes={title:c.a.string,description:c.a.string,image:c.a.string,pathname:c.a.string,article:c.a.bool,author:c.a.string},d.defaultProps={title:null,description:null,image:null,pathname:null,article:!1,author:null};var A="2370814177"},159:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(199),c=(n(201),n(1)),s=n.n(c);n(160);var m={gatsbyImages:s.a.array.isRequired},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},n}r()(t,e);var n=t.prototype;return n.generatePicture=function(e,t,n){var a,r=this,i=n?"photoThumbnail marginRight":"photoThumbnail";return o.a.createElement("div",{key:t,className:i,style:(a=e,{backgroundImage:"url("+a+")"}),onClick:function(){return r.setState({isOpen:!0,photoIndex:t})}})},n.generateGrid=function(e,t){void 0===t&&(t=3);for(var n=[],a=0;a<e.length;a+=t){for(var r=[],i=0;i<t&&a+i<e.length;i++)i<t?r.push(this.generatePicture(e[a+i],a+i,!0)):r.push(this.generatePicture(e[a+i],a+i,!1));n.push(o.a.createElement("div",{key:a,className:"photoRowContainer"},r)),r=[]}return n},n.render=function(){var e=this,t=this.state,n=t.isOpen,a=t.photoIndex,r=this.props.gatsbyImages;return o.a.createElement("div",{className:"componentPhotoGrid"},n&&o.a.createElement(l.a,{mainSrc:r[a],nextSrc:r[(a+1)%r.length],prevSrc:r[(a+r.length-1)%r.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+r.length-1)%r.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%r.length})}}),o.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(o.a.Component);function g(e){var t=e.children.filter(function(e){return"string"!=typeof e}).map(function(e){return e.props.href});return o.a.createElement(u,{gatsbyImages:t})}u.propTypes=m,g.propTypes={children:s.a.node.isRequired},t.b=g},160:function(e,t,n){},162:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"The Live Drawing Project",titleTemplate:"%s · The Live Drawing Project",defaultDescription:"The Live Drawing Project · Digital art project of Real-time collaborative drawing · Live performances, Events, Workshops & Art installations · Welcome to our website",siteUrl:"https://thelivedrawingproject.com",defaultImage:"/static/logo.jpg",defaultAuthor:"The Live Drawing Project",siteName:"The Live Drawing Project"}}}}},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t,n){e.exports=n.p+"static/logo-2aa6492e91455c24845da501640c3ef0.jpg"},197:function(e,t,n){}}]);
//# sourceMappingURL=component---src-layout-basic-page-js-12e50a02ec49af10db43.js.map