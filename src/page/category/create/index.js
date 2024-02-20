import { TextField } from '@mui/material';

export function CategoryCreate() {
    return (
        <div className="flex flex-col gap-3 bg-background-default p-3 w-full rounded">
            <div className="flex flex-col w-full">
                <label>Title</label>
                <TextField required size="small" />
            </div>
            <div className="flex flex-col w-full">
                <label>Slug</label>
                <TextField required size="small" />
            </div>
            <div className="flex flex-col w-full">
                <label>File</label>
                <TextField required size="small" type="file" />
            </div>
        </div>
    );
}

// <Input type="file" multiple inputProps={{ multiple: true }} />
