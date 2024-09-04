import { Datatable } from "./columns"
import { columns } from './columns'
import { DataTable } from "./data-table"



const thongTinChung = {
    loaiXetNghiem: "Xét nghiệm máu",
    ngayGui: "2024-07-25",
    lanGui: 1
};
async function getData(): Promise<Datatable[]> {
    // Fetch data from your API here.
    return [
        {
            id: "a1b2c3d4",
            email: "nguyenthimai@example.com",
            mabenhnhan: "1234567890",
            hoten: "Nguyen Thi Mai",
            namsinh: 1999,
            gioitinh: "Nữ",
            nghenghiep: "Bác sĩ",
            cccd: "080364783178",
            diachi: "65, Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM",
            maxn: undefined,
            barcode: undefined,
            loaimau: undefined,
            thetich: undefined

        },
        {
            "id": "e5f6g7h8",
            "email": "tranminhcuong@example.com",
            "mabenhnhan": "0987654321",
            "hoten": "Tran Minh Cuong",
            "namsinh": 1985,
            "gioitinh": "Nam",
            "nghenghiep": "Kỹ sư",
            "cccd": "091234567890",
            "diachi": "12, Nguyễn Trãi, P.3, Q.5, TP.HCM",
            maxn: undefined,
            barcode: undefined,
            loaimau: undefined,
            thetich: undefined
        },
        {
            "id": "i9j0k1l2",
            "email": "lethuha@example.com",
            "mabenhnhan": "1122334455",
            "hoten": "Le Thu Ha",
            "namsinh": 1992,
            "gioitinh": "Nữ",
            "nghenghiep": "Giáo viên",
            "cccd": "092345678901",
            "diachi": "34, Lê Văn Sỹ, P.14, Q.3, TP.HCM",
            maxn: undefined,
            barcode: undefined,
            loaimau: undefined,
            thetich: undefined
        }

    ]

}

export default async function DSChiDinh() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <div className="m-1 flex justify-start ">
                <div className="flex space-x-2 text-center mr-8">
                    <p className="font-semibold text-sm">Loại xét nghiệm</p>
                    <p className="text-sm">{thongTinChung.loaiXetNghiem}</p>
                </div>
                <div className="flex space-x-2 text-center mr-8">
                    <p className="font-semibold text-sm">Ngày gửi</p>
                    <p className="text-sm">{thongTinChung.ngayGui}</p>
                </div>
                <div className="flex space-x-2 text-center">
                    <p className="font-semibold text-sm">Lần gửi</p>
                    <p className="text-sm">{thongTinChung.lanGui}</p>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
