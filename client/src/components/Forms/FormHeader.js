import React from "react"

export const FormHeader = (props) => {
    return (
        <h5 id="form-header" { ...props }>{ props.children }</h5>
    )
}
