import Collapse from "@mui/material/Collapse";
import {List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import config from "../../config/config";
import {useSelector} from "react-redux";
import StorageIcon from "@mui/icons-material/Storage";

export default function NavHostGroup({item}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [hostList, setHostList] = useState([]);
    const Icon = item.icon;

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';
    const hoverColor = 'button.primary';

    const loadHostList = () => {
        fetch(config.serverAddr + "/hosts")
            .then(res => res.json())
            .then(result => {
                console.log(result.hosts);
                setHostList(result.hosts);
            },(error)=> {
                console.log(error);
            });
    }

    const listBtnStyle = {
        zIndex: 1201,
        py: 1.25,
        '&:hover': {
            bgcolor: hoverColor,
            '& .itemText, .itemIcon': {
                color: iconSelectedColor
            }
        },
        '&.Mui-selected': {
            bgColor: hoverColor,
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
                bgcolor: hoverColor
            }
        }
    };
    const handleClick = () => {
        if (!open) {
            loadHostList();
        }
        setOpen(!open);
    }
    const {selectMenuId} = useSelector(state => state.menuActor);
    const HostItems = () => {
        let rst = hostList.map((item, idx) => {
            const isSelected = item === selectMenuId;
            return (
                <ListItemButton onClick={()=> navigate('management/host/' + item)} key={idx}
                    selected={isSelected}
                    sx={{
                        pl: 4,
                        ...listBtnStyle
                    }}
                >
                    <ListItemIcon className="itemIcon"
                                  sx={{
                                      minWidth: 28,
                                      color: textColor
                                  }}>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant="h6" className="itemText"
                                        sx={{
                                            color: textColor
                                        }}
                            >
                                {item}
                            </Typography>
                        }
                    />
                </ListItemButton>
            )
        });
        return rst;
    };

    //'&.Mui-selected' sytle은 ListItemButton의 selected 옵션이 있어야 적용이 된다.
    return (
        <>
            <ListItemButton component={Link}
                       onClick ={handleClick}
                       sx={{
                           pl: `28px`,
                           ...listBtnStyle
                       }}>
                <ListItemIcon className="itemIcon"
                              sx={{
                                  minWidth: 28,
                                  color: textColor
                              }}>
                    <Icon style={{ fontSize: '1rem' }} />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="h6" className="itemText"
                                    sx={{
                                        color: textColor
                                    }}
                        >
                            {item.title}
                        </Typography>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <HostItems/>
                </List>
            </Collapse>
        </>
    )
}