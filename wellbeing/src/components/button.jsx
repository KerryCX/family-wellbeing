
export const Button = ({ value, buttonFunction }) => {
    //resets all fields
        return(
            <button onClick = { () => {
                buttonFunction()
            }}>{value}</button>
        )
    }


