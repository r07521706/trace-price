import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getData from './Firebase'
import firebase from 'firebase';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


var firebaseConfig = {
    apiKey: "AIzaSyDxgpOTXfLBwe6YcZSEAZL0VL6VgIJ8mTY",
    authDomain: "saveinterest-4dc19.firebaseapp.com",
    databaseURL: "https://saveinterest-4dc19.firebaseio.com",
    projectId: "saveinterest-4dc19",
    storageBucket: "saveinterest-4dc19.appspot.com",
    messagingSenderId: "362288066371",
    appId: "1:362288066371:web:fddc19da52257977f009f6",
    measurementId: "G-KKNCWQ51KW"
  };


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function List() {
  const classes = useStyles();
  useEffect(() => {

    async function fetchData(){
    const app = firebase.initializeApp(firebaseConfig);
    const database = app.database();
    const path = '/data3'
    database.ref(path).once("value", e => {
        (e.val())
    });

    fetchData();
   }

  });
  return (
    <TableContainer component={Paper} style={{background:"#2f31bd",border:"solid white"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"white",width:100}}>時間</TableCell>
            <TableCell align="right"  style={{color:"white"}}>Amount</TableCell>
            <TableCell align="right" style={{color:"white"}}>Id&nbsp;(g)</TableCell>
            <TableCell align="right" style={{color:"white"}}>Price&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"  style={{color:"white"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.calories}</TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.fat}</TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}