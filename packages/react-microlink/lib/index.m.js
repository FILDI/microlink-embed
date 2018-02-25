var e,t;Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=arguments,r=1;r<arguments.length;r++){var o=t[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o=(e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(t,r,o,n){var a=arguments,i=t&&t.defaultProps,l=arguments.length-3;if(r||0===l||(r={}),r&&i)for(var c in i)void 0===r[c]&&(r[c]=i[c]);else r||(r=i||{});if(1===l)r.children=n;else if(l>1){for(var u=Array(l),s=0;s<l;s++)u[s]=a[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}),n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=require("react"),i=(t=a)&&t.__esModule?t:{default:t},l=require("./components/Card"),c=require("./utils");function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,r,o,n=arguments;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=n[l];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.fetchData=function(){var e=(0,c.createApiUrl)(o.props);return fetch(e,{headers:{"x-api-key":o.props.apiKey}}).then(function(e){return e.json()})},o.setData=function(e){var t=e.data,r=[].concat(o.props.image),n=(0,c.someProp)(t,r),a=(0,c.getUrlPath)(n),i=n||{};o.setState({color:i.color,backgroundColor:i.background_color,title:t.title,description:t.description,url:t.url,loading:!1,video:t.video,image:a})},u(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.data)return this.setData({data:this.props.data});var t=this.fetchData();return this.setState({loading:!0},function(){return t.then(e.setData)})}},{key:"renderContent",value:function(){var e=this.state,t=e.title,r=e.description,n=e.url,i=this.props,c=i.size;return o(a.Fragment,{},void 0,o(l.CardMedia,{image:e.image,video:e.video,url:n,cardSize:c,autoPlay:i.autoPlay,muted:i.muted,loop:i.loop}),o(l.CardContent,{className:"microlink_card__content",title:t,description:r,url:n,cardSize:c}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=this.props,a=n.className,c=n.size;return i.default.createElement(l.CardWrap,r({className:a?"microlink_card "+a:"microlink_card",href:e.url,title:e.title,cardSize:c,color:e.color,backgroundColor:e.backgroundColor,loading:t,reverse:n.reverse},this.props),t?o(l.CardEmptyState,{cardSize:c}):this.renderContent())}}]),t}();s.defaultProps={apiKey:void 0,autoPlay:!0,contrast:!1,image:["screenshot","image","logo"],loop:!0,muted:!0,prerender:"auto",reverse:!1,screenshot:!1,size:"normal"},exports.default=s;
//# sourceMappingURL=index.m.js.map