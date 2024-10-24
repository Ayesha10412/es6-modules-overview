import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, divide, multiply } from '../Calculate';
// import add from '../Calculate';
const Sunglass = () => {

const first = 55;
const second = 199;
const sum = add(first,second)
const mult = multiply(first, second)
const divideResult = divide(first, second)



// console.log(sum)

    return (
        <div>
            
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;