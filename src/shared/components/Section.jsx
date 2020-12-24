import tw, {styled} from "twin.macro";

const Section= styled.section`

    margin-top: 8.33333vh;
    min-width: 80vh;
    color: #201d1e;
    ${tw`
    relative
    w-max
    text-center
    flex
    flex-col
    justify-center
    items-center
    px-5
    h-5/6
    overflow-hidden
    `}
`;

export default Section;