import React, { useState } from 'react';

function Form(){

    const [ theState, setTheState ] = useState({});
    
    return(
        <div>
            <form>
                <label>New Space X Vechicle:</label>
                <input 
                placeholder="New Space X Vechicle"
                name="vechicle"
                />
                
                <button>Add Vechicle</button>
            </form>
        </div>
    )
}

export default Form;