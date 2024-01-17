import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserPage() {

  const {id} = useParams();

  return (
    <>
      <div>
        Paso de parámetros
        <br />
        User <span>{id}</span>
      </div>
    </>
  )
}
