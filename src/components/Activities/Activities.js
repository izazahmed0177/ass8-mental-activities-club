import React from 'react';
import '../Activities/Activities.css'

const Activities = (props) => {
    const { name, time, img } = props.activitie;

    return (
        <div className='all-activity'>
            <div className='activity-img'>
                <img src={img} alt="" />
            </div>


            <div>
                <h5>{name}</h5>
                <p>Time required: {time} min</p>
            </div>


        </div>
    );
};

export default Activities;