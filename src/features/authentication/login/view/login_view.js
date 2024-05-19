import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ButtonPrimary } from '../../../../core/components/buttons/button_primary';
import { Link } from 'react-router-dom';
import { loginPresenter } from '../presenter/login_presenter';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { HideIconAdomment } from '../../../../core/components/adornment/hide_icon_adornment';
import { Alert } from '@mui/material';

function LoginView({ usecase }) {
    const presenter = loginPresenter({ usecase });

    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center basis-6/12 w-full bg-target-primary-default">
                <LazyLoadImage
                    alt="logo-planet-print"
                    className="h-32"
                    src={process.env.PUBLIC_URL + '/logo_white.webp'}
                />
            </div>
            <div className="flex basis-6/12 w-full h-screen items-center justify-center">
                <div className="flex flex-col gap-5 max-w-72 w-full">
                    {(presenter?.submitLogin?.error || '').length > 0 && (
                        <Alert severity="error">{presenter?.submitLogin?.error}</Alert>
                    )}

                    <TextInput
                        label="Username / Email"
                        value={presenter?.email?.data}
                        onChange={(e) => presenter.handleChangeInputUsername(e.target.value)}
                    />
                    <TextInput
                        type={presenter?.adornmentPassword?.type}
                        label="Password"
                        value={presenter?.password?.data}
                        onChange={(e) => presenter?.handleChangeInputPassword(e.target.value)}
                        endAdornment={
                            <HideIconAdomment
                                onClick={() => presenter?.hanldeChangeAdornmentPassword()}
                                showPassword={presenter?.adornmentPassword?.data}
                            />
                        }
                    />
                    <ButtonPrimary onClick={() => presenter?.handleSubmitLogin()}>
                        Login
                    </ButtonPrimary>
                    <p>
                        Don't have an account yet?
                        <Link className="text-foreground-accent-secondary"> sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default memo(LoginView);
