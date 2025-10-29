export function InputNlabel(props){

    return(
        <div className={props.rowCon}>
            <label className={props.lblCls} htmlFor={props.inpId}>{props.lblName}</label>
            <input id={props.inpId} placeholder={props.placeholder} type={props.inpType} className={props.inpCls} name={props.inpName} value={props.inpValue} onChange={props.inpValGetFun} 
            ref={props.onRef} onKeyDown={props.onKeyDown}/>
            <span className="hoverInpBottom"></span>
            {props.errorShow?<span className={props.errorSpanCls}>{props.errMsg}</span>:""}
        </div>
    )
}

/*
rowCon:"",
lblCls:"",
inpId:"",
lblName:"",
placeholder:"",
inpType:"",
inpCls:"",
inpName:"",
inpValue:"",
inpValGetFun:"",
errorShow:"",
errMsg:"",
errorSpanCls:""
*/ 