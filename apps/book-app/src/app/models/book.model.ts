import { ECategories } from './ECategories' ;
import { Author } from '../models/author.model'

 
export interface Book {
    id : number;
    title : string;
    price : number;
    totalUnitsSold : number;
    categories : ECategories[];
    StorySummary : string; 
    keywords : string;
    NextReleaseDate : Date;
    author : Author;
}
 