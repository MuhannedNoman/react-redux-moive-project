import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const CardSlider = ({ Arrayy, currentState, setCurrentState }) => {
  return (
    <>
      <FaAngleLeft
        onClick={() => {
          currentState.before !== 0 &&
            setCurrentState((preValue) => {
              return {
                before: preValue.before - 5,
                after: preValue.after - 5,
              }
            })
        }}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '2rem',
          fontSize: '29px',
        }}
      />
      <FaAngleRight
        onClick={() => {
          Arrayy.length > currentState.after &&
            setCurrentState((preValue) => {
              return {
                before: preValue.before + 5,
                after: preValue.after + 5,
              }
            })
        }}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          right: '2rem',
          fontSize: '29px',
        }}
      />
    </>
  )
}

export default CardSlider
