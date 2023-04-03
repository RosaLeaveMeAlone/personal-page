import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { PersonalPageLayout } from '../layout/PersonalPageLayout'

export const SkillsPage = () => {
  return (
    <PersonalPageLayout>
      <div>SkillsPage</div>
      <br/>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            Example h5
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </PersonalPageLayout>
  )
}
