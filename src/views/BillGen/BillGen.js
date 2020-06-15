import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { formatDate, formatDeliveryDate } from "../../assets/helpers/helpers"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "20px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    React.useEffect(() => {
        window.print();
    }, [])

    let { total, orderProduct, deliveryDate, deliveryTime, shippingName, shippingAddress, shippingPostcode, shippingCity, telePhone, orderId, invoiceName, invoiceAddress, invoicePostcode, invoiceCity } = props.history.location.state;

    const products = () => {

    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h3 style={{ textAlign: "left", color: "Black" }}>
                                    <b>Bezorgen: </b> {deliveryDate ? `${formatDeliveryDate(deliveryDate)}, ${deliveryTime}` : ""}
                                </h3>
                            </Grid>
                            <Grid item xs={5}>
                                <h3 style={{ paddingLeft: '20%', textAlign: "left", color: "Black" }}>Order ID: {orderId}
                                </h3>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h4 style={{ textAlign: "left" }}><b>Bezorgen bij:</b>
                                </h4>
                            </Grid>
                            <Grid item xs={5}>
                                <h4 style={{ paddingLeft: '20%', textAlign: "left" }}><b>Factuurgegevens:</b>
                                </h4>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ textAlign: "left" }}>{shippingName}
                                </h5>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ paddingLeft: '20%', textAlign: "left" }}>{invoiceName}
                                </h5>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ textAlign: "left" }}>{shippingAddress}
                                </h5>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ paddingLeft: '20%', textAlign: "left" }}>{invoiceAddress}
                                </h5>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ textAlign: "left" }}>{shippingPostcode}
                                </h5>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ paddingLeft: '20%', textAlign: "left" }}>{invoicePostcode}
                                </h5>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ textAlign: "left" }}>{shippingCity}
                                </h5>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ paddingLeft: '20%', textAlign: "left" }}>{invoiceCity}</h5>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h5 style={{ textAlign: "left" }}>{telePhone}
                                </h5>
                            </Grid>
                            <Grid item xs={5}>

                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>


                        <Grid container spacing={3} style={{ backgroundColor: "#E3E3E5" }}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={7}>
                                <h5 style={{ textAlign: "left", color: 'black' }}><b>Product</b></h5>
                            </Grid>
                            <Grid item xs={3}>
                                <h5 style={{ color: 'black' }}><b>Antal</b></h5>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        {orderProduct.map((element, i) => (
                            <>
                                <Grid container spacing={3}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <h6 style={{ fontWeight: "normal", textAlign: "left" }}>{element.name}</h6>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h6>{element.quantity}</h6>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </>

                        ))}
                        <Grid container spacing={3} style={{ backgroundColor: "#E3E3E5" }}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={6}>

                            </Grid>
                            <Grid item xs={3}>
                                <h4 style={{ color: 'black' }}><b>Total</b></h4>
                            </Grid>
                            <Grid item xs={2}>
                                <h4 style={{ fontWeight: "normal", textAlign: "left" }}>{total}</h4>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    );
}
