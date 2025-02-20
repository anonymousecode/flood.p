import React from 'react'
import Styles from  '../styles/pform.module.css'

function Pform() {
  return (
    <div>
        <h1 style={{textAlign:'center',marginTop: '20px' }}>Flood Risk Assessment</h1>
        <div className={Styles.divcontainer}>
          <form action="" >

            <div className={Styles.row}>
              <label htmlFor="MonsoonIntensity">Monsoon Intensity</label>
              <select name="MonsoonIntensity" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Minimal Rain</option>
              <option value=".25">Very Light Rain</option>
              <option value=".5">Moderate Rain</option>
              <option value=".75">Heavy Light Rain</option>
              <option value="1">Intense Rain</option>
              </select>

              <label htmlFor="Landslides">Landslides</label>
              <select name="Landslides" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Low Risk</option>
              <option value=".25">Slight Risk</option>
              <option value=".5">Moderate Risk</option>
              <option value=".75">High Risk</option>
              <option value="1">Very High Risk</option>
              </select>
            </div>  
              
            <div className={Styles.row}>
              <label htmlFor="RiverManagement">River Management</label>
              <select name="RiverManagement" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Well-Managed</option>
              <option value=".25">Slightly Managed</option>
              <option value=".5">Moderately Managed</option>
              <option value=".75">Poorly Managed</option>
              <option value="1">Very Poorly Managed</option>
              </select>

              <label htmlFor="Deforestation">Deforestation</label>
              <select name="Deforestation" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Minimal Deforestation</option>
              <option value=".25">Slightly Deforestation</option>
              <option value=".5">Moderately Deforestation</option>
              <option value=".75">Severe Deforestation</option>
              <option value="1">Extreme Deforestation</option>
              </select>
            </div>
            
            <div className={Styles.row}> 
              <label htmlFor="Urbanization">Urbanization</label>
              <select name="Urbanization" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Rural Area</option>
              <option value=".25">Low Urbanization</option>
              <option value=".5">Moderately Urbanization</option>
              <option value=".75">High Deforestation</option>
              <option value="1">Highly Urbanized Area</option>
              </select>

              <label htmlFor="ClimateChange">Climate Change</label>
              <select name="ClimateChange" id="" className={Styles.box} required> 
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Low Impact</option>
              <option value=".25">Slight Impact</option>
              <option value=".5">Moderate Impact</option>
              <option value=".75">High Impact</option>
              <option value="1">Severe Impact</option>
              </select>
            </div>            
        
            <div className={Styles.row}>
              <label htmlFor="DamsQuality">Dams Quality</label>
              <select name="DamsQuality" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Good Condition</option>
              <option value=".25">Slightly Damaged</option>
              <option value=".5">Moderate Condition</option>
              <option value=".75">Poor Condition</option>
              <option value="1">Critical Condition</option>
              </select>

            </div>
             
             <div className={Styles.row}>
              <label htmlFor="IneffectiveDisasterPreparedness">Ineffective Disaster Preparedness</label>
              <select name="IneffectiveDisasterPreparedness" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Well Prepared</option>
              <option value=".25">Some Preparedness</option>
              <option value=".5">Moderate Preparedness</option>
              <option value=".75">Poor Preparedness</option>
              <option value="1">No Preparedness</option>
              </select> 

             </div>
           
            <div className={Styles.row}>
              <label htmlFor="CoastalVulnerability">Coastal Vulnerability</label>
              <select name="CoastalVulnerability" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Low Risk</option>
              <option value=".25">Slight Risk</option>
              <option value=".5">Moderate Risk</option>
              <option value=".75">High Risk</option>
              <option value="1">Severe Risk</option>
              </select> 

              <label htmlFor="Watersheds">Watersheds</label>
              <select name="Watersheds" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Good Management</option>
              <option value=".25">Slightly Managed</option>
              <option value=".5">Moderate Management</option>
              <option value=".75">Poor Management</option>
              <option value="1">Very Poor Management</option>
              </select> 
            </div>
            
            <div className={Styles.row}>

              <label htmlFor="WetlandLoss">Wetland Loss</label>
              <select name="WetlandLoss" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">No Loss</option>
              <option value=".25">Minimal Loss</option>
              <option value=".5">Moderate Loss</option>
              <option value=".75">Significant Loss</option>
              <option value="1">Extreme Loss</option>
              </select> 

              <label htmlFor="DrainageSystems">Drainage Systems</label>
              <select name="DrainageSystems" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Efficient Systems</option>
              <option value=".25">Slightly Inefficient</option>
              <option value=".5">Moderate Systems</option>
              <option value=".75">Poor Systems</option>
              <option value="1">Inefficient Systems</option>
              </select> 
            </div>        
                        
        </form>
    </div>
    <button className={Styles['button-28']}>Submit</button>

    </div>
  )
}

export default Pform

