(this["webpackJsonpNxt-Trendz--E-commerce"]=this["webpackJsonpNxt-Trendz--E-commerce"]||[]).push([[0],{36:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(28),r=n.n(s),i=n(4),o=n(31),l=n(11),d=n(13),u=n(14),j=n(15),m=n(16),b=n(5),p=n(10),h=n(18),g=n(7),O=n.n(g),x=(n(36),n(1)),v=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},t.onChangeUsername=function(e){t.setState({username:e.target.value})},t.onChangePassword=function(e){t.setState({password:e.target.value})},t.onSubmitSuccess=function(e){var n=t.props.history;O.a.set("jwt_token",e,{expires:30}),n.replace("/")},t.onSubmitFailure=function(e){t.setState({showSubmitError:!0,errorMsg:e})},t.submitForm=function(){var e=Object(h.a)(Object(p.a)().mark((function e(n){var a,c,s,r,i,o,l;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state,c=a.username,s=a.password,r={username:c,password:s},"https://apis.ccbp.in/login",i={method:"POST",body:JSON.stringify(r)},e.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=e.sent,e.next=10,o.json();case 10:l=e.sent,!0===o.ok?t.onSubmitSuccess(l.jwt_token):t.onSubmitFailure(l.error_msg);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.renderPasswordField=function(){var e=t.state.password;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(x.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:e,onChange:t.onChangePassword,placeholder:"Password"})]})},t.renderUsernameField=function(){var e=t.state.username;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(x.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:e,onChange:t.onChangeUsername,placeholder:"Username"})]})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.showSubmitError,n=t.errorMsg;return void 0!==O.a.get("jwt_token")?Object(x.jsx)(b.a,{to:"/"}):Object(x.jsxs)("div",{className:"login-form-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-mobile-img",alt:"website logo"}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",className:"login-img",alt:"website login"}),Object(x.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-desktop-img",alt:"website logo"}),Object(x.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(x.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(x.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),e&&Object(x.jsxs)("p",{className:"error-message",children:["*",n]})]})]})}}]),n}(a.Component),f=v,N=c.a.createContext({cartList:[],removeAllCartItems:function(){},addCartItem:function(){},removeCartItem:function(){},incrementCartItemQuantity:function(){},decrementCartItemQuantity:function(){}}),y=(n(43),Object(b.g)((function(t){var e=function(){var e=t.history;O.a.remove("jwt_token"),e.replace("/login")},n=function(){return Object(x.jsx)(N.Consumer,{children:function(t){var e=t.cartList,n=e.length;return Object(x.jsx)(x.Fragment,{children:n>0?Object(x.jsx)("span",{className:"cart-count-badge",children:e.length}):null})}})};return Object(x.jsxs)("nav",{className:"nav-header",children:[Object(x.jsxs)("div",{className:"nav-content",children:[Object(x.jsxs)("div",{className:"nav-bar-mobile-logo-container",children:[Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(x.jsx)("button",{type:"button",className:"nav-mobile-btn",onClick:e,children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png",alt:"nav logout",className:"nav-bar-img"})})]}),Object(x.jsxs)("div",{className:"nav-bar-large-container",children:[Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(x.jsxs)("ul",{className:"nav-menu",children:[Object(x.jsx)("li",{className:"nav-menu-item",children:Object(x.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(x.jsx)("li",{className:"nav-menu-item",children:Object(x.jsx)(i.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(x.jsx)("li",{className:"nav-menu-item",children:Object(x.jsxs)(i.b,{to:"/cart",className:"nav-link",children:["Cart",n()]})})]}),Object(x.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:e,children:"Logout"})]})]}),Object(x.jsx)("div",{className:"nav-menu-mobile",children:Object(x.jsxs)("ul",{className:"nav-menu-list-mobile",children:[Object(x.jsx)("li",{className:"nav-menu-item-mobile",children:Object(x.jsx)(i.b,{to:"/",className:"nav-link",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png",alt:"nav home",className:"nav-bar-img"})})}),Object(x.jsx)("li",{className:"nav-menu-item-mobile",children:Object(x.jsx)(i.b,{to:"/products",className:"nav-link",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png",alt:"nav products",className:"nav-bar-img"})})}),Object(x.jsx)("li",{className:"nav-menu-item-mobile",children:Object(x.jsxs)(i.b,{to:"/cart",className:"nav-link",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png",alt:"nav cart",className:"nav-bar-img"}),n()]})})]})})]})}))),I=(n(44),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsxs)("div",{className:"home-content",children:[Object(x.jsx)("h1",{className:"home-heading",children:"Clothes That Get YOU Noticed"}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-mobile-img"}),Object(x.jsx)("p",{className:"home-description",children:"Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way."}),Object(x.jsx)(i.b,{to:"/products",children:Object(x.jsx)("button",{type:"button",className:"shop-now-button",children:"Shop Now"})})]}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-desktop-img"})]})]})}),w=n(20),C=n.n(w),S=n(17),k=(n(63),function(t){var e=function(e){var n=t.enterSearchInput;"Enter"===e.key&&n()},n=function(e){(0,t.changeSearchInput)(e.target.value)},a=t.clearFilters;return Object(x.jsxs)("div",{className:"filters-group-container",children:[function(){var a=t.searchInput;return Object(x.jsxs)("div",{className:"search-input-container",children:[Object(x.jsx)("input",{value:a,type:"search",className:"search-input",placeholder:"Search",onChange:n,onKeyDown:e}),Object(x.jsx)(S.d,{className:"search-icon"})]})}(),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"category-heading",children:"Category"}),Object(x.jsx)("ul",{className:"categories-list",children:t.categoryOptions.map((function(e){var n=t.changeCategory,a=t.activeCategoryId,c=e.categoryId===a?"category-name active-category-name":"category-name";return Object(x.jsx)("li",{className:"category-item",onClick:function(){return n(e.categoryId)},children:Object(x.jsx)("p",{className:c,children:e.name})},e.categoryId)}))})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"rating-heading",children:"Rating"}),Object(x.jsx)("ul",{className:"ratings-list",children:t.ratingsList.map((function(e){var n=t.changeRating,a=t.activeRatingId===e.ratingId?"and-up active-rating":"and-up";return Object(x.jsxs)("li",{className:"rating-item",onClick:function(){return n(e.ratingId)},children:[Object(x.jsx)("img",{src:e.imageUrl,alt:"rating ".concat(e.ratingId),className:"rating-img"}),Object(x.jsx)("p",{className:a,children:"& up"})]},e.ratingId)}))})]}),Object(x.jsx)("button",{type:"button",className:"clear-filters-btn",onClick:a,children:"Clear Filters"})]})}),P=(n(64),function(t){var e=t.productData,n=e.title,a=e.brand,c=e.imageUrl,s=e.rating,r=e.price,o=e.id;return Object(x.jsx)("li",{className:"product-item",children:Object(x.jsxs)(i.b,{to:"/products/".concat(o),className:"link-item",children:[Object(x.jsx)("img",{src:c,alt:"product",className:"thumbnail"}),Object(x.jsx)("h1",{className:"title",children:n}),Object(x.jsxs)("p",{className:"brand",children:["by ",a]}),Object(x.jsxs)("div",{className:"product-details",children:[Object(x.jsxs)("p",{className:"price",children:["Rs ",r,"/-"]}),Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)("p",{className:"rating",children:s}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]})]})]})})}),D=(n(65),function(t){var e=t.sortbyOptions,n=t.activeOptionId;return Object(x.jsxs)("div",{className:"products-header",children:[Object(x.jsx)("h1",{className:"products-list-heading",children:"All Products"}),Object(x.jsxs)("div",{className:"sort-by-container",children:[Object(x.jsx)(S.b,{className:"sort-by-icon"}),Object(x.jsx)("p",{className:"sort-by",children:"Sort by"}),Object(x.jsx)("select",{className:"sort-by-select",value:n,onChange:function(e){(0,t.changeSortby)(e.target.value)},children:e.map((function(t){return Object(x.jsx)("option",{value:t.optionId,className:"select-option",children:t.displayText},t.optionId)}))})]})]})}),L=(n(66),[{name:"Clothing",categoryId:"1"},{name:"Electronics",categoryId:"2"},{name:"Appliances",categoryId:"3"},{name:"Grocery",categoryId:"4"},{name:"Toys",categoryId:"5"}]),F=[{optionId:"PRICE_HIGH",displayText:"Price (High-Low)"},{optionId:"PRICE_LOW",displayText:"Price (Low-High)"}],R=[{ratingId:"4",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png"},{ratingId:"3",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png"},{ratingId:"2",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png"},{ratingId:"1",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png"}],q="INITIAL",A="SUCCESS",E="FAILURE",z="IN_PROGRESS",U=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={productsList:[],apiStatus:q,activeOptionId:F[0].optionId,activeCategoryId:"",searchInput:"",activeRatingId:""},t.getProducts=Object(h.a)(Object(p.a)().mark((function e(){var n,a,c,s,r,i,o,l,d,u,j;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({apiStatus:z}),n=O.a.get("jwt_token"),a=t.state,c=a.activeOptionId,s=a.activeCategoryId,r=a.searchInput,i=a.activeRatingId,o="https://apis.ccbp.in/products?sort_by=".concat(c,"&category=").concat(s,"&title_search=").concat(r,"&rating=").concat(i),l={headers:{Authorization:"Bearer ".concat(n)},method:"GET"},e.next=7,fetch(o,l);case 7:if(!(d=e.sent).ok){e.next=16;break}return e.next=11,d.json();case 11:u=e.sent,j=u.products.map((function(t){return{title:t.title,brand:t.brand,price:t.price,id:t.id,imageUrl:t.image_url,rating:t.rating}})),t.setState({productsList:j,apiStatus:A}),e.next=17;break;case 16:t.setState({apiStatus:E});case 17:case"end":return e.stop()}}),e)}))),t.renderLoadingView=function(){return Object(x.jsx)("div",{className:"products-loader-container",children:Object(x.jsx)(C.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},t.renderFailureView=function(){return Object(x.jsxs)("div",{className:"products-error-view-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png",alt:"all-products-error",className:"products-failure-img"}),Object(x.jsx)("h1",{className:"product-failure-heading-text",children:"Oops! Something Went Wrong"}),Object(x.jsx)("p",{className:"products-failure-description",children:"We are having some trouble processing your request. Please try again."})]})},t.changeSortby=function(e){t.setState({activeOptionId:e},t.getProducts)},t.renderProductsListView=function(){var e=t.state,n=e.productsList,a=e.activeOptionId;return n.length>0?Object(x.jsxs)("div",{className:"all-products-container",children:[Object(x.jsx)(D,{activeOptionId:a,sortbyOptions:F,changeSortby:t.changeSortby}),Object(x.jsx)("ul",{className:"products-list",children:n.map((function(t){return Object(x.jsx)(P,{productData:t},t.id)}))})]}):Object(x.jsxs)("div",{className:"no-products-view",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png",className:"no-products-img",alt:"no products"}),Object(x.jsx)("h1",{className:"no-products-heading",children:"No Products Found"}),Object(x.jsx)("p",{className:"no-products-description",children:"We could not find any products. Try other filters."})]})},t.renderAllProducts=function(){switch(t.state.apiStatus){case A:return t.renderProductsListView();case E:return t.renderFailureView();case z:return t.renderLoadingView();default:return null}},t.clearFilters=function(){t.setState({searchInput:"",activeCategoryId:"",activeRatingId:""},t.getProducts)},t.changeRating=function(e){t.setState({activeRatingId:e},t.getProducts)},t.changeCategory=function(e){t.setState({activeCategoryId:e},t.getProducts)},t.enterSearchInput=function(){t.getProducts()},t.changeSearchInput=function(e){t.setState({searchInput:e})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var t=this.state,e=t.activeCategoryId,n=t.searchInput,a=t.activeRatingId;return Object(x.jsxs)("div",{className:"all-products-section",children:[Object(x.jsx)(k,{searchInput:n,categoryOptions:L,ratingsList:R,changeSearchInput:this.changeSearchInput,enterSearchInput:this.enterSearchInput,activeCategoryId:e,activeRatingId:a,changeCategory:this.changeCategory,changeRating:this.changeRating,clearFilters:this.clearFilters}),this.renderAllProducts()]})}}]),n}(a.Component),_=U,T=(n(67),"INITIAL"),V="SUCCESS",Q="FAILURE",G="IN_PROGRESS",M=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={primeDeals:[],apiStatus:T},t.getPrimeDeals=Object(h.a)(Object(p.a)().mark((function e(){var n,a,c,s,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({apiStatus:G}),n=O.a.get("jwt_token"),"https://apis.ccbp.in/prime-deals",a={headers:{Authorization:"Bearer ".concat(n)},method:"GET"},e.next=6,fetch("https://apis.ccbp.in/prime-deals",a);case 6:if(!0!==(c=e.sent).ok){e.next=13;break}return e.next=10,c.json();case 10:s=e.sent,r=s.prime_deals.map((function(t){return{title:t.title,brand:t.brand,price:t.price,id:t.id,imageUrl:t.image_url,rating:t.rating}})),t.setState({primeDeals:r,apiStatus:V});case 13:401===c.status&&t.setState({apiStatus:Q});case 14:case"end":return e.stop()}}),e)}))),t.renderPrimeDealsListView=function(){var e=t.state.primeDeals;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"primedeals-list-heading",children:"Exclusive Prime Deals"}),Object(x.jsx)("ul",{className:"products-list",children:e.map((function(t){return Object(x.jsx)(P,{productData:t},t.id)}))})]})},t.renderPrimeDealsFailureView=function(){return Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png",alt:"register prime",className:"register-prime-img"})},t.renderLoadingView=function(){return Object(x.jsx)("div",{className:"primedeals-loader-container",children:Object(x.jsx)(C.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getPrimeDeals()}},{key:"render",value:function(){switch(this.state.apiStatus){case V:return this.renderPrimeDealsListView();case Q:return this.renderPrimeDealsFailureView();case G:return this.renderLoadingView();default:return null}}}]),n}(a.Component),W=M,B=(n(68),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsxs)("div",{className:"product-sections",children:[Object(x.jsx)(W,{}),Object(x.jsx)(_,{})]})]})}),H=(n(69),function(t){var e=t.productDetails,n=e.title,a=e.brand,c=e.imageUrl,s=e.rating,r=e.price;return Object(x.jsxs)("li",{className:"similar-product-item",children:[Object(x.jsx)("img",{src:c,className:"similar-product-img",alt:"similar product ".concat(n)}),Object(x.jsx)("p",{className:"similar-product-title",children:n}),Object(x.jsxs)("p",{className:"similar-products-brand",children:["by ",a]}),Object(x.jsxs)("div",{className:"similar-product-price-rating-container",children:[Object(x.jsxs)("p",{className:"similar-product-price",children:["Rs ",r,"/-"]}),Object(x.jsxs)("div",{className:"similar-product-rating-container",children:[Object(x.jsx)("p",{className:"similar-product-rating",children:s}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"similar-product-star"})]})]})]})}),J=(n(70),"INITIAL"),Y="SUCCESS",K="FAILURE",X="IN_PROGRESS",Z=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={productData:{},similarProductsData:[],apiStatus:J,quantity:1},t.getFormattedData=function(t){return{availability:t.availability,brand:t.brand,description:t.description,id:t.id,imageUrl:t.image_url,price:t.price,rating:t.rating,title:t.title,totalReviews:t.total_reviews}},t.getProductData=Object(h.a)(Object(p.a)().mark((function e(){var n,a,c,s,r,i,o,l,d,u;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match,a=n.params,c=a.id,t.setState({apiStatus:X}),s=O.a.get("jwt_token"),r="https://apis.ccbp.in/products/".concat(c),i={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},e.next=9,fetch(r,i);case 9:if(!(o=e.sent).ok){e.next=17;break}return e.next=13,o.json();case 13:l=e.sent,d=t.getFormattedData(l),u=l.similar_products.map((function(e){return t.getFormattedData(e)})),t.setState({productData:d,similarProductsData:u,apiStatus:Y});case 17:404===o.status&&t.setState({apiStatus:K});case 18:case"end":return e.stop()}}),e)}))),t.renderLoadingView=function(){return Object(x.jsx)("div",{className:"products-details-loader-container",testid:"loader",children:Object(x.jsx)(C.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},t.renderFailureView=function(){return Object(x.jsxs)("div",{className:"product-details-error-view-container",children:[Object(x.jsx)("img",{alt:"error view",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png",className:"error-view-image"}),Object(x.jsx)("h1",{className:"product-not-found-heading",children:"Product Not Found"}),Object(x.jsx)(i.b,{to:"/products",children:Object(x.jsx)("button",{type:"button",className:"button",children:"Continue Shopping"})})]})},t.onDecrementQuantity=function(){t.state.quantity>1&&t.setState((function(t){return{quantity:t.quantity-1}}))},t.onIncrementQuantity=function(){t.setState((function(t){return{quantity:t.quantity+1}}))},t.renderProductDetailsView=function(){return Object(x.jsx)(N.Consumer,{children:function(e){var n=t.state,a=n.productData,c=n.quantity,s=n.similarProductsData,r=a.availability,i=a.brand,o=a.description,d=a.imageUrl,u=a.price,j=a.rating,m=a.title,b=a.totalReviews,p=e.addCartItem;return Object(x.jsxs)("div",{className:"product-details-success-view",children:[Object(x.jsxs)("div",{className:"product-details-container",children:[Object(x.jsx)("img",{src:d,alt:"product",className:"product-image"}),Object(x.jsxs)("div",{className:"product",children:[Object(x.jsx)("h1",{className:"product-name",children:m}),Object(x.jsxs)("p",{className:"price-details",children:["Rs ",u,"/-"]}),Object(x.jsxs)("div",{className:"rating-and-reviews-count",children:[Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)("p",{className:"rating",children:j}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]}),Object(x.jsxs)("p",{className:"reviews-count",children:[b," Reviews"]})]}),Object(x.jsx)("p",{className:"product-description",children:o}),Object(x.jsxs)("div",{className:"label-value-container",children:[Object(x.jsx)("p",{className:"label",children:"Available:"}),Object(x.jsx)("p",{className:"value",children:r})]}),Object(x.jsxs)("div",{className:"label-value-container",children:[Object(x.jsx)("p",{className:"label",children:"Brand:"}),Object(x.jsx)("p",{className:"value",children:i})]}),Object(x.jsx)("hr",{className:"horizontal-line"}),Object(x.jsxs)("div",{className:"quantity-container",children:[Object(x.jsx)("button",{type:"button",className:"quantity-controller-button",onClick:t.onDecrementQuantity,testid:"minus",children:Object(x.jsx)(S.a,{className:"quantity-controller-icon"})}),Object(x.jsx)("p",{className:"quantity",children:c}),Object(x.jsx)("button",{type:"button",className:"quantity-controller-button",onClick:t.onIncrementQuantity,testid:"plus",children:Object(x.jsx)(S.c,{className:"quantity-controller-icon"})})]}),Object(x.jsx)("button",{type:"button",className:"button add-to-cart-btn",onClick:function(){p(Object(l.a)(Object(l.a)({},a),{},{quantity:c}))},children:"ADD TO CART"})]})]}),Object(x.jsx)("h1",{className:"similar-products-heading",children:"Similar Products"}),Object(x.jsx)("ul",{className:"similar-products-list",children:s.map((function(t){return Object(x.jsx)(H,{productDetails:t},t.id)}))})]})}})},t.renderProductDetails=function(){switch(t.state.apiStatus){case Y:return t.renderProductDetailsView();case K:return t.renderFailureView();case X:return t.renderLoadingView();default:return null}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getProductData()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsx)("div",{className:"product-item-details-container",children:this.renderProductDetails()})]})}}]),n}(a.Component),$=Z,tt=(n(71),function(){return Object(x.jsxs)("div",{className:"cart-empty-view-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png",className:"cart-empty-img",alt:"cart empty"}),Object(x.jsx)("h1",{className:"cart-empty-heading",children:"Your Cart Is Empty"}),Object(x.jsx)(i.b,{to:"/products",children:Object(x.jsx)("button",{type:"button",className:"shop-now-btn",children:"Shop Now"})})]})}),et=n(30),nt=(n(72),function(t){return Object(x.jsx)(N.Consumer,{children:function(e){var n=e.removeCartItem,a=e.incrementCartItemQuantity,c=e.decrementCartItemQuantity,s=t.cartItemDetails,r=s.id,i=s.title,o=s.brand,l=s.quantity,d=s.price,u=s.imageUrl,j=function(){n(r)},m=d*l;return Object(x.jsxs)("li",{className:"cart-item",children:[Object(x.jsx)("img",{className:"cart-product-image",src:u,alt:i}),Object(x.jsxs)("div",{className:"cart-item-details-container",children:[Object(x.jsxs)("div",{className:"cart-product-title-brand-container",children:[Object(x.jsx)("p",{className:"cart-product-title",children:i}),Object(x.jsxs)("p",{className:"cart-product-brand",children:["by ",o]})]}),Object(x.jsxs)("div",{className:"cart-quantity-container",children:[Object(x.jsx)("button",{type:"button",className:"quantity-controller-button",testid:"minus",onClick:function(){c(r)},children:Object(x.jsx)(S.a,{color:"#52606D",size:12})}),Object(x.jsx)("p",{className:"cart-quantity",children:l}),Object(x.jsx)("button",{type:"button",className:"quantity-controller-button",testid:"plus",onClick:function(){a(r)},children:Object(x.jsx)(S.c,{color:"#52606D",size:12})})]}),Object(x.jsxs)("div",{className:"total-price-remove-container",children:[Object(x.jsxs)("p",{className:"cart-total-price",children:["Rs ",m,"/-"]}),Object(x.jsx)("button",{className:"remove-button",type:"button",onClick:j,children:"Remove"})]})]}),Object(x.jsx)("button",{className:"delete-button",type:"button",onClick:j,testid:"remove",children:Object(x.jsx)(et.a,{color:"#616E7C",size:20})})]})}})}),at=(n(73),function(){return Object(x.jsx)(N.Consumer,{children:function(t){var e=t.cartList;return Object(x.jsx)("ul",{className:"cart-list",children:e.map((function(t){return Object(x.jsx)(nt,{cartItemDetails:t},t.id)}))})}})}),ct=(n(74),function(){return Object(x.jsx)(N.Consumer,{children:function(t){var e=t.cartList,n=0;return e.forEach((function(t){n+=t.price*t.quantity})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"cart-summary-container",children:[Object(x.jsxs)("h1",{className:"order-total-value",children:[Object(x.jsx)("span",{className:"order-total-label",children:"Order Total:"})," Rs ",n,"/-"]}),Object(x.jsxs)("p",{className:"total-items",children:[e.length," Items in cart"]}),Object(x.jsx)("button",{type:"button",className:"checkout-button d-sm-none",children:"Checkout"})]}),Object(x.jsx)("button",{type:"button",className:"checkout-button d-lg-none",children:"Checkout"})]})}})}),st=(n(75),function(){return Object(x.jsx)(N.Consumer,{children:function(t){var e=t.cartList,n=t.removeAllCartItems,a=0===e.length;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsx)("div",{className:"cart-container",children:a?Object(x.jsx)(tt,{}):Object(x.jsxs)("div",{className:"cart-content-container",children:[Object(x.jsx)("h1",{className:"cart-heading",children:"My Cart"}),Object(x.jsx)("button",{type:"button",className:"remove-all-btn",onClick:function(){n()},children:"Remove All"}),Object(x.jsx)(at,{}),Object(x.jsx)(ct,{})]})})]})}})}),rt=(n(76),function(){return Object(x.jsx)("div",{className:"not-found-container",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not found",className:"not-found-img"})})}),it=function(t){return void 0===O.a.get("jwt_token")?Object(x.jsx)(b.a,{to:"/login"}):Object(x.jsx)(b.b,Object(l.a)({},t))},ot=(n(77),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={cartList:[]},t.removeAllCartItems=function(){t.setState({cartList:[]})},t.incrementCartItemQuantity=function(e){t.setState((function(t){return{cartList:t.cartList.map((function(t){if(e===t.id){var n=t.quantity+1;return Object(l.a)(Object(l.a)({},t),{},{quantity:n})}return t}))}}))},t.decrementCartItemQuantity=function(e){t.state.cartList.find((function(t){return t.id===e})).quantity>1?t.setState((function(t){return{cartList:t.cartList.map((function(t){if(e===t.id){var n=t.quantity-1;return Object(l.a)(Object(l.a)({},t),{},{quantity:n})}return t}))}})):t.removeCartItem(e)},t.removeCartItem=function(e){var n=t.state.cartList.filter((function(t){return t.id!==e}));t.setState({cartList:n})},t.addCartItem=function(e){var n=t.state.cartList,a=n.find((function(t){return t.id===e.id}));if(a)t.setState((function(t){return{cartList:t.cartList.map((function(t){if(a.id===t.id){var n=t.quantity+e.quantity;return Object(l.a)(Object(l.a)({},t),{},{quantity:n})}return t}))}}));else{var c=[].concat(Object(o.a)(n),[e]);t.setState({cartList:c})}},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.cartList;return Object(x.jsx)(N.Provider,{value:{cartList:t,addCartItem:this.addCartItem,removeCartItem:this.removeCartItem,incrementCartItemQuantity:this.incrementCartItemQuantity,decrementCartItemQuantity:this.decrementCartItemQuantity,removeAllCartItems:this.removeAllCartItems},children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{exact:!0,path:"/login",component:f}),Object(x.jsx)(it,{exact:!0,path:"/",component:I}),Object(x.jsx)(it,{exact:!0,path:"/products",component:B}),Object(x.jsx)(it,{exact:!0,path:"/products/:id",component:$}),Object(x.jsx)(it,{exact:!0,path:"/cart",component:st}),Object(x.jsx)(b.b,{path:"/not-found",component:rt}),Object(x.jsx)(b.a,{to:"not-found"})]})})}}]),n}(a.Component)),lt=ot;r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(lt,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f31889c4.chunk.js.map