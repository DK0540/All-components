import React from 'react'
import { Avatar, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';

const SignCompo = () => {
    const papreStyle = { padding: "20px", height: "75vh", width: "280px", margin: "30px auto" }
    const avatarStyle = { backgroundColor: "#68f79a" }

    return (
        <Grid>
            <Paper elevation={10} style={papreStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography variant="h6" style={{ marginTop: "10px" }}>
                        Signup Form
                    </Typography>
                </Grid>
                <TextField id="standard-basic" label="Name" variant="standard" fullWidth />

                <TextField id="standard-basic"  type="email" label="Email" variant="standard" fullWidth />
                <TextField
                    id="standard-password-input"
                    label="PhoneNumber"
                    type="Tel"
                    variant="standard"
                    fullWidth />

                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    fullWidth />


                <Grid align="Center" >
                    <br />
                    <Button variant="contained" fullWidth>Signup</Button>
                </Grid>
                <br />
                <Typography>
                    Move to page
                    <Link>
                        Login
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignCompo