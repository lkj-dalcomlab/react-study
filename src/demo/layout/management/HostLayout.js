import {useDispatch} from "react-redux";
import {selectMenuItem} from "../../reducer/menuActor";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import config from "../../config/config";
import ContextListLayout from "./ContextListLayout";
import {Grid, IconButton, Tab, Tabs, tabsClasses} from "@mui/material";
import {TabContext, TabPanel} from "@mui/lab";
import StorageIcon from '@mui/icons-material/Storage';
import LabelIcon from '@mui/icons-material/Label';
import {GridCellParams} from "@mui/x-data-grid";
import ContextLayout from "./ContextLayout";
import {Close} from "@mui/icons-material";

export default function Host() {
    const dispatch = useDispatch();
    const params = useParams();

    const [contextList, setContextList] = useState([]);

    useEffect(()=> {
        dispatch(selectMenuItem({selectMenuId: params.name}));
    });

    const loadContextList = ()=> {
        fetch(config.serverAddr + "/contexts?host=" + params.name)
            .then(res => res.json())
            .then(result => {
                console.log(result.contexts);
                setContextList(result.contexts);
            },(error)=> {
                console.log(error);
            });
    };

    useEffect(()=> {
        loadContextList();
    }, []);

    const [value, setValue] = useState('0');

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const [tabCtxList, setTabCtxList] = useState([]);

    const deleteTab = (ctx, idx) => {
        setTabCtxList(tabCtxList.filter(item => item !== ctx));
        setValue((idx-1)+"");
    }
    const ContextIcon = ({ctx, idx}) => {
        return (
            <IconButton onClick={()=>{
                deleteTab(ctx, idx);
            }}>
                <Close/>
            </IconButton>
        )
    }
    const CtxLabel = ({ctx}) => {
        return (
            <>
                <LabelIcon sx={{mr: 0.5}}/>{ctx}
            </>
        )
    }

    const contextTabs =
        tabCtxList.map((ctx, idx)=> {
            const curIdx = idx+1;
                return (
                    <Tab label={<CtxLabel ctx={ctx}/>} value={curIdx + ""} icon={<ContextIcon ctx={ctx} idx={curIdx}/>} iconPosition="end" key={idx} wrapped/>
                )
            }
        );

    const contextPanels = tabCtxList.map((ctx, idx)=> {
            const curIdx = idx+1;
            return (
                <TabPanel value = {curIdx+""}>
                    <ContextLayout ctx={ctx}/>
                </TabPanel>
            )
        });

    const editContext = (params : GridCellParams) => {
        let find = tabCtxList.findIndex(ctx=> ctx === params.row.ContextPath);
        if (find === -1) {
            console.log("push tabCtx: " + params.row.ContextPath);
            setTabCtxList([...tabCtxList, params.row.ContextPath]);
            find = tabCtxList.length;
        }
        setValue((find+1)+"");
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TabContext value={value}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            selectionFollowsFocus
                            textColor="primary"
                            indicatorColor="primary"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            <Tab label={params.name} value="0" icon={<StorageIcon/>} iconPosition="start"/>
                            {contextTabs}
                        </Tabs>

                        <TabPanel value = "0">
                            <ContextListLayout contextList={contextList} editContext={editContext}/>
                        </TabPanel>
                        {contextPanels}
                    </TabContext>
                </Grid>
            </Grid>
        </>
    )
}