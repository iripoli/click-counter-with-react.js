import React, { useState } from 'react';
import { useParams } from "react-router";



const Contador = (state, action) => {
    const { initialCount } = useParams();
    const [count, setCount] = useState(Number(initialCount) || 1);


    return (
        <div>
            <h1>Contador simple con React.js</h1>

            <div class="qty mt-5 contador">
                <span class="minus bg-dark" onClick={() => { setCount(count - 1) }}>-</span>
                <span class="counter">{count}</span>
                <span class="plus bg-dark" onClick={() => { setCount(count + 1) }}>+</span>
            </div>

        </div>

    )


}


export default Contador