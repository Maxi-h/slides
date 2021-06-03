import React, { useState } from 'react';

function Slides({ slides }) {
    const [index, setIndex] = useState(0);
    const onClickBtn = (e) => {
        if (e.target.name === "restart") {
            setIndex(0);
        } else if (e.target.name === "prev") {
            setIndex(index - 1);
        } else if (e.target.name === "next") {
            setIndex(index + 1);
        }

        
        
    }
    return (
        
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={index === 0} name="restart" className="small outlined" onClick={(e) => onClickBtn(e)}>Restart</button>
                <button data-testid="button-prev" disabled={index === 0} name="prev" className="small" onClick={(e) => onClickBtn(e)}>Prev</button>
                <button data-testid="button-next" disabled={index === slides.length-1} name="next" className="small" onClick={(e) => onClickBtn(e)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );

}

export default Slides;
