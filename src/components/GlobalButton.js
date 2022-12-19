import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';

const GlobalButton = (props) => {
    return (
        <>
            <Button variant={props.variant}>{props.text}</Button>
        </>
    )
}

export default GlobalButton;