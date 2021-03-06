// import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import MuiLink from '@material-ui/core/Link';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function Index() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Next.js example
//         </Typography>
//         <Link href="/about" color="secondary">
//           Go to the about page
//         </Link>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
// import Link from 'next/link'
// import Layout from '../'
import { useRouter } from 'next/router';

import Layout from '../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Router from 'next/router'

import {withRouter} from 'next/router'
import {BookSource,GetAllRepository,SearchBook} from '../api/api'
import Styles from './index.less'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  progress: {
    margin: theme.spacing(2),
  },
  card: {
    maxWidth: 1050,
    marginBottom:12
  },
  PaperRoot: {
    padding: theme.spacing(3, 2),
  }
}));

const CardContain = ({cardData}) =>{
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {
          cardData&&cardData.cover&&<CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={cardData&&cardData.cover||''}
            title="Contemplative Reptile"
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            《{cardData.name}》
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.summary}
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            {cardData.lastChapter}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            作者：{cardData.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Link href={``} onClick={preventDefault} color="inherit" className={classes.link}>
          
        </Link> */}
        <Button size="small" 
          onClick={()=>Router.push(`/noveldetail?url=${cardData.link}`)} 
          color="primary">
          开始阅读
        </Button>
      </CardActions>
    </Card>
  )
}

function Index({BookSourceArray}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [Inputvalue, setInputvalue] = React.useState('');
  const [repository, setreposityory] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchdata,setSearchdata] = React.useState('')
  // function handleChange(event) {
  //   setValue(event.target.value);
  // }
  function handleSelectChange(event) {
    // console.log(event.target.value.split('-')[1])
    setreposityory(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  function HandleChangeInput(event){
    setInputvalue(event.target.value)
  }
  const GetSearchBook = async() => {
    // SearchBook()
    const getCode = BookSourceArray.filter(item=>item.name.indexOf(repository)!=-1?item.code:'')[0]
    const SearchData = {
      key:Inputvalue,
      name:repository,
      code:getCode&&getCode['code']||''
    }
    if(SearchData['key']&&SearchData['name']&&SearchData['code']){
      setLoading(true)
      try{
        const {data} = await SearchBook(SearchData)
        setSearchdata(data)
        setLoading(false)
      }catch(e){
        
      }
    }else{
      console.log(SearchData,'1111')
    }
    // console.log(SearchData,'SearchData',getCode,BookSourceArray)
  }
  return (
    <Layout title={'青墨小说📚'}>
      <form className={classes.root} autoComplete="off">
        <TextField
          id="standard-search"
          label="搜索"
          type="search"
          className={Styles.textField}
          margin="normal"
          onChange={HandleChangeInput}
        />
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">书源📚</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={repository}
              onChange={handleSelectChange}
            >
              {
                BookSourceArray&&BookSourceArray.map((item,index)=>(
                  <MenuItem value={item.name.split('-')[1]} key={index}>
                    {item.name.split('-')[1]}
                  </MenuItem>
                ))
              }
            </Select>
        </FormControl>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={GetSearchBook}
          className={classes.button}>
          🔍Search
        </Button>
      </form>
      {
        loading&&<div className={Styles.flexCenter}><CircularProgress className={classes.progress} /></div>
      }
      {
        searchdata.length>0
          ?
        searchdata.map((item,index)=><CardContain key={index} cardData={item}/>)
          :
          ''
      }
      {
        searchdata.length==0?
        <div>
          <Paper className={classes.PaperRoot}>
            <Typography variant="h5" component="h3">
              暂无数据，请试试其他源吧 老弟
            </Typography>
          </Paper>  
        </div>
        :
        ''
      }
    </Layout>  
  );
}
Index.getInitialProps=async({ req,query})=> {
  // const {data}=await BookSource()
  // GetAllRepository
  const {data} = await GetAllRepository()
  console.log(data.list,'data')
  return {BookSourceArray:data.list} 
  // return {}
}
export default withRouter(Index);

