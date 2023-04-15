(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[479],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/components/auto-complete/Autocomplete.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Autocomplete});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TextField=__webpack_require__("./src/components/text-field/TextField.tsx"),SectionContainer=styled_components_browser_esm.ZP.section.withConfig({displayName:"styled__SectionContainer",componentId:"sc-13dmhnr-0"})(["position:relative;"]),styled_TextField=(0,styled_components_browser_esm.ZP)(TextField.n).withConfig({displayName:"styled__TextField",componentId:"sc-13dmhnr-1"})(["position:relative;"]),SearchButton=styled_components_browser_esm.ZP.button.withConfig({displayName:"styled__SearchButton",componentId:"sc-13dmhnr-2"})(["top:0;right:0;position:absolute;height:",";width:",";border-style:solid;border-color:",";border-width:",";outline-color:",";display:flex;justify-content:center;align-items:center;background-color:",";cursor:pointer;"],(function(props){return props.theme.spacing.xl}),(function(props){return props.theme.spacing.xl}),(function(props){return props.theme.colors.border}),(function(props){return props.theme.spacing.xxs}),(function(props){return props.theme.colors.primary}),(function(props){return props.theme.colors.backgroundDark})),SearchIcon=(0,styled_components_browser_esm.ZP)(index_esm.dVI).withConfig({displayName:"styled__SearchIcon",componentId:"sc-13dmhnr-3"})(["height:",";width:",";"],(function(props){return props.theme.spacing.md}),(function(props){return props.theme.spacing.md})),ResultsContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styled__ResultsContainer",componentId:"sc-13dmhnr-4"})(["margin-top:",";position:absolute;width:100%;height:fit-content;background-color:",";box-shadow:",";box-sizing:border-box;"],(function(props){return props.theme.spacing.xs}),(function(props){return props.theme.colors.backgroundDark}),(function(props){return props.theme.shadow.sm})),ResultsItem=styled_components_browser_esm.ZP.ul.withConfig({displayName:"styled__ResultsItem",componentId:"sc-13dmhnr-5"})(["box-sizing:border-box;padding:0;margin:0;width:100%;height:",";font-size:",";display:flex;align-items:center;padding-left:",";padding-right:",";cursor:pointer;outline-color:",";&:hover{background-color:",";}"],(function(props){return props.theme.spacing.xl}),(function(props){return props.theme.typography.size.sm}),(function(props){return props.theme.spacing.sm}),(function(props){return props.theme.spacing.sm}),(function(props){return props.theme.colors.primary}),(function(props){return props.theme.colors.primaryLight})),spin=(0,styled_components_browser_esm.F4)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),Loader=styled_components_browser_esm.ZP.div.withConfig({displayName:"styled__Loader",componentId:"sc-13dmhnr-6"})(["border-style:solid;border-width:",";border-color:",";border-top-style:solid;border-top-width:",";border-top-color:",";border-radius:50%;width:",";height:",";animation:"," 1s linear infinite;"],(function(props){return props.theme.spacing.xs}),(function(props){return props.theme.colors.border}),(function(props){return props.theme.spacing.xs}),(function(props){return props.theme.colors.primary}),(function(props){return props.theme.spacing.lg}),(function(props){return props.theme.spacing.lg}),spin);try{SectionContainer.displayName="SectionContainer",SectionContainer.__docgenInfo={description:"",displayName:"SectionContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#SectionContainer"]={docgenInfo:SectionContainer.__docgenInfo,name:"SectionContainer",path:"src/components/auto-complete/styled.tsx#SectionContainer"})}catch(__react_docgen_typescript_loader_error){}try{styled_TextField.displayName="TextField",styled_TextField.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#TextField"]={docgenInfo:styled_TextField.__docgenInfo,name:"TextField",path:"src/components/auto-complete/styled.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}try{SearchButton.displayName="SearchButton",SearchButton.__docgenInfo={description:"",displayName:"SearchButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#SearchButton"]={docgenInfo:SearchButton.__docgenInfo,name:"SearchButton",path:"src/components/auto-complete/styled.tsx#SearchButton"})}catch(__react_docgen_typescript_loader_error){}try{SearchIcon.displayName="SearchIcon",SearchIcon.__docgenInfo={description:"",displayName:"SearchIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#SearchIcon"]={docgenInfo:SearchIcon.__docgenInfo,name:"SearchIcon",path:"src/components/auto-complete/styled.tsx#SearchIcon"})}catch(__react_docgen_typescript_loader_error){}try{ResultsContainer.displayName="ResultsContainer",ResultsContainer.__docgenInfo={description:"",displayName:"ResultsContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#ResultsContainer"]={docgenInfo:ResultsContainer.__docgenInfo,name:"ResultsContainer",path:"src/components/auto-complete/styled.tsx#ResultsContainer"})}catch(__react_docgen_typescript_loader_error){}try{ResultsItem.displayName="ResultsItem",ResultsItem.__docgenInfo={description:"",displayName:"ResultsItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#ResultsItem"]={docgenInfo:ResultsItem.__docgenInfo,name:"ResultsItem",path:"src/components/auto-complete/styled.tsx#ResultsItem"})}catch(__react_docgen_typescript_loader_error){}try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/styled.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/auto-complete/styled.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,HighlightText=function HighlightText(_ref){var text=_ref.text,query=_ref.query,textRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(textRef.current){var _text$split,textElement=textRef.current,_text=textElement.innerHTML,space=1===(null===(_text$split=_text.split(" "))||void 0===_text$split?void 0:_text$split.length)?"":"&nbsp;",highlightedText=_text.replace(function highlightWord(text){return new RegExp("\\b(".concat(text,")\\b"),"gi")}(query),'<span style="font-weight: bold;">'.concat(space,"$1","&nbsp; </span>"));textElement.innerHTML=highlightedText}}),[query]),__jsx(ResultsItem,{tabIndex:0,ref:textRef},text)};HighlightText.displayName="HighlightText",HighlightText.__docgenInfo={description:"",methods:[],displayName:"HighlightText",props:{text:{required:!0,tsType:{name:"string"},description:""},query:{required:!0,tsType:{name:"string"},description:""}}};try{HighlightText.displayName="HighlightText",HighlightText.__docgenInfo={description:"",displayName:"HighlightText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/HighlightText.tsx#HighlightText"]={docgenInfo:HighlightText.__docgenInfo,name:"HighlightText",path:"src/components/auto-complete/HighlightText.tsx#HighlightText"})}catch(__react_docgen_typescript_loader_error){}var Autocomplete_jsx=react.createElement,Autocomplete=function Autocomplete(_ref){var onSearch=_ref.onSearch,query=_ref.query,defaultQuery=_ref.defaultQuery,items=_ref.items,loading=_ref.loading,onSearchHandler=(0,react.useCallback)((function(event){onSearch(event.target.value)}),[onSearch]);return Autocomplete_jsx(SectionContainer,null,Autocomplete_jsx(styled_TextField,{value:query,defaultValue:defaultQuery,onChange:onSearchHandler,placeholder:"Find your perfect product here!..."}),Autocomplete_jsx(SearchButton,null,Autocomplete_jsx(SearchIcon,null)),Autocomplete_jsx(ResultsContainer,null,loading&&Autocomplete_jsx(Loader,null),null!=items&&items.length&&null!=query&&query.length&&!loading?items.map((function(_ref2){var text=_ref2.text;return Autocomplete_jsx(HighlightText,{key:text,query,text})})):Autocomplete_jsx(react.Fragment,null),null!=items&&items.length||null==query||!query.length||loading?Autocomplete_jsx(react.Fragment,null):Autocomplete_jsx(HighlightText,{query,text:"No results for ".concat(query)})))};Autocomplete.displayName="Autocomplete",Autocomplete.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{query:{required:!0,tsType:{name:"string"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},defaultQuery:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  text: string;\n}",signature:{properties:[{key:"text",value:{name:"string",required:!0}}]}}],raw:"ItemProps[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};try{Autocomplete.displayName="Autocomplete",Autocomplete.__docgenInfo={description:"",displayName:"Autocomplete",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(value: string) => void"}},defaultQuery:{defaultValue:null,description:"",name:"defaultQuery",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ItemProps[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/auto-complete/Autocomplete.tsx#Autocomplete"]={docgenInfo:Autocomplete.__docgenInfo,name:"Autocomplete",path:"src/components/auto-complete/Autocomplete.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text-field/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>TextField});var react=__webpack_require__("./node_modules/react/index.js"),InputContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.input.withConfig({displayName:"styled__InputContainer",componentId:"sc-1v1m5a9-0"})(["padding-top:",";padding-bottom:",";padding-right:",";padding-left:",";box-sizing:border-box;position:relative;color:",";font-size:",";margin:0;font-family:inherit;border-radius:",";background-color:",";display:flex;box-shadow:",";height:",";width:100%;border-style:solid;border-color:",";border-width:",";&:focus{outline:none;border-color:",";box-shadow:",";}&::placeholder{color:",";font-weight:",";}"],(function(props){return props.theme.spacing.sm}),(function(props){return props.theme.spacing.sm}),(function(props){return props.theme.spacing.xxl}),(function(props){return props.theme.spacing.md}),(function(props){return props.theme.colors.text}),(function(props){return props.theme.typography.size.sm}),(function(props){return props.theme.borderRadius.sm}),(function(props){return props.theme.colors.background}),(function(props){return props.theme.shadow.sm}),(function(props){return props.theme.spacing.xl}),(function(props){return props.theme.colors.border}),(function(props){return props.theme.spacing.xxs}),(function(props){return props.theme.colors.border}),(function(props){return props.theme.shadow.md}),(function(props){return props.theme.colors.textSecondaryLight}),(function(props){return props.theme.typography.weight.regular}));try{InputContainer.displayName="InputContainer",InputContainer.__docgenInfo={description:"",displayName:"InputContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text-field/styled.tsx#InputContainer"]={docgenInfo:InputContainer.__docgenInfo,name:"InputContainer",path:"src/components/text-field/styled.tsx#InputContainer"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,TextField=function TextField(props){return __jsx(InputContainer,props)};TextField.displayName="TextField",TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{value:{required:!0,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}}],return:{name:"void"}}},description:""}}};try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text-field/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/text-field/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ThemeProvider:()=>ThemeProvider});var tokens={typography:{size:{lg:"1.5rem",md:"1.25rem",sm:"1rem"},weight:{bold:700,medium:500,regular:400}},borderRadius:{lg:"12px",md:"8px",sm:"4px"},colors:{primary:"#1d8ffc",primaryDark:"#0057b8",primaryLight:"#f0f8ff",secondary:"#ffc453",secondaryDark:"#bf9900",secondaryLight:"#ffd886",background:"#f4f6f8",backgroundDark:"#efefef",text:"#1c1f23",textSecondary:"#637381",textSecondaryLight:"#bcbcbc",success:"#35c854",warning:"#fa4d56",border:"#ffffff"},spacing:{lg:"32px",md:"16px",sm:"8px",xl:"48px",xs:"4px",xxl:"64px",xxs:"2px"},shadow:{lg:"0 1px 2px 0 rgba(0,0,0)",md:"0 1px 2px 0 rgba(0,0,0,.5)",sm:"0 1px 2px 0 rgba(0,0,0,.2)"}},react=(__webpack_require__("./src/config/theme/types.ts"),__webpack_require__("./node_modules/react/index.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),__jsx=react.createElement,GlobalStyle=(0,styled_components_browser_esm.vJ)(["body{font-family:'Roboto',sans-serif;font-size:",";background-color:",";margin:0;padding:0;}"],(function(props){return props.theme.typography.size.md}),(function(props){return props.theme.colors.background})),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children;return __jsx(react.Fragment,null,__jsx(styled_components_browser_esm.f6,{theme:tokens},__jsx(GlobalStyle,null),children))};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/config/theme/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/config/theme/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/theme/types.ts":()=>{},"./src/components/auto-complete/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_nextjs_storybook_nextjs_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_config_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/config/theme/index.ts"),_Autocomplete__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/auto-complete/Autocomplete.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={decorators:[function(Story){return __jsx(_config_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider,null,__jsx(Story,null))}],title:"Components/Autocomplete",component:_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.F,argTypes:{defaultQuery:{type:"string"},onSearch:{type:"function"},query:{type:"string"},items:{type:"symbol"}}};var DefaultStory={render:function render(props){return __jsx(_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.F,(0,_home_runner_work_nextjs_storybook_nextjs_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},props,{items:[{text:"iPhone"},{text:"iPhone XS"}]}))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"{\n  render: function render(props) {\n    return __jsx(Autocomplete, _extends({}, props, {\n      items: [{\n        text: 'iPhone'\n      }, {\n        text: 'iPhone XS'\n      }]\n    }));\n  }\n}",...DefaultStory.parameters?.docs?.source}}}}}]);