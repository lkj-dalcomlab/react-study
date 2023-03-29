import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

const MenuHeaderBox = styled(Box)(({ theme}) => ({
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export default MenuHeaderBox;