import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUserList } from "../../redux/Action/userSignin";
import useStyle from "./style";
import AddUser from "../../Component/formUser/AddUser";
import { Pagination } from "@material-ui/lab";
import {
  Button,
  Fade,
  Modal,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Container,
} from "@material-ui/core";
import { useCallback } from "react";
import { createAction } from "../../redux/Action/createAction";
import { actionType } from "../../redux/Action/type";

export default function TalbUser(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const page = useSelector((state) => {
    return state.userReducer.page;
  });
  useEffect(() => {
    dispatch(fetchUserList(page));
  }, [dispatch]);

  const userList = useSelector((state) => {
    return state.userReducer.userList;
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = useCallback((e,value)=>{
    dispatch(createAction(actionType.SET_PAGE, value));
    dispatch(fetchUserList(value));
    window.scroll({top: 0, behavior: "smooths"})
  })
  return (
    <Fragment>
      <div className={classes.fragment}>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="primary"
          className="mt-4 mb-4"
          type="button"
        >
          Add User
        </Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          // BackdropComponent={Backdrop}
          open={open}
          onClose={handleClose}
        >
          <Fade in={open}>
            <Container className={classes.paper}>
              <AddUser />
            </Container>
          </Fade>
        </Modal>
      </div>
      <TableContainer className={classes.fragment} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Họ Tên </TableCell>
              <TableCell align="center">Tài Khoản</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Số ĐT</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="center">
                    {item.hoTen}
                  </TableCell>
                  <TableCell align="center">{item.taiKhoan}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.soDt}</TableCell>
                  <TableCell align="center">
                    <Button
                      className="mr-4"
                      componen="h4"
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={userList?.totalPages} className={classes.pagination} onChange={handleChange} defaultPage={page} />
    </Fragment>
  );
}
