import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import ContainerTable from "./ContainerTable";
import Footer from "./footer";
function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      {/*  <!-- Main Content --> */}
      <div id="content">
        {/*  <!-- Topbar --> */}
        <TopBar />
        {/*   <!-- End of Topbar --> */}
        {/* <!-- Content Row Top --> */}
        <ContentRowTop />
        {/* <!--End Content Row Top--> */}
      </div>
      {/*  <!-- End of MainContent --> */}
      <ContainerTable />
      <Footer />
    </div>
  );
}
export default ContentWrapper;
