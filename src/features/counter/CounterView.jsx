import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset,incrementByAmount } from './counterSlice';

const CounterView = () => {
    const { count } = useSelector((state) => (state.counter))
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>dispatch(decrement())} disabled={count===0} className="btn-decrement">Decrement</button>
            <button onClick={()=>dispatch(reset())} className="btn-reset">Reset</button>
            <button onClick={()=>dispatch(increment())} className="btn-increment">Increment</button>
            <button onClick={()=>dispatch(incrementByAmount(5))} className="btn-increment-by-amount">Increase 5</button>
        </div>
    );
};

export default CounterView;