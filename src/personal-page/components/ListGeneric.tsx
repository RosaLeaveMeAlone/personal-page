import { Avatar, Divider, List, ListSubheader } from "@mui/material"
import { CoursesData, EducationData, ExperienceData, ListGenericProps } from '../../interfaces/interfaces';
import { ListItemCollege, ListItemCourse, ListItemExperience } from "./";
import { isCoursesData, isEducationData, isExperienceData } from "../../helpers/customGuardTypes";


export const ListGeneric = ({type, data, title} : ListGenericProps) => {

    const renderItem = (dataItem: EducationData | CoursesData | ExperienceData, isLast: Boolean) => {
        if(
            (type == "college" && !(isEducationData(dataItem))) ||
            (type == "course" && !(isCoursesData(dataItem))) ||
            (type == "experience" && !(isExperienceData(dataItem))) 
        )
        return <></>;


        switch(type) { 
            case "college": { 
            return isLast ?  <><ListItemCollege {...dataItem} /></> :  <><ListItemCollege {...dataItem} /><Divider/></>;
            break; 
            } 
            case "course": { 
            //statements; 
            return isLast ?  <><ListItemCourse {...dataItem} /></> :  <><ListItemCourse {...dataItem} /><Divider/></>;
            break; 
            } 
            case "experience": { 
            //statements; 
            return isLast ?  <><ListItemExperience {...dataItem} /></> :  <><ListItemExperience {...dataItem} /><Divider/></>;
            break; 
            } 
            default: { 
            return <></>
            break; 
            }
        }
    }

  return (
    <List 
        className="animate__animated animate__zoomIn animate__faster"
        sx={{ width: '100%', maxWidth: '80vw', bgcolor: 'background.paper' }}
        subheader={
            <ListSubheader component="div" id={title}>
              {title}
            </ListSubheader>
          }
    >
        {
            data.map( (item,index,array) => {
                let isLast = index === array.length - 1;
                return renderItem(item,isLast);
            })   
        }
    </List>  
    )
}
