import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return( 
        <ContentLoader 
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="140" cy="140" r="140" /> 
          <rect x="-1" y="293" rx="3" ry="3" width="280" height="26" /> 
          <rect x="0" y="425" rx="3" ry="3" width="92" height="31" /> 
          <rect x="130" y="426" rx="20" ry="20" width="150" height="31" /> 
          <rect x="0" y="334" rx="0" ry="0" width="280" height="79" />
        </ContentLoader>) 
}

export default LoadingBlock;


