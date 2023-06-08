import {Box, Grid, SwipeableDrawer, Tab, Tabs, tabsClasses} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import DiscountIcon from '@mui/icons-material/Discount';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ProcessLayout from "./process";
import PopupProcessSearch from "./process/PopupProcessSearch";

export default function TabLayout() {
    const [value, setValue] = useState('0');

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <TabContext value={value}>
                    <TabList
                        onChange={handleChange}
                        variant="fullWidth"
                        scrollButtons
                        allowScrollButtonsMobile
                        textColor="primary"
                        indicatorColor="primary"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab label="Default" value="0" icon={<DiscountIcon/>} iconPosition="start"/>
                        <Tab label="Popup" value="1" icon={<AddToPhotosIcon/>} iconPosition="start"/>
                        <Tab label="Item Three" value="2"/>
                        <Tab label="Item Four" value="3"/>
                        <Tab label="Item Five" value="4"/>
                        <Tab label="Item Six" value="5"/>
                        <Tab label="Item Seven" value="6"/>
                    </TabList>

                    <TabPanel value = "0">
                        <Box>
                            <ProcessLayout/>
                        </Box>
                    </TabPanel>
                    <TabPanel value = "1">
                        <PopupProcessSearch/>
                    </TabPanel>
                    <TabPanel value = "2">Item Three</TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}