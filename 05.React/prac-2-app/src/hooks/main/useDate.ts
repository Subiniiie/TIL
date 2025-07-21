import { useState } from "react";

const useDate = () => {
    const [ startDate, setStartDate ] = useState<Date | null>(new Date());

    const handleChangeDate = (date: Date | null) => {
        setStartDate(date);
    };



    return {
        startDate,
        handleChangeDate
    }
} 

export default useDate;