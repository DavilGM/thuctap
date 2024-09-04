"use client";
import React, { useState, useEffect } from "react";
import {
    ColumnDef,
    flexRender,
    SortingState,
    getCoreRowModel,
    VisibilityState,
    ColumnFiltersState,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AddPatientForm from "../../../components/AddPatientForm";
import { Datatable, columns } from "./columns";
import { SearchOptionsForm } from "../../../components/SearchOptionsForm";

interface DataTableProps {
    columns: ColumnDef<Datatable>[];
    data: Datatable[];
}

export function DataTable({ columns, data }: DataTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    ]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSearchOptionsVisible, setIsSearchOptionsVisible] = useState(false);
    const [tableData, setTableData] = useState<Datatable[]>(data);

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const handleAddPatient = (newPatient: Datatable) => {
        setTableData((prev) => [...prev, newPatient]);
        setIsFormOpen(false);
    };

    const handleFilterChange = (filters: any) => {
        const newFilters: ColumnFiltersState = [
            { id: "mabenhnhan", value: filters.patientCode },
            { id: "hoten", value: filters.name || "" },
            { id: "email", value: filters.email },
            { id: "namsinh", value: filters.birthYear },
            { id: "gioitinh", value: filters.gender },
            { id: "nghenghiep", value: filters.occupation },
            { id: "cccd", value: filters.idCard },
            { id: "diachi", value: filters.address },
        ].filter(filter => filter.value !== "");

        console.log("Applying filters:", newFilters);

        setColumnFilters(newFilters);
    };

    return (
        <div className="relative">
            {isFormOpen && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-20">
                    <div className="bg-white p-4 rounded-md shadow-md max-w-lg mx-4 w-full">
                        <AddPatientForm
                            onAddPatient={handleAddPatient}
                            onClose={() => setIsFormOpen(false)}
                        />
                    </div>
                </div>
            )}

            {isSearchOptionsVisible && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-20">
                    <div className="bg-white p-4 rounded-md shadow-md max-w-lg mx-4 w-full">
                        <SearchOptionsForm
                            onFilterChange={handleFilterChange}
                            onClose={() => setIsSearchOptionsVisible(false)}
                        />
                    </div>
                </div>
            )}

            <div className="relative z-0">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Tìm theo tên ... "
                        value={(table.getColumn("hoten")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("hoten")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <Button
                        variant="outline"
                        className="ml-2 bg-gray-600 text-white"
                        onClick={() => setIsSearchOptionsVisible(!isSearchOptionsVisible)}

                    >
                        Tùy chọn
                    </Button>
                    <div className="flex-1 text-sm text-muted-foreground ml-2">
                        {table.getFilteredSelectedRowModel().rows.length} trên{" "}
                        {table.getFilteredRowModel().rows.length} hàng đã chọn.
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4 mr-8">
                        <Button className="bg-gray-600">Nhập file Excel</Button>
                        <Button className="bg-gray-600">Gửi</Button>
                        <Button
                            variant="ghost"
                            onClick={() => setIsFormOpen(true)}
                            className="bg-gray-600 text-white"
                        >
                            Thêm khách hàng
                        </Button>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="bg-gray-600 text-white ml-auto">
                                Hiển Thị Cột
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={() => column.toggleVisibility()}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
