import { Button, TextField } from '@mui/material';

export function register() {
    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <div className="hidden sm:flex flex-col sm:basis-5/12 h-screen bg-target-secondary-default justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="w-56"></img>
                <p className="text-xl subpixel-antialiased font-semibold text-label-secondary-default">
                    Planet Print Shop
                </p>
            </div>
            <div className="flex sm:basis-7/12 h-auto justify-center items-center">
                <div className="flex flex-col gap-4 p-8 border rounded-md w-fit">
                    <img
                        src={process.env.PUBLIC_URL + '/logo.png'}
                        alt="logo"
                        className="w-24 sm:hidden self-center"
                    ></img>
                    <p className="text-lg font-bold tracking-wide text-center">Register</p>
                    <TextField required label="Email" className="w-80" />
                    <TextField required label="Name" className="w-80" />
                    <TextField label="Phone" className="w-80" />
                    <TextField required type="password" label="Password" className="w-80" />
                    <TextField required type="password" label="Confirm Password" className="w-80" />
                    <Button
                        variant="contained"
                        className="w-80 bg-target-primary-default !important"
                    >
                        Register
                    </Button>
                    <div className="flex flex-row justify-between">
                        <p>Already have an account?</p>
                        <Button
                            onClick={() => {}}
                            variant="outlined"
                            className="border-target-destructive-disabled text-target-destructive-disabled"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
