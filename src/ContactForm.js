import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
 // Ensure you have a CSS file for styling

 const ContactForm = () => {
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_ovgydmk",    
         "template_mbq18p6",
         form.current,
         { publicKey: "ev_hmt0SszrIJbe-T" }
       )
       .then(
         () => {
           alert("Message sent!");
         },
         () => {
           alert("Failed to send message.");
         }
       );
   };

   return (
     <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
       <label>Name:</label>
       <input type="text" name="user_name" required />

       <label>Email:</label>
       <input type="email" name="user_email" required />

       <label>Phone Number:</label>
       <input type="phone" name="user_phone" required />

       <label>Message:</label>
       <textarea name="message" required />

       <button type="submit">Send</button>
     </form>
   );
 };

 export default ContactForm;

//  <!DOCTYPE html>
// <html>
// <head>
//     <title>Contact Form</title>
//     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
//     <script type="text/javascript">
//         (function() {
//             // https://dashboard.emailjs.com/admin/account
//             emailjs.init({
//               publicKey: "ev_hmt0SszrIJbe-T",
//             });
//         })();
//     </script>
//     <script type="text/javascript">
//         window.onload = function() {
//             document.getElementById('contact-form').addEventListener('submit', function(event) {
//                 event.preventDefault();
//                 // these IDs from the previous steps
//                 emailjs.sendForm('contact_service', 'contact_form', this)
//                     .then(() => {
//                         console.log('SUCCESS!');
//                     }, (error) => {
//                         console.log('FAILED...', error);
//                     });
//             });
//         }
//     </script>
// </head>
// <body>
//     <form id="contact-form">
//         <!-- To simplify the tutorial, the value is static. -->
//         <input type="hidden" name="time" value="Mar 10 2025 08:46">
//         <label>Name</label>
//         <input type="text" name="name" required>
//         <label>Email</label>
//         <input type="email" name="email" required>
//         <label>Subject</label>
//         <input type="text" name="title" required>
//         <label>Message</label>
//         <textarea name="message" required></textarea>
//         <input type="submit" value="Send">
//     </form>
// </body>
// </html>