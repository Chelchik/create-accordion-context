import React, { useState, useContext } from 'react'
import ThemeContext from '../context';

function Accordion({accordion, onDelete}) {
    const [isShow, setIsShow] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);

    const isShowFunc = () => {
        setIsShow(!isShow);
    }

    return (
    <div className='accordion' style={{backgroundColor: theme ? "#1e2230" : "#f3f3f3", border: theme ? "2px solid #0b1118" : "2px solid #dadada"}}>
            <div className='titleBox'>
               <p style={{color: theme ? "#fff" : "#585858"}}>{accordion.title}</p>

                <div className='deleteAndShowButtonsBox'>
                    <b onClick={isShowFunc} style={{color: theme ? "#fff" : "#585858"}}>{isShow ? "-" : "+"}</b>

                    <button onClick={() => onDelete(accordion.id)} className='delete-btn' style={{backgroundColor: theme ? "#be0000" : "red"}}>Delete</button>
                </div>
            </div>

            <div className='description-box' style={{ display: isShow ? 'flex' : 'none' }}>
                    <span style={{color: theme ? "#fff" : "#585858"}}>{accordion.description}</span>
            </div>
        </div>
    )
}

export default Accordion;