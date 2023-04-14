import {FC, ReactNode} from "react";
import {Box} from "@mui/material";

interface IPaper {
    children?: ReactNode
}

const Paper: FC<IPaper> = ({children}) => {
    return (
        <Box margin={6} boxShadow='0px 0px 5px 0px #ddd' border='1px solid' borderColor='#c0c0c0' borderRadius={1}
             padding={5} display='flex' flexDirection='column' gap={2}>
            {children}
        </Box>
    )
}

export default Paper