import {CloudServerOutlined} from "@ant-design/icons";
import {MENU} from "../../../reducer/menuActor";

const management = {
    title: "Management",
    type: "group",
    children: [
        {
            title: "Server",
            type: "nestedList",
            icon: CloudServerOutlined
        }
    ]
}
export default management;