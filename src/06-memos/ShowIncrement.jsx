import React from "react"

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' me estoy volviendo a generar');

  return (
        <button
        className="btn btn-primary"
        onClick={ () => {
            increment(5);
        }}
        >
            incrementar
        </button>
  )
})
