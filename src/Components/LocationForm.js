import React from 'react';

function LocationForm(){
    return(
        <div>
            <form>
            <div class="wrapper">
            <div class="box">
                <input type="number" name="latitude"/>
                <label for="number">Latitude</label>
            </div>
    
            <div class="box">
                <input type="number" name="longitude" />
                <label for="number">Longitude</label>
            </div>
            </div>

            <div class="box">
                <input type="submit" name="submit" value="Set Location"/>
            </div>
            </form>
        </div>
    )
}

export default LocationForm