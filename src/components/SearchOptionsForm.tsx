"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogFooter
} from "@/components/ui/dialog";

interface SearchOptionsFormProps {
    onFilterChange: (filters: any) => void;
    onClose: () => void;
}

export function SearchOptionsForm({ onFilterChange, onClose }: SearchOptionsFormProps) {
    const [filters, setFilters] = useState({
        patientCode: "",
        name: "",
        email: "",
        birthYear: "",
        gender: "",
        occupation: "",
        idCard: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApply = () => {
        onFilterChange(filters);
        onClose();
    };

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent>
                <DialogTitle>Tùy chọn tìm kiếm</DialogTitle>
                <div className="space-y-4">
                    <Input
                        name="patientCode"
                        placeholder="Mã bệnh nhân"
                        value={filters.patientCode}
                        onChange={handleChange}
                    />
                    <Input
                        name="name"
                        placeholder="Họ tên"
                        value={filters.name}
                        onChange={handleChange}
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        value={filters.email}
                        onChange={handleChange}
                    />
                    <Input
                        name="birthYear"
                        placeholder="Năm sinh"
                        value={filters.birthYear}
                        onChange={handleChange}
                    />
                    <Input
                        name="gender"
                        placeholder="Giới tính"
                        value={filters.gender}
                        onChange={handleChange}
                    />
                    <Input
                        name="occupation"
                        placeholder="Nghề nghiệp"
                        value={filters.occupation}
                        onChange={handleChange}
                    />
                    <Input
                        name="idCard"
                        placeholder="CCCD/Hộ Chiếu/BHYT"
                        value={filters.idCard}
                        onChange={handleChange}
                    />
                    <Input
                        name="address"
                        placeholder="Địa chỉ"
                        value={filters.address}
                        onChange={handleChange}
                    />
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setFilters({
                                patientCode: "",
                                name: "",
                                email: "",
                                birthYear: "",
                                gender: "",
                                occupation: "",
                                idCard: "",
                                address: "",
                            });
                            onFilterChange({});
                            onClose();
                        }}
                    >
                        Hủy
                    </Button>
                    <Button onClick={handleApply}>Áp dụng</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
