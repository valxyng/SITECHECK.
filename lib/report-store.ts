import type { AnalysisReport } from "@/types/analysis";
const reports=new Map<string,AnalysisReport>();
export const reportStore={save(report:AnalysisReport){reports.set(report.id,report);setTimeout(()=>reports.delete(report.id),1000*60*60);},get(id:string){return reports.get(id)}};
