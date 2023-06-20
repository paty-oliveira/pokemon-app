import { StyledButton } from "./styled-components"

export type ButtonProps = {
    label: string;
    variant: string;
}

export default function Button({ label, variant }:ButtonProps) {
    return (
        <div>
            <StyledButton variant={variant}>{label}</StyledButton>
        </div>
    )
}