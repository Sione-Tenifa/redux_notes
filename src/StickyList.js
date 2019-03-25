import React from 'react'
import { connect, } from 'react-redux'
import Note from './Note'
import { Button, Card, Header, } from "semantic-ui-react";

const StickyList = ({notes}) => (
  <ul>
    { 
      notes.map( (t) => {
        return ( <Note key={t.id} {...t} /> )
      })
    }
  </ul>
)

const mapStateToProps =(state) => {
  return { notes: state.notes,}  
}
export default connect(mapStateToProps)(StickyList)
