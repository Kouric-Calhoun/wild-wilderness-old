import form from '../../css/form.css';
import contact from '../../css/contact.css';
import contactImageBg2 from '../../images/contactImageBg2.jpg';


export default function Contact() {
  return `

    <title>Wilderness Wild</title>
    <body class="contactPage">
      <header id="showcase" class="grid">
        <div class="bg-image"></div>
        <div class="content-wrap">
          <h1>Welcome to Wilderness Wild</h1>
          <img src='${contactImageBg2}'></img>
          <p>We are an organization that specializes in teaching basic to advance 
          survivor skills for different scenarios and various terrains when you 
          are adventuring the wilderness. Our motto is, "Vincit Qui Se Vincit" 
          which means, "He/she conquers who conquers him/herself."</p>
          <br>
        </div>
      </header>

      <main id="main">
      <!-- Section A -->
      <section id="section-a" class="grid">
          <div class="content-wrap">
              <h2 class="content-title">Survivor Skills</h2>
              <div class="content-text">
                  <p>Wilderness Wild prides itself on educating all their 
                  clients on the required survivor skills to prepare them 
                  when facing situation in various scenarios in the 
                  Wilderness. </p>
                  <br>
              </div>
          </div>
      </section>

      <!-- Section B -->
      <section id="section-b" class="grid">
          <div class="content-wrap">
              <h2 class="content-title">Survivor Meet Up</h2>
              <div class="content-text">
                  <p>Wilderness Wild creates a small meet-up event to 
                  teach survivor skill class in the wilds. Check-out our 
                  event calendar, the event is happening once a month on 
                  each region. </p>
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
                  similar to "Survivor", the survivor elimination tv series. 
                  </p>
              </div>
          </div>
      </section>
      </main>

      <!-- Section D-->
      <div class="box">
                <h2 class="content-title">About Our Company</h2>
                <p>Founded in 2021 by a group of wild and crazy individuals for a 
                tremendous love for the great outdoors and the many adventures 
                the Earth has to offer.  These fab people chose to teach and advocate
                friends, family, and co-workers on the survivor skills that they 
                had experienced over their many years.  And due to the number of 
                requests for survival guiding, <strong>Wilderness Wilds</strong> was born.</p>
            </div>
        </section>
 

    <!-- Section E-->
      <div class="form">
      <h2 class="content-title">Contact Us</h2>
      <div class="box">
      <li><p class="fa fa-address-card">  2645 N High Street Columbus, OH 43202</p></li>
      <li><p class="fa fa-phone">  1.844.932.2626</p></li>
      <li><p class="fa fa-envelope">  survivor@wildernesswild.com</p></li>
      <br>
    </div>
    
    <p>Got a question? We'd love to hear from you. Send us a message and we'll respond as
      soon as possible.</p>
    
    <div class="row">  
        <div class="column">
            <form>
                <p><b><label for="name">Name</label></b></p>
                <p><input type="text" id="name" name="name" placeholder="Enter your name"></p>
                <p><b><label for="email">Email</label></b></p>
                <p><input type="text" id="email" name="email" placeholder="Enter your email"></p>
                <p><b><label for="email">Message</label></b></p>
                <p><textarea id="subject" name="subject" placeholder="Write your comment" style="height:170px"></textarea></p>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>

    </body>
    `;
}
