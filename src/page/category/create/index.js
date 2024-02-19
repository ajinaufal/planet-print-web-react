import { TextField } from '@mui/material';

export function CategoryUpdate() {
    return (
        <div>
            <div className="flex flex-col w-full">
                <label>Title</label>
                <TextField required size="small" />
            </div>
            <div className="flex flex-col w-full">
                <label>Slug</label>
                <TextField required size="small" />
            </div>
            <div className="flex flex-col w-full">
                <label>Slug</label>
                <TextField required size="small" />
            </div>
        </div>
    );
}
