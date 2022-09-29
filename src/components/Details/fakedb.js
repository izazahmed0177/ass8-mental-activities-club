const addToDb = breaks => {
    let breakTime = {};
    const breackstore = localStorage.getItem('break-time')
    if (breackstore) {
        breakTime = JSON.parse(breackstore)

    }

    const quantity = breakTime[breaks];

    if (quantity) {

        // const newQuantity = quantity;
        // breakTime[breaks] = newQuantity;
        breakTime[breaks] = quantity;


    } else {
        breakTime[breaks] = 1;
        // breakTime[breaks] = breakTime;
        // console.log('new item')
        // localStorage.setItem(id, 1)
    }

    localStorage.setItem('break-time', JSON.stringify(breakTime));




}

export {
    addToDb
}