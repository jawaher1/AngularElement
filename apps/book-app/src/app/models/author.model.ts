import {Book} from './book.model'
export interface Author{
    id : number,
    name : string,
    age : number,
    books : Book[]  
}