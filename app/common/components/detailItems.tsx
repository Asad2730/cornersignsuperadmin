import { CustomInput } from "@/app/common/components/customInput";

interface DetailProp {
  label: string;
  value: string;
  isReadOnly?: boolean;
  gap?: number;
}
export const Detailtem = ({ label, value, gap = 4 }: DetailProp) => (
  <div className={`grid grid-cols-1 gap-${gap}`}>
    <p className="text-[#344767]">{label}</p>
    <p className="text-gray-900">{value}</p>
  </div>
);

export const EditDetailtem = ({
  label,
  value,
  isReadOnly,
  gap = 4,
}: DetailProp) => (
  <div className={`grid grid-cols-1 gap-${gap}`}>
    <p className="text-[#344767]">{label}</p>
    <CustomInput placeHolder={value} isReadOnly={isReadOnly} />
  </div>
);
