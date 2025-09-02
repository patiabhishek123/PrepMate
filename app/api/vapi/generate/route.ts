import { success } from "zod";
import {generateText} from 'ai';
import {google} from '@ai-sdk/google'
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";
export async function GET(){
  return Response.json({
    success:true,
    data:'THANK YOU'
  },{status:200});
}

export async function POST(request:Request){
  const { type, role , level ,techstack, amount ,userid }=await request.json();
  try {
    const { text:questions}=await generateText({
      model:google('gemini-2.0-flash-001'),
      prompt:`Prepare questiond for a job inerview...
      The job role is ${role},
      the tech stack used in the job is : ${techstack}
      The focus between behavioural and technical questions should lean towards :${type}.
      the amount of questions required is : ${amount}.
      please return only the questions,without any additional text.
      The questions are going to be read by a voice assistant so do not use "/" or "*" or and 
      Return the questions formatted like this:
      ["Question 1","Question 2","Question 3]
      
      Thank you <3`
    });
    const interview={
      role,type,level,
      techstack:techstack.split(','),
        quesations:JSON.parse(questions),
        userId:userid,coverImage:getRandomInterviewCover(),
        createdAt:new Date().toISOString()
      
    }
    await db.collection("interviews").add(interview);
    return Response.json({success:true},{status:200})
  } catch (error) {
    console.error(error);
    return Response.json({success:false,error},{status:500})
  }
}