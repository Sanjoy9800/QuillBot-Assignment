// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import { Container } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
import "./second.css"
import { CardActions,Typography } from '@mui/material';
// import { Grid} from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '40%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
  },
}));


const Second = () => {
  const classes = useStyles();
  return (
    <div>
        <h1 className='title'>Experience the full power of QuillBot</h1>
        
        <div className="root">
        <Card variant="outlined" className='cards'>
          <CardContent className="content">
                    <CardContent className='pre'>
                        <Typography variant="p">PREMIUM</Typography>
                    </CardContent>
                    <CardActions>
                        <button class="btnpre">Upgrade to Premium</button>
                    </CardActions>
                    <CardContent>
                    <hr/>
                    <Typography>< DoneIcon className='yright'/>Unlimited words in the Paraphraser
                      </Typography><hr/>
                        <Typography >< DoneIcon className='yright'/>Standard, Fluency, Expand, Shorten, Formal, Simple, and Creatives modes</Typography><hr/>
                        <Typography >< DoneIcon className='yright'/>1200 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon  className='yright'/>4 synonym options</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Unlimited Freeze words and phrases</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>6000 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Faster processing speed</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Advanced grammer rewrites</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Compare Modes (Desktop only)</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Plagiarism Checker*</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Tone detection</Typography><hr/>
                        <Typography className='last'>3-Day Money-Back Guarantee</Typography>
                    </CardContent>
                    </CardContent>
                </Card>
                <Card variant="outlined" className='cards'>
          <CardContent className="content">
                    <CardContent className='pre'>
                        <Typography variant="p">PREMIUM</Typography>
                    </CardContent>
                    <CardActions>
                        <button class="btnpre">Upgrade to Premium</button>
                    </CardActions>
                    <CardContent>
                    <hr/>
                    <Typography>< DoneIcon className='yright'/>Unlimited words in the Paraphraser
                      </Typography><hr/>
                        <Typography >< DoneIcon className='yright'/>Standard, Fluency, Expand, Shorten, Formal, Simple, and Creatives modes</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>1200 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon  className='yright'/>4 synonym options</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Unlimited Freeze words and phrases</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>6000 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Faster processing speed</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Advanced grammer rewrites</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Compare Modes (Desktop only)</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Plagiarism Checker*</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Tone detection</Typography><hr/>
                        <Typography className='last'>3-Day Money-Back Guarantee</Typography>
                    </CardContent>
                    </CardContent>
                </Card>
        </div>
        
    </div>
  )
}

export default Second