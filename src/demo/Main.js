import 'bootstrap/dist/css/bootstrap.css'
import {Drawer, IconButton, useTheme} from "@mui/material";
import {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

export default function Main() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    const onOpen = ()=> setOpen(!open);

    return (
        <div>
            <IconButton
                disableRipple
                aria-label="open drawer"
                onClick={onOpen}
                edge="start"
                color="primary"
                sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
            >
                {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </IconButton>
            <Drawer
                // container={container}
                variant="temporary"
                open={open}
                onClose={(e)=>{onOpen()}}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 260,
                        borderRight: `1px solid ${theme.palette.divider}`,
                        backgroundImage: 'none',
                        boxShadow: 'inherit'
                    }
                }}
            >
                <div>menu</div>
            </Drawer>
        </div>

    )
}