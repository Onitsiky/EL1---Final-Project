const MyButton : React.FC<any> = (props) => {
    const { label, children } = props;
    return(
        <div className="container my-button mb-3 text-center">
            <button type="submit" className="btn btn-light col-md-6">
                    {children}
                    {" " + label}
            </button>
        </div>
    )
}
export default MyButton;