import {client}  from "@repo/db/client";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const {name , email}={
            name:"one",
            email:"one@test.com"
        }
        
        const user = await client.user.create({
                    data:{
                        name,
                        email
                    }
                })
        
                return NextResponse.json({
                    success:true,
                    message:"user registered successfully",
                    user
                },{
                    status:200
                })
    }catch (error) {
                console.log("error in signup")
                console.log(error)
                return NextResponse.json({
                    success: false,
                    message: "Internal Server Error"
                },{
                    status: 500
                })
    }
}