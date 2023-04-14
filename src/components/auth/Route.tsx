import {Link} from "@mui/material";
import {FC, ReactNode} from "react";

interface IRoute{
    display?: string
    fontWeight?: number
    onClick: () => any
    children: ReactNode
}

const Route: FC<IRoute> = ({display = 'inline', fontWeight = 600, onClick, children}) => {
    return(
        <Link onClick={()=>onClick()} display={display} color='primary' fontWeight={fontWeight}
               sx={{textDecoration: 'none', cursor: 'pointer'}}>{children}</Link>
    )
}

export default Route
