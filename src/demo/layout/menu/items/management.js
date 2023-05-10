import {CloudServerOutlined} from "@ant-design/icons";
import {MENU} from "../../../reducer/menuActor";

const management = {
    title: "Management",
    type: "group",
    children: [
        {
            id: MENU.MANAGED_SERVER,
            title: "Server",
            type: "item",
            path: "/management/server",
            icon: CloudServerOutlined
        }
    ]
}
export default management;