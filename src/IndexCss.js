import { createGlobalStyle} from "styled-components";

const IndexCss = createGlobalStyle`
  :root {
    /* scroll thumb and track */
    --scrollbarBG: rgba(255,255,255, 0.5);
    --thumbBG: #333333;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  *::-webkit-scrollbar {
    width: 11px;
  }
  *::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid white ;
  }

  html,#root,body {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    font-family: "Inter", -apple-system, sans-serif;
  }
  body {
    overflow-y:scroll;
  }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
`;

export default IndexCss;