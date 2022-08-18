import React from "react";

type IErrorText = {
    error: string
}

const ErrorText : React.FC<IErrorText> = (props) => {

    if(props.error === '') return null;

    return(
        <small className="text-danger">
            {props.error}
        </small>
    )
}
export default ErrorText;