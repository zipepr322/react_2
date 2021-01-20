import React, {useState} from 'react'
import MainContainer from "./components/MainContainer";
import defaultTaskList from '../src/list'
// import uuid from 'uuid/dist/v4'

function App() {
    const defaultList = JSON.parse(JSON.stringify(defaultTaskList));
    const [calendarElem, setCalendarElem] = useState(defaultList);
    const [elemCoordinates, setElemCoordinates]= useState([{x:0,y:0}]);
    const [elemKeyState, setElemKeyState] = useState([{onToggleON:false,onToggleOff:false}]);


    const onMouseDown=(innerElem,event, innerCoordinates)=>{
      const changedCoordinates=elemCoordinates.map(newElemCoordinates=>{
        // console.log(innerCoordinates);
        newElemCoordinates.x=innerElem.x;
        newElemCoordinates.y=innerElem.y;
        // console.log(newElemCoordinates);
        return newElemCoordinates
      });

      const keyAccess=elemKeyState.map(newKeyState=>{
          if(innerElem.toggleOn){
            newKeyState.onToggleOff=true;
            newKeyState.onToggleON=false;
          }
          if(!innerElem.toggleOn){
            newKeyState.onToggleOff=false;
            newKeyState.onToggleON=true;
          }
        return newKeyState
      });


      const editedArr = calendarElem.map(newArr=>{
          if(!newArr.toggleOn){
              if(newArr.id === innerElem.id){
                setElemKeyState(keyAccess);
                setElemCoordinates(changedCoordinates);
                newArr.toggleOn = true;
                newArr.mouseDown = !newArr.mouseDown;
              }
              // console.log('mouseDown----->Toggle=false');
              newArr.mouseDown = !newArr.mouseDown;
              return newArr
          }

          if(newArr.toggleOn){
              if(newArr.id === innerElem.id){
                setElemKeyState(keyAccess);
                setElemCoordinates(changedCoordinates);
                newArr.toggleOn = false;
                newArr.mouseDown = !newArr.mouseDown;
              }
              // console.log('mouseDown----->Toggle=true');
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
                newArr.toggleOn = !newArr.toggleOn;
                return newArr;
            }
            return newArr
        });
        setCalendarElem(editedArr);
    };

    const onMouseOver=(innerElem,event)=>{
      const editedArr = calendarElem.map(newArr=>{
        if (elemKeyState[0].onToggleON && newArr.mouseDown &&  newArr.x >= elemCoordinates[0].x && newArr.y >= elemCoordinates[0].y && newArr.x < innerElem.x+1 && newArr.y < innerElem.y+1){
          newArr.toggleOn=true;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleON && newArr.mouseDown &&  newArr.x >= elemCoordinates[0].x && newArr.y <= elemCoordinates[0].y && newArr.x < innerElem.x+1 && newArr.y > innerElem.y-1){
          newArr.toggleOn=true;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleON && newArr.mouseDown &&  newArr.x <= elemCoordinates[0].x && newArr.y >= elemCoordinates[0].y && newArr.x > innerElem.x-1 && newArr.y < innerElem.y+1){
          newArr.toggleOn=true;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleON && newArr.mouseDown &&  newArr.x <= elemCoordinates[0].x && newArr.y <= elemCoordinates[0].y && newArr.x > innerElem.x-1 && newArr.y > innerElem.y-1){
          newArr.toggleOn=true;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleOff && newArr.mouseDown  && newArr.x >= elemCoordinates[0].x && newArr.y >= elemCoordinates[0].y && newArr.x < innerElem.x+1 && newArr.y < innerElem.y+1){
          newArr.toggleOn=false;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleOff && newArr.mouseDown  && newArr.x >= elemCoordinates[0].x && newArr.y <= elemCoordinates[0].y && newArr.x < innerElem.x+1 && newArr.y > innerElem.y-1){
          newArr.toggleOn=false;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleOff && newArr.mouseDown && newArr.x <= elemCoordinates[0].x && newArr.y >= elemCoordinates[0].y && newArr.x > innerElem.x-1 && newArr.y < innerElem.y+1){
          newArr.toggleOn=false;
          newArr.mouseDown=false;
          return newArr
        }

        if (elemKeyState[0].onToggleOff && newArr.mouseDown && newArr.x <= elemCoordinates[0].x && newArr.y <= elemCoordinates[0].y && newArr.x > innerElem.x-1 && newArr.y > innerElem.y-1){
          newArr.toggleOn=false;
          newArr.mouseDown=false;
          return newArr
        }
            return newArr
        });
        setCalendarElem(editedArr);

    };

  return (
    <div className="App">
        <MainContainer
            elemCoordinates={elemCoordinates}
            calendarElem={calendarElem}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseUp}
        />
    </div>
  );
}

export default App;

