import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmazonMain from "../../screen/amazon/amazon";
import ArgosMain from "../../screen/argos/argos";
import Dashboard from "../../screen/dashborad";
import MainPageOFGridWebsite from "../../screen/Grid website/main";
import Happy from "../../screen/happy/happy";
import W3schools from "../../screen/w3schools/w3schools";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/amazon" element={<AmazonMain />}></Route>
        <Route path="/argos" element={<ArgosMain />}></Route>
        <Route path="/grid" element={<MainPageOFGridWebsite />}></Route>
        <Route path="/happy" element={<Happy />}></Route>
        <Route path="/w3schools" element={<W3schools />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
