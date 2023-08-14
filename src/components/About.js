import React from 'react'

const About = (props) => {
  return (
    <div className="container">
      <h1 className='text-center mb-3 py-2'>About Us - {props.title}</h1>

<p className='text-center mb-5'>Welcome to {props.title}, your ultimate companion in managing tasks and achieving your goals! Our innovative ToDo application is designed to streamline your task management process, allowing you to create tasks for future completion and easily remove them from your list once accomplished.</p>

<h2>Our Mission</h2>

<p>At {props.title}, our mission is to empower individuals to take control of their time and productivity. We understand the challenges of modern life, where tasks and responsibilities can easily pile up, leading to overwhelm and stress. Our app is built with the aim to simplify your life by providing a user-friendly platform that helps you organize tasks efficiently, ensuring you stay on top of your commitments and experience a sense of accomplishment.</p>

<h2>Key Features</h2>

<p><strong>Task Scheduling:</strong> With {props.title}, you can effortlessly create tasks that are scheduled for future completion. Whether it's a work project, a personal goal, or a household chore, you can input the details, set a due date, and our app will remind you when the time is right.</p>

<p><strong>Easy Deletion:</strong> Once you've successfully tackled a task, {props.title} makes it incredibly easy to remove it from your list. Just a simple swipe or click, and your completed task is gone, allowing you to maintain a clutter-free and motivating task list.</p>

<p><strong>Intuitive Interface:</strong> We believe that task management shouldn't be complicated. That's why {props.title} boasts an intuitive and user-friendly interface, making it accessible for users of all ages and technological backgrounds.</p>

<p><strong>Notifications and Reminders:</strong> Never miss a task deadline again! {props.title} keeps you informed and accountable with customizable notifications and reminders, ensuring that your important tasks are always on your radar.</p>

<h2>Our Team</h2>
<p>{props.title} was brought to life by a dedicated team of developers, designers, and productivity enthusiasts. We share a common passion for efficient task management and are committed to delivering a seamless experience to our users. Our developers have meticulously crafted the app to ensure smooth functionality, while our designers have focused on creating a visually appealing and enjoyable interface.</p>

<h2>Contact Us</h2>

<p>We value your feedback and are always eager to hear from our users. If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. You can contact our support team at <a target="_blank "href="mailto:senabhisar@gmail.com">senabhisar@gmail.com</a> or connect with us on social media.
<br />
Thank you for choosing {props.title} as your trusted task management partner. We look forward to helping you make the most of your time and achieve your goals, one task at a time.</p>
    </div>
  )
}

export default About
