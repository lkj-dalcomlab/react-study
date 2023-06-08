import {RetweetOutlined} from "@ant-design/icons";
import {Card, Grid, IconButton, useTheme} from "@mui/material";
import ProcessStatus from "./ProcessStatus";
import React from "react";
import MuiTable from "./table/mui/MuiTable";
import {useDispatch} from "react-redux";
import {updateCategories, updateProcessList} from "../../../reducer/processData";
import config from "../../../config/config";

export default function ProcessLayout() {
    const theme = useTheme();
    const dispatch = useDispatch();

    const loadProcessList = () => {
        fetch(config.serverAddr + "/process")
            .then(res => res.json())
            .then(result => {
                dispatch(updateCategories(result.categories));
                dispatch(updateProcessList(result.metrics));
            },(error)=> {
                console.log(error);
            });
    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item xs={12} p={2}>
                <IconButton sx={{
                                border: `1px solid ${theme.palette.secondary.main}`
                            }}
                            onClick={loadProcessList}
                >
                    <RetweetOutlined/>
                </IconButton>
            </Grid>

            <Grid container spacing={1} alignItems="center" direction="column">
                <ProcessStatus/>
                <Grid item xs={6} sm={6}>
                    <Card>
                        <MuiTable/>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}