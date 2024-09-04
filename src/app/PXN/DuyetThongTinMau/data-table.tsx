'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SearchOptionsForm } from "@/components/SearchOptionsForm";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CreateSessionForm from "@/components/CreateSessionForm";
import { Datatable } from "./columns";

interface DataTableProps {
    columns: ColumnDef<Datatable>[];
    data: Datatable[];
}

export function DataTable({ columns, data }: DataTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
        { id: 'hoten', value: '' }
    ]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
        nghenghiep: false,
        cccd: false,
        diachi: false,
    });
    const [rowSelection, setRowSelection] = useState({});
    const [isSessionFormOpen, setIsSessionFormOpen] = useState(false);
    const [isSearchOptionsVisible, setIsSearchOptionsVisible] = useState(false);
    const [selectedPatients, setSelectedPatients] = useState<Datatable[]>([]);
    const [tableData, setTableData] = useState<Datatable[]>(data);
    const [searchValue, setSearchValue] = useState('');

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

    const handleCreateSession = (sessionData: any) => {
        console.log("Session created with data:", sessionData);
        setIsSessionFormOpen(false);
        setSelectedPatients([]);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);

        setColumnFilters((oldFilters) => [
            ...oldFilters.filter((filter) => filter.id !== 'hoten'),
            { id: 'hoten', value }
        ]);
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
            {isSessionFormOpen && selectedPatients.length > 0 && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-20">
                    <div className="bg-white p-4 rounded-md shadow-md max-w-lg mx-4 w-full">
                        <CreateSessionForm
                            selectedPatients={selectedPatients}
                            onSubmit={handleCreateSession}
                            onClose={() => {
                                setIsSessionFormOpen(false);
                                setSelectedPatients([]);
                            }}
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
                        placeholder="Tìm theo tên ..."
                        value={searchValue}
                        onChange={handleSearchChange}
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
                        <Button className="bg-gray-600">Gửi</Button>
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
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() ? "selected" : undefined}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
