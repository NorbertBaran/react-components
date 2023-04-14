import {Typography} from "@mui/material";
import {FC} from "react";

export interface IHeader {
    label: string
    accent?: string
    variant?: 'h6' | 'h5' | 'h4' | 'body1'
    align?: 'left' | 'center'
    sx?: object
}

const Header: FC<IHeader> = ({label, accent, variant = 'h6', align = 'left', sx = {}}) => {
    return (
        <Typography variant={variant} align={align} sx={sx}>
            <Typography variant={variant} display='inline' color='primary' fontWeight={500}>&lt; </Typography>
            {label}
            <Typography variant={variant} display='inline' color='primary' fontWeight={500}> {accent} /&gt;</Typography>
        </Typography>
    )
}

export default Header
