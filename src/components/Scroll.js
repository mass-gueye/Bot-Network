const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '0.5px solid black', height: '100vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll
