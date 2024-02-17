export function register() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col basis-5/12 h-screen bg-target-secondary-default justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="w-56"></img>
                <p className="text-xl subpixel-antialiased font-semibold text-label-secondary-default">
                    Planet Printing shop
                </p>
            </div>
            <div className="basis-7/12 h-full">
                
            </div>
        </div>
    );
}
