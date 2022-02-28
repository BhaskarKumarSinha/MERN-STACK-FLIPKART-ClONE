import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Search from './Search';
import CustomButtons from './CustomButtons';

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },

    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    logo: {
        width: 75
    },
    explore: {
        display: 'flex'
    },
    logoPart: {
        marginLeft: '11.5%',
        lineHeight: 0,
        textDecoration:'none',
        color:"#fff"
    },
    subHeading: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    plus: {
        color: '#ffe500',
        fontWeight: 500,
        marginRight: '2px'
    }


});

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar position="fixed" className={classes.header}>
            <Toolbar>
                <Link to='/' className={classes.logoPart}>
                    <img src={logoURL} alt="logoURL" className={classes.logo} />
                    <div className={classes.explore}>
                        <Typography className={classes.subHeading}> Explore <span className={classes.plus}>Plus</span></Typography>
                        <img src={subURL} alt="subURL" className={classes.subURL} />
                    </div>
                </Link>
                <Search />
                <CustomButtons />


            </Toolbar>
        </AppBar>
    )
}
export default Header;