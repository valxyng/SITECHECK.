import { NextRequest, NextResponse } from "next/server";
import { analyzeSite } from "@/lib/analyzer";
import { normalizeUrl } from "@/lib/validation";
import { reportStore } from "@/lib/report-store";
export const runtime = "nodejs";
export const maxDuration = 20;
const hits = new Map<string,{count:number;time:number}>();
export async function POST(request: NextRequest) { const ip=request.headers.get("x-forwarded-for")?.split(",")[0]||"local"; const now=Date.now(), old=hits.get(ip); if(old&&now-old.time<60_000&&old.count>=8) return NextResponse.json({error:"Слишком много проверок. Попробуйте через минуту."},{status:429,headers:{"Cache-Control":"no-store"}}); hits.set(ip,{count:old&&now-old.time<60_000?old.count+1:1,time:old?.time&&now-old.time<60_000?old.time:now}); try { const body=await request.json() as {url?:unknown}; const url=normalizeUrl(body.url); const report=await analyzeSite(url); reportStore.save(report); return NextResponse.json(report,{headers:{"Cache-Control":"no-store"}}); } catch(error) { const message=error instanceof Error?error.message:"Не удалось выполнить проверку сайта."; return NextResponse.json({error:message},{status:400,headers:{"Cache-Control":"no-store"}}); } }
