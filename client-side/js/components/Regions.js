import map from "../../images/map.jpg";

export default function Regions() {
  return `
    <div id="regions-div">
      <h1>Regions</h1>
      <div class="map-region">
      <img  src="${map}" alt="map-regions" usemap="#map">
<map name="map">
  <area shape="circle" coords="190,190,170" alt="West" class='west'>
  <area shape="circle" coords="420,500,180" alt="South" href="south.html">
  <area shape="circle" coords="570,200,137" alt="Midwest" class="midwest">
  <area shape="circle" coords="900,200,137" alt="Northeast" class="northeast">
  <area shape="circle" coords="770,400,120" alt="Southeast" class="southeast">
  <area shape="circle" coords="120,615,147" alt="WestAlaskaHawaii" class="westalaskahawaii">
</map>
     
      </div>
    `;
}
