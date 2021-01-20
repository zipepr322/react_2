import React from 'react'
import classNames from 'classnames'
import CalendarElement from "./CalendarElement";

export default function CalendarSection (props) {

    return (
        <div className={classNames('d-flex')}>
            <div className={classNames('calendar_section_style','section_syle_border')}>
                {props.calendarElem.map((newElem)=>{
                    if(newElem.firstSection){
                        return <div key={newElem.id}>
                            <CalendarElement
                                newElem={newElem}
                                onMouseDown={props.onMouseDown}
                                onMouseOver={props.onMouseOver}
                                onMouseUp={props.onMouseUp}
                                elemCoordinates={props.elemCoordinates}
                            />
                        </div>
                    }
                })}
            </div>

            <div className={classNames('calendar_section_style','section_syle_border')}>
                {props.calendarElem.map((newElem)=>{
                    if(newElem.secondSection){
                        return <div key={newElem.id}>
                            <CalendarElement
                                newElem={newElem}
                                onMouseDown={props.onMouseDown}
                                onMouseOver={props.onMouseOver}
                                onMouseUp={props.onMouseUp}
                                elemCoordinates={props.elemCoordinates}
                            />
                        </div>
                    }
                })}
            </div>

            <div className={classNames('calendar_section_style','section_syle_border')}>
                {props.calendarElem.map((newElem)=>{
                    if(newElem.thirdSection){
                        return <div key={newElem.id}>
                            <CalendarElement
                                newElem={newElem}
                                onMouseDown={props.onMouseDown}
                                onMouseOver={props.onMouseOver}
                                onMouseUp={props.onMouseUp}
                            />
                        </div>
                    }
                })}
            </div>

            <div className={classNames('calendar_section_style','section_syle_border')}>
                {props.calendarElem.map((newElem)=>{
                    if(newElem.fourthSection){
                        return <div key={newElem.id}>
                            <CalendarElement
                                newElem={newElem}
                                onMouseDown={props.onMouseDown}
                                onMouseOver={props.onMouseOver}
                                onMouseUp={props.onMouseUp}
                            />
                        </div>
                    }
                })}
            </div>

          <div className={classNames('calendar_section_style','section_syle_border')}>
            {props.calendarElem.map((newElem)=>{
              if(newElem.fifthSection){
                return <div key={newElem.id}>
                  <CalendarElement
                    newElem={newElem}
                    onMouseDown={props.onMouseDown}
                    onMouseOver={props.onMouseOver}
                    onMouseUp={props.onMouseUp}
                  />
                </div>
              }
            })}
          </div>

          <div className={classNames('calendar_section_style','section_syle_border')}>
            {props.calendarElem.map((newElem)=>{
              if(newElem.sixthSection){
                return <div key={newElem.id}>
                  <CalendarElement
                    newElem={newElem}
                    onMouseDown={props.onMouseDown}
                    onMouseOver={props.onMouseOver}
                    onMouseUp={props.onMouseUp}
                  />
                </div>
              }
            })}
          </div>
        </div>


    )


}
// return (
//     <div>
//         <div className={classNames('calendar_section_style')}>
//             {props.calendarElem.map((newElem)=>{
//                 if(newElem.firstSection){
//                     return <CalendarElement newElem={newElem} calendarElemToggle={props.calendarElemToggle} key={newElem.id}/>
//                 }
//                 return <CalendarElement/>
//             })}
//         </div>
//
//         <div className={classNames('calendar_section_style')}>
//             {props.calendarElem.map((newElem)=>{
//
//                 if (newElem.secondSection){
//                     return <CalendarElement newElem={newElem} calendarElemToggle={props.calendarElemToggle} key={newElem.id}/>
//                 }
//                 return <CalendarElement/>
//
//             })}
//
//         </div>
//     </div>
//
//
// )