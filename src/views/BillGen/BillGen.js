import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    let { deliveryDate, shippingName, shippingAddress, shippingPostcode, shippingCity, telePhone, orderId, invoiceName, invoiceAddress, invoicePostcode, invoiceCity } =props;
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {deliveryDate ? deliveryDate : ""}
                            </Grid>
                            <Grid item xs={5}>
                                {orderId}
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {shippingName}
                            </Grid>
                            <Grid item xs={5}>
                                {invoiceName}
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {shippingAddress}
                            </Grid>
                            <Grid item xs={5}>
                                {invoiceAddress}
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {shippingPostcode}
                            </Grid>
                            <Grid item xs={5}>
                                {invoicePostcode}
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {shippingCity}
                            </Grid>
                            <Grid item xs={5}>
                                {invoiceCity}
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                {telePhone}
                            </Grid>
                            <Grid item xs={5}>

                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>


                        <Grid container spacing={3} style={{ backgroundColor: "grey" }}>

                            <Grid item xs={8}>
                                <h4 style={{ fontWeight: "bolder", textAlign: "left" }}>Product</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4 style={{ fontWeight: "bolder" }}>Quantity</h4>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        {
                            [1, 2].map((element) => (
                                <>

                                    <Grid container spacing={3}>

                                        <Grid item xs={8}>
                                            <h6 style={{ fontWeight: "normal", textAlign: "left" }}>{element}</h6>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <h6>{element}</h6>
                                        </Grid>
                                        <Grid item xs={1}>
                                        </Grid>
                                    </Grid>
                                </>

                            ))
                        }
                        <Grid container spacing={3} style={{ backgroundColor: "grey" }}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={7}>

                            </Grid>
                            <Grid item xs={3}>
                                <h4 style={{ fontWeight: "bolder" }}>Total</h4>
                            </Grid>
                            <Grid item xs={1}>
                                <h4 style={{ fontWeight: "normal" }}>1</h4>
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
