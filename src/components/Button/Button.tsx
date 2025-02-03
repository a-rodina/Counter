import React from 'react';
import './Button.css';
import { useState } from "react";
import Counter from '../Counter/Counter.tsx';
import Spinner from '../Spinner/Spinner.tsx';

function Button({label} : {label : string}) {
    const [pressed, setPressed] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const handleButtonState = () => {
        setPressed(pressed => !pressed)
        setIsShown(true);
        setTimeout(() => {
            setIsShown(false);
        }, 500);
    }

    return (
    <>
        <button className='button' onClick={() => handleButtonState()}>
            <div className='overlay'></div>
            {isShown ? <div className='button__content-block'><Spinner/></div> :
                <div className='button__content-block'>
                    <p className='button__content-label'>{label}</p>
                    {pressed ? <Counter/> : null}
                </div>
            }
            
        </button>
    </>
    );
}

export default Button;