import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import ContainerTable from "./ContainerTable";
import Footer from "./footer";
function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />

        <ContentRowTop />
      </div>

      <ContainerTable />
      <Footer />
    </div>
  );
}
export default ContentWrapper;
