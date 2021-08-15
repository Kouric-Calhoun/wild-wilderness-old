import review1 from "../../images/review1.jpg";
import review2 from "../../images/review2.jpg";
import review3 from "../../images/review3.jpg";
import review4 from "../../images/review4.jpg";
import review5 from "../../images/review5.jpg";
import review6 from "../../images/review6.jpg";
import review7 from "../../images/review7.jpg";

import BlogWildBook from "../../images/BlogWildBook.jpg";
import BlogOpenRoadBook from "../../images/BlogOpenRoadBook.jpg";
import BlogFollowMeBook from "../../images/BlogFollowMeBook.jpg";
import BlogDesertSurvivalBook from "../../images/BlogDesertSurvivalBook.jpg";
import BlogCallBook from "../../images/BlogCallBook.jpg";
import BlogEdibleMedicinalWildPlantBook from "../../images/BlogEdibleMedicinalWildPlantBook.jpg";
import BlogHowToCampInTheWoodsBook from "../../images/BlogHowToCampInTheWoodsBook.jpg";
import BlogMushroomingBook from "../../images/BlogMushroomingBook.jpg";
import BlogPreppersBook from "../../images/BlogPreppersBook.jpg";
import BlogWildBerriesBook from "../../images/BlogWildBerriesBook.jpg";
import BlogWildernessSurvivalBook from "../../images/BlogWildernessSurvivalBook.jpg";
import BlogForagingForSurvivalBook from "../../images/BlogForagingForSurvivalBook.jpg";

import Insta1 from "../../images/Insta1.jpg";
import Insta2 from "../../images/Insta2.jpg";
import Insta3 from "../../images/Insta3.jpg";
import Insta4 from "../../images/Insta4.jpg";
import Insta5 from "../../images/Insta5.jpg";
import Insta6 from "../../images/Insta6.jpg";

import blog from "../../css/blog.css";

export default function Blog() {
  return `
  <div class="top-image">
    <div class="top-text">  
    <h1>Wilderness Wild Blog</h1>
    <h3>Survival guide | survival experience | wilderness conversations</h3>
    </div>
  </div>
  
  <hr class="rounded">
  <div class="flexLine">
    <h2 class="textAtTop">We Love Hearing About Your Experience!</h2>
    <div class="reviewImg1">
    <img class="reviewSS" src='${review1}' alt='The Wild' />
    </div>
  </div>
  <div class="pushDown">
    <div id="slideshow item2" class="slideshow" data-component="slideshow">
      <div class="list">
        <div class="slideBook1">
          <img class="reviewSlide" src="${review2}" alt="Open Road">
        </div>
        <div class="slideBook2">
          <img class="reviewSlide" src="${review3}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${review4}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${review5}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${review6}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${review7}" alt="">
        </div>
      </div>
      </div>
    </div>
  </div> 

  <hr class="rounded">
  <div class="reviewImg2">
    <img class="reviewInsta" src='${BlogWildBook}' alt='' />
  </div>
    <h2 class="textAtTopRight">SEE OUR RECOMMENDED BOOKS AND IMMERSE YOURSELF IN THE STORY</h2>
    <div class="pushDown2">
      <div id="slideshow item2" class="slideshow" data-component="slideshow">
        <div class="instaList">
          <div class="slideInsta1">
            <img class="reviewSlide" src="${BlogOpenRoadBook}" alt="Open Road">
          </div>
          <div class="slideInsta2">
            <img class="reviewSlide" src="${BlogFollowMeBook}" alt="">
          </div>
          <div class="slideInsta4">
            <img class="reviewSlide" src="${BlogDesertSurvivalBook}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${BlogCallBook}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${BlogEdibleMedicinalWildPlantBook}" alt="">
          </div>
          <div class="slide">
          <img class="reviewSlide" src="${BlogHowToCampInTheWoodsBook}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${BlogMushroomingBook}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${BlogPreppersBook}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${BlogWildBerriesBook}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${BlogWildernessSurvivalBook}" alt="">
        </div>
        <div class="slide">
          <img class="reviewSlide" src="${BlogForagingForSurvivalBook}" alt="">
        </div>
        </div>
      </div>



      
      <hr class="rounded2">
      <h2 class="textAtThird">SEE WHAT EVERYONE HAS TO SAY ABOUT WILDERNESS WILD!</h2>
      <div id="slideshow item2" class="slideshow" data-component="slideshow">
        <div class="instaList">
          <div class="slideInsta1">
            <img class="reviewSlide" src="${Insta1}" alt="Open Road">
          </div>
          <div class="slideInsta2">
            <img class="reviewSlide" src="${Insta2}" alt="">
          </div>
          <div class="slideInta3">
            <img class="reviewSlide" src="${Insta3}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Insta4}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Insta5}" alt="">
          </div>
          <div class="slide">
            <img class="reviewSlide" src="${Insta6}" alt="">
          </div>
        </div>
      </div>
      </div>
      
      
      <hr class="rounded">
      <h2 class="textAtFourth">TAP INTO TWITTER!</h2>
      <div id="slideshow item2" class="slideshow" data-component="slideshow">
      <div class="twitList">        
          <div class="slideTwit1">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We answered 7 big questions on what’s happening with Bears Ears, Grand Staircase-Escalante and other national monuments.<br><br>The short summary? Enough delay — President Biden can and should act immediately to protect these places. <a href="https://t.co/jzGCyCf2jj">https://t.co/jzGCyCf2jj</a></p>&mdash; The Wilderness Society 🌳 (@Wilderness) <a href="https://twitter.com/Wilderness/status/1426291213246865411?ref_src=twsrc%5Etfw">August 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slideTwit2">
          <blockquote class="twitter-tweet" data-lang="en" data-theme="dark"><p lang="en" dir="ltr">Visit these 10 and all of the others too! Start at <a href="https://t.co/e82cfwnxZl">https://t.co/e82cfwnxZl</a>! <a href="https://t.co/wY1L2eTYYM">https://t.co/wY1L2eTYYM</a></p>&mdash; IN State Parks (@INDNRstateparks) <a href="https://twitter.com/INDNRstateparks/status/1426010672945680387?ref_src=twsrc%5Etfw">August 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Now would be a good time...for the Biden administration to restore the alarmingly shrunken borders of the Bears Ears and Grand Staircase-Escalante national monuments in southern Utah.&quot; <a href="https://t.co/Cd1L8aO3yr">https://t.co/Cd1L8aO3yr</a></p>&mdash; The Wilderness Society 🌳 (@Wilderness) <a href="https://twitter.com/Wilderness/status/1426683809550983172?ref_src=twsrc%5Etfw">August 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Indiana Dunes State Park is one of 59 locations on the Indiana State Nature Passport where you can explore and get rewarded! 😀<br><br>𝐋𝐄𝐀𝐑𝐍 𝐌𝐎𝐑𝐄: <a href="https://t.co/smbDhaAdRv">https://t.co/smbDhaAdRv</a><a href="https://twitter.com/INDNRstateparks?ref_src=twsrc%5Etfw">@INDNRstateparks</a> <a href="https://twitter.com/INdnrnews?ref_src=twsrc%5Etfw">@INdnrnews</a> <a href="https://twitter.com/hashtag/INnature?src=hash&amp;ref_src=twsrc%5Etfw">#INnature</a> <a href="https://t.co/ej9BBkA4NM">pic.twitter.com/ej9BBkA4NM</a></p>&mdash; Visit Indiana (@VisitIndiana) <a href="https://twitter.com/VisitIndiana/status/1426990846327595008?ref_src=twsrc%5Etfw">August 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">The landmark UN climate report&#39;s overall message? Climate action can&#39;t wait.<br><br>Why? More extreme heatwaves, droughts and flooding, and a key temperature limit being broken in just over a decade.<br><br>The climate report &quot;is a code red for humanity&quot; <a href="https://t.co/92t84cNbK9">https://t.co/92t84cNbK9</a></p>&mdash; The Wilderness Society 🌳 (@Wilderness) <a href="https://twitter.com/Wilderness/status/1426598267643695110?ref_src=twsrc%5Etfw">August 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Tuolumne Meadows Campground will open on June 21; reservation only. Reservations for arrival dates June 21–July 14 will be released on June 15, at 7 am PDT at <a href="https://t.co/kgOXLpKPxL">https://t.co/kgOXLpKPxL</a>. Reservations for July 15 through September 19 were released earlier this year.</p>&mdash; Yosemite National Park (@YosemiteNPS) <a href="https://twitter.com/YosemiteNPS/status/1400236280428990467?ref_src=twsrc%5Etfw">June 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚠️ NINE of Rita’s family have already been killed by loggers in a single attack.<br>Her remaining relatives are hiding deep in the forest &amp; their survival hangs by a thread.<br>🏹 Take action to prevent her people’s genocide: <a href="https://t.co/pLsgRzLcvV">https://t.co/pLsgRzLcvV</a> <a href="https://twitter.com/hashtag/AssinaFUNAI?src=hash&amp;ref_src=twsrc%5Etfw">#AssinaFUNAI</a> <a href="https://t.co/ZqtCdoMAX4">pic.twitter.com/ZqtCdoMAX4</a></p>&mdash; Survival International (@Survival) <a href="https://twitter.com/Survival/status/1425811811824140292?ref_src=twsrc%5Etfw">August 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="slide">
          <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Rain=Waterfalls. Cool hikes. <a href="https://t.co/DKtpc4ZsBb">pic.twitter.com/DKtpc4ZsBb</a></p>&mdash; The Hocking Hills (@HockingHills_Oh) <a href="https://twitter.com/HockingHills_Oh/status/1406060025760546816?ref_src=twsrc%5Etfw">June 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
      </div>
    </div>
    </div>
 
    `;
}
