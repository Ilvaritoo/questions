import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    
    const [showMore, setShowMore] = useState(false);
    const show = () => setShowMore(!showMore);
    return (
        <article className='question'>
            <div className="heading">
                <h3> {title}</h3>
                <button className='btn' onClick={show}> {showMore ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>
            </div>
            {showMore && <p>{info}</p>}
        </article>
    )
}

export default Question
