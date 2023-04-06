import { Avatar, Link, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { CoursesData } from "../../interfaces/interfaces"
import { Launch } from "@mui/icons-material"


export const ListItemCourse = ({
    title,
    image,
    issuingCompany,
    certificateUrl,
} : CoursesData) => {
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
                {issuingCompany}
              </Typography>
              
              <br/>
              <ListItemText
                disableTypography
                primary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <Link sx={{ width: '100%', wordWrap: "break-word", display: "inline-block" }} href={certificateUrl} color="inherit">
                                {certificateUrl}<Launch fontSize="inherit"/>
                            </Link>
                            
                        </Typography>
                    </>
                }
               />
            </>
          } />
        </ListItem>    
    </>
  )
}
