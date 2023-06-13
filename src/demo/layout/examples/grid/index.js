import {Box, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {MENU, selectMenuItem} from "../../../reducer/menuActor";
import {useState} from "react";

export default function GridLayout() {
    const {selectMenuId} = useSelector(state => state.menuActor);
    const dispatch = useDispatch();
    if (selectMenuId !== MENU.GRID_EXAMPLE) {
        dispatch(selectMenuItem({selectMenuId: MENU.GRID_EXAMPLE}));
    }

    const [name, setName] = useState();

    const changeName = (e) => {
        setName(e.target.value);
    }

    // const Icon =

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor="info.main">aa</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="info.main">aa</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="info.main">aa</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="info.main">aa</Box>
                </Grid>
            </Grid>

            <div style={{width:"50px", backgroundColor: "blue"}}>
                <p style={{wordBreak: "break-all"}}>
                </p>
            </div>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={name} onChange={changeName}/>
            <p>{name}</p>
        </>
    )
}