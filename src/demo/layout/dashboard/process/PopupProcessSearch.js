import {Button, Card, Dialog, DialogContent, DialogTitle, Grid, IconButton, useTheme} from "@mui/material";
import React, {useState} from "react";
import {RetweetOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {updateCategories, updateProcessList} from "../../../reducer/processData";
import ProcessStatus from "./ProcessStatus";
import MuiTable from "./table/mui/MuiTable";
import config from "../../../config/config";

export default function PopupProcessSearch() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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

    const SearchLayout = () => {
        return (
            <IconButton sx={{
                            border: `1px solid ${theme.palette.secondary.main}`
                        }}
                        onClick={loadProcessList}
            >
                <RetweetOutlined/>
            </IconButton>
        )
    };

    const TableLayout = () => {
        return (
            <Grid container alignItems="center" direction="column">
                <Grid item xs={6} sm={6}>
                    <Card>
                        <MuiTable/>
                    </Card>
                </Grid>
            </Grid>
        )
    };

    return (
        <>
            <Grid container direction= "column" rowSpacing={2}>
                <Grid item>
                    <Button variant="outlined" onClick={handleClickOpen}>검색</Button>
                </Grid>
                <Grid item>
                    <ProcessStatus/>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Process Table</DialogTitle>
                <DialogContent>
                    <Grid container direction = "column" rowSpacing={2}>
                        <Grid item>
                            <SearchLayout/>
                        </Grid>
                        <Grid item>
                            <TableLayout/>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}