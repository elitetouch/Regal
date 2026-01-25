import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import bodyBg from "../../../public/secondSectionBg.svg";
export const DottedList = ({ items }: { items: string[] }) => {
  return (
    <div style={{ padding: 2, marginTop: 5 }} className=" grid gap-y-[5px]">
      {items.map((item, index) => (
        <div key={index} className=" flex gap-x-[5px]">
          <div>
            <Text style={{ marginRight: 2, fontSize: 20 }}>•</Text>
          </div>
          <div>
            <Text
              style={{
                flex: 1,
                // fontFamily: "Raleway-Regular",
                fontSize: 16,
                // lineHeight: 24,
              }}
            >
              {item}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};
const orderPolicy = [
  "All orders are custom made and requires 10 working days for production",
  `Once production has started orders can not be canceled`,
  `Orders can be placed via the Website only`,
  `Enquiries or complaint can be made via instagram, whatsapp, emails or calls`,
  `Urgent orders should be confirmed with customer service before placing an order.`,
  `Kindly take tim in reading this policy clearly. By shopping with us you acknowledge and agree to these policies. For Further assistance, contact regalinheirs.store@gmail.com`,
];
const returnsExchange = [
  `For Lagos orders, customers have 24 hours from the time of delivery to report any issues.`,
  `For Interstate orders, customers have 48 hours from the time of delivery to report any issues.`,
  `For International orders, customers have 96 hours from the time of delivery to report any issues.`,
  `Returns/Refunds are only accepted for damaged or incorrect items.`,
  `Once your return request is reviewed and approved, we will provide you with instructions on how to send the item back to us.  `,
  `Items must be returned in the same condition as they were sent, with the tag intact and labels in the bag they were sent in. The items must be free of stains, sweat, and must not have been worn or used. `,
  ` Pack the item securely and ship it to the address provided by our customer service team. Please ensure you use a trackable shipping method.`,
  `
Upon receiving the returned item, we will inspect it and, if it meets the criteria, we will process the exchange. You will be notified via email once the replacement has been shipped.`,
  `Items that are custom-sized or altered per request are non-returnable and non-exchangeable.`,
  `We do not accept color exchanges—ensure the correct color is selected before placing an order.`,
  `If a sizing issue is due to customer error, amendments will be done for a fee, and the customer will cover all delivery costs.`,
  `By shopping with us, you acknowledge and agree to these policies. For further assistance, contact regalinheirs.store@gmail.com`,
];
const shippingPolicy = [
  `Kindly note that orders take between 5-10 working days for production.`,
  `Lagos Shipping: 1-2 working days`,
  `Interstate Shipping: 3-5 working days via DHL`,
  `International Shipping: 7-9 working days via DHL`,
  `Shipping costs depend on location and will be generated at checkout.`,
  `REGAL  is not responsible for custom duties, import taxes, or additional fees imposed by the destination country.`,
  `Once tracking details are provided, we are not liable for delays, lost, or stolen packages but can assist in contacting the courier service.`,
  `If a delivery is refused by the customer, return charges apply, and store credit will be issued minus the return and original shipping fees.`,
  `·Kindly note that deliveries to the United States may be subject to additional customs duties, import taxes, or fees as determined by the destination country. These charges are not covered by REGAL and are the responsibility of the customer.`,
  `shopping with us, you acknowledge and agree to these policies. For further assistance, contact regalinheirs.store@gmail.com`,
];
const privacyData = [
  `We collect personal information, including name, contact details, and payment information, solely for order fulfillment and customer service.`,
  `Customer data is stored securely and is not shared with third parties except for delivery purposes.`,
  `Transactions are processed securely, and REGAL does not store sensitive financial details.`,
  `Customers can request data deletion or updates by contacting customer support.`,
  `Customer reviews may be utilized for promotional and marketing purposes.`,
  `By shopping with us, you acknowledge and agree to these policies. For further assistance, contact regalinheirs.store@gmail.com
  `,
];
const IntellectualProperty = [
  `All designs, logos, product images, and brand assets belong exclusively to REGAL.`,
  `Reproduction, copying, or unauthorized use of our designs, content, or branding materials is strictly prohibited.`,
  `Collaboration inquiries and licensing requests must be formally approved by REGAL via email. regalinheirs.store@gmail.com`,
  `By shopping with us, you acknowledge and agree to these policies. For further assistance, contact regalinheirs.store@gmail.com`,
];
function Page() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pb-[50px] "
      style={{
        backgroundImage: `url(${bodyBg.src})`, // Note: Use .src for Next.js Image imports
        backgroundColor: "#FFFAF696",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className=" w-10/12 m-auto  pt-[40px] lg:pt-0">
        <div className={`${robotoSlab.className} mt-[30px]`}>
          <Text className=" text-xl font-bold">POLICIES</Text>
        </div>
        <div className=" grid gap-y-[10px]">
          <div>
            <div className={`${robotoSlab.className}`}>
              <Text className=" text-[18px] font-semibold pt-[20px]">
                Order Policy
              </Text>
            </div>
            <div className=" pt-[5px]">
              <DottedList items={orderPolicy} />
            </div>
          </div>
          <div>
            <div className={`${robotoSlab.className}`}>
              <Text className=" text-[18px] font-semibold pt-[20px]">
                Returns, Exchange & Refund Policy 
              </Text>
            </div>
            <div className=" pt-[5px]">
              <DottedList items={returnsExchange} />
            </div>
          </div>
          <div>
            <div className={`${robotoSlab.className}`}>
              <Text className=" text-[18px] font-semibold pt-[20px]">
                Shipping Policy
              </Text>
            </div>
            <div className=" pt-[5px]">
              <DottedList items={shippingPolicy} />
            </div>
          </div>
          <div>
            <div className={`${robotoSlab.className}`}>
              <Text className=" text-[18px] font-semibold pt-[20px]">
                Privacy & Data Retention Policy
              </Text>
            </div>
            <div className=" pt-[5px]">
              <DottedList items={privacyData} />
            </div>
          </div>
          <div>
            <div className={`${robotoSlab.className}`}>
              <Text className=" text-[18px] font-semibold pt-[20px]">
                Intellectual Property & Branding Policy
              </Text>
            </div>
            <div className=" pt-[5px]">
              <DottedList items={IntellectualProperty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
