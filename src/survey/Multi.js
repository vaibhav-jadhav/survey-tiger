import React,{useState} from 'react';
import {Grid,TextField,Paper} from '@material-ui/core'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
const Multi=()=>{
    const [options,setOptions] =useState([""]);
    const [remOpt,setOpt] =useState(3);
    return<>
            <Grid container
                direction="row"
                justify="center"
                >


                    
                <Grid item>
                    <Paper>
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                style={{width:"500px",marginLeft:"15px"}}
                            >
                                <Grid item xs={1}><HelpOutlineOutlinedIcon color="primary"/></Grid>
                                <Grid item xs={11}><TextField fullWidth  id="standard-basic" /></Grid>
                            </Grid>
                    </Paper>
                    <Paper>
                        {
                                options.map((item,index)=>{
                                    return <>
                                        <Grid container
                                        direction="row"
                                        >
                                                <Grid item xs={10}>
                                                    <TextField fullWidth value={index}  id="standard-basic" />
                                                </Grid>
                                                <Grid onClick={()=>{
                                                    console.log("REM add",remOpt)
                                                     if(remOpt > 0){
                                                        console.log("op")
                                                        let t= options;
                                                        t.push("kkjlaksdjlka")
                                                        setOptions(t)
                                                        console.log(options) 
                                                        setOpt(remOpt-1);
                                                     }
                                                           
                                                  }} item xs={1}>
                                                    <AddOutlinedIcon/>
                                                </Grid>
                                                <Grid item xs={1} onClick={()=>{
                                                    console.log("REM",remOpt)
                                                    if(remOpt < 3 ){
                                                        options.splice(index,1)
                                                        setOpt(remOpt+1);
                                                    }
                                                }}>
                                                  <RemoveOutlinedIcon />
                                                </Grid>
                                        </Grid>
                                    </>
                                })
                        }
                    </Paper>
                </Grid>
            </Grid>
    </>
}
export default Multi;