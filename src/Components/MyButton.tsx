type IMyButton= {
    label: string,
    disable?: boolean,
    children?: React.ReactNode,
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MyButton : React.FC<IMyButton> = (props) => {
    const { label, children, disable, handleClick } = props;
    return(
        <div className="container my-button mb-3 text-center">
            <button type="submit" className="btn btn-light col-md-6 col-sm-12" onClick={handleClick} disabled={disable}>
                    {children}
                    {" " + label}
            </button>
        </div>
    )
}
export default MyButton;