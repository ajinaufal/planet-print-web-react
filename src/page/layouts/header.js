import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export function Header() {
    return (
        <nav className="flex flex-row justify-end bg-background-accent p-3">
            <div className="flex flex-row gap-3 items-center">
                <p>Name</p>
                <Avatar>
                    <PersonIcon />
                </Avatar>
            </div>
        </nav>
    );
}
