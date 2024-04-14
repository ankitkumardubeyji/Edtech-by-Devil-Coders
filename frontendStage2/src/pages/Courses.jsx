import React from 'react'
import CourseHero from '../components/CourseHero'


const Courses = () => {
 
 
  return (
    <div className='mt-3'>
      <h1 className=' fw-bolder 'style={{fontSize:"50px"}}>OUR COURSES</h1>
      <CourseHero channelid="UCnMn36GT_H0X-w5_ckLtlgQ" imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKugCrT0ejFO7rn4OOTjlmiyPwP3MYsWKgUZCE5sTcw&s" name="SAVING COURSES" description="Throughout this course, you will delve into various aspects of personal finance, focusing particularly on the importance of saving money as a cornerstone of financial stability and success. "  />
      <CourseHero channelid="UCuIUGmbCDklkDCDm-cQqv2g" imgurl="https://st.adda247.com/https://static.pib.gov.in/WriteReadData/Infographics/2023/Feb/I202302012224.JPG" name="BUDGET COURSES" description="Throughout this course, you will explore essential concepts and practical techniques to develop and implement a personalized budgeting plan that aligns with your financial goals and lifestyle. " />
      <CourseHero channelid="UCGL9ubdGcvZh_dvSV2z1hoQ" imgurl="https://assets.entrepreneur.com/content/3x2/2000/1704399199-ENT-The2024UltimateCandlestickTradingAnalysisMasterclassBundle.jpeg" name="TRADING COURSES" description="Introduction to Trading is a meticulously crafted program that provides a solid foundation for understanding the intricacies of trading stocks, currencies, commodities, and other financial instruments. " />
    </div>
  )
}

export default Courses
