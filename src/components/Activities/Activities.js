import React from 'react';
import '../Activities/Activities.css'

const Activities = ({ activitie, handleAddActivity }) => {
    const { name, time, img } = activitie;

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 all-activity mt-3'>

            {/*  */}
            <div className="card">
                <img src={img} className="img-fluid card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6>Time required : {time} min</h6>
                    <div className='text-center mt-3'>
                        <a onClick={() => handleAddActivity(activitie)} className="btn btn-primary px-5 py-2">Add to list</a>
                    </div>

                </div>
            </div>


            {/*  */}


        </div>
    );
};

export default Activities;