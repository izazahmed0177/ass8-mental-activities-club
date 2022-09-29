import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Details from '../Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainActivity/MainActivity.css'



const MainActivity = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('active.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])





    return (
        <div className='main-activity-container'>
            <div className=''>
                <div className='row activity-row'>

                    <div className='activity-list-container col-8'>

                        <div>
                            <h1>Mental activities</h1>
                            <p>Mental activities are things that primarily require cognitive effort to complete. Some example of mental activities include</p>
                            <h5>Select today's exercise:</h5>
                        </div>

                        <div className='activities-container-data'>
                            <div className='container'>
                                <div className='row m-3'>


                                    {
                                        activities.map(activitie => <Activities
                                            key={activitie.id}
                                            activitie={activitie}
                                        ></Activities>)
                                    }

                                </div>
                            </div>




                            {/*  */}
                        </div>

                    </div>


                    <div className='activity-details-container col-4'>
                        <Details> </Details>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainActivity;