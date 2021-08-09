// UI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'

import { IoMdCart } from 'react-icons/io'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    button: {
        marginRight: theme.spacing(2)
    },
    badge: {
        marginRight: theme.spacing(1)
    },
    icon: {
        fontSize: 30
    },
    cartIcon: {
        fontSize: 24
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))

const Header = () => {

    const classes = useStyles();

    const cart = (
        <Badge badgeContent={3} className={classes.badge} color="secondary">
            <IoMdCart className={classes.cartIcon} />
        </Badge>
    )

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <a to='/'>
                        فروشگاه
                    </a>
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <a to='/admin/login'><Button color="inherit" className={classes.button}>مدیریت</Button></a>
                    <a to='/shop/cart'>
                        <Button color="inherit">
                            {cart}
                            سبد خرید
                        </Button>
                    </a>
                </div>
                <div className={classes.sectionMobile}>
                    <a to='/admin/login'><Button color="inherit" className={classes.button}>مدیریت</Button></a>
                    <a to='/shop/cart'>
                        <Button color="inherit">
                            {cart}
                        </Button>
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header