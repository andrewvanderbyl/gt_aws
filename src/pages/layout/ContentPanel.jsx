import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";


export default function ContentPanel(props) {

    const buttonItems = props.entityButtonPanel.map(buttonPanel => (
        <Button key={buttonPanel.text} variant="contained" startIcon={buttonPanel.icon} sx={{marginLeft: 2}} onClick={buttonPanel.clickHandler}>{buttonPanel.text}</Button>
      ))

    return (
        <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>

        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: 'white'}}>
            <Typography variant="h6" sx={{ color: 'black'}}>{props.entityHeaderText}</Typography>
            <Box sx={{ flexGrow: 1, display: { marginLeft: 40, xs: 'none', md: 'flex' } }}>
                {buttonItems}
            </Box>
          </Toolbar>
        </AppBar>          
        
        <Grid container spacing={3}>
            {props.entityComponent}
        </Grid>
      </Container>
    );
}