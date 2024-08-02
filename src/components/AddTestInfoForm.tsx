import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Datatable } from "../app/DVG/DSChoLayMau/columns";

interface AddTestInfoFormProps {
    patient: Datatable;
    onAddTestInfo: (info: { loaimau: string; thetich: string }) => void;
    onClose: () => void;
}

const AddTestInfoForm: React.FC<AddTestInfoFormProps> = ({ patient, onAddTestInfo, onClose }) => {
    const [loaimau, setLoaimau] = useState("");
    const [thetich, setThetich] = useState("");

    const handleSubmit = () => {
        onAddTestInfo({ loaimau, thetich });
    };

    return (
        <div>
            <h2 className="text-lg font-semibold">Thêm thông tin xét nghiệm cho {patient.hoten}</h2>
            <div className="mt-4">
                <Input
                    placeholder="Loại mẫu"
                    value={loaimau}
                    onChange={(e) => setLoaimau(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <Input
                    placeholder="Thể tích"
                    value={thetich}
                    onChange={(e) => setThetich(e.target.value)}
                />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose}>Hủy</Button>
                <Button onClick={handleSubmit} className="bg-gray-600 text-white">Lưu</Button>
            </div>
        </div>
    );
};

export default AddTestInfoForm;
