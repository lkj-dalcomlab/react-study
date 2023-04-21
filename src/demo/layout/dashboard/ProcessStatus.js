import {Card} from "@mui/material";
import {useSelector} from "react-redux";
import ProcessGraph from "./ProcessGraph";

export default function ProcessStatus() {
    const {selectedPIDs} = useSelector(state => state.processData);
    console.log("ProcessStatus rendering");

    const boxStyle= {
        backgroundImage: 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        borderRadius: '5px',
        textShadow: '0 1px 1px 1px #666',
        boxShadow: '0px 1px 15px 1px rgba(69, 65, 78, 0.08)',
        padding: '5px 10px 5px 0px',
        margin: '0px 10px 10px 0px'
    };

    return (
        <>
            {
                (selectedPIDs.length > 0) &&
                selectedPIDs.map(pid=> {
                    return (
                            <Card sx={boxStyle}>
                                <ProcessGraph pid={pid}/>
                            </Card>
                    )
                })
            }
        </>
    )
}