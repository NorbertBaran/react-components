import {AppBar, Box, Container, Toolbar, useScrollTrigger,} from "@mui/material";
import {cloneElement, FC, ReactElement} from "react";
import LinkMenu, {ILinkMenu} from "./LinkMenu";
import Header, {IHeader} from "../Header";
import AvatarMenu, {IAvatarMenu} from "./AvatarMenu";

interface IElevationScroll {
    blank: boolean
    children: ReactElement
}

const ElevationScroll: FC<IElevationScroll> = ({blank, children}) => {
    const trigger = blank ? useScrollTrigger() : true;
    return cloneElement(children, {
        elevation: 0,
        style: trigger ? {boxShadow: '0px 1px 1px 0px #ddd'} : {}
    });
}

interface INavbar {
    title: IHeader
    links?: ILinkMenu[]
    avatar?: IAvatarMenu
    blank?: boolean
}

const Navbar: FC<INavbar> = ({title, links= [], avatar, blank = false}) => {
    return (
        <>
            <ElevationScroll blank={blank}>
                <AppBar color='secondary'>
                    <Container maxWidth='lg'>
                        <Toolbar sx={{padding: '15px'}}>
                            <Header label={title.label} accent={title.accent}/>
                            <Box sx={{flexGrow: 1}}/>
                            {links.map(link => <LinkMenu label={link.label} onClick={() => link.onClick()}/>)}
                            {avatar ? <AvatarMenu username={avatar.username} src={avatar.src} items={avatar.items}/> : <></>}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar sx={{padding: '15px'}}/>
        </>
    )
}

export default Navbar