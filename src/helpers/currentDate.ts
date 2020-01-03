import months from "./months";

const currentDate = function(){
    const currDate = new Date();
    const date = currDate.getDate();
    const month = months(currDate.getMonth());
    const year = currDate.getFullYear();
    const dateToString = `${date} ${month} ${year}`;
    return dateToString;
}

export default currentDate;