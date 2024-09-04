'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Datatable } from "@/app/DVG/DSChoGuiMau/columns";

interface CreateSessionFormProps {
    selectedPatients: Datatable[];
    onSubmit: (selectedPatients: Datatable[]) => void;
    onClose: () => void;
}

export function CreateSessionForm({ selectedPatients, onSubmit, onClose }: CreateSessionFormProps) {
    const [sessionName, setSessionName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (sessionName.trim() === '') {
            alert('Please enter a session name.');
            return;
        }

        onSubmit(selectedPatients);
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">Tạo phiên</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Tên phiên</label>
                <Input
                    placeholder="Nhập tên phiên"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <Input
                    placeholder="Mô tả phiên (tùy chọn)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <h3 className="text-sm font-medium">Thông tin bệnh nhân</h3>
                <ul className="list-disc pl-5">
                    {selectedPatients.map((patient) => (
                        <li key={patient.id} className="text-sm">
                            {patient.hoten} - {patient.mabenhnhan}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-end space-x-2">
                <Button variant="ghost" onClick={onClose}>
                    Hủy bỏ
                </Button>
                <Button onClick={handleSubmit} className="bg-blue-600 text-white">
                    Gửi phiên
                </Button>
            </div>
        </div>
    );
}

export default CreateSessionForm;
