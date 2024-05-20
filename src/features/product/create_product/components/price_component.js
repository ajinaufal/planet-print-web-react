import { TextInput } from '../../../../core/components/inputs/input_text';

export function PriceComponent() {
  return (
    <div className="flex flex-row gap-2 bg-white p-3 rounded-md shadow h-fit w-full">
      <div className="flex flex-col w-full gap-2">
        <label form="base-price">Price (Tax Included)</label>
        <TextInput id="base-price" fullWidth />
      </div>
    </div>
  );
}
