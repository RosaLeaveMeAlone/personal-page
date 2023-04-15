import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { ExperienceData } from '../../interfaces/interfaces';

export const ListItemExperience = ({
  bussiness,
  job,
  startDate,
  endDate,
  country,
  description,
  image = undefined,
}: ExperienceData | any) => { //Add any to resolve build troubles
  return (
    <>
        <ListItem>
            {
                image && (
                <ListItemAvatar>
                    <Avatar alt={bussiness} src={image} />
                </ListItemAvatar>
                )
            }
            <ListItemText primary={job}           secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {bussiness}
              </Typography>
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {country}
              </Typography>
              { startDate ? ` — ${startDate} - ${endDate}` : ` — ${endDate}`}
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {description}
              </Typography>
            </>
          } />
        </ListItem>    
    </>
  )
}
