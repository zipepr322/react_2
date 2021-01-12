import React from 'react'
import classNames from 'classnames'
// import uuid from 'uuid/dist/v4'

export default function CalendarElement ({newElem, calendarElemToggle, onMouseDown, onMouseOver,onMouseUp}){

    return (

        <div
             className={classNames(
                            {'calendar_element_ontoggle': newElem.toggleOn, 'element_border':true},
                            {'calendar_element_style': newElem.toggleOff},
                            // {'middle_element_border': newElem.id===n+3},
                 )
             }
             onClick={()=> calendarElemToggle(newElem)}
             onMouseDown={(event)=> onMouseDown(newElem,event)}
             onMouseOver={(event)=> onMouseOver(newElem,event)}
             onMouseUp={(event)=> onMouseUp(newElem)}
        >
            {`${newElem.id}`}
        </div>

    )
}


// {"id":25, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":26, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":27, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":28, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":29, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":30, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":31, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":32, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":33, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":34, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":35, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":36, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":37, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":38, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":39, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":40, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":41, "toggleOff": true, "secondSection" : true, "toggleOn": false, "mouseDown": false},
// {"id":42, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":43, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":44, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":45, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":46, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":47, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":48, "toggleOff": true, "secondSection": true, "toggleOn": false, "mouseDown": false},
// {"id":49, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":50, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":51, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":52, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":53, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":54, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":55, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":56, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":57, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":58, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":59, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":60, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":61, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":62, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":63, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":64, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":65, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":66, "toggleOff": true, "thirdSection" : true, "toggleOn": false, "mouseDown": false},
// {"id":67, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":68, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":69, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":70, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":71, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":72, "toggleOff": true, "thirdSection": true, "toggleOn": false, "mouseDown": false},
// {"id":73, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":74, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":75, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":76, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":77, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":78, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":79, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":80, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":81, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":82, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":83, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":84, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":85, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":86, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":87, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":88, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":89, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":90, "toggleOff": true, "fourthSection" : true, "toggleOn": false, "mouseDown": false},
// {"id":91, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":92, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":93, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":94, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":95, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false},
// {"id":96, "toggleOff": true, "fourthSection": true, "toggleOn": false, "mouseDown": false}