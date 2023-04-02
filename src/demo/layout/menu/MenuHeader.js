import {ButtonBase, useTheme} from "@mui/material";
import logo from '../../resource/달콤랩_CI_.png'
import {Link} from "react-router-dom";
import MenuHeaderBox from "./MenuHeaderBox";
import {useSelector} from "react-redux";

export default function MenuHeader({menuOpen}) {
    const theme = useTheme();
    //TODO: console.log("menu Header rendering: " + menuOpen);
    return (
        <MenuHeaderBox theme={theme}>
            <ButtonBase disableRipple component={Link} to={"/"} >
                <img src={logo} style={{width:"118px", height:"35px", objectFit: "cover"}} />
            </ButtonBase>
        </MenuHeaderBox>
    )
}