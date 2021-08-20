import yuli from "../../images/yuli.jpg";
import filsan from "../../images/filsan.jpg";
import jovahnn from "../../images/jovahnn.jpg";
import kouric from "../../images/kouric.jpg";
import ty from "../../images/ty.jpg";
import miranda from "../../images/miranda.jpg";
import about from "../../css/about.css";

export default function About() {
  return `
  <div class="container">
  <div class="title">
    <h1>About Us</h1>
   
  </div>
  

  <div class="content">
    
    <div class="cardAboutUs" id="one">
      <div class="img_box">
        <img class="picture" src="${kouric}" height="300px" width="200px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">A self-motivated software developer who has a passion for software. Team player with good communication skills. Dedicated to improving software skills in Java and Javascript everyday to produce the best result.</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/kouric-calhoun/ " target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/Kouric-Calhoun" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

      </div>
      
      <h3>Kouric Calhoun</h3>
    </div>


    

    <div class="cardAboutUs" id="two">
      <div class="img_box">
        <img class="picture" src="${filsan}" height="300px" width="200px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">I am an aspiring software developer that loves to problem solve and constantly learn new skills.
          </p>
          <div class="social">
            <a href="https://www.linkedin.com/in/filsan-madar/" target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/FilsanMadar" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

       
      </div>
      <h3>Filsan Madar</h3>
    </div>

    <div class="cardAboutUs" id="three">
      <div class="img_box">
        <img class="picture" src="${yuli}" height="300px" width="250px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">Creative and Design focused Software Developer with over 13+ years of experience working in the Financial and Banking industry. Accomplished in finding solutions using analytical thinking and collaborative problem solving to exceed client expectations. Skilled in: Java | HTML5/CSS3 | Test Driven development | Agile methodologies</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/yulimcelroy/" target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/YMcElroyWCCI" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

        
      </div>
      <h3>Yuli McElroy</h3>
    </div>

    <div class="cardAboutUs" id="four">
      <div class="img_box">
        <img class="picture" src="${jovahnn}" height="300px" width="270px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">Experienced and knowledgeable information technology professional with 4+ years’ experience seeks to contribute his training and acquired skills within a technical support, programming or engineering role.</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/jovahnn-tucker/" target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/Troublesm1" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

        
      </div>
      <h3>Jovahnn Tucker</h3>
    </div>

    <div class="cardAboutUs" id="five">
      <div class="img_box">
        <img class="picture" src="${miranda}" height="300px" width="270px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">Currently enrolled in the We Can Code It full stack web development boot camp in Cleveland, Ohio. I am a full stack software developer transitioning from a problem solve role at Amazon. I bring creative solutions and time management skills to the table. I love creating things from the ground up, working in teams and problem solving. I am</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/mirandalperry/" target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/MirandaPerry1982" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

       
      </div>
      <h3>Miranda Perry</h3>
    </div>

    <div class="cardAboutUs" id="six">
      <div class="img_box">
        <img class="picture" src="${ty}" height="300px" alt="Photo">
        <div class="img_info">
          <h4>Java FullStack</h4>
          <p class="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae a facere recusandae incidunt explicabo deleniti eligendi suscipit. Aperiam hic asperiores accusamus tempore labore tenetur ullam quibusdam culpa consequuntur excepturi.</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/ty-c-jackson/" target="_blank" class="fa fa-linkedin"></a>
            <a href="https://github.com/Tjackson90" target="_blank" class="fa fa-github"></a>
          </div>
        </div>

       
      </div>
      <h3>TY Jackson</h3>
    </div>

  </div>
</div>`;
}
