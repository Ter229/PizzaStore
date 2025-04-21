import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="125" cy="125" r="125" /> 
    <circle cx="771" cy="121" r="27" /> 
    <rect x="0" y="296" rx="15" ry="15" width="280" height="25" /> 
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="447" rx="10" ry="10" width="95" height="30" /> 
    <rect x="127" y="442" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton