import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export function QuilInput({ value, onChange }) {
    return (
        <div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={(value, delta, source) => onChange(value)}
            />
        </div>
    );
}
