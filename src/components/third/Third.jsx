import "./third.css"
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import ChangingProgressProvider from "../../ChangingProgressProvider";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

const Third = () => {
  return (
    <div>
        <h2 className="title">
        Write better, faster, and clearer instantly
        </h2>
        <h4 className="thirdsec">QuillBot is trusted by students, professional writers,
         and business people who want to write more effectively.</h4>
         

      <Container alignItems="center" justify="center" className='center'>
           <Grid container>

        <Grid xs={12} lg={4} >
           <ChangingProgressProvider values={[0, 20, 40, 60, 75]}>
        {percentage => (
          <CircularProgressbar
            className="progress"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>
      </Grid>

      <Grid xs={12} lg={4} >
      <CircularProgressbar  className="progress" value={100} text={`${50}`}  />
      </Grid>

      <Grid xs={12} lg={4} >
      <ChangingProgressProvider values={[0, 20, 40, 60, 85]}>
        {percentage => (
          <CircularProgressbar
          className="progress"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>            
           </Grid>

           </Grid>
      </Container>
      
         



    </div>
  )
}

export default Third