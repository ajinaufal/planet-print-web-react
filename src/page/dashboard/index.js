import { memo } from 'react';
import { Card } from './components';

function Dashboard() {
    return (
        <div className="flex">
            <Card />
        </div>
    );
}

export default memo(Dashboard);
