import contactForm from '../../css/contactForm.css';
import contact from '../../css/contact.css';
import contactImageBg2 from '../../images/contactImageBg2.jpg';


export default function Contact() {
  return `

    <title>Wilderness Wild</title>
    <body class="contactPage">
      <header id="showcase" class="grid">
        <div class="content-wrap">
          <h1>Contact Us</h1>
  
      <main id="main">

      <!-- Section B -->
      <section id="section-b" class="grid">
          <div class="content-wrap">
              <h2 class="content-title">Survivor Meet Up</h2>
              <div class="content-text">
                  <p>Wilderness Wild creates meet-up event to 
                  teach survivor skill class in the wilderness. Check-out our 
                  event calendar (coming soon...), the event is happening every 
                  month on each region. </p>
              </div>
          </div>
      </section>

      <!-- Section C -->
      <section id="section-c" class="grid">
          <div class="content-wrap">
              <h2 class="content-title">Team Building</h2>
              <div class="content-text">
                  <p>Wilderness Wild will handle all your survival events 
                  as team building events for companies and will include a 
                  sampling of the various exhilarating and thrilling adventures
                  similar to "Survivor" tv series. 
                  </p>
              </div>
          </div>
      </section>
      </main>

      <br>
    <!-- Section E-->
    <div class="contactUsForm">
      <h2 class="content-title">Send Us A Message</h2>
      <div class="box">
      <li><p class="fa fa-address-card">  2645 N High Street Columbus, OH 43202</p></li>
      <li><p class="fa fa-phone">  1.844.932.2626</p></li>
      <li><p class="fa fa-envelope">  survivor@wildernesswild.com</p></li>
      <br>
      </div>
    
      <p></p>
    <p class="writeUs">Got a question? We'd love to hear from you. Send us a message and we'll respond as
      soon as possible.</p><br>
    

            <div class="writeUs">
                <p class="writeUs"><b><label for="name">Name</label></b></p>
                <p class="writeUs"><input type="text" id="name" name="name" placeholder="Enter your name"></p>
                <p class="writeUs"><b><label for="email">Email</label></b></p>
                <p class="writeUs"><input type="text" id="email" name="email" placeholder="Enter your email"></p>
                <p class="writeUs"><b><label for="email">Message</label></b></p>
                <p class="writeUs"><textarea id="subject" name="subject" placeholder="Write your comment" style="height:170px"></textarea></p>
                <button class="quiz-btn-links_Fire"><span>Click Here!</span><span>Submit</span></button>
                <br>
            </div>
            <br>
 
 
    </body>
    `;
}
