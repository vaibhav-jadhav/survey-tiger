import React,{useState} from 'react';
import {Grid,TextField,Paper,Button} from '@material-ui/core'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
const Single=(props)=>{
    const [Q,setQ]=useState("");
    const [options,setOptions] =useState([""]);
    const [remOpt,setOpt] =useState(2);
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
                                <Grid item xs={11}><TextField onChange={(e)=>{
                                    setQ(e.target.value);
                                }} fullWidth  id="standard-basic" /></Grid>
                            </Grid>
                    </Paper>
                    <Paper>
                        {
                                options.map((item,index)=>{
                                    return <>
                                        <Grid container
                                        direction="row"
                                        style={{marginTop:"25px"}}
                                        >
                                                <Grid item xs={10}>
                                                    <TextField fullWidth onChange={(e)=>{
                                                            options[index] = e.target.value;
                                                    }}   id="standard-basic" />
                                                </Grid>
                                                <Grid onClick={()=>{
                                                    console.log("REM add",remOpt)
                                                     if(remOpt > 1){
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
                                                    if(remOpt < 2 ){
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
                <Grid container
                    direction = "row"
                    justify="center"
                    style={{marginTop:"30px"}}
                    >
                    <Grid item>
                        {
                            (remOpt === 1  )?<>
                                        <Button onClick={()=>{
                                                setOptions([""]); 
                                                setQ("")    
                                                setOpt(3)
                                                console.log({props:props.sq})
                                                props.sq(-1);
                                                let question={
                                                        type:"multi",
                                                        options:options
                                                }
                                                console.table(question)
                                                props.data.history.push("/create")
                                        }} style={{backgroundColor: "#eda180",marginRight:"30px"}}>Add Question</Button>
                                        <Button  style={{backgroundColor: "#eda180"}}>Publish</Button>
                            </>:null
                        }
                    </Grid>
                </Grid>
            </Grid>
    </>
}
export default Single;