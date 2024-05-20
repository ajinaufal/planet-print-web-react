import { TextInput } from '../../../../core/components/inputs/input_text';

export function InventoryComponent() {
  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
      <div className="flex flex-col w-full gap-2">
        <label form="sku">SKU (Optional)</label>
        <TextInput id="sku" fullWidth />
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col w-full gap-2">
          <label form="quantity">Quantity</label>
          <TextInput id="quantity" fullWidth />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label form="uom">UOM (Optional)</label>
          <TextInput id="uom" fullWidth />
        </div>
      </div>
    </div>
  );
}
