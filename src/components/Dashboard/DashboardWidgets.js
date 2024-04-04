import React from "react";
// import NumberFormatBase from "react-number-format"; // Import NumberFormat as a named export
import LottieMoney from "../LotiIcon/LottieMoney";
import LottieProduct from "../LotiIcon/LottieProduct";
import LottieInvoice from "../LotiIcon/LottieInvoice";
import LottiePersons from "../LotiIcon/LottiePersons";
import { useSelector } from "react-redux";
import { getAllClientsSelector } from "../../store/clientSlice";
import { getAllProductSelector } from "../../store/productSlice";
import {
  getAllInvoiceSelector,
  getTotalBalance,
} from "../../store/invoiceSlice";
// import numeral from "numeral";
import CustomNumberFormat from "../Common/CustomNumberFormat";

function DashboardWidgets() {
  const clients = useSelector(getAllClientsSelector);
  const products = useSelector(getAllProductSelector);
  const totalBalance = useSelector(getTotalBalance);
  const allInvoices = useSelector(getAllInvoiceSelector);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl md:mr-4 hover:shadow-sm">
            <div className="font-title">Total Balance</div>
            <div className="flex justify-between items-center">
              <div className="h-30">
                <LottieMoney loop className="h-20" />
              </div>
              <div className="text-2xl mr-2">
                {/* {numeral(totalBalance).format("$0,0.00")} */}
                <CustomNumberFormat
                  value={totalBalance}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl hover:shadow-sm">
            <div className="font-title">Total Products</div>
            <div className="flex justify-between items-center">
              <div className="h-30">
                <LottieProduct loop className="h-20" />
              </div>
              <div className="text-2xl mr-2">
                {/* {numeral(products?.length).format("$0,0.00")} */}
                <CustomNumberFormat
                  value={products?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl md:mr-4 hover:shadow-sm">
            <div className="font-title">Total Invoices</div>
            <div className="flex justify-between items-center">
              <div className="h-30">
                <LottieInvoice loop className="h-20" />
              </div>
              <div className="text-2xl mr-2">
                {/* {numeral(allInvoices?.length).format("$0,0.00")} */}
                <CustomNumberFormat
                  value={allInvoices?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <div className="p-4 bg-white rounded-xl hover:shadow-sm">
            <div className="font-title">Total Clients</div>
            <div className="flex justify-between items-center">
              <div className="h-30">
                <LottiePersons loop className="h-20" />
              </div>
              <div className="text-2xl mr-2">
                <CustomNumberFormat
                  value={clients?.length}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
                {/* {numeral(clients?.length).format("$0,0.00")} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardWidgets;
