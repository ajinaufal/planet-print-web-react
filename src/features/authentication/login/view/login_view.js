import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ButtonContained } from '../../../../components/buttons';
import { Link } from 'react-router-dom';
import { loginPresenter } from '../presenter/login_presenter';
import { TextInput } from '../../../../core/components/inputs/input_test';

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
            onChange={(e) => presenter.handleInputUsername(e.target.value)}
          />
          <TextInput label="Password" onChange={(e) => {}} />
          <ButtonContained>Login</ButtonContained>
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
