import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import ReactTable from 'react-table'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Table from "../../../components/Table/Table"
import { getAllWords } from "../../../api/api"
const useStyles = makeStyles(styles);
const subah = () => {
    console.log("Rim Jhim")
}
export default function ProductSection(props) {
    const classes = useStyles();
    const columns = [
        { id: 'id', label: 'Order ID', minWidth: 170 },
        { id: 'date', label: 'Order Date', minWidth: 170 },
        {
            id: 'status',
            label: 'Order Status',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'fname',
            label: 'First Name',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'lname',
            label: 'Last Name',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'address',
            label: 'Shipping Address',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'postCode',
            label: 'Shipping Post Code',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'city',
            label: 'Shipping City',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'tel',
            label: 'Telephone Number',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'orders',
            label: 'Product Ordered',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'qty',
            label: 'Quantity',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'price',
            label: 'Total Order Price',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'details',
            label: 'Delivery Details',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'note',
            label: 'Customer Note',
            minWidth: 170,
            align: 'right',
        },
    ];
    function createData(id, date, status, fname, lname, address, postCode, city, tel, orders, qty, price, details, note, ) {
        return {
            id,
            date,
            status,
            fname,
            lname,
            address,
            postCode,
            city,
            tel,
            orders,
            qty,
            price,
            details,
            note,
        };
    }

    let rows = [
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
        createData('1112', 'IN', "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN"),
    ]

    React.useEffect(() => {
        let params = {
            page: 1,
            status: props.filter,
            search: props.search
        }
        getAllWords(params).then((res) => {
            console.log(res.data);
        })
    }, [props.filter])
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <>
                        <Table columns={columns} rows={rows} />
                    </>
                </GridItem>
            </GridContainer>
        </div>
    );
}
