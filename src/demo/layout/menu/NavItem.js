import {ListItemButton} from "@mui/material";

export default function NavItem({item}) {
    return (
        <ListItemButton>
            {item.title}
        </ListItemButton>
    )
}