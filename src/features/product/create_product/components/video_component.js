import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Link } from '@mui/material';

export function VideoComponent() {
  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow">
      <div className="bg-background-secondary border border-dashed border-foreground-default-secondary rounded p-3">
        <p className="text-center leading-3">
          <OndemandVideoIcon className="text-foreground-default-secondary mb-1" />
          <Link className="no-underline cursor-pointer">Click to upload</Link> or drag and drop
        </p>
        <input type="file" className="hidden" />
      </div>
    </div>
  );
}
