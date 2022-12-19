import Button from '@mui/material/Button';

const GlobalButton = (props) => {
    return (
        <>
            <Button variant={props.variant}>{props.text}</Button>
        </>
    )
}

export default GlobalButton;