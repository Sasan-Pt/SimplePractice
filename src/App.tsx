import React from 'react';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Body from "./components/body";
import Footer from "./components/Footer";
import {HeatMapOutlined,ControlOutlined ,ArrowUpOutlined} from "@ant-design/icons"




function App() {
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
      <Router>
          <div className="grid grid-cols-custom ">
              <div className="fixed text-zinc-500 left-90p top-28"><ArrowUpOutlined style={{fontSize: '35px'}} onClick={scrollToTop}/></div>
              <div className="flex fixed  text-zinc-500 left-90p top-80p cRes:flex-col cRes:p-0">
                  <HeatMapOutlined style={{fontSize: '35px'}}/>
                  <div className="flex pl-4 cRes:p-0 cRes:pt-4">
                  <ControlOutlined style={{fontSize: '35px'}}/>
                  </div>
              </div>
              <Header/>
              <Body/>
        <Footer/>


    </div>
      </Router>

  );
}

export default App;
