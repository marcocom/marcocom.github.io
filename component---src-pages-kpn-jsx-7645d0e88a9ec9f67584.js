(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{YzTp:function(e,t,n){"use strict";n.r(t);var i=n("sOrj"),a=n("qxJ8"),o=n("gNjq"),r=n("q1tI"),c=n.n(r),l=i.b.kpn;t.default=function(){return c.a.createElement(o.c,{pageTitle:l.title},c.a.createElement(a.a,{project:l}))}},qxJ8:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return E}));var i=n("m8xL"),a=n("7Qib"),o=n("q1tI"),r=n.n(o),c=n("vOnD"),l=c.e.div.withConfig({displayName:"Project__ProjectContainer",componentId:"sc-1d44bfc-0"})(["background:",";transition:",";"],(function(e){return e.theme.color.bg}),(function(e){return e.theme.hoverTransition})),d=c.e.div.withConfig({displayName:"Project__InnerContainer",componentId:"sc-1d44bfc-1"})(["width:100%;max-width:1100px;margin:10px auto;","{width:90%;}"],a.a.down.md),m=function(e){var t=e.project,n=t.title,a=t.subtitle,o=t.background,c=t.description,m=t.hero,s=t.images,p=t.githubLink,u=t.hostedLink,h=t.videos,f=t.devDesc,w=t.features,v=t.year;return r.a.createElement(l,null,r.a.createElement(i.a,{to:"/mywork",text:"<< Back",outline:"false",direction:"left",backbtn:"true"}),r.a.createElement(y,{background:o,title:n,subtitle:a,image:m,year:v}),r.a.createElement(i.c,null,r.a.createElement(d,null,r.a.createElement(_,{title:n,subtitle:a,description:c,githubLink:p,hostedLink:u}),r.a.createElement(i.f,{type:"heading"},"Sample Images"),s.length>0?r.a.createElement(void 0,{images:s}):r.a.createElement(i.f,{type:"subheading"},"Coming Soon..."),h.length>0&&r.a.createElement(E,{video:h[0],title:n}),r.a.createElement(g,{devDesc:f,features:w}))),r.a.createElement(i.a,{to:"/mywork",text:"<< Back",outline:"false",direction:"left",backbtn:"true"}))},s=c.e.section.withConfig({displayName:"ProjectDev__StyledProjectDev",componentId:"atrekc-0"})(["margin:10px auto 60px;"]),g=function(e){var t=e.devDesc;e.features;return r.a.createElement(s,null,r.a.createElement(i.f,{type:"heading"},"Introspective"),t.map((function(e){return r.a.createElement(i.f,{key:"DevDesc-"+e},e)})))},p=(c.e.div.withConfig({displayName:"ProjectFeatures__StyledProjectFeatures",componentId:"sc-1qc3ad-0"})(["margin:50px auto;"]),c.e.ul.withConfig({displayName:"ProjectFeatures__FeatureList",componentId:"sc-1qc3ad-1"})(["list-style-type:square;margin-top:1.5em;"]),n("/eHF")),u=n.n(p),h=c.e.section.withConfig({displayName:"ProjectHeader__StyledHeader",componentId:"knbkt8-0"})(["width:100%;position:relative;"]),f=c.e.div.withConfig({displayName:"ProjectHeader__ColorSection",componentId:"knbkt8-1"})(["margin-top:20px;width:100%;height:auto;background:",";display:grid;place-items:center center;position:relative;& img{height:auto;width:100%;}"],(function(e){return e.theme.color.imgBg})),w=c.e.div.withConfig({displayName:"ProjectHeader__StyledText",componentId:"knbkt8-2"})(["display:flex;flex-direction:row;flex-flow:nowrap;width:100%;& h3{width:100%;text-align:center;padding:10px 0 0 20px;display:inline-block;line-height:1.1;margin:0 10px 0 0;","{font-size:1.2em;}}"],a.a.down.sm),y=function(e){e.background;var t=e.title,n=e.subtitle,a=e.image,o=e.year;return r.a.createElement(h,null,r.a.createElement(w,null,r.a.createElement(i.f,{type:"heading"},t," :: ",n," :: ",o)),r.a.createElement(f,null,r.a.createElement(u.a,{bottom:!0},r.a.createElement("img",{src:a,alt:t}))))},v=c.e.section.withConfig({displayName:"ProjectInfo__StyledProjectInfo",componentId:"sc-1a5snme-0"})(["width:100%;margin:10px auto 0;"]),b=c.e.div.withConfig({displayName:"ProjectInfo__Grid",componentId:"sc-1a5snme-1"})(["display:grid;grid-gap:100px;width:100%;grid-template-columns:2fr 1fr;","{grid-template-columns:1fr;grid-gap:20px;}"],a.a.down.md),x=c.e.div.withConfig({displayName:"ProjectInfo__Buttons",componentId:"sc-1a5snme-2"})(["display:grid;grid-gap:15px;align-self:start;justify-self:end;","{grid-template-columns:1fr 1fr;justify-self:start;}","{justify-self:stretch;}","{grid-template-columns:1fr;grid-gap:10px;}"],a.a.down.md,a.a.down.sm,a.a.down.xs),_=(c.e.div.withConfig({displayName:"ProjectInfo__StyledTitle",componentId:"sc-1a5snme-3"})(["& h3,& h4{text-align:left;color:",";}"],(function(e){return e.theme.color.imgBg})),function(e){e.title,e.subtitle;var t=e.githubLink,n=e.hostedLink;return r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(x,null,n.length>0&&r.a.createElement(i.a,{text:"See Website",href:n}),t.length>0&&r.a.createElement(i.a,{outline:!0,text:"View on GitHub",href:t}))))}),k=(c.e.div.withConfig({displayName:"ProjectTech__StyledProjectTech",componentId:"sc-1jj231m-0"})(["margin:50px auto 0;","{margin-bottom:30px;}"],a.a.down.md),c.e.section.withConfig({displayName:"ProjectVideo__VideoContainer",componentId:"vepmq-0"})(["width:100%;display:grid;place-items:center center;margin:60px auto 0;& img{max-height:82vh;}"])),E=function(e){var t=e.video,n=e.title;return r.a.createElement(k,null,r.a.createElement(i.f,{style:"Subheading"},"Demo Video:"),r.a.createElement("img",{src:t,alt:n}))};c.e.section.withConfig({displayName:"ProjectImages__StyledHeader",componentId:"rkh4h6-0"})(["width:100%;padding-top:1.5em;"]),c.e.div.withConfig({displayName:"ProjectImages__ColorSection",componentId:"rkh4h6-1"})(["margin-top:10vh;width:100%;height:40vh;display:grid;place-items:center center;& img{height:80%;width:auto;}","{height:35vh;}","{height:25vh;}","{height:30vh;& img{height:auto;width:80%;}}"],a.a.down.md,a.a.down.sm,a.a.down.xs)}}]);
//# sourceMappingURL=component---src-pages-kpn-jsx-7645d0e88a9ec9f67584.js.map