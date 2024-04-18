import { Button, TextField } from '@mui/material';
import { PresenterProductList } from './presenter';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { memo } from 'react';

function Product({ usecase }) {
    const presenter = PresenterProductList({ usecase });
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <TextField label="Search" className="w-48" size="small" />
                <Button
                    className="self-end flex flex-row gap-2 leading-8 bg-targer-primary-default"
                    variant="contained"
                    size="small"
                >
                    <i className="fa-solid fa-plus -mt-0.5"></i>
                    Create Product
                </Button>
            </div>
            <table className="table-auto w-full border-separate border-spacing-y-4">
                <thead>
                    <tr className="border border-slate-600">
                        <th className="border-y border-l rounded-l border-black">ID</th>
                        <th className="border-y border-black">Photo</th>
                        <th className="border-y border-black">Name</th>
                        <th className="border-y border-black">Price</th>
                        <th className="border-y border-black">Stock</th>
                        <th className="border-y border-black">Status</th>
                        <th className="border-y border-black">Publised</th>
                        <th className="border-y border-r rounded-r border-black">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(presenter?.fetchProducts?.data || []).map((product) => (
                        <tr key={product?.token}>
                            <td className="border-y border-l rounded-l border-black text-center">
                                {product?.sku}
                            </td>
                            <td className="border-y border-black relative">
                                {(product?.photo || []).map((photo, i) => (
                                    <LazyLoadImage
                                        key={photo?.token}
                                        alt={i}
                                        className={`w-8 rounded-full shadow border absolute top-2.5 ${
                                            i > 0 ? 'left-3.5' : 0
                                        }`}
                                        src={`http://127.0.0.1:4000${photo?.path?.replace(
                                            '/public',
                                            '/images'
                                        )}`}
                                    />
                                ))}
                            </td>
                            <td className="border-y border-black">{product?.title}</td>
                            <td className="border-y border-black text-center">{product?.price}</td>
                            <td className="border-y border-black text-center">{product?.stocks}</td>
                            <td className="border-y border-black text-center">Indiana</td>
                            <td className="border-y border-black text-center">
                                {product?.created_at}
                            </td>
                            <td className="border-y border-r rounded-r border-black w-fit">
                                <div className="flex flex-row gap-2 justify-center px-2 py-3">
                                    <Button variant="contained">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Button>
                                    <Button variant="contained" color="error">
                                        <i className="fa-solid fa-trash"></i>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default memo(Product);
