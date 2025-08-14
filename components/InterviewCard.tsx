import React from 'react'
import dayjs from 'dayjs';

const Interviewcard = ({interviewId,userId,role,type,techstack,createdAt}:InterviewCardProps) => {

  const feedback=null as Feedback|null;
  const normalizedType=/mix/gi.test(type)? 'Mixed' :type;
  const formattedDate=dayjs(feedback?.createdAt||createdAt||Date.now()).format('MMM D, YYYY')
  return (
    <div className='card-border w-[3605px] max-sm:w-full min-h-96'></div>
  )
}

export default Interviewcard
