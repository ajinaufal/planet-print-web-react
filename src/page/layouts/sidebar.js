export function Sidebar({ presenter }) {
    if (presenter?.hasAccessories) return <div></div>;
    return (
        <div>
            <div></div>
        </div>
    );
}
