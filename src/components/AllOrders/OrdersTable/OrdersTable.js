import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const OrdersTable = ({ filteredOrders, allOrderStatus, onClick }) => {
  if (filteredOrders().length < 1) {
    return <div>Пока ничего нет</div>;
  }
  return (
    <TableContainer component={Paper} className="table-height">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header-row">
            <TableCell>Книга</TableCell>
            <TableCell align="center">Читатель</TableCell>
            <TableCell align="center">Состояние заказа</TableCell>
            <TableCell align="center">Подтверждение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders().map((order, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {order.book.title}
              </TableCell>
              <TableCell align="center">{order.user.login}</TableCell>
              <TableCell align="center">
                {allOrderStatus(order.status)}
              </TableCell>
              <TableCell align="center">
                <Button
                  disabled={order.status === 2}
                  onClick={onClick(order.status, order.id)}
                  variant="contained"
                  color="primary"
                >
                  Подтвердить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OrdersTable;
