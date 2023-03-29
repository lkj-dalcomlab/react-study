import NavGroup from "./NavGroup";
import menuItems from "./items/menuItems";
import {Box} from "@mui/material";

export default function MenuContents() {
    const contents = menuItems.map((item, index)=> {
        return (
            <Box key={index}>
                <p>{item.title}</p>
                <NavGroup groupItem={item}/>
            </Box>
        )
    });
    return (
        <>
            {contents}
        </>
    )
}