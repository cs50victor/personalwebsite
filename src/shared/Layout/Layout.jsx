import React, { useRef, useEffect, Fragment } from "react";
import "twin.macro";
import {
  Header,
  Navbar,
  DragBoundary,
  Horizontal
} from "../components";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import name from "../../Assets/name.svg";

gsap.registerPlugin(ScrollToPlugin,Draggable ,ScrollTrigger);

const Layout = ({ children}) => {
  const horizontalWidthRef = useRef();
  const dragBoundRef = useRef();

  //resize hook
  useEffect(() => {
    
    const handleResize =()=>{
      if (horizontalWidthRef.current && dragBoundRef.current) {
        let w = horizontalWidthRef.current.clientWidth;
        //setting left value for dragBound and horizontal reverse scroll
        horizontalWidthRef.current.style.left = w + "px";
        dragBoundRef.current.style.left = (w * -1).toString() + "px";

        //width of dragBoundary (main) and height of body
        dragBoundRef.current.style.width = document.body.style.height =
          (w).toString() + "px";
      }
    }
    const timer = setTimeout(() => {
      handleResize();
    }, 3300);
    const timer1 = setTimeout(() => {
      handleResize();
    }, 5300);
    const timer2 = setTimeout(() => {
      handleResize();
    }, 7300);
    const timer3 = setTimeout(() => {
      handleResize();
    }, 10000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    //if (window.innerWidth < 1000){
    //  Draggable.create(horizontalWidthRef.current, {
    //    bounds: dragBoundRef.current,
    //    allowNativeTouchScrolling:true,
    //    type: "x",
    //  });
    //}
    

    const scroller = () => {
      let pixels =
        document.body.scrollTop || document.documentElement.scrollTop;
      gsap.to(horizontalWidthRef.current, 1, { x: -1.3 * pixels });
    };

    document.addEventListener("scroll", scroller);

    return () => {
      document.removeEventListener("scroll", scroller);
    };
  }, []);

  return (
    <Fragment>
      <Header>
        <Navbar>
          <a href="./" tw="font-bold mx-auto">
            <img src={name} alt="..." width="160px" tw="mx-auto"/>
          </a>
        </Navbar>
        <hr tw="border border-black w-11/12 mx-auto" />
      </Header>
      <DragBoundary ref={dragBoundRef}>
        <Horizontal 
          ref={horizontalWidthRef}>
          {children}
        </Horizontal>
      </DragBoundary>
    </Fragment>
  );
};

export default Layout;
