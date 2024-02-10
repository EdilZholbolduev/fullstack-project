import React from "react";
import hiteaPic from "../pictures/hitea1.jpg"
import hiteaPic2 from "../pictures/hitea2.jpg"
import "../style/tabslider.css"



const TabsSlider = () => {
  return (
   <ul>
      <li>
         <SmoothieTab/>
      </li>
   </ul> 
  );
};
const SmoothieTab = () => {
  return (
      <div className="li__list">
         <img className="tabSlidePic" src={hiteaPic}/>
      </div>   
  );
};

const VanillaTab = () => {
  return (
    <div>
      <img className="tabSlidePic" src={hiteaPic2}/>
    </div>
  );
};


export default TabsSlider;