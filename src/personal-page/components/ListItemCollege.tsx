import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { EducationData } from "../../interfaces/interfaces"


export const ListItemCollege = ({
    title,
    college,
    location,
    image = undefined,
    dateStart = undefined,
    dateEnd = undefined,
} : EducationData | any) => { //Add any to resolve build troubles
  return (
    <>
        <ListItem>
            {
                image && (
                <ListItemAvatar>
                    <Avatar alt={title} src={image} />
                </ListItemAvatar>
                )
            }
            <ListItemText primary={title}           secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {college}
              </Typography>
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {location}
              </Typography>
              { dateStart ? ` — ${dateStart} - ${dateEnd}` : ` — ${dateEnd}`}
            </>
          } />
        </ListItem>    
    </>
  )
}
