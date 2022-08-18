type IMyButton= {
    label: string,
    children?: React.ReactNode,
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleClass?: string
}

const MyButton : React.FC<IMyButton> = (props) => {
    const { label, children, handleClick, handleClass} = props;
    return(
        <div className="container my-button mb-3 text-center">
            <button type="submit" className={handleClass} onClick={handleClick} >
                    {children}
                    {" " + label}
            </button>
        </div>
    )
}
export default MyButton;