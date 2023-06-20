import styled, {StyledComponent} from "styled-components";
import ButtonProps from "./Button";

const variantColors = {
    primary: "#0079FF",
    secondary: "#FFC93C",
}

export const StyledButton: StyledComponent = styled.button<typeof ButtonProps>`
    padding: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem;
    background-color: ${ (props) => variantColors[props.variant] };
`
