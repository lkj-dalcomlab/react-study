import {Link, useLocation} from "react-router-dom";
import {Box, Breadcrumbs, Grid, Typography} from "@mui/material";
import menuItems from "../menu/items/menuItems";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {MENU} from "../../reducer/menuActor";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function Icon({item, ...props}) {
    console.log(props.sx);
    const Icon = item.icon;
    return (
        <Icon sx={props.sx}/>
    )
}
export default function BreadCrumb() {
    const [item, setItem] = useState();
    const location = useLocation();
    const {selectMenuId} = useSelector(state => state.menuActor);

    const naviTitle = (group) => {
        group.map((item) => {
            if (item.type === 'item' && item.path === location.pathname) {
                setItem(item);
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

    return (
        <Breadcrumbs>
            <Link to="/" underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
            >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>Home
            </Link>
            {
                (item && selectMenuId !== MENU.HOME) && (
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Icon item={item}/> <Box component="span" sx={{ml: 0.5}}>{item.title}</Box>
                    </Typography>
                )
            }
        </Breadcrumbs>
    )
}