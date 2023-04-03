import {AppBar, Button, Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PersonalPageLayoutProps } from '../../interfaces/interfaces';

export const PersonalPageLayout = ({children} : PersonalPageLayoutProps) => {
  return (
    <>
        <Grid 
            container
            spacing={0}
            direction="column"
            sx={{ backgroundColor: 'secondary.main', minHeight: '100vh' }}
        >
            <AppBar
                position='static'
                sx={{  }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between", paddingLeft: "10%", paddingRight: "10%" }}>
                        <Button component={NavLink} color="inherit" to="/"> Home </Button>
                        <Button component={NavLink} color="inherit" to="/education"> Education </Button>
                        <Button component={NavLink} color="inherit" to="/skills"> Skills </Button>
                        <Button component={NavLink} color="inherit" to="/experience"> Experience </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container 
                container
                maxWidth="xl"
            >
                { children }
            </Container>
        </Grid>
    </>
  )
}
