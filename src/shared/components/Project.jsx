import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";

const ProjectCard = styled.div`

    margin: 0 10.8vh;
    ${tw`
        h-full 
        py-8 
        px-10  
        align-top
        max-w-screen-md
        border-t
        border-gray-800
        inline-flex
        flex-col
        justify-start
        items-center
    `}
`;
const Header = styled.div`
    
    max-width: 58vh;
    margin-top:1.9vh;
    whitespace-nowrap;
    
    ${tw`
       absolute
       top-0 
       w-max
       inline-block
    `}
`;

const Title = styled.h3`
    mix-blend-mode: exclusion;
    font-size: 6vh;
    font-family: 'Francois One', sans-serif;
    color:#3c3324;
    ${tw`
      uppercase
      break-words
      leading-none
    `}
    
`;
const ImageContent = styled.div`
    height: 58.33333vh;
    width: 40.79vh;
    overflow: hidden;

    border-right-width: 2px;
	border-bottom-width: 2px;
	border-left-width: 2px;
    ${tw`mt-5 border-gray-800`}
`;

const ImageCard = styled.div`
    height:100%;
    width:100%;
    background: 15%/cover no-repeat transparent;
    background-image: ${props=> `url(${props.image})`};
    mix-blend-mode: color;
`;
const BottomContent = styled.div`
    max-width:40.79vh;
    ${tw`text-center absolute bottom-0 mb-3 md:mb-14 lg:mb-14`}
    
    >p{
        mix-blend-mode: multiply;
        ${tw`text-center text-black`}
    }
    .description{
        
        ${tw`font-semibold md:text-lg`}
        @media (max-height:820px){
            display:none;
        }
        @media(max-width: 374px){
            background-color: white;
            display:none;
        }
        line-height:18px !important;
    }
`;

//!-------------------------------------------------------------
const Project = ({ title, image, description, type, github, url }) => {
  let pictureLink = url || github;

  return (
    <Fragment>
      <ProjectCard>
        <a 
            href={pictureLink}
            tw="inline-flex flex-col text-center justify-center items-center"
        >
          <Header>
            <Title>{title}</Title>
          </Header>
          <ImageContent>
            <ImageCard image={image}/>
          </ImageContent>
        </a>
        <BottomContent>
            <p className="description">
                 {description}
            </p>
            <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="10px"
                height="10px"
                tw="mx-auto my-2"
            >
                <path
                d="M21.909 14.776a5.98 5.98 0 00-.125-.497l8.773-5.065-1.311-2.271-8.74 5.046a6.117 6.117 0 00-.359-.37l5.068-8.778-2.272-1.31-5.046 8.74a5.97 5.97 0 00-.498-.14V0h-2.623v10.091a5.98 5.98 0 00-.497.125L9.214 1.443 6.943 2.754l5.046 8.74a6.117 6.117 0 00-.37.359L2.841 6.786l-1.31 2.271 8.74 5.046a5.97 5.97 0 00-.14.498H0v2.623h10.091c.035.168.077.334.125.497l-8.773 5.064 1.311 2.272 8.74-5.045c.115.128.234.25.359.369l-5.067 8.777 2.271 1.312 5.046-8.742c.163.054.33.102.498.142V32h2.623V21.909a5.98 5.98 0 00.497-.125l5.064 8.773 2.272-1.311-5.045-8.74c.128-.115.25-.234.369-.359l8.777 5.068 1.312-2.272-8.742-5.046a5.97 5.97 0 00.142-.498H32v-2.623H21.909z"
                fill="#E51B0A"
                ></path>
            </svg>
            <p tw="font-medium underline">
                 <a href={github}>Source Code</a>
                {url && 
                    <a href={url} tw="ml-5">
                        Visit Site
                    </a>
                }
            </p>
        </BottomContent>
      </ProjectCard>
    </Fragment>
  );
};

export default Project;
