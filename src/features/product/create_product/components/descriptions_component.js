import { TextInput } from '../../../../core/components/inputs/input_text';
import { QuilInput } from '../../../../core/components/inputs/input_quill';

export function DescriptionComponent() {
  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
      <p>Description</p>
      <div className="flex flex-col w-full gap-2">
        <label form="name">Name</label>
        <TextInput id="name" fullWidth />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label form="name">Slug</label>
        <TextInput id="name" fullWidth />
      </div>
      <QuilInput label="Description" fullWidth />
      <QuilInput label="Spesification" fullWidth />
    </div>
  );
}
