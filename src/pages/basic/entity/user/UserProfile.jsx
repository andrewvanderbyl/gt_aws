import { Checkbox, FormControlLabel, Grid, Paper, TextField } from "@mui/material";

export default function UserProfile() {

    return (
        <Grid item xs={12} sx={{mt: 2}}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Username"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Password"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Contact"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Email"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}