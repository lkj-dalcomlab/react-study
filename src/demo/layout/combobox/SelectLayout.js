import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LAYOUT, switchLayout} from "../../reducer/dashboardSwitch";
import {MENU} from "../../reducer/menuActor";

export default function SelectLayout() {
    const {layoutState} = useSelector(state => state.dashboardSwitch);
    const {selectMenuId} = useSelector(state => state.menuActor);
    const isSelectView = selectMenuId === MENU.HOME;
    console.log("SelectLayout render: " + selectMenuId);

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const actionChange = (e) => {
        dispatch(switchLayout(e.target.value));
    };
    const comboClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            {isSelectView &&
                <FormControl sx={{minWidth: "120px", marginLeft: "10px"}}>
                    <InputLabel>Add</InputLabel>
                    <Select
                        open={open}
                        onClose={comboClose}
                        onOpen={handleOpen}
                        value={layoutState}
                        label="Add"
                        onChange={actionChange}
                    >
                        <MenuItem value={LAYOUT.NONE}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={LAYOUT.PROCESS_STATUS}>Process status</MenuItem>
                        <MenuItem value={LAYOUT.POPUP}>Process popup</MenuItem>
                        <MenuItem value={LAYOUT.TAB}>Tab</MenuItem>
                        <MenuItem value={LAYOUT.ACCORDIAN}>Accordian</MenuItem>
                    </Select>
                </FormControl>
            }
        </>
    )
}