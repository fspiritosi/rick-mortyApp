import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types"

const initialState = {
    myFavorites:[]
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload] 
            }

        case DELETE_FAVORITE:
            const filterCharacter = state.myFavorites.filter(
                fav => fav.id !== payload
            )
            return{
                ...state,
                myFavorites: filterCharacter
            }

        default:
            return state
}
}

export default rootReducer