import React from "react";
import { Input } from "@/components/ui/input";

interface ColumnFilterProps {
    column: any;
}

const ColumnFilter: React.FC<ColumnFilterProps> = ({ column }) => {
    return (
        <Input
            placeholder={`Tìm ${column.id}...`}
            value={column.getFilterValue() ?? ""}
            onChange={(event) => column.setFilterValue(event.target.value)}
            className="max-w-sm"
        />
    );
};

export default ColumnFilter;
