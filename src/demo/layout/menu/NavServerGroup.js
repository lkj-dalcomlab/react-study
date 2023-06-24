import {List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import config from "../../config/config";
import {useSelector} from "react-redux";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import NavServiceGroup from "./NavServiceGroup";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StorageIcon from "@mui/icons-material/Storage";

export default function NavServerGroup({serverItem}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    const Icon = serverItem.icon;

    console.log('NavServerGroup: ' + open);

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';
    const hoverColor = 'button.primary';

    const loadServiceList = () => {
        fetch(config.serverAddr + "/services")
            .then(res => res.json())
            .then(result => {
                console.log(result.services);
                setServiceList(result.services);
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
        navigate('examples/grid/');
        if (!open) {
            loadServiceList();
        }
        setOpen(!open);
    }
    const ServiceItems = () => {
        let rst = serviceList.map((item, idx) => {
            return (
                <ServiceGroup serviceItem={item} key={idx}/>
            )
        });
        return rst;
    };

    const ServiceGroup = ({serviceItem}) => {
        const theme = useTheme();
        const navigate = useNavigate();
        const [open, setOpen] = useState(false);
        const [hostList, setHostList] = useState([]);


        const loadHostList = () => {
            fetch(config.serverAddr + "/hosts?service=" + serviceItem)
                .then(res => res.json())
                .then(result => {
                    console.log(result.hosts);
                    setHostList(result.hosts);
                },(error)=> {
                    console.log(error);
                });
        }
        const handleClick = () => {
            // navigate('examples/chart');
            if (!open) {
                loadHostList();
            }
            setOpen(!open);
        }
        const HostItems = () => {
            let rst = hostList.map((item, idx) => {
                // const isSelected = item === selectMenuId;
                return (
                    <ListItemButton onClick={()=> navigate('management/host/' + item)} key={idx}
                        // selected={isSelected}
                                    sx={{
                                        pl: 6,
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

        return (
            <>
                <ListItemButton //selected={serviceItemSelected}
                    onClick ={handleClick}
                    sx={{
                        pl: 5,
                        ...listBtnStyle
                    }}>
                    <ListItemIcon className="itemIcon"
                                  sx={{
                                      minWidth: 28,
                                      color: textColor
                                  }}>
                        <LibraryBooksIcon style={{ fontSize: '1rem' }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant="h6" className="itemText"
                                        sx={{
                                            color: textColor
                                        }}
                            >
                                {serviceItem}
                            </Typography>
                        }
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <HostItems hostList={hostList}/>
                    </List>
                </Collapse>
            </>
        )
    }

    //'&.Mui-selected' sytle은 ListItemButton의 selected 옵션이 있어야 적용이 된다.
    return (
        <>
            <ListItemButton onClick ={handleClick}
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
                            {serverItem.title}
                        </Typography>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ServiceItems/>
                </List>
            </Collapse>
        </>
    )
}