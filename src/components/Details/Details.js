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

            <div className='d-flex flex-row p-4 personal-info item-flex '>
                <div className='p-3'>
                    <h4>77 <span className='fs-6'>kg</span></h4>
                    <p>Weight</p>
                </div>
                <div className='p-3'>
                    <h4>6.5</h4>
                    <p>Hight</p>
                </div>
                <div className='p-3'>
                    <h4>25 <span className='fs-6'>yrs</span></h4>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <h4>Add A Break</h4>
            </div>

            <div className='row p-2 break-time-continear item-flex fs-6 m-0'>
                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'>20min</p></div>
                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'>30min</p></div>
                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'>40min</p></div>
                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'>50min</p></div>
                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'>60min</p></div>
                {/* <div className='col-2  bg-white p-2 m-2 fs-6 rounded-circle'>30min</div>
                <div className='col-2  bg-white p-2 m-2 fs-6 rounded-circle'>40min</div>
                <div className='col-2  bg-white p-2 m-2 fs-6 rounded-circle'>50min</div>
                <div className='col-2  bg-white p-2 m-2 fs-6 rounded-circle'>60min</div>
                <div className='col-2  bg-white p-2 m-2 fs-6 rounded-circle'>55min</div> */}

            </div>

            <div>
                <h4>Mental Activities Details</h4>
            </div>

            <div className='d-flex flex-row p-4 activities-time m-3 item-flex'>
                <div>
                    <h5>Activities time</h5>
                </div>
                <div>
                    <p>120 min</p>
                </div>

            </div>

            <div className='d-flex flex-row p-4 break-time item-flex m-3'>
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