import { Grid, Typography } from '@mui/material';
import { PersonalPageLayout } from '../layout/PersonalPageLayout'
import { HomeImageList } from '../components';

export const HomePage = () => {



  return (
    <PersonalPageLayout>
      <Grid container>
          <Grid item xs={12} md={6} sx={{ padding: "5px" }}> 
            <Typography variant='h4' component='h1'>Joel Uzcategui</Typography>
            <Typography
              variant='body1'
            >
As an electronic engineer with a passion for web development, I have spent the last few years honing my skills in this field. I began studying web development in 2015, and landed my first job in 2017. Currently, I have been working with the <strong>TALL stack</strong>, which includes Taildwind, Alpine, Laravel, and Livewire. Throughout my career, I have also gained experience with <strong>JavaScript</strong> and <strong>TypeScript</strong>, and have continued to expand my knowledge with <strong>Node.js</strong>, <strong>React.js</strong>, and <strong>Nest.js</strong>.
<br/>
One of my strengths as a developer is my ability to work both independently and as part of a team. I thrive in collaborative environments, where I can share my ideas and learn from others, but I am also capable of working on my own to accomplish project goals.
<br/>
When it comes to problem-solving, I prefer to take a conservative approach, carefully considering all available options before taking action. This mindset has helped me to develop effective solutions to complex problems.
<br/>
In addition to my technical skills, I am also committed to improving my language abilities. I am currently studying <strong>English</strong>, and have achieved a level <strong>A2</strong> proficiency. This will enable me to communicate effectively with colleagues and clients from around the world.
<br/>
Finally, I am passionate about renewable energy, and have a particular interest in solar panels. I believe that technology has the power to transform the world for the better, and I am excited to be part of an industry that is working towards a more sustainable future.
<br/>
In summary, I am an electronic engineer with a strong background in web development, and experience with a range of technologies. I am a collaborative team player with a conservative approach to problem-solving, and am committed to improving my language skills. My interest in renewable energy is a reflection of my belief in the power of technology to create positive change, and I am excited to be part of an industry that is making a real difference in the world.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: "5px" }}>
              <HomeImageList/>
          </Grid>
      </Grid>
    </PersonalPageLayout>
  )
}
