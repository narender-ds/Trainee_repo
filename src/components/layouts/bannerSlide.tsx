
import * as React from "react";
import bannerImage from "../images/app-bg.jpg";
import { Link } from "@yext/pages/components";
import { bannerText } from "../constants";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};
type bannerData = {
  title: any;
  // c_bannerSlogan: any;
  BackgroundImage: any;
  c_cTAForBanner:any;
  c_bannerSlogan:any;
  // c_cTAForBanner: any;
  // // text: any;
  // template: any;
};
// type Banner = {
//   name?: string;
//   address?: Address;
//   openTime?: string;
//   children?: React.ReactNode;
// };

const BannerSlide = (props:bannerData) => {
  const{title,BackgroundImage,c_cTAForBanner,c_bannerSlogan}=props
  const conversionDetails_primaryCTA = {
    cid: "dc6937a6-345d-4c0f-b63f-79be3c29d7bc",
    cv: "3",
  };

  return (
    <>
      <div className="hero">
        {BackgroundImage?.map((item:any)=>{
          return(<>
           <img
          className="hero-img"
          src={item.url}
          alt="banner"
        />
          </>)
          
        })}
       
        <div className="container text-center">
          <h1>
          {title}
          </h1>
          <p>{c_bannerSlogan ? c_bannerSlogan : ""}</p>
          {c_cTAForBanner ? (
            <>
              {c_cTAForBanner.label && c_cTAForBanner.link ? (
                <div className="cta_btn">
                  <Link
                    rel="noopener noreferrer"
                    data-ya-track="cta_button"
                    eventName={c_cTAForBanner.label}
                    conversionDetails={conversionDetails_primaryCTA}
                    href={
                      c_cTAForBanner.linkType == "PHONE" ? `tel:${c_cTAForBanner.link}` : (c_cTAForBanner.linkType == "EMAIL" ? `mailto:${c_cTAForBanner.link}` : c_cTAForBanner.link) 
                    }
                    className="button"
                    target={
                      c_cTAForBanner.linkType == "PHONE" ? "_self" : (
                        c_cTAForBanner.linkType == "URL" ? "_self" : (c_cTAForBanner.linkType == "OTHER" ? "_blank" : "_self")
                        ) 
                    }
                  >
                    {c_cTAForBanner}
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerSlide;


