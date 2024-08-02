"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Datatable } from "../app/DVG/DSChiDinh/columns";

interface AddPatientFormProps {
    onAddPatient: (patient: Datatable) => void;
    onClose: () => void;
}

const AddPatientForm: React.FC<AddPatientFormProps> = ({ onAddPatient, onClose }) => {
    const [newPatient, setNewPatient] = useState<Partial<Datatable>>({
        id: "",
        mabenhnhan: "",
        hoten: "",
        email: "",
        namsinh: 1000,
        gioitinh: "Nam",
        nghenghiep: "",
        cccd: "",
        diachi: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPatient((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPatient.hoten && newPatient.email) {
            onAddPatient(newPatient as Datatable);
            onClose();
        } else {
            alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-4">Thêm khách hàng mới</h3>
            <form onSubmit={handleSubmit}>
                <div className="space-y-2 mb-4">
                    <Input
                        name="mabenhnhan"
                        placeholder="Mã bệnh nhân"
                        value={newPatient.mabenhnhan || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="hoten"
                        placeholder="Họ tên"
                        value={newPatient.hoten || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        value={newPatient.email || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="namsinh"
                        placeholder="Năm sinh"
                        type="number"
                        value={newPatient.namsinh || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="gioitinh"
                        placeholder="Giới tính"
                        value={newPatient.gioitinh || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="nghenghiep"
                        placeholder="Nghề nghiệp"
                        value={newPatient.nghenghiep || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="cccd"
                        placeholder="CCCD/Hộ Chiếu/BHYT"
                        value={newPatient.cccd || ""}
                        onChange={handleChange}
                    />
                    <Input
                        name="diachi"
                        placeholder="Địa chỉ"
                        value={newPatient.diachi || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={onClose}>Hủy</Button>
                    <Button onClick={handleSubmit} className="bg-gray-600 text-white">Lưu</Button>
                </div>
            </form>
        </div>
    );
};

export default AddPatientForm;
