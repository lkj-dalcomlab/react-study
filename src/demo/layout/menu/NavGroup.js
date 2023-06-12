import NavItem from "./NavItem";
import {Box, List, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import NavHostGroup from "./NavHostGroup";

export default function NavGroup({groupItem}) {
    const menuOpen = useSelector(state => state.menuActor.menuOpen);

    const items = groupItem.children.map((item, idx)=> {
        if (item.type === "nestedList") {
            return (
                <NavHostGroup item={item} key={idx}/>
            )
        }
        return (
            <NavItem item={item} key={idx}/>
        )
    });
    return (
        <List
            subheader={
                groupItem.title &&
                menuOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {groupItem.title}
                        </Typography>
                        {/* only available in paid version */}
                    </Box>
                )
            }
            sx={{ mb: 1.5, py: 0, zIndex: 0 }}
        >
            {items}
        </List>
    )
}