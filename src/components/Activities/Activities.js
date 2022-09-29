import React from 'react';
import '../Activities/Activities.css'

const Activities = (props) => {
    const { name, time, img } = props.activitie;

    return (
        <div className='col-4 all-activity '>

            {/*  */}
            <div className="card">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


            {/*  */}




            {/* <div className='activity-img'>
                <img src={img} alt="" />
            </div> */}


            {/* <div>
                <h5>{name}</h5>
                <p>Time required: {time} min</p>
            </div>
            <div>
                <button type="button" className="btn btn-primary">Add To list
                </button>

            </div> */}


        </div>
    );
};

export default Activities;