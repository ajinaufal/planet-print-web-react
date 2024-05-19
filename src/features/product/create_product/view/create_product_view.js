import { memo } from 'react';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { QuilInput } from '../../../../core/components/inputs/input_quill';
import { SelectInput } from '../../../../core/components/inputs/input_select';
import { ButtonPrimary } from '../../../../core/components/buttons/button_primary';
import { ButtonSecondary } from '../../../../core/components/buttons/button_secondary';
import { Link } from '@mui/material';

function CreateProductView(params) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow">
                <div className="border border-dashed border-foreground-default-secondary rounded p-3">
                    <span>
                        <Link>Click to upload</Link> or drag and drop
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-3 basis-7/12">
                    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
                        <p>Description</p>
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">Name</label>
                            <TextInput id="name" fullWidth />
                        </div>
                        <QuilInput label="Description" fullWidth />
                        <QuilInput label="Spesification" fullWidth />
                    </div>
                    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
                        variant
                    </div>
                </div>
                <div className="flex flex-col gap-3 basis-5/12">
                    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
                        <div className="flex flex-col w-full gap-2">
                            <label form="sku">SKU (Optional)</label>
                            <TextInput id="sku" fullWidth />
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col w-full gap-2">
                                <label form="quantity">Quantity</label>
                                <TextInput id="quantity" fullWidth />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label form="uom">UOM (Optional)</label>
                                <TextInput id="uom" fullWidth />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 bg-white p-3 rounded-md shadow h-fit w-full">
                        <div className="flex flex-col w-full gap-2">
                            <label form="category">Category</label>
                            <SelectInput id="category" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label form="status">Status</label>
                            <SelectInput id="status" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 bg-white p-3 rounded-md shadow h-fit w-full">
                        <div className="flex flex-col w-full gap-2">
                            <label form="base-price">Base Price</label>
                            <TextInput id="base-price" fullWidth />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <ButtonSecondary className="w-fit">Schedule</ButtonSecondary>
                        <ButtonPrimary className="w-fit">Add Product</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CreateProductView);
