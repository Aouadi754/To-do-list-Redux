import {ADD,REMOVE,EDIT,FILTER} from '../Constants/constants'

export const add =(payload)=> {
    return {
        type:ADD,
        payload,
    }
}
export const remove =(payload)=> {
    return {
        type:REMOVE,
        payload,
    }
}

export const edit =(payload)=> {
    return {
        type:EDIT,
        payload,
    }
}
export const filter =(payload)=> {
    return {
        type:FILTER,
        payload,
    }
}