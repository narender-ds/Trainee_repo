import * as React from "react";
import BannerSlide from "./bannerSlide";
import Footer from "./footer";
import Header from "./header";


type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
};

const PageLayout = ({ title, _site, global, children }: Props) => {
  return (
    <>
      <Header
        HeaderLogo={global.c_header.headerLogo}
        HeaderLabels={global.c_navigationLinks}
      />
      {/* <BannerSlide BackgroundImage={global?.c_bannerPhoto} title={global.c_titleForBanner} /> */}
      {children}
      <Footer
        FooterData={global.c_footer}
             />
    </>
  );
};

export default PageLayout;
