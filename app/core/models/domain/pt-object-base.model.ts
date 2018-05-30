export interface ptObjectBase{
    id: number; 
    title?:string;
    dateCreated: Date;
    dateModified: Date;
    dateDeleted?: Date;
}