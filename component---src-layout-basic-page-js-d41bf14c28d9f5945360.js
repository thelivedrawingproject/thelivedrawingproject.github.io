(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return p});n(26);var a=n(0),r=n.n(a),o=n(151),i=(n(185),n(195)),s=n.n(i),c=n(187),l=n(158),u=new s.a({createElement:r.a.createElement,components:{"photo-grid":c.a}}).Compiler;function m(e){var t=e.data,n=e.location,a=t.markdownRemark;return r.a.createElement(o.a,{language:a.frontmatter.language,location:Object.assign({},n)},r.a.createElement(l.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.frontmatter.subtitle||null,pathname:a.frontmatter.path,article:!0}),r.a.createElement("div",{className:"coverBand",id:"content"},r.a.createElement("div",{className:"overlay overlaySmaller"},r.a.createElement("h1",{className:"punchline"},a.frontmatter.title))),r.a.createElement("div",{className:"Page"},r.a.createElement("article",{className:"card article",id:"content"},r.a.createElement("header",{className:"header",style:{paddingTop:"1em",paddingBottom:"2em"}}),r.a.createElement("div",{className:"content",itemProp:"articleBody"},u(a.htmlAst)))))}var p="4286300394"},185:function(e,t,n){},187:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(209),c=(n(213),n(1)),l=n.n(c);n(189);var u={gatsbyImages:l.a.array.isRequired},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},n}r()(t,e);var n=t.prototype;return n.generatePicture=function(e,t,n){var a,r=this,o=n?"photoThumbnail marginRight":"photoThumbnail";return i.a.createElement("div",{key:t,className:o,style:(a=e,{backgroundImage:"url("+a+")"}),onClick:function(){return r.setState({isOpen:!0,photoIndex:t})}})},n.generateGrid=function(e,t){void 0===t&&(t=3);for(var n=[],a=0;a<e.length;a+=t){for(var r=[],o=0;o<t&&a+o<e.length;o++)o<t?r.push(this.generatePicture(e[a+o],a+o,!0)):r.push(this.generatePicture(e[a+o],a+o,!1));n.push(i.a.createElement("div",{key:a,className:"photoRowContainer"},r)),r=[]}return n},n.render=function(){var e=this,t=this.state,n=t.isOpen,a=t.photoIndex,r=this.props.gatsbyImages;return i.a.createElement("div",{className:"componentPhotoGrid"},n&&i.a.createElement(s.a,{mainSrc:r[a],nextSrc:r[(a+1)%r.length],prevSrc:r[(a+r.length-1)%r.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+r.length-1)%r.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%r.length})}}),i.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(i.a.Component);function p(e){var t=e.children.filter(function(e){return"string"!=typeof e}).map(function(e){return e.props.href});return i.a.createElement(m,{gatsbyImages:t})}m.propTypes=u,p.propTypes={children:l.a.node.isRequired},t.a=p},189:function(e,t,n){}}]);
//# sourceMappingURL=component---src-layout-basic-page-js-d41bf14c28d9f5945360.js.map