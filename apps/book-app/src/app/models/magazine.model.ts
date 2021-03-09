import { ECategories } from './ECategories' ;
export interface Magazine{
    id : number,
    title : string,
    price : number,
    TotalUnitsSold : number,
    PublicationDate :Date,
    categories : ECategories,
    NextReleaseDate : Date,
    keywords : string,
}