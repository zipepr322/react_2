import React from 'react'
import DaySection from "./DaySection";
import CalendarSection from "./CalendarSection";

export default function MainContainer  (props) {
    return (
        <div style={{display:'flex'}}>
            <DaySection/>
            <CalendarSection calendarElem={props.calendarElem}
                             calendarElemToggle={props.calendarElemToggle}
                             onMouseDown={props.onMouseDown}
                             onMouseOver={props.onMouseOver}
                             onMouseUp={props.onMouseUp}
            />
        </div>
    )
}

