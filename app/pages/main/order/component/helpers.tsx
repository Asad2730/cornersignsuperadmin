import { CustomInput } from "@/app/common/components/customInput";
import { underline } from "@/app/common/style/styles";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => (
  <span className="font-bold text-[#000637] text-lg sm:text-xl block">{children}</span>
);



interface InputFieldProps {
  label: string;
  placeHolder: string;
  trailingIcon?: string;
  iconSize?: number;
  readOnly?: boolean;
}

export const InputField = ({ label, placeHolder, trailingIcon, iconSize, readOnly = false }: InputFieldProps) => (
  <div className="grid grid-cols-1 gap-1">
    <span className="text-[#050505] font-semibold text-sm">{label}</span>
    <CustomInput
      placeHolder={placeHolder}
      trailingIcon={trailingIcon}
      iconSize={iconSize}
      isReadOnly={readOnly}
    />
  </div>
);


interface IOrder {
  title :string
  value?:string
}

export const OrderHeader = ({ title }:IOrder) => (
  <div className="mt-4 mb-4">
    <span className="text-[#050505] font-bold text-lg  ">
      {title}
      {underline}
    </span>
  </div>
);

export const OrderGridCol_2 = ({ title, value }: IOrder) => (
  <div className="grid grid-cols-2 gap-1">
    <span className="text-[#67748E]">{title}:</span>
    <span className="text-[#252F40]">{value}</span>
  </div>
);

export type OrderStatus = 
  | "REACHED"
  | "PICKED"
  | "DELIVERED"
  | "ACCEPTED"
  | "RETRIEVED"
  | "COMPLETED"
  | "SIGNS RETURNED"
  | "PENDING";

export const getStatusStyles = (status: OrderStatus): string => {
  const statusStyles: Record<OrderStatus, string> = {
    REACHED: "bg-blue-100 text-[#2B81E3]",
    PICKED: "bg-yellow-100 text-yellow-800",
    DELIVERED: "bg-purple-100 text-purple-800",
    ACCEPTED: "bg-green-100 text-[#3D9727]",
    RETRIEVED: "bg-gray-100 text-[#666666]",
    COMPLETED: "bg-green-200 text-[#3D9727]",
    "SIGNS RETURNED": "bg-red-200 text-red-900",
    PENDING: "bg-yellow-200 text-[#3DA9B5]",
  };

  return statusStyles[status] || "bg-gray-100 text-gray-800";
};




