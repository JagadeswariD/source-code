import {Card, Typography, CardContent,  Grid} from '@mui/material'

export default function AboutMEComponent(){
    return(
    <Card sx={{ minWidth: 275 }}>
        <CardContent AlignItems="center">
        <Grid container spacing={2}>
          <Grid xs={4}   >
                <Grid container spacing={2}  flexWrap= 'wrap'>
                <Grid item xs={1} AlignItems= 'center'  >

                </Grid>
                <Grid item xs AlignItems= 'center' >
                <Typography gutterBottom variant="h5" component="div"  flexWrap= 'wrap'>
                     <br/>&ensp; &ensp;&ensp; &ensp; Jagadeswari Dhanagopal<br/>

                </Typography>
                 <a href="google.com"> LinkedIn</a>
                </Grid></Grid>

          </Grid>
          <Grid xs={8}>
               <Typography variant="body2" color="text.secondary" alignItems='center' flexWrap= 'wrap'  textAlign= 'justify' >
                <br/> &ensp; &ensp; &ensp;As a Java Developer with 5+ of years of experience in the industry, I am passionate about developing innovative and high-quality software solutions that deliver value to users and meet business needs. I have a strong foundation in Java programming, as well as hands-on experience building full-stack applications using technologies such as Spring Boot application, mainly on Spring REST API, Spring Data JPA, Spring Transactions, Spring Security and Spring Thymeleaf. Experience in developing responsive and user-friendly web applications using HTML, CSS, JavaScript, React, Redux, Axios, along with popular front-end libraries and frameworks such as Bootstrap, FontAwesome, SemanticUI, MaterialUI for creating beautiful and functional user interfaces. I also have experience in Agile software development methodologies and have a solid understanding of software design patterns and best practices.
               </Typography>

          </Grid>
        </Grid>



        </CardContent>

      </Card>
    );

}