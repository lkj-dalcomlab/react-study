import {ListItemButton, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {forwardRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItem} from "../../reducer/menuActor";

export default function NavItem({item}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {menuOpen, selectMenuId} = useSelector(state => state.menuActor);
    const isSelected = selectMenuId === item.id;

    const menuHandler = (menuId)=> {
        dispatch(selectMenuItem({selectMenuId: menuId}));
    }

    // let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.path} />) };

    const Icon = item.icon;

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';
    const hoverColor = 'menuButton.primary';
    return (
        <ListItemButton /*{...listItemProps}*/ component={Link} to={item.path}
                        onClick ={() => menuHandler(item.id)}
                        selected={isSelected}
                        sx={{
                            zIndex: 1201,
                            pl: `28px`,
                            py: 1.25,
                            ...(menuOpen && {
                                '&:hover': {
                                    bgcolor: hoverColor,
                                    '& .itemText, .itemIcon': {
                                        color: iconSelectedColor
                                    }
                                },
                                '&.Mui-selected': {
                                    bgcolor: hoverColor,
                                    borderRight: `2px solid ${theme.palette.primary.main}`,
                                    color: iconSelectedColor,
                                    '&:hover': {
                                        bgcolor: hoverColor
                                    }
                                }
                            })
                        }}>
            {menuOpen &&
                <ListItemIcon className="itemIcon"
                    sx={{
                        minWidth: 28,
                        color: isSelected ? iconSelectedColor : textColor
                    }}>
                    <Icon style={{ fontSize: '1rem' }} />
                </ListItemIcon>
            }
            {menuOpen &&
                <ListItemText
                    primary={
                        <Typography variant="h6" className="itemText"
                                    sx={{
                                        color: isSelected ? iconSelectedColor : textColor
                                    }}
                        >
                            {item.title}
                        </Typography>
                    }
                />
            }
        </ListItemButton>
    )
}