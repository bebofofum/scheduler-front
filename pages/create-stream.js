import { Typography, Card, CardContent, Grid, TextField, FormGroup } from '@material-ui/core';
import styles from '../styles/Form.module.css'


function CreateStream() {

    
    return (
        <div className="container">
            <div className="form-box">
                <h5 className="form-title">Enter a Stream Schedule</h5>
                <form>
                    <label htmlFor="name">Stream Name</label>
                    <input 
                        className="" 
                        id="name" 
                        name="name" 
                        type="text"
                        placeholder="Stream Name" />
                    <label htmlFor="description">Stream Description</label>
                    <input 
                        className="" 
                        id="description" 
                        name="description" 
                        type="text"
                        placeholder="Stream Details" />

                </form>
        </div>
       </div>
    )
}

export default CreateStream;