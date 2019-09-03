import Link from 'next/link'
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
import {withRouter} from 'next/router'
import {BookSource,GetAllRepository} from '../api/api'
import Styles from './index.less'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function Index({BookSourceArray}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const [repository, setreposityory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChange(event) {
    setreposityory(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  return (
    <Layout title={'青墨小说📚'}>
        <TextField
          id="standard-search"
          label="搜索"
          type="search"
          className={Styles.textField}
          margin="normal"
        />
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">书源📚</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={repository}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'demo-controlled-open-select',
              }}
            >
              {
                BookSourceArray&&BookSourceArray.map((item,index)=>(
                  <MenuItem value={item.index}>
                    {item.name}
                  </MenuItem>
                ))
              }
            </Select>
            {/* <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
              {
                BookSourceArray&&BookSourceArray.map((item,index)=>{
                  return(
                    <FormControlLabel
                      value="top"
                      control={<Checkbox color="primary" />}
                      label={item.author}
                      labelPlacement="top"
                    />
                  )
                })
              }
            </FormGroup> */}
        </FormControl>
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}>
          🔍Search
        </Button>
      </Layout>  
  );
}
Index.getInitialProps=async({ req,query})=> {
  // const {data}=await BookSource()
  GetAllRepository
  const {data} = await GetAllRepository()
  console.log(data)
  return {BookSourceArray:data.list} 
  // return {}
}
export default Index;

