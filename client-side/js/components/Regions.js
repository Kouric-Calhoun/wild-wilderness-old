import map from "../../images/map.jpg";

export default function Regions() {
  return `
    <div id="regions-div">
      <h1>Regions</h1>
      <div class="map-region">
      <img  src="${map}" alt="map-regions" usemap="#map">
<map name="map">
  <area shape="circle" coords="190,190,170" alt="West" href="west.html">
  <area shape="rect" coords="550,500,200,220" alt="South" href="south.html">
  <area shape="circle" coords="570,200,137" alt="Midwest" href="midwest.htm">
  <area shape="circle" coords="900,200,137" alt="North" href="north.htm">
  <area shape="circle" coords="770,400,120 " alt="South" href="south.htm">
</map>>
      </div>
      <div class="regions-splash">
        <h3 class="regions-p"><em>Region Specific Important Information</em></h3>
        <p>With how large the United States is, even our national parks have extremely different climate and terrain. </p>
      </div>

      <div class="regionsCards-northeast">
        <h3>Northeast</h3>
        <button class = "regions-btn-links"> Northeast</button>
      </div>

      <div class="regionsCards-southeast">
        <h3>Southeast</h3>
        <button class = "regions-btn-links"> Southeast</button>
      </div>

      <div class="regionsCards-west">
        <h3>West</h3>
        <button class = "regions-btn-links"> West</button>
      </div>

      <div class="regionsCards-southwest">
        <h3>Southwest</h3>
        <button class = "regions-btn-links"> Southwest</button>
      </div>

      <div class="regionsCards-midwest">
        <h3>Midwest</h3>
        <button class = "regions-btn-links"> Midwest</button>
      </div>
    
    `;
}
