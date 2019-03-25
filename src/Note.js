import React from 'react'
import {connect, } from 'react-redux'
import { escapeComponent } from 'uri-js';

const Note = ({ id, name, complete, dispatch}) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_NOTE', id, })}
    style={ complete ? { textDecoration: "line-through", color: "grey" } : {} }
  >
   {name}
  </li>
)

export default connect()(Note)