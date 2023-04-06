import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { SkillCardProps } from '../../interfaces/interfaces';

export const SkillCard = ({title,image,description} : SkillCardProps) => {
  return (
    <Card   
    raised
    sx={{
    maxWidth: 280,
    margin: "0 auto",
    padding: "0.1em",
    }}
    className="animate__animated animate__zoomIn animate__faster">
        <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
        title={title}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        </CardContent>
    </Card>
  )
}
