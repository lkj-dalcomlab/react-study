import {ListItemButton, ListItemText, Typography, useTheme} from "@mui/material";
import {forwardRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItem} from "../../reducer/menuActor";

export default function NavItem({item}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {menuOpen, selectMenuId} = useSelector(state => state.menuActor);
    const level = 1;
    const isSelected = selectMenuId === item.id;

    const menuHandler = (menuId)=> {
        dispatch(selectMenuItem({selectMenuId: menuId}));
    }

    let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.path} />) };

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';
    return (
        <ListItemButton {...listItemProps}
                        onClick ={() => menuHandler(item.id)}
                        selected={isSelected}
                        sx={{
                            zIndex: 1201,
                            pl: `28px`,
                            py: 1.25,
                            '&:hover': {
                                bgcolor: 'primary.lighter'
                            },
                            '&.Mui-selected': {
                                bgcolor: 'primary.lighter',
                                borderRight: `2px solid ${theme.palette.primary.main}`,
                                color: iconSelectedColor,
                                '&:hover': {
                                    color: iconSelectedColor,
                                    bgcolor: 'primary.lighter'
                                }
                            }
                        }}>
            <ListItemText
                primary={
                    <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                        {item.title}
                    </Typography>
                }
            />
        </ListItemButton>
    )
}