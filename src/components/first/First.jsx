import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import "./first.css"


const imageUrl = './images/back.png';

const sectionFirst = () => {

  return (
    <div>

      <div style={{backgroundImage:`url(${imageUrl})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className="first">
        <h1 className='title'> Save time and write with confidence</h1>
         <div className="button">
          <button className='premium'>Upgarde to QuillBot Premium</button>
         </div>
         <Container alignItems="center" justify="center" className='center'>
         <Grid container>
           <Grid lg={6} >
            <img className='img' src="https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg" alt="" />
           </Grid>
           <Grid lg={6}>
             <h3 className='subheading'>Increase your productivity</h3>
             <p className='subpara'>Paraphrase more text at once to finish writing faster.</p>
             <br />
             <h3 className='subheading'>Access all modes</h3>
             <p className='subpara'>Get maximum control over how you paraphrase.</p>
             <br />
             <h3 className='subheading'>Scan for plagiarism</h3>
             <p className='subpara'>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>
             <br />
             <h3 className='subheading'>Compare all mode outputs at once</h3>
             <p className='subpara'>Paraphrase in and compare outputs from all seven modes.</p>
           </Grid>
         </Grid>
         </Container>
      
      </div>
    </div>
  )
}

export default sectionFirst