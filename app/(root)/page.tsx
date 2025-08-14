import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Page = () => {
  return (
    <>
     <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>

              <h2>
                get interviewed by ai
              </h2>

              <p className='text-lg'>
                Practise on real interview questions and Get instant feedback
              </p>
              <Button asChild className='btn-primary max-sm:w-full'>
                <Link href="/interview">
                Start an interview</Link>
              </Button>
              
        </div>
        <Image src="/robot.png" alt='robot-dude' className='max-sm:hidden' width={400} height={400}/>
     </section>
     <section className='flex flex-col gap-6 mt-8'>
        <h2> Your Interviews</h2>
        <div className='interviews-section'>
          {/* <p> You haven&apos;t taken any interviews yet</p> */}
          
          {dummyInterviews.map((interview)=>(
            
            <InterviewCard{ ...interview} key={interview.id}/>
          ))}
          {/* <p> You haven&apos;t taken any interviews yet</p> */}
        </div>
     </section>
     <section className='flex flex-col gap-6 m-8'>
      <h2> Take an Ineteview</h2>
      <div className='interviews-section'>
          
          {dummyInterviews.map((interview)=>(
            <InterviewCard{ ...interview} key={interview.id}/>
          ))}
        </div>
     </section>
     Home Page
    </>
  )
}

export default Page
