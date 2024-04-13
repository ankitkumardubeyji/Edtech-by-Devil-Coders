import React from "react";

const About=()=>{
    return(
        <>
        <h1 className="m-4 heading">About Us</h1>
        <div>
            <div className="m-4">
            <p className="content">
            <span>Welcome to [Course Name], your ultimate destination for online learning!</span>

            At <span>[Course Name]</span>, we believe that education is the key to unlocking opportunities and realizing one's fullest potential. Whether you're looking to upgrade your skills, pursue a passion, or embark on a new career path, our platform is designed to empower you every step of the way.
            </p>
            </div>
            <div className="d-flex justify-content-around m-4 ">
            <div className="d-flex flex-column m-3 content-card">
            <h2 className="p-1 box-heading">Our Mission</h2>
            <p className="content">Our mission is to democratize education by making high-quality learning accessible to anyone, anywhere. We strive to provide a diverse range of courses taught by experts in their fields, ensuring that you receive the most relevant and up-to-date knowledge.</p>
            </div>
            <div className="d-flex flex-column m-3 content-card">
            <h2 className="p-1 box-heading">Who We Are</h2>
            <p className="content">
            <span>[Course Name]</span> was founded by a team of passionate educators and industry professionals who share a common goal: to revolutionize the way people learn. With years of experience in both traditional and online education, our team is dedicated to creating a seamless and immersive learning experience for our students.
            </p>
            </div>
            <div className="d-flex flex-column m-3 content-card">
            <h2 className="p-1 box-heading">Our Commitment to You</h2>
            <p className="content">At <span>[Course Name]</span>, your success is our top priority. We are committed to providing you with the tools, resources, and support you need to achieve your goals. Whether you're learning for personal or professional development, we're here to help you every step of the way.</p>
            </div>
            </div>
            <h4 className="thank">Thank you for choosing <span>[Course Name]</span>. Get ready to embark on an exciting learning journey with us!</h4>
        </div>
        
        </>
    );
}
export default About;