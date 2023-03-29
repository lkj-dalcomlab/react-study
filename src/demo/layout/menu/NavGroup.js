import {NavLink} from "react-router-dom";

export default function NavGroup({groupItem}) {
    const items = groupItem.children.map((item, index)=> {
        return (
            <NavLink to={item.path} key={index}>{item.title}</NavLink>
        )
    });
    return (
        <>
            {items}
        </>
    )
}