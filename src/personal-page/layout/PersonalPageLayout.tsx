import {AppBar, Button, Box, Container, Grid, Link, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PersonalPageLayoutProps } from '../../interfaces/interfaces';
import { AccessTimeFilled, Code, LinkedIn, Person, School } from '@mui/icons-material';

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
                sx={{width: '100wv'}}
            >
                <Container maxWidth="xl">
                    <Toolbar className="nav-mobile" disableGutters sx={{ justifyContent: "space-between", paddingLeft: "10%", paddingRight: "10%" }}>
                        <Button component={NavLink} color="inherit" to="/"><Person sx={{ paddingRight: '2px' }} /> Home </Button>
                        <Button component={NavLink} color="inherit" to="/education"><School sx={{ paddingRight: '2px' }} /> Education </Button>
                        <Button component={NavLink} color="inherit" to="/skills"><Code sx={{ paddingRight: '2px' }} /> Skills </Button>
                        <Button component={NavLink} color="inherit" to="/experience"><AccessTimeFilled sx={{ paddingRight: '2px' }} /> Experience </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Grid 
                alignItems="center"
                sx={{ margin: '10px'  }}
            >
                { children }
            </Grid>
        </Grid>
        <Box
        sx={{ 
        backgroundColor: "#1F2D3D",             
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem", 
        }}
        >
            <Container maxWidth="xl">
                <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography sx={{ color: 'secondary.main' }} variant="h5">
                        <Link rel="noopener" target="_blank" sx={{ width: '100%', wordWrap: "break-word", display: "inline-block" }} href={'https://www.linkedin.com/in/joel-uzcategui-44497722a/'} color="inherit">
                                    <LinkedIn  fontSize="large"/>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ color: 'secondary.main' }} variant="subtitle1">
                    {`Joeluzcategui@protonmail.com`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Link rel="noopener" target="_blank" sx={{ color: 'secondary.main', width: '100%', wordWrap: "break-word", display: "inline-block" }} href={'https://github.com/RosaLeaveMeAlone/personal-page'} color="inherit">
                        Repository of this project
                    </Link>
                </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}
