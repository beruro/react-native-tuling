"use strict";(self.webpackChunk_hanafish_react_native_tuling=self.webpackChunk_hanafish_react_native_tuling||[]).push([[3416],{40725:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return v}});var r=e(15009),u=e.n(r),l=e(99289),i=e.n(l),o=e(67294),E=e(9466),s=e(77884),c=e(1078),v={"error-boundary-demo-basic":{component:o.memo(o.lazy(function(){return e.e(5441).then(e.bind(e,46033))})),asset:{type:"BLOCK",id:"error-boundary-demo-basic",refAtomIds:["error-boundary"],dependencies:{"index.tsx":{type:"FILE",value:e(14913).Z},react:{type:"NPM",value:"18.3.1"},"@hanafish/react-native-tuling":{type:"NPM",value:"0.4.7"}},entry:"index.tsx",description:"\u5BF9\u53EF\u80FD\u51FA\u9519\u7684\u7EC4\u4EF6\u8FDB\u884C\u5305\u88F9",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:t||(t=e.t(o,2)),"react-native":s,"@fruits-chain/react-native-xiaoshu":c},renderOpts:{compile:function(){var I=i()(u()().mark(function p(){var _,x=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,x));case 3:case"end":return a.stop()}},p)}));function m(){return I.apply(this,arguments)}return m}()}}}},1:function(d,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(9466);const r=[{value:"\u4E00\u822C\u7528\u4E8E\u5E94\u7528\u6839\u7EC4\u4EF6\uFF0C\u6355\u83B7 React \u5185\u4EA7\u751F\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"title",paraId:1,tocIndex:3},{value:"\u9519\u8BEF\u63D0\u793A",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"'\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~'",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"reloadText",paraId:1,tocIndex:3},{value:"\u91CD\u65B0\u52A0\u8F7D\u7684\u6587\u6848",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"'\u91CD\u65B0\u52A0\u8F7D'",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onError",paraId:1,tocIndex:3},{value:"\u51FA\u9519\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:3},{value:"(e:Error, info:ErrorInfo) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"renderError",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FA\u9519\u65F6\u7684\u9875\u9762",paraId:1,tocIndex:3},{value:"(opt:{name:string, message:string, onReset:() => void}) => React.ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},14913:function(d,n){n.Z=`import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { ErrorBoundary } from '@fruits-chain/react-native-xiaoshu'

const ErrorApp = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '\u663E\u793A\u4E86\u5185\u5BB9',
      }
    }
    return null
  }, [])

  // @ts-ignore
  return <Text>{randomData.text}</Text>
}

const BasicResult: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorApp />
    </ErrorBoundary>
  )
}

export default BasicResult
`}}]);
