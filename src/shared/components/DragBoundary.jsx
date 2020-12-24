import tw, {styled} from "twin.macro";

const DragBoundary = styled.main` 
    background-color:#d4d4d4;
    ${tw`
    fixed h-screen
    `}
    .spy{
        color:whitesmoke;
        mix-blend-mode: exclusion;
    }
`

export default DragBoundary;
