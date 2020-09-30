import React from 'react'
import './../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../StateProvider';


function Sidebar() {
    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow title='Centro de Información COVID-19' Icon={LocalHospitalIcon}/>
            <SidebarRow title='Páginas' Icon={EmojiFlagsIcon}/>
            <SidebarRow title='Amigos' Icon={PeopleIcon}/>
            <SidebarRow title='Messenger' Icon={ChatIcon}/>
            <SidebarRow title='Tienda' Icon={StorefrontIcon}/>
            <SidebarRow title='Videos' Icon={VideoLibraryIcon}/>
            <SidebarRow title='Más' Icon={ExpandMoreOutlinedIcon}/>
        </div>
    )
}

export default Sidebar
