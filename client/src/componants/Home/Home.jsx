import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { makeStyles } from "@material-ui/core";
import MidSlide from "./MidSlide";
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';


const useStyles = makeStyles({
    component: {
        padding: 10,
        background: '#f2f2f2'

    }
})
const Home = () => {
    const classes = useStyles();
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <div className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products}
                    title='Discounts for You'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Suggested Items'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Top Selection'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Recommended Items'
                    timer={false}
                    multi={true}
                />
            </div>

        </>
            )
}
  export default Home;