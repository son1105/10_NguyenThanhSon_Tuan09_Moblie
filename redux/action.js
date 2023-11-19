import { Delete, Add, LoadAPI, Search } from './actionType';

export function deleteItem(item){
    return {
        type: Delete,
        data: item
    }
}
export function addItem(item){
    return {
        type: Add,
        data: item
    }
}

export function searchItem(item){
    return {
        type: Search,
        data: item
    }
}

export function loadItem(item){
    return {
        type: LoadAPI,
        data: item
    }
}