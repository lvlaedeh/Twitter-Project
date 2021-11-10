import { Drawer } from '@material-ui/core'
import React from 'react'
import { toggleDrawer, useLayoutDispatch, useLayoutState } from '../../conext/LayloutContext'
import RightSidbar from '../RightSidbar/RightSidbar'

const TwitterDrawer = () => {
    const {drawerOpen} = useLayoutState()
    const layoutDispatch = useLayoutDispatch()
    return (
        <div>
             <Drawer
            anchor={"right"}
            open={drawerOpen}
            onClose={()=>{toggleDrawer(layoutDispatch)}}
            >
                <RightSidbar/>
            </Drawer>
        </div>
    )
}

export default TwitterDrawer
