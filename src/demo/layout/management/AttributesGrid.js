import {Button, Dialog, DialogContent, DialogTitle, ListItem, Typography} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import * as React from "react";
import {useState} from "react";

export default function AttributesGrid({attributes}) {
    const [attrOpen, setAttrOpen] = useState(false);
    const openAttributeGrid = () => {
        setAttrOpen(true);
    };

    const closeAttributeGrid = () => {
        setAttrOpen(false);
    }

    return (
        <>
            <Button variant="outlined" endIcon={<PageviewIcon sx={{mb: "3px"}}/>}
                    onClick={openAttributeGrid}>
                {attributes.length}
            </Button>
            <Dialog open={attrOpen} onClose={closeAttributeGrid}>
                <DialogTitle>
                    <div>
                        <Typography variant="h4">Attributes</Typography>
                    </div>
                </DialogTitle>
                <DialogContent>
                    {
                        attributes.map((attribute, idx) => {
                            return (
                                <ListItem key={idx}>
                                    <Typography>{idx+1 + ' - ' + attribute}</Typography>
                                </ListItem>
                            )
                        })
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}