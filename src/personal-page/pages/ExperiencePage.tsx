import { Grid } from '@mui/material';
import { PersonalPageLayout } from '../layout/PersonalPageLayout';
import { ListGeneric } from '../components';
import { experience } from '../data';

export const ExperiencePage = () => {
  return (
    <PersonalPageLayout>
      <Grid container   
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
      >
        <ListGeneric data={experience} type='experience' title='Education' />
      </Grid>
    </PersonalPageLayout>
  )
}
