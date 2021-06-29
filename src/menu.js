import React  from 'react';
import './menu.css';

import { useDispatch } from 'react-redux';
import { updateState } from './reducer';


const generateRandomColor = () => {
    let color = ['#'];
    let options = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let num = 0;

    for(let i=0;i<6;i++){
        num = Math.floor(Math.random() * options.length);
        color.push(options[num]);
    }
    return color.join('');
}



 

export const Menu = () => {
    const dispatch = useDispatch();
 

    const handleGenerate = () => {
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        dispatch(updateState({
            bgcolor2: color1,
            bgcolor1: color2
        }));
    } 

    return (
        <div className="menu">
            <div className="logo"> Color Gradient Generator</div>
            <div >
                <button onClick={handleGenerate} className="generatorButton" >
                    <div className="generatorContainer">
                        <div>Generate</div> 
                        <div className="generatorIcon"></div>
                    </div> 
                </button>
            </div>
        </div>
    );
}