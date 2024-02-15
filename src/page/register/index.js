import { pallete } from '../../theme/colors';

export function register() {
    return (
        <div className="flex flex-row">
            <div className={`flex flex-col basis-5/12 h-screen bg-[${pallete.background.accent}]`}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="h-52"></img>
            </div>
            <div className="basis-7/12 h-full"></div>
        </div>
    );
}
