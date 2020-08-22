import React from 'react'
import {Drawer, Divider, Typography, makeStyles} from '@material-ui/core'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`
    }
}))

const drawer = () => {
    return (
        <Drawer>
            <div>
                <IconButton onClick = {handleDrawerClose}>

                </IconButton>
            </div>
        </Drawer>
    )
}

export default drawer;