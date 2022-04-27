import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// redux action creator used by useDispatch function hooks
export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        severity: "warning",
        message: "Posting data",
      })
    );
    const response = await fetch(
      "https://react-cart-ac810-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    const data = await response.json();
    dispatch(
      uiActions.showNotification({
        open: true,
        severity: "success",
        message: "Data posted successfully",
      })
    );
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        severity: "warning",
        message: "Fetching data",
      })
    );
      const response = await fetch(
      "https://react-cart-ac810-default-rtdb.firebaseio.com/cart.json",
      {
        method: "GET"
      }
    );
    const data = await response.json();
    if(data) {
      dispatch(cartActions.loadCart(data));
    }
    dispatch(
      uiActions.showNotification({
        open: true,
        severity: "success",
        message: "Data fetched successfully",
      })
    );
  }
}
