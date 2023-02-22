import {Card,CardMedia, CardContent} from '@mui/material'
import AboutMeComponent from './AboutMeComponent';
import ProjectComponent from './ProjectComponent';
export default function MainComponent(){
return(<div>
         <Card xl={{ maxWidth: 345, maxHeight: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i0.wp.com/entertainmentmesh.com/wp-content/uploads/2015/10/my-life-cool-facebook-photo.jpg"
              />
              <CardContent>
                    <AboutMeComponent/>
                   <ProjectComponent/>
              </CardContent>

            </Card>

        </div>);

}