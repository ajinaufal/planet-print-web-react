import { TextField } from '@mui/material';
import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ButtonContained } from '../../../../components/buttons';
import { Link } from 'react-router-dom';

function LoginView() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center basis-6/12 w-full bg-target-primary-default">
        <LazyLoadImage
          alt="logo-planet-print"
          className="h-32"
          src={process.env.PUBLIC_URL + '/logo_white.webp'}
        />
        {/* <p className="font-bold text-3xl text-white capitalize mt-2">ORDER MANAGEMENT</p> */}
      </div>
      <div className="flex basis-6/12 w-full h-screen items-center justify-center">
        <div className="flex flex-col gap-3 max-w-72 w-full">
          <TextField label="Username / Email" size="small" fullWidth onChange={(e) => {}} />
          <TextField label="Password" size="small" fullWidth onChange={(e) => {}} />
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
