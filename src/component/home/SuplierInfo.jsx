import React from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';

const SuplierInfo = () => {
    const paperStyle = { height: "83vh", padding: "25px", margin: "3vh auto", width: "60vw" };
    const inputStyle = { padding: "10px" }
    const avatarStyle = { backgroundColor: "#68f79a", color: "#ffff", fontSize :"40px", borderRadius:"50px",padding:"8px"}

    return (
        <Grid  >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <BusinessIcon style={avatarStyle} />
                    <Typography variant="h5">
                    SuplierInfo
                    </Typography>
                </Grid>
                <Grid align="center">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Companyname"

                            style={inputStyle}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            style={inputStyle}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Ownername"
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            style={inputStyle}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Country"
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            style={inputStyle}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Pin"
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="zip code"
                            style={inputStyle}
                        />
                      
                    </div>
                    <Button variant="contained" >Submit</Button>
                </Grid>
            </Paper>

        </Grid>
    )
}

export default SuplierInfo;