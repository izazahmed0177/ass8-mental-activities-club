const addToDb = breaks => {
    let breakTime = {};
    // const breackstore = localStorage.getItem('break-time')
    // if (breackstore) {
    //     breakTime = JSON.parse(breackstore)

    // }

    const quantity = breakTime[breaks];


    if (quantity) {

        const newQuantity = quantity + 1;
        breakTime[breaks] = newQuantity;



    } else {
        breakTime[breaks] = 1;

    }

    localStorage.setItem('break-time', JSON.stringify(breakTime));

}

const getStoredBreak = () => {
    let breakTime = {};
    const storedBreak = localStorage.getItem('break-time')

    if (storedBreak) {
        breakTime = JSON.parse(storedBreak);

    }
    return breakTime;
}

export {
    addToDb,
    getStoredBreak
}