import './Header.css'
import React from 'react'

export default props =>
    <header className='header d-nome d-sn-flex'>
      <h1 className='mt-3'>
        <i className={`fa fa-${props.icon}`}></i>{props.title}
      </h1>
    <p className='lead texte-muted'>{props.subtitle}</p>
    </header>
