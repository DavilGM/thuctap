"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, MoreVertical, PlusCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Datatable = {
    id: string
    email: string
    mabenhnhan: string
    hoten: string
    namsinh: number
    gioitinh: "Nam" | "Nữ"
    nghenghiep: string
    cccd: string
    diachi: string
    maxn: number | undefined
    barcode: string | undefined
    loaimau: string | undefined
    thetich: string | undefined
}

export const columns: ColumnDef<Datatable>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "mabenhnhan",
        header: "Mã bệnh nhân",
    },
    {
        accessorKey: "hoten",
        header: "Họ tên",
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "namsinh",
        header: "Năm sinh",
    },
    {
        accessorKey: "gioitinh",
        header: "Giới tính",
    },
    {
        accessorKey: "nghenghiep",
        header: "Nghề nghiệp",
    },
    {
        accessorKey: "cccd",
        header: "CCCD/Hộ Chiếu/BHYT",
    },
    {
        accessorKey: "diachi",
        header: "Địa chỉ",
    },
    {
        accessorKey: "maxn",
        header: "Mã xét nghiệm",
    },
    {
        accessorKey: "barcode",
        header: "Barcode",
    },
    {
        accessorKey: "loaimau",
        header: "Loại mẫu",
    },
    {
        accessorKey: "thetich",
        header: "Thể tích (ml)",
    },
    {
        id: "actions",
        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-6 w-6">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Sửa</DropdownMenuItem>
                    <DropdownMenuItem>Xóa</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
        enableSorting: false,
        enableHiding: false,
    },
]
