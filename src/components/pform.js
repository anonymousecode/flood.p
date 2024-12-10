import React from 'react'
import Styles from  '../styles/pform.module.css'

function Pform() {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Flood Risk Assessment</h1>
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

              <label htmlFor="TopgraphyDrainage">Topography Drainage</label >
              <select name="TopgraphyDrainage" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>  
              <option value="0">Efficient Drainage</option>
              <option value=".25">Good Drainage</option>
              <option value=".5">Moderate Drainage</option>
              <option value=".75">Poor Drainage</option>
              <option value="1">Inefficient Drainage</option>
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

              <label htmlFor="Siltation">Siltation</label>
              <select name="Siltation" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Minimal Silt Buildup</option>
              <option value=".25">Slight Silt Buildup</option>
              <option value=".5">Moderate Silt Buildup</option>
              <option value=".75">High Silt Buildup</option>
              <option value="1">Extreme Silt Buildup</option>
              </select> 
            </div>
            
            <div className={Styles.row}>
              <label htmlFor="AgriculturalPractices">Agricultural Practices</label>
              <select name="AgriculturalPractices" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Sustainable Practices</option>
              <option value=".25">Slightly Sustainable</option>
              <option value=".5">Moderate Practices</option>
              <option value=".75">Unsustainable Practices</option>
              <option value="1">Highly Unsustainable</option>
              </select> 

              <label htmlFor="Encroachments">Encroachments</label>
              <select name="Encroachments" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">No Encroachments</option>
              <option value=".25">Minimal Encroachments</option>
              <option value=".5">Moderate Encroachments</option>
              <option value=".75">Significant Encroachments</option>
              <option value="1">Widespread Encroachments</option>
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
              <label htmlFor="Landslides">Landslides</label>
              <select name="Landslides" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Low Risk</option>
              <option value=".25">Slight Risk</option>
              <option value=".5">Moderate Risk</option>
              <option value=".75">High Risk</option>
              <option value="1">Very High Risk</option>
              </select>

              <label htmlFor="DeterioratingInfrastructure">Deteriorating Infrastructure</label>
              <select name="DeterioratingInfrastructure" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Good Condition</option>
              <option value=".25">Minor Issues</option>
              <option value=".5">Moderate Deterioration</option>
              <option value=".75">Significant Deterioration</option>
              <option value="1">Critical Deterioration</option>
              </select> 
            </div>
            
            <div className={Styles.row}>
              <label htmlFor="PopulationScore">Population Score</label>
              <select name="PopulationScore" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">Low Density</option>
              <option value=".25">Slight Density</option>
              <option value=".5">Moderate Density</option>
              <option value=".75">High Density</option>
              <option value="1">Very High Density</option>
              </select> 

              <label htmlFor="WetlandLoss">Wetland Loss</label>
              <select name="WetlandLoss" id="" className={Styles.box} required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="0">No Loss</option>
              <option value=".25">Minimal Loss</option>
              <option value=".5">Moderate Loss</option>
              <option value=".75">Significant Loss</option>
              <option value="1">Extreme Loss</option>
              </select> 
            </div>

            <div className={Styles.row}>
            <label htmlFor="InadequatePlanning">Inadequate Planning</label>
            <select name="InadequatePlanning" id="" className={Styles.box} required>
            <option value="" disabled selected hidden>Select an option</option>
            <option value="0">Effective Planning</option>
            <option value=".25">Some Planning</option>
            <option value=".5">Moderate Planning</option>
            <option value=".75">Poor Planning</option>
            <option value="1">No Planning</option>
            </select>

            <label htmlFor="PoliticalFactors">Political Factors</label>
            <select name="PoliticalFactors" id="" className={Styles.box} required>
            <option value="" disabled selected hidden>Select an option</option>
            <option value="0">Stable Environment</option>
            <option value=".25">Slight Instability</option>
            <option value=".5">Moderate Instability</option>
            <option value=".75">High Instability</option>
            <option value="1">Severe Instability</option>
            </select> 
            </div>
        
                        
        </form>
    </div>
    <button className={Styles['button-28']}>Submit</button>

    </div>
  )
}

export default Pform