import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

function Router() {
    const params = useParams();
  return (
    <>
    <div>Rounting</div>
    <h1>route param - {JSON.stringify(params)}</h1>
    <h1>search param - {URLSearchParams.get("search")}</h1>
    </>
  )
}

export default Router
