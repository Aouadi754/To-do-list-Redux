import {ADD,REMOVE,EDIT} from '../Constants/constants'

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