import {ButtonBase, useTheme} from "@mui/material";
import logo from '../../resource/달콤랩_CI_.png'
import {Link} from "react-router-dom";
import config from "../../config/config";
import MenuHeaderBox from "./MenuHeaderBox";

export default function MenuHeader() {

    const theme = useTheme();
    return (
        <MenuHeaderBox theme={theme}>
            <ButtonBase disableRipple component={Link} to={"/"} >
                <img src={logo} style={{width:"118px", height:"35px", objectFit: "cover"}} />
            </ButtonBase>
        </MenuHeaderBox>
    )
}