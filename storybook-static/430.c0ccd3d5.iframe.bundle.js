"use strict";(self.webpackChunktribe_api_wrapper=self.webpackChunktribe_api_wrapper||[]).push([[430],{"./components/ClientCard/ClientCardLG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ClientCardLG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClientCardLG=_ref=>{let{clientId,cardClassName="",bannerClassName="",avatarClassName="",style}=_ref;const[client,setClient]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,_index__WEBPACK_IMPORTED_MODULE_1__.getClientList)().then((response=>{if("data"in response){const foundClient=response.data.find((c=>c.client===clientId));setClient(foundClient||null)}}))}),[clientId]),client?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`client-card client-card-lg ${cardClassName}`,style:{border:"1px solid #ccc",...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`client-banner ${bannerClassName}`,style:{height:"300px",backgroundImage:`url(${client.background})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:client.avatar,className:`client-avatar ${avatarClassName}`,alt:`${client.client} avatar`,style:{width:"150px",borderRadius:"30px",position:"absolute",bottom:"-80px",left:"10%",zIndex:2}})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Loading..."})};ClientCardLG.displayName="ClientCardLG"},"./components/ClientCard/ClientCardSM.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>ClientCardSM});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClientCardSM=_ref=>{let{clientId,cardClassName="",bannerClassName="",avatarClassName="",style}=_ref;const[client,setClient]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,_index__WEBPACK_IMPORTED_MODULE_1__.getClientList)().then((response=>{if("data"in response){const foundClient=response.data.find((c=>c.client===clientId));setClient(foundClient||null)}}))}),[clientId]),client?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`client-card client-card-sm ${cardClassName}`,style:{...style,width:"200px",border:"1px solid #ccc",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`client-banner ${bannerClassName}`,style:{height:"200px",backgroundImage:`url(${client.background})`,backgroundSize:"cover",backgroundPosition:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:client.avatar,className:`client-avatar ${avatarClassName}`,alt:`${client.client} avatar`,style:{width:"50px",borderRadius:"25px",position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",zIndex:2}})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Loading..."})};ClientCardSM.displayName="ClientCardSM"},"./components/ClientList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>ClientList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClientList=_ref=>{let{className="",clientClassName="",avatarClassName="",backgroundClassName="",textClassName="",style}=_ref;const[clients,setClients]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,_index__WEBPACK_IMPORTED_MODULE_1__.getClientList)().then((response=>{"data"in response&&(setClients(response.data),setIsLoading(!1))})).catch((error=>{console.error("Error fetching client list:",error),setIsLoading(!1)}))}),[]),isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Loading..."}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px",...style},children:clients.map((client=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:clientClassName,style:{borderRadius:"10px",overflow:"hidden",border:"1px solid #ccc",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:backgroundClassName,style:{height:"100px",width:"100%",backgroundImage:`url(${client.background})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:client.avatar,className:avatarClassName,alt:`${client.client} avatar`,style:{width:"50px",borderRadius:"25px",position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",zIndex:2}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{padding:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{className:textClassName,style:{fontWeight:"bold",marginBottom:"5px"},children:["Client: ",client.client]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{className:textClassName,style:{fontSize:"12px",color:"#666"},children:["Trial: ",client.trial?"Yes":"No"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{className:textClassName,style:{fontSize:"12px",color:"#666"},children:["Is Hidden: ",client.is_hidden?"Yes":"No"]})]})]},client.client)))})};ClientList.displayName="ClientList"},"./index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Leaderboard:()=>Leaderboard,UserList:()=>UserList,getClientList:()=>getClientList,getLeaderboard:()=>getLeaderboard,getPublicClientUserList:()=>getPublicClientUserList});var axios=__webpack_require__("./node_modules/axios/lib/axios.js"),react=(__webpack_require__("./components/ClientCard/ClientCardLG.tsx"),__webpack_require__("./components/ClientCard/ClientCardSM.tsx"),__webpack_require__("./components/ClientList.tsx"),__webpack_require__("./node_modules/react/index.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Leaderboard=_ref=>{let{client,timePeriod,trial,badgeFilter,className,errorClassName,loadingClassName,tableClassName,titleClassName,textClassName,headerClassName,rowClassName,badgeClassName,badge_icon="static/media/public/images/TRIBENFTCO.png",style}=_ref;const[leaderboardData,setLeaderboardData]=(0,react.useState)(null),[error,setError]=(0,react.useState)(null);return(0,react.useEffect)((()=>{!async function fetchData(){const data=await getLeaderboard(client,{timePeriod,trial,badgeFilter});data instanceof Error?setError(data.message):setLeaderboardData(data)}()}),[client,timePeriod,trial,badgeFilter]),(0,react.useEffect)((()=>{leaderboardData&&!Array.isArray(leaderboardData.data)&&setError("Invalid client ID or unexpected response format")}),[leaderboardData]),(0,jsx_runtime.jsxs)("div",{className:`${className} leaderboard-container`,style:{borderRadius:"10px",border:"1px solid #e1e1e1",padding:"20px",overflow:"hidden",background:"#f7f7f7",...style},children:[(0,jsx_runtime.jsxs)("h3",{style:{margin:"0 0 15px",fontWeight:"600"},children:[client," Leaderboard"]}),error?(0,jsx_runtime.jsxs)("div",{className:`${errorClassName} ${textClassName}`,style:{color:"#d9534f",fontWeight:"500"},children:["Error: ",error]}):leaderboardData&&Array.isArray(leaderboardData.data)?(0,jsx_runtime.jsxs)("table",{className:tableClassName,style:{width:"100%",borderCollapse:"collapse"},children:[(0,jsx_runtime.jsx)("thead",{className:headerClassName,children:(0,jsx_runtime.jsxs)("tr",{style:{borderBottom:"1px solid #d1d1d1",fontWeight:"500",fontSize:"14px",color:"#555"},children:[(0,jsx_runtime.jsx)("th",{className:titleClassName,children:"Member"}),(0,jsx_runtime.jsx)("th",{className:titleClassName,children:"Twitter Points"}),(0,jsx_runtime.jsx)("th",{className:titleClassName,children:"Content Points"}),(0,jsx_runtime.jsx)("th",{className:titleClassName,children:"Total Earned"})]})}),(0,jsx_runtime.jsx)("tbody",{children:leaderboardData.data.map(((user,index)=>(0,jsx_runtime.jsxs)("tr",{className:rowClassName,style:{backgroundColor:index%2==0?"#f9f9f9":"#fff",padding:"15px 0",lineHeight:"1.5"},children:[(0,jsx_runtime.jsxs)("td",{className:textClassName,style:{display:"flex",alignItems:"center",fontSize:"14px",color:"#333"},children:[user.has_badge?(0,jsx_runtime.jsx)("span",{className:badgeClassName,style:{marginRight:"10px"},children:(0,jsx_runtime.jsx)("img",{src:badge_icon,alt:"badge",style:{width:"20px",height:"20px"}})}):"",user.username]}),(0,jsx_runtime.jsx)("td",{className:textClassName,style:{fontSize:"14px",color:"#333"},children:user.twitter_points}),(0,jsx_runtime.jsx)("td",{className:textClassName,style:{fontSize:"14px",color:"#333"},children:user.content_points}),(0,jsx_runtime.jsx)("td",{className:textClassName,style:{fontSize:"14px",color:"#333"},children:user.total_points})]},user.username)))})]}):(0,jsx_runtime.jsx)("div",{className:`${loadingClassName} ${textClassName}`,style:{color:"#666",fontStyle:"italic",fontSize:"14px"},children:"Loading..."})]})};Leaderboard.displayName="Leaderboard";const UserList=_ref=>{let{client,containerClassName,userClassName,textClassName,style}=_ref;const[users,setUsers]=(0,react.useState)([]),[loading,setLoading]=(0,react.useState)(!0);return(0,react.useEffect)((()=>{(async()=>{const result=await getPublicClientUserList(client);result&&!("message"in result)&&setUsers(result.data),setLoading(!1)})()}),[client]),(0,jsx_runtime.jsx)("div",{className:`user-list-container ${containerClassName}`,style:{maxWidth:"100%",width:"300px",padding:"20px",background:"#f7f7f7",borderRadius:"10px",overflowY:"auto",height:"300px",...style},children:loading?(0,jsx_runtime.jsx)("p",{style:{color:"#666",fontStyle:"italic",fontSize:"14px",textAlign:"center"},children:"Loading..."}):users.map(((user,index)=>(0,jsx_runtime.jsx)("div",{className:`user-container ${userClassName}`,style:{padding:"10px",background:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",margin:"10px 0",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)("p",{className:`user-name ${textClassName}`,style:{margin:"0",fontSize:"16px",color:"#333",fontWeight:"500"},children:user})},index)))})};UserList.displayName="UserList";class ValidationError extends Error{constructor(message){super(message),this.name="ValidationError"}}class ApiError extends Error{constructor(message){super(message),this.name="ApiError"}}const getLeaderboard=async(client,options)=>{if(!client)return new ValidationError("Client parameter is required.");const{timePeriod="",trial=!0,badgeFilter=!1}=options||{},url=`https://tribe-api-wrapper.bankkroll.repl.co/leaderboard-ranking?client=${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}&time_period=${encodeURIComponent(timePeriod)}`;try{const response=await axios.Z.get(url);return Array.isArray(response.data.data)?response.data:new ApiError("Wrong client ID provided. Please check your client name and try again.")}catch(error){return handleError(error)}},getClientList=async()=>{try{return(await axios.Z.get("https://tribe-api-wrapper.bankkroll.repl.co/client-list/")).data}catch(error){return handleError(error)}},getPublicClientUserList=async(client,options)=>{if(!client)return new ValidationError("Client parameter is required.");const{timePeriod="",badgeFilter=!1}=options||{},url=`https://tribe-api-wrapper.bankkroll.repl.co/public-client-user-list?client=${encodeURIComponent(client)}${timePeriod?`&time_period=${encodeURIComponent(timePeriod)}`:""}&badge_filter=${badgeFilter}`;try{return(await axios.Z.get(url)).data}catch(error){return handleError(error)}},handleError=error=>{const axiosError=error;return axiosError.response&&axiosError.response.data&&axiosError.response.data.data&&"invalid client_name"===axiosError.response.data.data.error?new ApiError("Wrong client ID provided. Please check your client name and try again."):axiosError.response?new ApiError(`Server responded with status ${axiosError.response.status}: ${axiosError.message}`):new ApiError(axiosError.message)}}}]);