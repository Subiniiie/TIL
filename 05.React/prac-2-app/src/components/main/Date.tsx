import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from "date-fns/locale";
import { useDate } from "@hooks/index";

const Date = () => {
    const { startDate, setStartDate } = useDate();

    return (
    <DatePicker 
        showIcon
        dateFormat="yyyy년 MM월 dd일"
        dateFormatCalendar="yyyy년 MM월"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko}
    />
    )
};

export default Date;