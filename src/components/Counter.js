import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { inc, dec } from '../actions/change';


function Counter() {
    const count = useSelector(state => state.count);
    console.log(count);
    const dispatch = useDispatch();

    
    return (
        <div>
            <button onClick={()=>dispatch(inc())}>+</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(dec())}>-</button>
        </div>
    );
    
}
export default Counter;