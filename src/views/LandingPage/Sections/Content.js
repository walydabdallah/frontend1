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
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { getAllWords } from "../../../api/api"
import Filters from "../../../components/Filters/Filters"
const useStyles = makeStyles(styles);
export default function Content(props) {
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [filter, setFilter] = React.useState("any");


    const columns = [
        {
            Header: props => <span style={{ color: 'black' }}>Order ID</span>,
            accessor: 'id',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'date',
            Header: props => <span style={{ color: 'black' }}>Order Date</span>,
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'status',
            Header: props => <span style={{ color: 'black' }}>Order Status</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'fname',
            Header: props => <span style={{ color: 'black' }}>First Name</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'lname',
            Header: props => <span style={{ color: 'black' }}>Order ID</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'address',
            Header: props => <span style={{ color: 'black' }}>Shipping Address</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'postCode',
            Header: props => <span style={{ color: 'black' }}>Shipping Post Code</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'city',
            Header: props => <span style={{ color: 'black' }}>Shipping City</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'tel',
            Header: props => <span style={{ color: 'black' }}>Order ID</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'orders',
            Header: props => <span style={{ color: 'black' }}>Product Ordered</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'qty',
            Header: props => <span style={{ color: 'black' }}>Quantity</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'price',
            Header: props => <span style={{ color: 'black' }}>Total Order Price</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'details',
            Header: props => <span style={{ color: 'black' }}>Delivery Details</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            accessor: 'note',
            Header: props => <span style={{ color: 'black' }}>Customer Note</span>,
            minWidth: 170,
            align: 'right',
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
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
    const classes = useStyles();
    const fetch = (state) => {
        setLoading(true)
        let params = {
            page: state && state.page ? +state.page + 1 : 1,
            status: filter ? filter : "any",
            search: props.search ? props.search : ""
        }
        getAllWords(params).then((res) => {
            let data = (res.data.data);
            let rows = data && data.length ?
                data.map(element => (
                    createData(
                        element.orderId,
                        element.orderDate,
                        element.orderStatus,
                        element.firstname,
                        element.lastname,
                        element.shipping.address1,
                        element.shipping.postCode,
                        element.shipping.city,
                        element.telephone,
                        element.orderId,
                        element.quantity,
                        element.totalOrderPrice,
                        element.orderId,
                        element.customerNote,
                    )
                ))
                : []
            setRows(rows)
            setPage(res.data.pages)
            setLoading(false)
        })
    }
    const filterBy = (value) => {
        setFilter(value)
    }
    React.memo(() => filter, [filter])
    React.useEffect(() => {
        fetch()
    }, [filter])

    return (
        <div className={classes.section}>
            <GridContainer justify="left">

                <Filters filterBy={filterBy} />

                <GridItem xs={12} sm={12} md={12}>

                    <ReactTable
                        manual
                        // ref={(refReactTable) => { this.refReactTable = refReactTable; }}
                        data={rows}
                        pages={page ? page : 1}
                        onFetchData={fetch}
                        showPageSizeOptions={false}
                        loading={loading}
                        sortable={false}
                        filterable={false}
                        overflow={"unset"}
                        columns={columns}
                        defaultPageSize={10}
                        showPagination={true}
                        showPaginationBottom
                        showPaginationTop={false}
                        className="-striped -highlight"
                    />

                </GridItem>
            </GridContainer>
        </div>
    );
}
