export type Status="pass"|"warning"|"error"; export type Priority="low"|"medium"|"high"|"critical";
export type Finding={ id:string; status:Status; priority:Priority; title:string; description:string; recommendation:string; category:"seo"|"performance"|"mobile"|"accessibility"|"technical" };
export type Categories={performance:number;seo:number;mobile:number;accessibility:number;technical:number};
export type AnalysisReport={id:string;url:string;createdAt:string;score:number;categories:Categories;issues:Finding[];positives:Finding[];meta:{title:string|null;description:string|null;lang:string|null};stats:{status:number;responseTime:number;htmlSize:number;images:number;links:number;forms:number}};
