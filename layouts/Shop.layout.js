import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Header from 'layouts/components/Header'
import Footer from 'layouts/components/Footer'

const useStyles = makeStyles((theme) => ({
    main: {
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            minHeight: 'calc(100vh - 164px)'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: 'calc(100vh - 116px)'
        },
    }
}))

export default function ShopLayout({ children }) {
    const classes = useStyles()

    return (
        <>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}