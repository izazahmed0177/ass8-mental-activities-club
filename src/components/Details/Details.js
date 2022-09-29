import React, { useEffect, useRef, useState } from 'react';
import '../Details/Details.css'
import '../Details/fakedb'
import { addToDb, getStoredBreak } from '../Details/fakedb';

const Details = (props) => {
    const { details } = props;
    // console.log(details);


    const [brack, setBrack] = useState([])
    const brackNum = numberBrack => {
        setBrack(numberBrack);
        addToDb(numberBrack);

    }

    useEffect(() => {
        const storeBrack = getStoredBreak();
        // console.log(storeBrack);
        const saveBreak = [];
        for (const id in storeBrack) {
            console.log(id);
            saveBreak.push(id)
        }

        console.log(saveBreak)
        setBrack(saveBreak);


    }, [])









    // console.log(brack);


    // const inputRef = useRef(null);
    let activitiesTime = 0;
    let breakTime = brack;


    for (const activity of details) {
        activitiesTime = activitiesTime + activity.time;
    }


    // function handleClick(e) {
    //     // console.log(inputRef.current.value);
    //     // let value = 0;
    //     // console.log(value)
    //     // console.log(e.target.value);
    //     console.log(e.value);
    // }

    // let breakTimeloclal = {};

    // addToDb(brack)
    // localStorage.setItem('breakTimeloclal', JSON.stringify(brack));

    // const addToDb = (brack) => {
    //     let breakTime = {};


    // localStorage.setItem('breakTime', JSON.stringify(breakTime));

    // const localtime = localStorage.getItem('breakTime')
    // console.log(localtime)
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
                    {/* <p className='text-center pt-3'><a onClick={(e) => handleClick(e, "value")} className='btn' value={"20"}>20min</a></p></div> */}

                    <p className='text-center pt-3'><a onClick={() => brackNum(20)} className='btn' value='20'>20min</a></p></div>


                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'><a onClick={() => brackNum(30)} className='btn'>30min</a></p></div>

                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'><a onClick={() => brackNum(40)} className='btn'>40min</a></p></div>

                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'><a onClick={() => brackNum(50)} className='btn'>50min</a></p></div>

                <div className='col-2  bg-white p-0 m-1 fs-6 text-center justify-item-center rounded-circle'>
                    <p className='text-center pt-3'><a onClick={() => brackNum(60)} className='btn'>60min</a></p></div>

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