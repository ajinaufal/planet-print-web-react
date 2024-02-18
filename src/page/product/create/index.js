import { TextField } from '@mui/material';
import { QuilInput } from '../../commons/components';

export function ProductCreate() {
    return (
        <div className="flex flex-col">
            <p>Product Create</p>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-3 basis-7/12">
                    <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
                        <div>
                            <label>Title</label>
                            <TextField required className="w-full" size="small" />
                        </div>
                        <div>
                            <label>Description</label>
                            <QuilInput onChange={(data) => console.log(data)} />
                        </div>
                        <div>
                            <label>Spesification</label>
                            <QuilInput onChange={(data) => console.log(data)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
                        <div>
                            <label>Media</label>
                            <TextField required className="w-full" size="small" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 bg-background-default p-3 w-full rounded">
                        <p>variants</p>
                        <div>
                            <label>Variants</label>
                            <TextField required className="w-full" size="small" />
                        </div>
                        <div>
                            <label>UOM</label>
                            <TextField required className="w-full" size="small" />
                        </div>
                        <div>
                            <label>Price</label>
                            <TextField required className="w-full" size="small" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 basis-5/12 ">
                    <div className="bg-background-default p-3 w-fit rounded flex flex-col gap-3 h-fit w-full">
                        <div className="flex flex-col">
                            <label>Base Price</label>
                            <TextField type="number" className="w-full" size="small" />
                        </div>
                        <div className="flex flex-col">
                            <label>Discount</label>
                            <TextField type="number" className="w-full" size="small" />
                        </div>
                    </div>
                    <div className="bg-background-default p-3 w-fit rounded flex flex-col gap-3 h-fit w-full">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <TextField type="number" className="w-full" size="small" />
                        </div>
                        <div className="flex flex-col">
                            <label>Status</label>
                            <TextField type="number" className="w-full" size="small" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
