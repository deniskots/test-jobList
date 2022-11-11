// export interface GlobalJobsModel{
//    articles: JobsModel[];
//    articlesCount: number;
// }

export interface JobsModel {
   id?: string;
   name?: string;
   email?: string;
   phone?: string;
   title?: string;
   salary?: string;
   address?: string;
   benefits?: string[];
   location?: Location;
   pictures?: string[];
   createdAt: string;
   updatedAt?: string;
   description?: string;
   employment_type?: string[];
}

export interface Location {
   lat?: number;
   long?: number;
}