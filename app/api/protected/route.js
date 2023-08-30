import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
export async function GET () {
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json({
            message: "Data protected"
        });
    }
    return NextResponse.json({
        name: session.user.name,
    });
}
