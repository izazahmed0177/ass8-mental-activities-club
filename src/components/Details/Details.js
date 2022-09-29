import React from 'react';
import '../Details/Details.css'

const Details = (props) => {
    const { details } = props;

    let activitiesTime = 0;
    let breakTime = 0;
    // for (const activity of details) {
    //     // activitiesTime = activitiesTime + activity.activitiesTime;
    // }




    return (
        <div>
            <div className='d-flex flex-row p-4 personal-info-name item-flex'>
                <div className='p-1 personal-img'>
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        alt="GeeksforGeeks logo" />

                </div>
                <div className='pt-3'>
                    <p className='mb-1'>Izaz Ahmed Emon</p>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>

            <div className='d-flex flex-row p-1 personal-info item-flex rounded justify-content-around mt-2'>
                <div className='m-1 p-1'>
                    <h4>77 <span className='fs-6'>kg</span></h4>
                    <p>Weight</p>
                </div>
                <div className='m-1 p-1'>
                    <h4>6.5</h4>
                    <p>Hight</p>
                </div>
                <div className='m-1 p-1'>
                    <h4>25 <span className='fs-6'>yrs</span></h4>
                    <p>Age</p>
                </div>
            </div>

            <div className='mt-3'>
                <h4>Add A Break</h4>
            </div>

            <div className='row p-2 break-time-continear item-flex fs-6 m-0 rounded mt-3'>
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

            </div>

            <div className='mt-3'>
                <h4>Mental Activities Details</h4>
            </div>

            <div className='d-flex flex-row p-0 activities-time item-flex rounded mt-3'>
                <div className='m-3'>
                    <h5>Activities time</h5>
                </div>
                <div className='m-3'>
                    <p>{activitiesTime} min</p>
                </div>

            </div>

            <div className='d-flex flex-row p-0 break-time item-flex  rounded mt-3'>
                <div className='m-3'>
                    <h5>Break time</h5>
                </div>
                <div className='m-3'>
                    <p>{breakTime} min</p>
                </div>

            </div>


            <div className='mt-3 text-center p-3 '>

                <button type="button" className="btn btn-primary px-5 py-2">Activity Completed</button>
            </div>






        </div>
    );
};

export default Details;