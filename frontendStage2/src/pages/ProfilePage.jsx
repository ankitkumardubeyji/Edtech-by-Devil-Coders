import React from 'react';
import { useState } from 'react';
// import '../style/ProfilePage.css';
import OT1 from "../images/OT1.jpg"
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";

const ProfilePage = () => {
  // Sample data for courses
  const [courses] = useState([
    { id: 1, title: 'Course 1', status: 'Availed', price: '3999' },
    { id: 2, title: 'Course 2', status: 'Pending', price: '4499' },
    { id: 3, title: 'Course 3', status: 'Availed', price: '4999' },
  ]);

  return (
    <div className="profile-page">
      <main>
        <div className="profile">
          <div className="profile-details">
            <div className="profile-picture">
              <img src={OT1} alt="Profile" />
            </div>
            <div className="profile-info">
              <h2>Name</h2>
              <p>Username: username</p>
              <p>Qualification: qualification</p>
              <p>Email: email@example.com</p>
            </div>
          </div>
        </div>
        <div className="courses">
          <h2>Courses</h2>
          <div className="course-cards">
            {courses.map(course => (
              <div className="course-card" key={course.id}>
                <img src={OT1} alt="Course" />
                <h3>{course.title}</h3>
                <p>Status: {course.status}</p>
                <p>Price: ${course.price}</p>
                <i className="fas fa-check-circle"></i> {/* Green check icon for availed courses */}
              </div>
            ))}
          </div>
          <a href="#courses">Browse More Courses</a> {/* Link to courses page */}
        </div>
      </main>
      
    </div>
  );
}

export default ProfilePage;
