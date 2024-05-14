import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ButtonContained } from '../../../../components/buttons';
import { Link } from 'react-router-dom';
import { loginPresenter } from '../presenter/login_presenter';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { HideIconAdomment } from '../../../../core/components/adornment/hide_icon_adornment';

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
        <div className="flex flex-col gap-3 max-w-72 w-full">
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
          <ButtonContained onClick={() => presenter?.handleSubmitLogin()}>Login</ButtonContained>
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
