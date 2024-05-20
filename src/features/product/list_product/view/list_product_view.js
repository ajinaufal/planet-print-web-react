import { Fragment, memo } from 'react';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';

function ListProductView({ usecase }) {
  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <TextInput
            className="bg-white shadow-md rounded"
            placeholder="Search Name / SKU"
            sx={{
              '&amp; .MuiOutlinedInput-root': {
                '&amp; fieldset': { border: 'none' },
              },
            }}
          />
          <ButtonContainedPrimary>Create</ButtonContainedPrimary>
        </div>
        <div className="bg-white rounded-lg px-2">
          <table class="table-auto w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th class="border border-slate-600 ...">Image</th>
                <th class="border border-slate-600 ...">Name</th>
                <th class="border border-slate-600 ...">Cateegory</th>
                <th class="border border-slate-600 ...">SKU</th>
                <th class="border border-slate-600 ...">UOM</th>
                <th class="border border-slate-600 ...">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ...">Image</td>
                <td class="border border-slate-700 ...">Printer</td>
                <td class="border border-slate-700 ...">Printer</td>
                <td class="border border-slate-700 ...">ABCS</td>
                <td class="border border-slate-700 ...">MESIN</td>
                <td class="border border-slate-700 ...">100000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(ListProductView);
