import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsRoutes = () => {
    const{id} = useParams()
  return (
    <div>ParamsRoutes :: {id}</div>
  )
}

export default ParamsRoutes