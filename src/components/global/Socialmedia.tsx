import {FC} from "react";
import {GitHub, LinkedIn} from "@mui/icons-material";
import {theme} from "../constance";
import {Box} from "@mui/material";

const Socialmedia = () => {
    return(
        <Box
            display='flex'
            justifyContent='center'
            gap={2}
            marginY={7}
        >
            <LinkedIn
                onClick={() => console.log('linkedin')}
                fontSize='large'
                sx={{color: theme.palette.secondary.contrastText}}/>
            <GitHub
                onClick={() => console.log('github')}
                fontSize='large'
                sx={{color: theme.palette.secondary.contrastText}}/>
        </Box>
    )
}

export default Socialmedia