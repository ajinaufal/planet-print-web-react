import { Button, MenuItem, Select, TextField } from '@mui/material';
import { QuilInput } from '../../commons/components';

export function ProductCreate() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-3 basis-7/12">
                    <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
                        <div className="flex flex-col w-full">
                            <label>Title</label>
                            <TextField required size="small" />
                        </div>
                        <div className="h-52 flex flex-col">
                            <label>Description</label>
                            <QuilInput onChange={(data) => console.log(data)} />
                        </div>
                        <div className="h-52">
                            <label>Spesification</label>
                            <QuilInput onChange={(data) => console.log(data)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
                        <div>
                            <label>Media</label>
                            <div className="flex flex-col justify-center items-center border-2 rounded border-dashed p-3 border-slate-500">
                                <p>Drag and drop your image here</p>
                                <p>or</p>
                                <Button variant="outlined" className="flex flex-row gap-2 w-40">
                                    <i class="fa-solid fa-cloud-arrow-up" />
                                    <p>Upload File</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
                        <p>Variants</p>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col w-full">
                                <label>Options</label>
                                <Select onChange={(e) => {}} size="small">
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label>UOM</label>
                                <TextField required className="w-full" size="small" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label>Price</label>
                                <TextField required className="w-full" size="small" />
                            </div>
                        </div>
                        <Button variant="contained" className="flex flex-row gap-2 w-56">
                            <p>Add Antoher Variant</p>
                        </Button>
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
