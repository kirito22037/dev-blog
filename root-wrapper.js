import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import AllPostProvider from './src/contexts/AllPostContext';

import Code from './src/components/Code';

const components = {
    h2 : ( {children} )=>(
    <h2 style={ {color : 'rebeccapurple'} }>{ children }</h2>
    ),
    img : (props)=>(
      <div className="w-100 d-flex align-items-center justify-content-between">
          <img {...props} />
      </div>
    ),
    'p.inlineCode' : props => (
        <code style={ {backgroundColor : 'lightgray'} }>{ props.children }</code>
    ),
    pre : ({ children : { props } }) => {
        if(props.mdxType === 'code'){
          return(
            <Code
            codeString={ props.children.trim() }
            language={
              props.className && props.className.replace('language-','')
            }
            {...props}/>
          )
        }
      },
};

export const wrapRootElement = ( {element} )=>(
    <AllPostProvider>
    <MDXProvider 
    components={ components }>
        { element }
    </MDXProvider>
    </AllPostProvider>
);