import {RetweetOutlined} from "@ant-design/icons";
import {Box, Card, Grid, IconButton} from "@mui/material";
import ProcessTable from "./ProcessTable";
import {useDispatch, useSelector} from "react-redux";
import {selectProcessId, updateCategories, updateProcessList} from "../../reducer/processData";
import ProcessStatus from "./ProcessStatus";
import React from "react";
import GridTable from "../gridjs/GridTable";

export default function DashboardLayout() {
    // const {categories, processList} = useSelector(state => state.processData);

    const dispatch = useDispatch();
    const loadProcessList = () => {
        fetch("http://localhost:8088/process")
            .then(res => res.json())
            .then(result => {
                dispatch(updateCategories(result.categories));
                dispatch(updateProcessList(result.metrics));
            },(error)=> {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Dashboard Layout</p>
            <p>
                <IconButton sx={{color: 'text.primary', bgcolor: 'grey.200'}}
                    onClick={loadProcessList}
                >
                    <RetweetOutlined/>
                </IconButton>
            </p>
            <Grid item xs={10} md={7}>
                <Box sx={{ display: "flex", width: "100%", height: "300px"} }>
                    <ProcessStatus/>
                </Box>
                <Card>
                    <GridTable/>
                    {/*<ProcessTable/>*/}
                </Card>
            </Grid>
        </div>
    )
}