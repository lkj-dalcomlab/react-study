import {Box, Grid} from "@mui/material";

export default function GridLayout() {
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
        </>
    )
}