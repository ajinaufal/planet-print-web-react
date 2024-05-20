import { TextInput } from '../../../../core/components/inputs/input_text';

export function SizeComponent() {
  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col w-full gap-2">
          <label form="base-price">Weight</label>
          <TextInput id="weight" fullWidth endAdornment={<span className="ps-2">kg</span>} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label form="base-price">Length</label>
          <TextInput id="length" fullWidth endAdornment={<span className="ps-2">cm</span>} />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col w-full gap-2">
          <label form="base-price">Width</label>
          <TextInput id="width" fullWidth endAdornment={<span className="ps-2">cm</span>} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label form="base-price">Height</label>
          <TextInput id="height" fullWidth endAdornment={<span className="ps-2">cm</span>} />
        </div>
      </div>
    </div>
  );
}
