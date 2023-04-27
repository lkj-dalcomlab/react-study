import {useDispatch, useSelector} from "react-redux";
import {LAYOUT} from "../../reducer/dashboardSwitch";
import ProcessLayout from "./process";
import PopupProcessSearch from "./process/PopupProcessSearch";
import {MENU, selectMenuItem} from "../../reducer/menuActor";

export default function DashboardLayout() {
    const {layoutState} = useSelector(state => state.dashboardSwitch);
    const {selectMenuId} = useSelector(state => state.menuActor);
    console.log("dashboard layout render: " + selectMenuId);

    const dispatch = useDispatch();
    if (selectMenuId ==! MENU.HOME) {
        dispatch(selectMenuItem({selectMenuId: MENU.HOME}));
    }

    return (
        <>
            {layoutState === LAYOUT.PROCESS_STATUS &&
                <ProcessLayout/>
            }
            {layoutState === LAYOUT.POPUP &&
                <PopupProcessSearch/>
            }
        </>
    )
}