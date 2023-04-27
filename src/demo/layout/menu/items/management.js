import {CloudServerOutlined} from "@ant-design/icons";
import {MENU} from "../../../reducer/menuActor";

const management = {
    title: "Management",
    children: [
        {
            id: MENU.MANAGED_SERVER,
            title: "Server",
            path: "/management/server",
            icon: CloudServerOutlined
        }
    ]
}
export default management;