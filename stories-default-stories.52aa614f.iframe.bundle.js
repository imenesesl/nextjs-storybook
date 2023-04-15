(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[795],{"./src/config/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ThemeProvider:()=>ThemeProvider});var tokens={typography:{size:{lg:"1.5rem",md:"1.25rem",sm:"1rem"},weight:{bold:700,medium:500,regular:400}},borderRadius:{lg:"12px",md:"8px",sm:"4px"},colors:{primary:"#1d8ffc",primaryDark:"#0057b8",primaryLight:"#f0f8ff",secondary:"#ffc453",secondaryDark:"#bf9900",secondaryLight:"#ffd886",background:"#f4f6f8",backgroundDark:"#efefef",text:"#1c1f23",textSecondary:"#637381",textSecondaryLight:"#bcbcbc",success:"#35c854",warning:"#fa4d56",border:"#ffffff"},spacing:{lg:"32px",md:"16px",sm:"8px",xl:"48px",xs:"4px",xxl:"64px",xxs:"2px"},shadow:{lg:"0 1px 2px 0 rgba(0,0,0)",md:"0 1px 2px 0 rgba(0,0,0,.5)",sm:"0 1px 2px 0 rgba(0,0,0,.2)"}},react=(__webpack_require__("./src/config/theme/types.ts"),__webpack_require__("./node_modules/react/index.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),__jsx=react.createElement,GlobalStyle=(0,styled_components_browser_esm.vJ)(["body{font-family:'Roboto',sans-serif;font-size:",";background-color:",";margin:0;padding:0;}"],(function(props){return props.theme.typography.size.md}),(function(props){return props.theme.colors.background})),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children;return __jsx(react.Fragment,null,__jsx(styled_components_browser_esm.f6,{theme:tokens},__jsx(GlobalStyle,null),children))};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/config/theme/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/config/theme/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/theme/types.ts":()=>{},"./src/stories/default.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>default_stories});var react=__webpack_require__("./node_modules/react/index.js"),theme=__webpack_require__("./src/config/theme/index.ts"),__jsx=react.createElement,Default=function Default(_ref){var text=_ref.text;return __jsx(react.Fragment,null,text)};Default.__docgenInfo={description:"",methods:[],displayName:"Default",props:{text:{required:!0,tsType:{name:"string"},description:""}}};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Default.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/stories/Default.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}var default_stories_jsx=react.createElement;const default_stories={decorators:[function(Story){return default_stories_jsx(theme.ThemeProvider,null,default_stories_jsx(Story,null))}],title:"Components/Default",component:Default,argTypes:{text:{name:"text",defaultValue:"Hi there!",description:"Friendly message",type:"string"}}};var DefaultStory={render:function render(props){return default_stories_jsx(Default,props)}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"{\n  render: function render(props) {\n    return __jsx(Default, props);\n  }\n}",...DefaultStory.parameters?.docs?.source}}}}}]);