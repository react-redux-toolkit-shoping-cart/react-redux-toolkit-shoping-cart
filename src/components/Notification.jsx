import React from 'react'
import Alert from "@mui/material/Alert";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Notification = ({severity, message}) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispactch = useDispatch()
  const handleClose = () => {
    dispactch(uiActions.showNotification({open: false}));
  }
  if(notification && notification.open) {
    return <Alert onClose={handleClose} severity={notification?.severity}>{notification?.message}</Alert>;
  }
  return null;
}

export default Notification