import NavGroup from "./NavGroup";
import menuItems from "./items/menuItems";
import {Box} from "@mui/material";

export default function MenuContents() {
    // TODO: console.log("menu contents rendering");
    const contents = menuItems.map((item, index)=> {
        return (
            <NavGroup groupItem={item} key={index}/>
        )
    });
    return (
        <>
            {contents}
        </>
    )
}