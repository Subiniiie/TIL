import styled from "styled-components";

const Wrapper = styled.div`
    .react-datepicker__input-container {
        border: 2px solid #a6cfe9;
        display: flex;
        allign-items: center;
    }

    .react-datepicker__input-focus {
        cursor: pointer;
    }

    .react-datepicker__calendar-icon {
        margin-top: 1px;
        padding: 5px;
        color: #a6cfe9;
        width: 23px;
        height: 23px;
    }

    input {
        width: 180px;
        color: #3f3f46;
        margin-left: 8px;
        caret-color: transparent;
        &:focus {
            outline: none;
        }
    }

    .react-datepicker {
        border-radius: 12px;
    }

    .react-datepicker__header {
        background-color: #e0f2fe;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        border-bottom: none;
    }

    .react-datepicker__triangle {
        visibility: hidden;
    }

    .react-datepicker__current-month {
        font-weight: 700;
        margin-bottom: 10px;
    }

    .react-datepicker__day-names {
        font-size: 12px;
    }

    .react-datepicker__day-name {
        color: #3f3f46;
    }

    .react-datepicker__day-hover {
        border-radius: 15px;
    }

    .react-datepicker__day--selected {
        background-color: rgb(186, 217, 241);
        border-radius: 15px;
    }

    .react-datepicker__day--outside-month {
        color: grey;
    }
`

export default Wrapper