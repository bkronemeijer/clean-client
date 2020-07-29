import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../../store/appState/actions";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      style={{opacity: 1}}
      show={showMessage}
      //@ts-ignore
      variant={message.variant}
      //@ts-ignore
      dismissable={message.dismissable}
      //@ts-ignore
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
      >
      {
        // @ts-ignore
        message.text
      }
    </Alert>
  );
}
