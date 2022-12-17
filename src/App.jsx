import React, { useState } from 'react'
import { HiCurrencyDollar } from 'react-icons/hi'
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";

export const App = () => {

  const [clickInput, setClickInput] = useState([])
  const [popStorage, setPopStorage] = useState([])
  const [icon, setIcon] = useState('HiCurrencyDollar')

  const handleIcon = (e) => {
    const selectedIcon = e.target.value
    setIcon(selectedIcon)
  }

  const handleContainer = e => {
    let iconElement;

    const iconProps = {
      style: { position: 'absolute', top: e.clientY, left: e.clientX },
    }

    switch (icon) {
      case "HiCurrencyDollar":
        iconElement = <HiCurrencyDollar {...iconProps} />
        break;
      case "DiAndroid":
        iconElement = <DiAndroid {...iconProps} />
        break;
      case "DiApple":
        iconElement = <DiApple {...iconProps} />
        break;
      case "DiCodeigniter":
        iconElement = <DiCodeigniter {...iconProps} />
        break;
    }
    console.log(iconElement)

    const newElement = {
      id: Math.floor(Math.random() * Date.now()),
      icon: iconElement
    }

    setClickInput(prev => [...prev, newElement])
  }

  const handleUndo = () => {
    const sliceMe = clickInput.slice(-1)
    setClickInput(clickInput.slice(0, clickInput.length - 1))
    setPopStorage(prev => [...prev, ...sliceMe])
  }

  const handleRedo = () => {
    const popStorageSlice = popStorage.slice(-1)
    setPopStorage(popStorage.slice(0, popStorage.length - 1))
    setClickInput(prev => [...prev, ...popStorageSlice])
  }

  const handleReset = () => {
    setClickInput([])
    setPopStorage([])
  }

  return (
    <div>

      <button onClick={handleUndo} disabled={clickInput.length === 0}>Undo</button>
      <button onClick={handleRedo} disabled={popStorage.length === 0} >Redo</button>
      <button onClick={handleReset} disabled={!clickInput.length && !popStorage.length}>Reset</button>

      <select onChange={e => handleIcon(e)}>
        <option value='HiCurrencyDollar'>HiCurrencyDollar</option>
        <option value='DiAndroid'>DiAndroid</option>
        <option value='DiApple'>DiApple</option>
        <option value='DiCodeigniter'>DiCodeigniter</option>
      </select>

      <div onClick={e => handleContainer(e)}>
        {clickInput.map((items) => {
          return <div
            key={items.id}>
            {items.icon}
          </div>
        })}
      </div>

    </div>
  )
}

  // * refactor later...
  // 1 make a selection/ options appear onCLick before everything fires.
  // 2 take selected Icon choice and store it in object, chosen key = iconImg: (sleceted source, could be funtion?)
  // 3 render that chose Icon where user clicked.
  //
  // side notes/ thoughts.
  // could we done via CSS mainly?
  // change HiCurrencyDollor to div, make div= chosesen icon.
  // select/option will need to be outside of map, create nested div within event div?
  // select/option menu go in event div nested? only appear once clicked? need select to be higher than onClick event div?
  // select/option will need event listener to "submit" selected data, event.target.value? onChange={}? to handleContainer(e, value)?  