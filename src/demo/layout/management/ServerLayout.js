import {useDispatch, useSelector} from "react-redux";
import {MENU, selectMenuItem} from "../../reducer/menuActor";
import {useEffect} from "react";

export default function Server() {
    const {selectMenuId} = useSelector(state => state.menuActor);
    console.log("server page render: " + selectMenuId);

    // const dispatch = useDispatch();
    // useEffect(()=> {
    //     console.log("server page use effect: " + MENU.HOME);
    //     if (selectMenuId !== MENU.HOME) {
    //         console.log("server page id change");
    //         dispatch(selectMenuItem({selectMenuId: ''}));
    //     }
    // });

    return (
        <>
        <div>server management page</div>
        </>
    )
}