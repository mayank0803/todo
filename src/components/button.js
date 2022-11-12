import React from 'react'

export const Button = (props) => {
  return (
    <div>
    <h1>count : {props.value}</h1>
    <button onClick={props.increase}>Increse</button>
    <button onClick={props.decrease}>Decrease</button>
    </div>
  )
}


