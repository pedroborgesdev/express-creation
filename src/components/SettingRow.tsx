import { ReactNode } from "react";

interface SettingRowProps {
  label: string;
  children: ReactNode;
}

const SettingRow = ({ label, children }: SettingRowProps) => {
  return (
    <div className="flex items-center justify-between py-3">
      <label className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default SettingRow;
