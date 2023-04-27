import {ButtonBase, useTheme} from "@mui/material";
import logo from '../../resource/달콤랩_CI_.png'
import {Link} from "react-router-dom";
import MenuHeaderBox from "./MenuHeaderBox";
import {useDispatch, useSelector} from "react-redux";
import {MENU, selectMenuItem} from "../../reducer/menuActor";

export default function MenuHeader() {
    const theme = useTheme();
    //TODO: console.log("menu Header rendering: " + menuOpen);
    // let itemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.path} />) };
    const dispatch = useDispatch();

    const click = () => {
        dispatch(selectMenuItem({selectMenuId: MENU.HOME}));
    }

    return (
        <MenuHeaderBox theme={theme}>
            <ButtonBase disableRipple component={Link} to={"/"} onClick={click}>
                <img src={logo} style={{width:"118px", height:"35px", objectFit: "cover"}} />
            </ButtonBase>
        </MenuHeaderBox>
    )
}