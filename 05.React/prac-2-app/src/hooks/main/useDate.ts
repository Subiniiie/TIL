import { useState } from "react";

const useDate = () => {
    const [ startDate, setStartDate ] = useState<Date | null>(new Date());

    return {
        startDate,
        setStartDate,
    }
} 

export default useDate;