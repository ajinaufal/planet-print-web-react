import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';

export function QuilInput({ id, value, onChange = (value) => {}, className, label }) {
    const uuid = uuidv4();

    return (
        <div className={'relative h-56' + className}>
            <div className="flex flex-col gap-2">
                {(label || '').length > 0 && <label form={uuid}>{label}</label>}
                <ReactQuill
                    className="h-full"
                    tabIndex={4}
                    key={uuid}
                    id={uuid}
                    theme="snow"
                    value={value}
                    onChange={(value, delta, source) => onChange(value)}
                />
            </div>
        </div>
    );
}
