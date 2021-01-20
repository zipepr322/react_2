import React from 'react'
import classNames from 'classnames'
// import uuid from 'uuid/dist/v4'

export default function CalendarElement ({newElem, onMouseDown, onMouseOver,onMouseUp, elemCoordinates}){
      // console.log(elemCoordinates);

    return (

        <div
             className={classNames(
                            {'calendar_element_ontoggle': newElem.toggleOn, 'element_border':true},
                            {'calendar_element_style': !newElem.toggleOn},
                            // {'middle_element_border': newElem.id % 2},
                 )
             }
             onMouseDown={(event)=> onMouseDown(newElem,event,elemCoordinates)}
             onMouseOver={(event)=> onMouseOver(newElem,event,elemCoordinates)}
             onMouseUp={(event)=> onMouseUp(newElem)}
        >
            {/*{`${newElem.id}`}*/}
        </div>

    )
}
