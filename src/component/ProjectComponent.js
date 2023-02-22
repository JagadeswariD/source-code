import {Card, Typography, CardContent,  Grid,  Button} from '@mui/material'
export default function AboutMEComponent(){
    return(
    <Card sx={{ minWidth: 275 }}>
            <CardContent AlignItems="center">
            <Grid container spacing={2}>
              <Grid item xs={12} >
              <Card>
                    <CardContent>
                    <Typography variant="body2" color="text.secondary" alignItems='center' flexWrap= 'wrap'  textAlign= 'justify' >
                       Grocery Store Inventory Management<br/><br/>
                       It is a software application that helps grocery store owners manage their inventory of products. It typically involves creating a database of products, managing stock levels, maintaining vendor information and managing user access details. A scheduler is implemented to check the stock levels periodically and email the store owner.
                       The application uses Spring Data JPA for database access, Spring Security for authentication and authorization, Spring RESTful API that enables the front-end application to communicate with the back-end and React.js for Frontend.
                     </Typography>
                     <Button href ="https://github.com/JagadeswariD/JavaPrograms/tree/gsim-login/Dhanagopal_Jagadeswari_GSIM_CaseStudy">Github link to source code</Button>
                    </CardContent>
              </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                    <CardContent>
                    <Typography variant="body2" color="text.secondary" alignItems='center' flexWrap= 'wrap'  textAlign= 'justify' >
                       Movie Search<br/><br/>
                       Application makes a Rest API call to a public domain to get the information on movie title and return movie details to the user. The movie poster image is read in bytes and stored in the database. While rendering the movie details page, the image is sent to the browser as blob type and displayed.
                       Technologies used: Spring RESTful Web Service, Spring Authentication,  Spring Transaction using Spring framework with Hibernate as the back end ORM tool and Spring Thyme for Frontend.
                     </Typography>
                     <Button align ="left" href ="https://github.com/JagadeswariD/API">Github link to source code</Button>
                    </CardContent>
              </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary" alignItems='center' flexWrap= 'wrap'  textAlign= 'justify' >
                           LMS<br/><br/>
                           LMS built using SpringBoot to create, update, delete and read student and program information.
                           Technologies used: Spring RESTful Web Service,  Spring Transaction using Spring framework with Hibernate as the back end ORM tool and PostgresQL as database.
                         </Typography>
                         <Button align ="left" href ="https://github.com/JagadeswariD/demo-heroku">Github link to source code</Button>
                        </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary" alignItems='center' flexWrap= 'wrap'  textAlign= 'justify' >
                           Animal World<br/><br/>
                           Static web page, built on Javascript, CSS and HTML technologies. Page layout is designed using Flexbox, to align the header, navigation, main, footer section. Navigation is implemented with the help of CSS selectors.
                           Made the page dynamic by making XMLHTMLRequest method, to Ajax call on OpenWeatherPublic API for the user provided state or city name.
                         </Typography>
                         <Button align ="left" href ="https://github.com/JagadeswariD/JagadeswariD.github.io">Github link to source code</Button>
                        </CardContent>
                  </Card>
              </Grid>
            </Grid>
            </CardContent>

          </Card>
    );

}