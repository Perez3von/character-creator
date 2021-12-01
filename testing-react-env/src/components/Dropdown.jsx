import React, { useState } from "react";


function Dropdown (array){

    const heads = ['headONE', 'headTWO', 'headTHREE'];
    const torsos = ['torsoONE', 'torsoTWO'];
    const bottoms = ['botONE', 'botTWO', 'botTHREE'];

return(



    <>
    
    <label>Heads</label>
    <select name="heads">
        {heads.map((head)=> <option value = {head}> {head} </option>)}
    </select>

    <label>Torsos</label>
    <select name="torsos">
        {torsos.map((torso)=> <option value = {torso}> {torso} </option>)}
    </select>

    <label>Bottoms</label>
    <select name="bottoms">
        {bottoms.map((bottom)=> <option value = {bottom}> {bottom} </option>)}
    </select>
  

    </> 
)







}

export default Dropdown;