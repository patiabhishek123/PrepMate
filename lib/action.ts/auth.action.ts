'use server';


import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;


export async function signUp(params: SignUpParams){
const {uid ,name, email}=params;
try {
  const userRecord=await db.collection('users').doc(uid).get();
  if(userRecord.exists){
    return {
      success:false,
      message:"User already exists ,Please sign in instead "
    }
  }
  await db.collection('users').doc(uid).set({
    name,email
  })
} catch (e:any) {
  console.log('error creating a user',e);
  if(e.code==='auth/email-already-exists')
  {
    return {
      success:false,
      message:'This email is already in use'
    }
  }
  return {
    success:false,
    message:'Tyhis email is already in use'
  }
}
}
export async function setSessionCookie(idToken:string){
  const cookieStore=await cookies();
  const sessionCookie=await auth.createSessionCookie(idToken,{expiresIn:SESSION_DURATION*1000,});
  //Set cookie in the browser
  cookieStore.set("session",sessionCookie,{
    maxAge:SESSION_DURATION,
    httpOnly:true,
    secure:process.env.NODE_ENV==="production",
    path:"/",
    sameSite:"lax",
  });
}
