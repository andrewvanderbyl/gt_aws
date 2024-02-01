import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, Checkbox, Divider, FormControlLabel, Grid, IconButton, Paper, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import EditIcon from '@mui/icons-material/Edit';

export default function UserProfile() {

    return (
        <Grid 
            sx={{ marginTop: 1, flexDirection: 'row', height: '100 % !important' }}
            container 
            spacing={2} 
        >
            <Grid item xs={2}>
                <Paper elevation={3}>
                    <Card >
                        <CardActionArea >
                            <CardHeader
                                avatar={<Avatar
                                    sx={{ bgcolor: deepPurple[500], width: '150px', height: '150px', marginLeft: '4%'}} 
                                    variant="square" 
                                >ML
                                </Avatar>}
                            >
                            </CardHeader>
                        <CardActions>
                            <Button
                                sx={{ marginLeft: '4%'}} 
                                component="label" variant="contained" startIcon={<EditIcon />}>
                                    Edit Profile
                            </Button>
                        </CardActions>
                        </CardActionArea>
                    </Card>

                </Paper>
            </Grid>
            
            <Grid item xs={10} sx={{ height: '75vh'}}>
                <Paper elevation={3} sx={{ height: '100%', paddingLeft: 20, display: 'flex', flexDirection: 'column'}}>
                {/* <Grid container spacing={5}> */}
                <Box
                    component="form"
                    sx={{'& .MuiTextField-root': { m: 3, width: '35ch' }}}
                    noValidate
                    autoComplete="off"
                    >               
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        helperText="First Name"
                        disabled
                    />
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        helperText="Last Name"
                        disabled
                    />
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Username"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        disabled
                        helperText="Username"
                    />
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Password"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        helperText="Password"
                        disabled
                    />
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Contact"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        disabled
                        helperText="Contact"
                    />
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Email"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        disabled
                        helperText="Email"
                    />
                    <ButtonGroup 
                        sx={{ display: "flex",
                        boxShadow: "0",
                        flexDirection: "row",
                        alignItems: "center",
                        // marginLeft: 30,
                        marginTop: 10,
                        "& > *:not(:last-child)": {
                          marginLeft: 30
                        }
                        }}
                        variant="contained" aria-label="outlined primary button group">
                        <Button>Cancel</Button>
                        <Button sx={{marginLeft: 5}}>Save</Button>
                    </ButtonGroup>
                            
                    </Box>
                {/* </Grid> */}
                
                </Paper>
            </Grid>
        </Grid>
        // <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop: 3 }}
        //     elevation={3}
        //     square={false}
        // >
        // </Paper>
        

        // <Grid item xs={12} sx={{mt: 2}}>
        //     <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

        //     </Paper>
        // </Grid>
    );
}