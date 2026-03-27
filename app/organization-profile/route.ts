import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "documents",
    "lsdb-business-profile.pdf"
  );
  const pdf = await readFile(filePath);

  return new NextResponse(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="lsdb-business-profile.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
