import tw, {styled}from "twin.macro";

const Divider= styled.div`

    color: #d4d4d4;
    margin-top: 8.33333vh;
    width:30vw;
    ${tw`
        relative
        bg-black
        uppercase
        text-left
        h-5/6
        min-w-max
        inline-flex
        items-end
        overflow-hidden
    `};

    h2{
       font-family: 'Francois One', sans-serif;
       ${tw`
        break-words
        pr-28
        leading-none
        text-9xl
       `}
       @media only screen and (max-width:600px){
            font-size:23vw;
       }
    }

`;

export default Divider;
