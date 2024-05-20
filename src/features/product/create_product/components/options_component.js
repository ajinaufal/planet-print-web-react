import { SelectInput } from '../../../../core/components/inputs/input_select';

export function OptionsComponent() {
  return (
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
  );
}
