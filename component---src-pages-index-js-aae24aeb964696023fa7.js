(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v}),a.d(t,"gatImage",function(){return E}),a.d(t,"indexPageQuery",function(){return y});a(26);var r=a(0),i=a.n(r),n=a(33),s=a(263),l=a.n(s),o=a(154),c=a(153),d=(a(222),a(224)),u=a.n(d),m=a(223),f=a.n(m),h=a(151),p=(a(156),a(159)),g=!1;function v(e){var t=e.data,a=e.pageContext.locale,r=e.location,s=h.b[a];return i.a.createElement(o.a,{language:a,location:Object.assign({},r)},i.a.createElement(c.a,{title:"Home"}),i.a.createElement("div",{className:"ShowcasePage"},i.a.createElement("h1",{style:{display:"none"}},s.title),g&&i.a.createElement("div",{className:"PerformanceMode",id:"performanceOverlay"},i.a.createElement("div",{className:"Logo"}),i.a.createElement("a",{href:"http://berthom.thelivedrawingproject.com"},s.clickHereToDraw),i.a.createElement("button",{onClick:function(){var e=document.getElementById("performanceOverlay");e.style.display="none",e.style.pointerEvents="none"}},s.goToWebsite)),i.a.createElement("div",{className:"RollbackBackground"},i.a.createElement("div",{className:"ResponsiveContainer WelcomerCoverPhoto",style:{background:"url("+t.imageChevagny.childImageSharp.fluid.src+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"WelcomeCover"},i.a.createElement("div",{className:"Inside"},i.a.createElement("h2",null,s.letsDrawTogether),i.a.createElement("p",null,s.mainDescription)))))),i.a.createElement("div",{className:"ResponsiveContainer",style:{backgroundColor:"#aac989"}},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"ShowcasePart"},i.a.createElement("div",{className:"Text"},i.a.createElement("h2",{style:{color:"white"}},s.yourPhoneYourCanvasTitle),i.a.createElement("p",{style:{color:"white"}},s.yourPhoneYourCanvasDescription)),i.a.createElement("div",{className:"ImageContainer"},i.a.createElement(l.a,{fluid:t.imagePhone.childImageSharp.fluid,alt:""}))))),i.a.createElement("div",{className:"ResponsiveContainer",style:{backgroundColor:"#f4f4f4"}},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"ShowcasePart Column"},i.a.createElement("div",{className:"Text Centered"},i.a.createElement("h2",null,s.joinCollabTitle),i.a.createElement("p",null,s.joinCollabDescription)),i.a.createElement("div",{className:"PhotogridContainer"},i.a.createElement(p.a,{gatsbyImages:[t.gridA.childImageSharp.fluid.src,t.gridB.childImageSharp.fluid.src,t.gridC.childImageSharp.fluid.src,t.gridD.childImageSharp.fluid.src,t.gridE.childImageSharp.fluid.src,t.gridF.childImageSharp.fluid.src],className:"PaddingForNormalSize"}))))),i.a.createElement("div",{className:"ResponsiveContainer"},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"ShowcasePart"},i.a.createElement("div",{className:"Text"},i.a.createElement("h2",{style:{color:"rgb(40,40,40)"}},s.permanentArtTitle),i.a.createElement("p",null,s.permanentArtDescription)),i.a.createElement("div",{className:"ImageContainer"},i.a.createElement(l.a,{fluid:t.imageArt.childImageSharp.fluid,alt:""}))))),i.a.createElement("div",{className:"ResponsiveContainer",style:{backgroundColor:"#aac989"}},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"ShowcasePart Column"},i.a.createElement("div",{className:"Text Centered"},i.a.createElement("h2",{style:{color:"white"}},s.useCasesTitle)),i.a.createElement("div",{className:"ImageContainer"},i.a.createElement("div",{className:"WordsCloud"},i.a.createElement(i.a.Fragment,null,s.useCases.map(function(e){return i.a.createElement("p",{key:e},e)}))))))),i.a.createElement("div",{className:"ResponsiveContainer"},i.a.createElement("div",{className:"Inside"},i.a.createElement("div",{className:"ShowcasePart Column"},i.a.createElement("div",{className:"Text Centered"},i.a.createElement("h2",{className:"Punchline White",style:{color:"black"}},s.clientsTitle)),i.a.createElement("div",{className:"ImageContainer"},i.a.createElement("div",{className:"ClientsLogo"},i.a.createElement("div",{className:"Aadn"}),i.a.createElement("div",{className:"Bonifacio"}),i.a.createElement("div",{className:"Pf"}),i.a.createElement("div",{className:"MaltingPot"}),i.a.createElement("div",{className:"Chevagny"}),i.a.createElement("div",{className:"Superposition"})))))),i.a.createElement("div",{className:"home homePosts"},i.a.createElement("div",{className:"moreProjects"},i.a.createElement(n.Link,{to:"/about"},s.moreInfos),i.a.createElement(n.Link,{to:"/gallery"},s.watchPhotos),i.a.createElement("a",{href:"mailto:livedrawingproject@protonmail.com"},s.contactUs),i.a.createElement("a",{href:"fr"===a?f.a:u.a},s.downloadBrochure),i.a.createElement("a",{href:"fr"===a?u.a:f.a},s.downloadBrochureOtherLanguage)))))}var E="4226621365",y="2332718101"},159:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(6),i=a.n(r),n=a(0),s=a.n(n),l=a(199),o=(a(201),a(1)),c=a.n(o);a(160);var d={gatsbyImages:c.a.array.isRequired},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},a}i()(t,e);var a=t.prototype;return a.generatePicture=function(e,t,a){var r,i=this,n=a?"photoThumbnail marginRight":"photoThumbnail";return s.a.createElement("div",{key:t,className:n,style:(r=e,{backgroundImage:"url("+r+")"}),onClick:function(){return i.setState({isOpen:!0,photoIndex:t})}})},a.generateGrid=function(e,t){void 0===t&&(t=3);for(var a=[],r=0;r<e.length;r+=t){for(var i=[],n=0;n<t&&r+n<e.length;n++)n<t?i.push(this.generatePicture(e[r+n],r+n,!0)):i.push(this.generatePicture(e[r+n],r+n,!1));a.push(s.a.createElement("div",{key:r,className:"photoRowContainer"},i)),i=[]}return a},a.render=function(){var e=this,t=this.state,a=t.isOpen,r=t.photoIndex,i=this.props.gatsbyImages;return s.a.createElement("div",{className:"componentPhotoGrid"},a&&s.a.createElement(l.a,{mainSrc:i[r],nextSrc:i[(r+1)%i.length],prevSrc:i[(r+i.length-1)%i.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(r+i.length-1)%i.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(r+1)%i.length})}}),s.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(s.a.Component);function m(e){var t=e.children.filter(function(e){return"string"!=typeof e}).map(function(e){return e.props.href});return s.a.createElement(u,{gatsbyImages:t})}u.propTypes=d,m.propTypes={children:c.a.node.isRequired},t.b=m},160:function(e,t,a){},263:function(e,t,a){"use strict";var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(37)),l=r(a(73)),o=r(a(74)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},h=[];var p=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,p=e.fixed,E=e.backgroundColor,y=e.Tag,b="boolean"==typeof E?"lightgray":E,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,m),N=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),w={title:t,alt:this.state.isVisible?"":a,style:S,className:f};if(h){var I=h;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(v,(0,o.default)({src:I.base64},w)),I.tracedSVG&&c.default.createElement(v,(0,o.default)({src:I.tracedSVG},w)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(v,{alt:a,title:t,src:I.src,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},I))}}))}if(p){var C=p,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&c.default.createElement(v,(0,o.default)({src:C.base64},w)),C.tracedSVG&&c.default.createElement(v,(0,o.default)({src:C.tracedSVG},w)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),c.default.createElement(v,{alt:a,title:t,width:C.width,height:C.height,src:C.src,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:C.width,height:C.height},C))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:y,sizes:b,fixed:y,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var S=E;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-aae24aeb964696023fa7.js.map