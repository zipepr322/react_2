import React from 'react'
import DaySection from "./DaySection";
import CalendarSection from "./CalendarSection";

export default function MainContainer  (props) {
    return (
        <div style={{display:'flex'}}>
            <DaySection/>
            <CalendarSection calendarElem={props.calendarElem}
                             onMouseDown={props.onMouseDown}
                             onMouseOver={props.onMouseOver}
                             onMouseUp={props.onMouseUp}
                             elemCoordinates={props.elemCoordinates}
            />
        </div>
    )
}

