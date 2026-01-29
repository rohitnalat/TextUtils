import React from 'react'


function Alert(props) {
    const capitalize=(word)=>{
        let str= word;
        word=str.charAt(0).toUpperCase()+str.slice(1);
        return word;
    }
  return (
    props.alert && <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert
