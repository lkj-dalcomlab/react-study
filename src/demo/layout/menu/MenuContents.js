import NavGroup from "./NavGroup";
import menuItems from "./items/menuItems";

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