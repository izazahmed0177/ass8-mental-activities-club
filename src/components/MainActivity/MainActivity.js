import React from 'react';
import Activities from '../Activities/Activities';
import Details from '../Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainActivity/MainActivity.css'


const MainActivity = () => {
    return (
        <div className='main-activity-container'>
            <div className='container'>
                <div className='row activity-row'>

                    <div className='activity-list-container cal-12'>

                        <div>
                            <h1>Mental activities</h1>
                            <p>Mental activities are things that primarily require cognitive effort to complete. Some example of mental activities include:</p>
                        </div>
                        <Activities> </Activities>


                    </div>
                    <div className='activity-details-container cal-4'>
                        <Details> </Details>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainActivity;