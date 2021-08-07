// import homePageBackground from "client-side/images/homePageBackground.jpg";
export default function Home() {
  return `
  <div id="home-div">
    <h1>Wilderness Wild</h1>
    <div class="home-splash">
      <h3 class="home-p"><em>Preparedness - The Absolute Key To Survival</em></h3>
      <p>Wilderness Wild is committed to giving our users all the tools they need to survive their nature adventures, while also allowing them to connect with like minded adventures! </p>
    </div>
    <div class="homeCards-Events">
      <h3>Check Out Events In Your Area</h3>
      <button class = "home-btn-links">Events</button>
    </div>
    <div class="homeCards-Chatrooms">
      <h3>Chatrooms Are Open!</h3>
      <button class = "home-btn-links">Chatroom</button>
    </div>
    <div class="homeCards-Gear">
      <h3>Absolute Survival Gear Checklist</h3>
      <button class = "home-btn-links">Checklist</button>
    </div>
  </div>  
  `;
}
