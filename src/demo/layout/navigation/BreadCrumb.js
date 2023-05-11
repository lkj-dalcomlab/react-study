import {Link, useLocation} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import menuItems from "../menu/items/menuItems";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {MENU} from "../../reducer/menuActor";

export default function BreadCrumb() {
    const [item, setItem] = useState();
    const location = useLocation();
    const {selectMenuId} = useSelector(state => state.menuActor);

    const naviTitle = (group) => {
        group.map((item) => {
            if (item.type === 'item' && item.path === location.pathname) {
                setItem(item);
                console.log(item);
                return false;
            }
            return true;
        })
    }
    useEffect(()=> {
        menuItems.map(group=> {
            naviTitle(group.children);
            return true;
        });
    });

    const fontSize = "h5";
    return (
        <Grid sx={{pb:'10px'}}>
            <Typography component={Link} to="/" color="textSecondary" variant={fontSize} sx={{ textDecoration: 'none' }}>
                Home
            </Typography>
            {
                (item && selectMenuId !== MENU.HOME) && (
                    <>
                        <span variant={fontSize}> / </span>
                        <Typography component={Link} to={item.path} variant={fontSize} sx={{ textDecoration: 'none' }} color="textSecondary">
                            {item.title}
                        </Typography>
                    </>
                )
            }
        </Grid>
    )
}