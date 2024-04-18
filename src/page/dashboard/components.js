import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export function Card() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row px-2 py-1.5 bg-white rounded border shadow-sm gap-2">
                <div className="flex justify-center items-center p-1 bg-target-primary-hover rounded-full w-12 h-12">
                    <InventoryIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">10</p>
                    <p className="text-sm">Total Product</p>
                </div>
            </div>
            <div className="flex flex-row px-2 py-1.5 bg-white rounded border shadow-sm gap-2">
                <div className="flex justify-center items-center p-1 bg-target-primary-hover rounded-full w-12 h-12">
                    <ReceiptLongIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">10</p>
                    <p className="text-sm">Total Order</p>
                </div>
            </div>
            <div className="flex flex-row px-2 py-1.5 bg-white rounded border shadow-sm gap-2">
                <div className="flex justify-center items-center p-1 bg-target-primary-hover rounded-full w-12 h-12">
                    <PeopleAltIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">10</p>
                    <p className="text-sm">Total Customer</p>
                </div>
            </div>
            <div className="flex flex-row px-2 py-1.5 bg-white rounded border shadow-sm gap-2">
                <div className="flex justify-center items-center p-1 bg-target-primary-hover rounded-full w-12 h-12">
                    <PeopleAltIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">10</p>
                    <p className="text-sm">Customer Unpaid</p>
                </div>
            </div>
            <div className="flex flex-row px-2 py-1.5 bg-white rounded border shadow-sm gap-2">
                <div className="flex justify-center items-center p-1 bg-target-primary-hover rounded-full w-12 h-12">
                    <PeopleAltIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">10</p>
                    <p className="text-sm">Need Approval</p>
                </div>
            </div>
        </div>
    );
}
