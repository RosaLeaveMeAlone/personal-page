import { ImageList, ImageListItem, useMediaQuery } from "@mui/material"
import { homeImages } from "../data"
import { theme } from "../../theme";


export const HomeImageList = () => {
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ImageList sx={{ width: matchDownMd ? '80vw' : 500, height: '82vh',overflow: "hidden" }} cols={ 3 } rowHeight={164}>
      {homeImages.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            style={{objectFit: "contain"}}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
