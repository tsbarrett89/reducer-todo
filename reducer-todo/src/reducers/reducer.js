export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, {item: action.payload, completed:false, id: Date.now()}]
      case 'complete':
        return state.map(el => {
          if (el.id === action.payload) {
            return{...el, completed: !el.completed}
          } else {
            return el
          }
        })
      case 'clear':
        return state.filter(el => el.completed === false)
      default:
        return state
    }
  }