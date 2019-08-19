import React, { useState, useEffect } from 'react';
/**
 * useState, useEffect
 */

function useStateDemo() {
    const [ count, setCount ] = useState(0);
    const [ country, setCountry ] = useState(['中国']);
    const [ currentCountry, setCurrentCountry ] = useState('');
    useEffect(() => {
        console.log('当前组件所有数据更新都会进入此方法');
    });
    useEffect(() => {
        console.log('只有count更新会进入此方法');
    }, [count]);
    useEffect(() => {
        console.log('只会初始化执行一次');
    }, []);
    return <div>
        当前数量：{ count }
        <button onClick={ () => setCount(count + 1) }>+</button>
        <br/>
        <input onChange={ e => setCurrentCountry(e.target.value) } />
        <button onClick={ () => setCountry([...country, currentCountry]) }>添加国家</button>
        <div>
            当前的国家：{
                country.map(x => `${x}  `)
             }
        </div>
    </div>
}

export default useStateDemo;