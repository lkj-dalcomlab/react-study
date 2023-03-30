import {ListItemButton, useTheme} from "@mui/material";
import {forwardRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItem} from "../../reducer/menuActor";

export default function NavItem({item}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {menuOpen, selectMenuId} = useSelector(state => state.menuActor);
    const level = 1;

    const menuHandler = (menuId)=> {
        dispatch(selectMenuItem({selectMenuId: menuId}));
    }

    let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.path} />) };

    const iconSelectedColor = 'primary.main';
    return (
        <ListItemButton {...listItemProps} onClick ={() => menuHandler(item.id)}
                        sx={{
                            zIndex: 1201,
                            pl: menuOpen ? `${level * 28}px` : 1.5,
                            py: !menuOpen && level === 1 ? 1.25 : 1,
                            ...(menuOpen && {
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
                            }),
                            ...(!menuOpen && {
                                '&:hover': {
                                    bgcolor: 'transparent'
                                },
                                '&.Mui-selected': {
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    },
                                    bgcolor: 'transparent'
                                }
                            })
                        }}>
            {item.title}
        </ListItemButton>
    )
}