import React from 'react'
import { connect, } from 'react-redux'

const StickyList = ({notes}) => (
  <ul>
    { notes.map( (t,i)=> {

        return (
          <li key={i}>
              {t}
            </li>
        )
      })
    }
  </ul>
)

const mapStateToProps =(state) => {
  return { notes: state.notes,}  
}
export default connect(mapStateToProps)(StickyList)
