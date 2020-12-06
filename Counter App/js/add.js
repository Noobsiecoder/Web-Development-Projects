import {
    checkValueZero,
    incrementFontSize
} from './change.js';

const incrementValue = () => {
    checkValueZero();
    incrementFontSize();
    let countValue = document.getElementById("countValue").innerHTML;
    document.getElementById("countValue").innerHTML = `${++countValue}`;
}

export {
    incrementValue
};