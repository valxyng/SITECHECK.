import { NextResponse } from "next/server";
import type { AnalysisReport } from "@/types/analysis";
export async function POST(request:Request) { const report=await request.json() as Pick<AnalysisReport,"issues"|"categories"|"score">; return NextResponse.json({source:"local",recommendations:report.issues.slice(0,3).map(issue=>({title:issue.title,text:issue.recommendation}))}); }
