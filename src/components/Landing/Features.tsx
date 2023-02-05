import React from "react";
import Agreement from "../../assets/features/agreement.png";
import Bill from "../../assets/features/bill.png";
import Property from "../../assets/features/property.png";

const features = [
  {
    id: 1,
    title: "Simple Property Listing",
    image: Property,
  },
  {
    id: 2,
    title: "Automated Receipts and Invoices",
    image: Bill,
  },
  {
    id: 3,
    title: "Payment Process and Reconciliation",
    image: Agreement,
  },
];

const Features = () => {
  return (
    <div className="p-20 flex justify-around">
      {features.map((feature) => (
        <div
          className="flex flex-col items-center space-y-3 bg-primary/20 rounded-md p-5 hover:scale-150 transform ease-in-out duration-300"
          key={feature.id}
        >
          <img src={feature.image} alt="features" className="h-10 w-10" />
          <h1 className="w-48 font-bold text-lg text-center">
            {feature.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Features;
