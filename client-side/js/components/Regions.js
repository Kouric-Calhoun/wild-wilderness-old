import map from "../../images/map.jpg";

export default function Regions() {
  return `
    <div id="regions-div">
      <h1>Regions</h1>
      <div class="map-region">
      <img  src="${map}" alt="map-regions" usemap="#map">
<map name="map">
  <area shape="circle" coords="190,190,170" alt="West" class='west'>
  <area shape="circle" coords="420,500,180" alt="SouthWest" href="southWest.js">
  <area shape="circle" coords="570,200,137" alt="Midwest" href="midwest.html">
  <area shape="circle" coords="900,200,137" alt="North" href="north.html">
  <area shape="circle" coords="770,400,120" alt="South" href="south.html">
  <area shape="circle" coords="120,615,147" alt="West" href="west.js">
</map>
     
      </div>
    `;
}
