import { Grid} from '@mui/material';
import { SkillCard } from '../components';
import { PersonalPageLayout } from '../layout/PersonalPageLayout';
import { skills } from '../data'; 

export const SkillsPage = () => {

  return (
    <PersonalPageLayout>
      <Grid container spacing={2}>

        
          {
            skills.map(
              item => (
                <Grid item xs={12} md={4}>
                  <SkillCard title={item.title} image={item.image} description={item.description} />
                </Grid>
              )
            )
          }
        

      </Grid>

    </PersonalPageLayout>
  )
}
