import React, { useContext } from 'react';
/**
 * react上下文，隔代传参
 */

 const myContext = React.createContext();
 const { Provider, Consumer } = myContext;
 
 // 01
 function Child(prop) {
    return <div>
        foo:{prop.foo}
    </div>
 }

// 02 useContext
function Child2() {
    const tempContext = useContext(myContext);
    return <div>
        { tempContext.foo }
    </div>
}

 export default function() {
     return (<div>
         <Provider value={{ foo: 'bar' }}>
             <Consumer>
                 {x => <Child {...x} ></Child>}
             </Consumer>
             <Child2 />
         </Provider>
     </div>)
 }
