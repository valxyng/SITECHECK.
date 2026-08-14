import { NextResponse } from "next/server";
import { reportStore } from "@/lib/report-store";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}) { const {id}=await params; const report=reportStore.get(id); return report?NextResponse.json(report):NextResponse.json({error:"Отчёт не найден или уже истёк."},{status:404}); }
