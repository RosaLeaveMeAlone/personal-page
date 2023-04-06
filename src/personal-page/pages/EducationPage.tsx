import { Grid } from '@mui/material';

import { PersonalPageLayout } from '../layout/PersonalPageLayout';
import { ListGeneric } from '../components';
import { education } from '../data/education';
import { courses } from '../data/courses';

export const EducationPage = () => {


  return (
    <PersonalPageLayout>
      <Grid container   
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
      >
        <ListGeneric data={education} type='college' title='Education' />
      </Grid>
      <br/>
      <Grid container   
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
      >
        <ListGeneric data={courses} type='course' title='Licenses and certifications' />
      </Grid>
    </PersonalPageLayout>
  )
}

