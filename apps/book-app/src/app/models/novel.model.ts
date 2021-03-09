import { ECategories } from './ECategories' ;
export interface Novel{
    id : number,
    title : string,
    price : number,
    TotalUnitsSold : number,
    PublicationDate :Date,
    categories : ECategories,
    StorySummary : string
}