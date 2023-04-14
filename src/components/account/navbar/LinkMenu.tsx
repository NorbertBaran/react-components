import {Link, useTheme} from "@mui/material";
import {FC} from "react";

export interface ILinkMenu{
    label: string
    onClick: () => any
}

const LinkMenu: FC<ILinkMenu> = ({label, onClick}) => {
    const theme = useTheme()
    return(
        <Link
            onClick={() => onClick()}
            variant='subtitle1'
            fontWeight={500}
            color='inherit'
            underline='none'
            margin='10px'
            fontSize='17px'
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    color: theme.palette.primary.main
                }}}
        >
            {label}
        </Link>
    )
}

export default LinkMenu