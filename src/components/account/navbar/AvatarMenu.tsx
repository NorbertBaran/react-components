import {
    Avatar,
    Box,
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Typography,
    useTheme
} from "@mui/material";
import {KeyboardVoice, Logout, Person} from "@mui/icons-material";
import {FC, useState} from "react";

interface IItem{
    icon: any
    label: string
    onClick: () => any
}

export interface IAvatarMenu{
    username: string
    src: string | null
    items: IItem[]
}

const AvatarMenu: FC<IAvatarMenu> = ({username, src, items = []}) => {
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const cursor = items && items.length !== 0 ? 'pointer' : 'none'

    return (
        <>
            <Avatar src={src ? src : ''} onClick={handleClick} sx={{cursor: cursor, marginLeft: '15px', marginBottom: '5px', width: 43, height: 43}}/>
            {items && items.length !== 0 && <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuList sx={{width: 220}}>
                    <Box paddingX={2} paddingBottom={1}>
                        <Typography variant='subtitle2'>
                            Sign in as:
                        </Typography>
                        <Typography color={theme.palette.secondary.contrastText}>
                            {username}
                        </Typography>
                    </Box>
                    <Divider />
                    {items.map(item =>
                        <MenuItem onClick={() => item.onClick()}>
                            <ListItemIcon sx={{padding: '8px'}}>
                                {<item.icon/>}
                            </ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </MenuItem>
                    )}
                </MenuList>
            </Menu>}
        </>
    )
}

export default AvatarMenu