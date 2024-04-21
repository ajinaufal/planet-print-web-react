import { Button } from '@mui/material';
import { PresenterCategory } from './presenter';

function Category({ usecase }) {
    const presenter = PresenterCategory({ usecase });
    return (
        <div className="flex flex-col">
            <Button className="self-end flex flex-row gap-2 leading-8" variant="contained">
                <i className="fa-solid fa-plus -mt-0.5"></i>
                Create Category
            </Button>
            <table className="table-auto w-full border-separate border-spacing-y-4">
                <thead>
                    <tr className="border border-slate-600">
                        <th className="border-y border-l rounded-l border-black">ID</th>
                        <th className="border-y border-black">Photo</th>
                        <th className="border-y border-black">Name</th>
                        <th className="border-y border-black">Total Product</th>
                        <th className="border-y border-black">Total Transaction</th>
                        <th className="border-y border-r rounded-r border-black">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-y border-l rounded-l border-black text-center">
                            Indiana
                        </td>
                        <td className="border-y border-black">Indiana</td>
                        <td className="border-y border-black">Indiana</td>
                        <td className="border-y border-black text-center">Indiana</td>
                        <td className="border-y border-black text-center">Indiana</td>
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
                </tbody>
            </table>
        </div>
    );
}

export default Category;
