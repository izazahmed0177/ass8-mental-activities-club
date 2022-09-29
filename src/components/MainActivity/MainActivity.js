import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Details from '../Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainActivity/MainActivity.css'

import { faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MainActivity = () => {
    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([])


    useEffect(() => {
        fetch('active.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    ///
    const handleAddActivity = (selectActivity) => {
        console.log(selectActivity);
        const newActivity = [...details, selectActivity]
        setDetails(newActivity)

    }




    return (
        <div className='main-activity-container'>
            <div className=''>
                <div className='row activity-row'>

                    <div className='activity-list-container col-lg-8 col-8 col-md-8 col-sm-12 col-xs-12 mx-0'>

                        <div className='p-5'>

                            <h3 className='text-primary'>

                                <FontAwesomeIcon icon={faSquarePersonConfined}></FontAwesomeIcon>
                                {/* <FontAwesomeIcon icon="fa-solid fa-square-person-confined" /> */}


                                Mental activities</h3>
                            <p>Mental activities are things that primarily require cognitive effort to complete. Some example of mental activities include</p>
                            <h5>Select today's exercise:</h5>
                        </div>

                        <div className='activities-container-data'>
                            <div className='container'>
                                <div className='row m-3 mx-0'>


                                    {
                                        activities.map(activitie => <Activities
                                            key={activitie.id}
                                            activitie={activitie}
                                            handleAddActivity={handleAddActivity}
                                        ></Activities>)
                                    }

                                </div>
                            </div>




                            {/*  */}
                        </div>

                    </div>


                    <div className='activity-details-container col-lg-4 col-4 col-md-12 col-sm-12 col-xs-12'>
                        <Details details={details}> </Details>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainActivity;