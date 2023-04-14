import { Box, Toolbar, Typography } from "@mui/material";
import {FC} from "react";
import { theme } from "../constance";
import Header, {IHeader} from "./Header";

interface IFooter{
    title?: IHeader
    content?: string
}

const Footer: FC<IFooter> = ({title, content}) => {
    return(
        <Box boxShadow='0px -1px 1px 0px #ddd' display='flex' justifyContent='center'>
            <Toolbar sx={{padding: '15px'}}>
                <Typography color={theme.palette.secondary.contrastText}>
                    {title && <Header variant='body1' label={title.label} accent={title.accent} sx={{display: 'inline'}}/>}
                    {content}
                </Typography>
            </Toolbar>
        </Box>
    )
}

export default Footer