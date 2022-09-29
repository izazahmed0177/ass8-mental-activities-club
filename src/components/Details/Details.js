import React from 'react';
import '../Details/Details.css'

const Details = () => {
    return (
        <div>
            <div className='d-flex flex-row p-4 personal-info-name item-flex'>
                <div className='p-3 personal-img'>
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        alt="GeeksforGeeks logo" />

                </div>
                <div className='p-3'>
                    <p>izaz ahmed emon</p>
                    <p>dhaka</p>
                </div>
            </div>

            <div className='d-flex flex-row p-4 personal-info item-flex'>
                <div className='p-3'>
                    <h1>77 <small>kg</small></h1>
                    <p>Weight</p>
                </div>
                <div className='p-3'>
                    <h1>6.5</h1>
                    <p>Hight</p>
                </div>
                <div className='p-3'>
                    <h1>25 <small>yrs</small></h1>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <h4>Add A Break</h4>
            </div>

            <div className='d-flex flex-row p-4 break-time-continear item-flex'>
                <div className='p-3'>20min</div>
                <div className='p-3'>30min</div>
                <div className='p-3'>400min</div>
                <div className='p-3'>50min</div>
                <div className='p-3'>60min</div>

            </div>

            <div>
                <h4>Mental Activities Details</h4>
            </div>

            <div className='d-flex flex-row p-4 activities-time item-flex'>
                <div>
                    <h5>Activities time</h5>
                </div>
                <div>
                    <p>120 min</p>
                </div>

            </div>

            <div className='d-flex flex-row p-4 break-time item-flex'>
                <div>
                    <h5>Break time</h5>
                </div>
                <div>
                    <p>120 min</p>
                </div>

            </div>


            <div>

                <button type="button" className="btn btn-primary">Activity Completed</button>
            </div>






        </div>
    );
};

export default Details;