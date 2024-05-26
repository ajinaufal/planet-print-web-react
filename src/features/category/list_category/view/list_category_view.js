import { Fragment, memo } from 'react';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';
import { TextInput } from '../../../../core/components/inputs/input_text';

function ListCategoryView({ usecase }) {
    return (
        <Fragment>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                    <TextInput
                        className="bg-white shadow-md rounded"
                        placeholder="Search Name"
                        sx={{
                            '&amp; .MuiOutlinedInput-root': {
                                '&amp; fieldset': { border: 'none' },
                            },
                        }}
                    />
                    <ButtonContainedPrimary>Create</ButtonContainedPrimary>
                </div>
                <div className="bg-white rounded-lg px-2">
                    <table class="table-auto border-separate border-spacing-2 w-full">
                        <thead>
                            <tr>
                                <th class="border border-slate-600 ...">Image</th>
                                <th class="border border-slate-600 ...">Name</th>
                                <th class="border border-slate-600 ...">Created By</th>
                                <th class="border border-slate-600 ...">Created Date</th>
                                <th class="border border-slate-600 ...">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 ...">Image</td>
                                <td class="border border-slate-700 ...">Printer</td>
                                <td class="border border-slate-700 ...">Printer</td>
                                <td class="border border-slate-700 ...">ABCS</td>
                                <td class="border border-slate-700 ...">MESIN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}
export default memo(ListCategoryView);
