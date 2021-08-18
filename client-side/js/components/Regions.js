import map from "../../images/map.jpg";
import regions from "../../css/regions.css";

export default function Regions() {
  return `
    <div id="regions-div">
      <h1>Regions</h1>
      <p>A wilderness area is a region where the land is in a natural state; where impacts from 
      human activities are minimal—that is, as a wilderness. It might also be called a wild or 
      natural area. Most scientists and conservationists agree that no place on earth is 
      completely untouched by humanity, either due to past occupation by indigenous people, 
      or through global processes such as climate change or pollution. Activities on the margins 
      of specific wilderness areas, such as fire suppression and the interruption of animal 
      migration, also affect the interior of wildernesses.</p>
      <br>
      <p>The National Wilderness Preservation System includes 803 Wilderness Areas protecting 
      111,368,221 acres (174,012.845 sq mi; 450,691.20 km2) of federal land as of 2019. They 
      are managed by four agencies:</p>
      <br>

      <li>United States National Park Service (NPS)</li>
      <li>United States Forest Service (USFS)</li>
      <li>United States Fish and Wildlife Service (FWS)</li>
      <li>United States Bureau of Land Management (BLM)</li>
      <br>
      
      <p>Checkout each of the following region for more information about the US wilderness and 
      immerse yourself with the scenario challenges to assess your survivor skills.</p>
      <br>

      <div class="ulRegions">
      <li class="west">West</li>
      <li class="midwest">Midwest</li>
      <li class="northeast">Northeast</li>
      <li class="southeast">Southeast</li>
      <li class="southwest">Southwest</li>
      <li class="westalaskahawaii">West - Alaska & Hawaii</li>
</div>
      <br>
      <br>


      <div class="map-region">
      <img  class="mapRegion" src="${map}" alt="map-regions" usemap="#map">
<map name="map">
  <area shape="circle" coords="190,190,170" alt="West" class='west'>
  <area shape="circle" coords="420,500,180" alt="Southwest" class="southwest">
  <area shape="circle" coords="570,200,137" alt="Midwest" class="midwest">
  <area shape="circle" coords="900,200,137" alt="Northeast" class="northeast">
  <area shape="circle" coords="770,400,120" alt="Southeast" class="southeast">
  <area shape="circle" coords="120,615,147" alt="WestAlaskaHawaii" class="westalaskahawaii">

</map>
     
      </div>
    `;
}
