import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import Checkbox from '@mui/material/Checkbox';
import { ListItem } from "@mui/material";
export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const [checked, setChecked] = React.useState([true, false]);
    let ItemsList = [
        {
            id: 1,
            Icon: "send_and_archive",
            ListItemTexts: "Sentmail",
            subInbox: [{
                Icon: "star_border",
                ListItemTexts: "borderedstar",
                checked: checked[1]
            }]


        },
        {
            id: 2,
            Icon: "drafts",
            ListItemTexts: "Drafts"
        },
        {
            id: 3,
            Icon: "move_to_inbox",
            ListItemTexts: "Inbox",
            subInbox: [{
                Icon: "star",
                ListItemTexts: "dstar",
                checked: checked[1]
            }, {
                Icon: "star",
                ListItemTexts: "dstar",
                checked: checked[1]
            }]
        }
    ];
    const handleClick = (value) => {
        // if (value.ListItemText === "Inbox") {
        setOpen(!open);
        // }
    };
    const DropdownIcon = ({ value }) => {
        console.log("value", value);

        // if (value.ListItemText === "Inbox") {
        return open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>;
        // } else {
        //     return null;
        // }
        // return <></>
    };
    const handleToggle = (value3, event) => () => {
        const currentIndex = checked.indexOf(value3);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value3);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        // setChecked(newChecked);
        setChecked([event.target.checked, event.target.checked])
    };
    const handleChangeChild = (event, index) => {
        if (checked[0]) {

            setChecked([event.target.checked, checked[1]]);
        } else {
            setChecked([checked[0], event.target.checked]);

        }
    };

    // let handle1=(event)=>{if (checked[0]) {event.target.checked, checked[1]}
    //   else {
    //     [checked[0], event.target.checked]
    //  }}
    //  let handle2=(event)=> {

    // }

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
        ><>
                {ItemsList.map((value) => {
                    const labelId = `checkbox-list-label-${value.id}`
                    return (
                        <>
                            <ListItem
                                key={value}
                                // secondaryAction={
                                // <IconButton edge="end" aria-label="comments">
                                //     <CommentIcon />
                                // </IconButton>
                                // }
                                disablePadding>

                                <ListItemButton role={undefined} onClick={() => handleClick(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            // checked={checked.indexOf(value.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            checked={checked[0] && checked[1]}
                                            indeterminate={checked[0] !== checked[1]}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            onChange={handleToggle(value.id)}
                                        />
                                        {/* <Icon>{value?.Icon}</Icon> */}

                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={value.ListItemTexts} />
                                    <DropdownIcon value={value}></DropdownIcon>
                                </ListItemButton>
                            </ListItem>
                            {value?.subInbox?.map((value1, index) => {
                                return (
                                    <Collapse key={value1} in={open} timeout="auto" unmountOnExit>
                                        {console.log("value", value1)}
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <Icon>{value1?.Icon}</Icon>
                                                    <Checkbox checked={value1.checked} onChange={handleChangeChild} />
                                                </ListItemIcon>
                                                <ListItemText primary={value1?.ListItemTexts} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>)
                            })}
                        </>);
                })}

            </>
        </List>
    );
}