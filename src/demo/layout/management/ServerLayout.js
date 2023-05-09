import {useDispatch, useSelector} from "react-redux";
import {MENU, selectMenuItem} from "../../reducer/menuActor";
import {useEffect} from "react";

export default function Server() {
    const {selectMenuId} = useSelector(state => state.menuActor);
    const dispatch = useDispatch();
    useEffect(()=> {
        if (selectMenuId !== MENU.MANAGED_SERVER) {
            dispatch(selectMenuItem({selectMenuId: MENU.MANAGED_SERVER}));
        }
    });

    return (
        <>
        <div>server management page</div>
        </>
    )
}