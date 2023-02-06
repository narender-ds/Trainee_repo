import * as React from "react";
/**
 * Component for About section
 * @param props
 * @returns HTML element
 */
var array: any = ["Promotions", "Pizza", "Starters", "Beverages", "Desserts"];

type services = {
  c_menuitems: any;
  title: any;
};

export default function Storefacility(props: services) {
  const { c_menuitems, title } = props;
  return (
    <>
    <div className="text-center">
        <h2>{title}</h2>
        </div>
      {c_menuitems ? (
        

        <div className="store-faci flex">
          <div className="boxes-row flex gap-40  justify-center">
            {c_menuitems?.map((i: any, index: any) => {
              return (
                <>
                  <div className="boxes-fac">
                    <div className="img-item">
                      {i.menuIcon.map((n: any) => {
                        return <img className="bg-[#FFFFFF]" src={n.url}></img>;
                      })}
                    </div>
                    <h5>{i.menuTitle ? i.menuTitle : array[index]}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
