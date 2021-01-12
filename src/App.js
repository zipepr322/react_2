import React, {useState} from 'react'
import MainContainer from "./components/MainContainer";
import defaultTaskList from '../src/list'
import uuid from 'uuid/dist/v4'

function App() {
    const defaultList = JSON.parse(JSON.stringify(defaultTaskList));
    const [calendarElem, setCalendarElem] = useState(defaultList);

    // const middleElem=(innerElem)=>{
    //     function checkAvailability(arr, val) {
    //         return arr.some(function(arrVal) {
    //             return val === arrVal;
    //         });
    //     }
    //     const middleElemArr=[];
    //     for(const i=2,n=0;i<=innerElem.id;i+3,n+1){
    //         middleElemArr.push(i);
    //     }
    //     //если значение true - делаем прозрачные границы сверху и снизу, доделать
    //     middleElemArr.some(middleElemArr=>innerElem.id === middleElemArr);
    //     return false
    // };

    const calendarElemToggle=(innerElem)=>{
        // const editedArr = calendarElem.map(newArr=>{
        //     if (innerElem.id === newArr.id){
        //         // newArr.id=Date.now();
        //         // console.log(uuid());
        //         newArr.toggleOff = !newArr.toggleOff;
        //         newArr.toggleOn = !newArr.toggleOn;
        //         return newArr;
        //     }
        //     return newArr
        // });
        // setCalendarElem(editedArr)
    };

    const onMouseDown=(innerElem,event)=>{
        const editedArr = calendarElem.map(newArr=>{
            if(newArr.toggleOff){
                if(newArr.id === innerElem.id){
                    newArr.toggleOff = false;
                    newArr.toggleOn= true;
                    newArr.mouseDown = !newArr.mouseDown;
                    newArr.onToggleIsActive = true
                }
                newArr.mouseDown = !newArr.mouseDown;
                return newArr
            }
            if(newArr.toggleOn){
                if(newArr.id === innerElem.id){
                    newArr.toggleOff = true;
                    newArr.toggleOn= false;
                    newArr.mouseDown = !newArr.mouseDown;
                }
                newArr.mouseDown = !newArr.mouseDown;
                return newArr
            }

            return newArr
        });
        setCalendarElem(editedArr);


    };

    const onMouseUp=(innerElem)=>{
        const editedArr = calendarElem.map(newArr=>{
            console.log('check');
            newArr.mouseDown = false;
            if (innerElem.id === newArr.id && newArr.mouseDown){
                newArr.toggleOff = !newArr.toggleOff;
                newArr.toggleOn = !newArr.toggleOn;
                return newArr;
            }
            return newArr
        });
        setCalendarElem(editedArr);
    };

    const onMouseOver=(innerElem, event)=>{
        const editedArr = calendarElem.map(newArr=>{
            if (innerElem.id === newArr.id && newArr.mouseDown && newArr.toggleOff){
                newArr.toggleOff = false;
                newArr.toggleOn = true;
                newArr.mouseDown=false;
                return newArr;
            }
            if (innerElem.id === newArr.id && newArr.mouseDown && newArr.toggleOn){
                newArr.toggleOff = true;
                newArr.toggleOn = false;
                newArr.mouseDown=false;
                return newArr;
            }
            return newArr
        });
        setCalendarElem(editedArr);
       // console.log(event.type)
    };

  return (
    <div className="App">
        <MainContainer
            calendarElem={calendarElem}
            calendarElemToggle={calendarElemToggle}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseUp}
        />
    </div>
  );
}

export default App;

// const onMouseDown=(innerElem,event)=>{
//     const editedArr = calendarElem.map(newArr=>{
//
//
//         if(newArr.toggleOff){
//             console.log('toggleOff---->true');
//             newArr.mouseDown = true;
//         }
//         if(newArr.toggleOn){
//             newArr.mouseDown = true;
//         }
//         // newArr.mouseDown = true;
//         if (newArr.toggleOff){newArr.onToggleIsActive=true}
//         if (!newArr.toggleOff){newArr.onToggleIsActive=false}
//         if (innerElem.id === newArr.id && newArr.mouseDown){
//             newArr.toggleOff = !newArr.toggleOff;
//             newArr.toggleOn = !newArr.toggleOn;
//             return newArr;
//         }
//         return newArr
//     });
//     setCalendarElem(editedArr);
//
// };
