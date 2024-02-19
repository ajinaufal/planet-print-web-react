import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export function QuilInput({ value, onChange }) {
    return (
        <div>
            <ReactQuill
                className="h-32"
                tabIndex={4}
                theme="snow"
                value={value}
                onChange={(value, delta, source) => onChange(value)}
            />
        </div>
    );
}
