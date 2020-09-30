import React from 'react'
import './../css/SidebarRow.css'
import { Avatar } from '@material-ui/core'

function SidebarRow({title, Icon, src}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
