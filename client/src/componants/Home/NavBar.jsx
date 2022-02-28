import { navData } from "../../constants/Data";
import { makeStyles } from "@material-ui/styles";
const usestyle = makeStyles({
    componants: {
        display: 'flex',
        margin: '55px 130px 0 100px',
        justifyContent: 'space-around'
    },
    containor: {
        textAlign: 'center',
        padding: '12px 8px',
        lineHeight: 0
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
})
const NavBar = () => {
    const classes = usestyle();
    return (
        <div className={classes.componants}>
            {
                navData.map(data => {
                    return (
                        <div className={classes.containor}>
                            <img className={classes.image} src={data.url} alt="NavData" />
                            <p>{data.text} </p>
                        </div>)
                })
            }
        </div>
    )
}
export default NavBar;