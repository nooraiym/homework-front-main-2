import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state]
            if(action.payload === 'up') {
                sortedState.sort( (a,b) => (a.name > b.name ? 1 : -1))
            } else {
                sortedState.sort( (a,b) => (a.name < b.name ? 1 : -1))
            }
            return sortedState // need to fix
        }
        case 'check': {
            return state.filter( p => p.age > 18) // need to fix
        }
        default:
            return state
    }
}
