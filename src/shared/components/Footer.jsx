import tw, {styled} from "twin.macro";

const Footer =styled.footer`
    
    height: 7vh;
    font-family: 'Francois One', sans-serif;
    ${tw`fixed
    bottom-0
    z-40
    w-full
    text-center
    flex
    items-end
    justify-center
    text-lg
    md:text-xl
    overflow-hidden
    `}

    .spy{
        color:whitesmoke;
        mix-blend-mode: exclusion;
    }
    >div{
        
        ${tw`
            px-10
            inline-flex
            space-x-24 
            max-w-screen-lg 
            mx-auto 
            justify-center
        `}
         @media(max-width: 640px) {
            ${tw`space-x-12 `}
        }
    }
`;
export default Footer;