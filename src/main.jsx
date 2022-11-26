import React from 'react'
import ReactDOM from 'react-dom/client'
import Wine from './Wine'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Wine title="temiz tut aragi" description="1litr" rating={3.6} like/>
  </>
)
