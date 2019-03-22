const nextId = (state = 0, action) => {
  switch (action.typ) {
    case 'INC_ID':
      return state + 1
    default:
      return state 
  }
}

export default nextId; 