import { ImageList, ImageListItem } from "@mui/material"
import { homeImages } from "../data"


export const HomeImageList = () => {
  return (
    <ImageList sx={{ width: 500, height: '82vh',overflow: "hidden" }} cols={3} rowHeight={164}>
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
