import { Fragment, memo } from 'react';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { SelectInput } from '../../../../core/components/inputs/input_select';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';
import { ButtonContainedSecondary } from '../../../../core/components/buttons/contained/button_secondary';
import { CreateUserPresenter } from '../presenter/create_user_presenter';
import enumReducer from '../../../../core/utils/enums/enum_change_reducer';
import { Alert } from '@mui/material';

function CreateUserView({ usecase }) {
    const presenter = CreateUserPresenter({ usecase });
    return (
        <div className="flex flex-col gap-3">
            {(presenter?.createUser?.error || '').length > 0 && (
                <Alert severity="error">{presenter?.createUser?.error || ''}</Alert>
            )}
            <div className="flex flex-row gap-3">
                <div className="flex flex-col basis-8/12 gap-2 bg-white p-3 rounded-md shadow h-fit">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col w-full gap-2">
                            <label form="firstName">First Name</label>
                            <TextInput
                                id="firstName"
                                fullWidth
                                value={presenter?.firstName?.data}
                                onChange={(e) =>
                                    presenter?.setFirstName({
                                        type: enumReducer.change.data,
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label form="lastName">Last Name</label>
                            <TextInput
                                id="lastName"
                                fullWidth
                                value={presenter?.lastName?.data}
                                onChange={(e) =>
                                    presenter?.setLastName({
                                        type: enumReducer.change.data,
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="email">Username</label>
                        <TextInput
                            textError={presenter?.username?.error}
                            id="username"
                            fullWidth
                            value={presenter?.username?.data}
                            onChange={(e) =>
                                presenter?.setUsername({
                                    type: enumReducer.change.data,
                                    data: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="email">Email</label>
                        <TextInput
                            textError={presenter?.email?.error}
                            id="email"
                            fullWidth
                            value={presenter?.email?.data}
                            onChange={(e) =>
                                presenter?.setEmail({
                                    type: enumReducer.change.data,
                                    data: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Phone Number</label>
                        <TextInput
                            textError={presenter?.phoneNumber?.error}
                            id="phoneNumber"
                            fullWidth
                            value={presenter?.phoneNumber?.data}
                            onChange={(e) =>
                                presenter?.setPhoneNumber({
                                    type: enumReducer.change.data,
                                    data: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Password</label>
                        <TextInput
                            textError={presenter?.password?.error}
                            id="password"
                            fullWidth
                            value={presenter?.password?.data}
                            onChange={(e) =>
                                presenter?.setPassword({
                                    type: enumReducer.change.data,
                                    data: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="confirm_password">Confirm Password</label>
                        <TextInput
                            textError={presenter?.confirmPassword?.error}
                            id="confirm_password"
                            fullWidth
                            value={presenter?.confirmPassword?.data}
                            onChange={(e) =>
                                presenter?.setConfirmPassword({
                                    type: enumReducer.change.data,
                                    data: e.target.value,
                                    password: presenter?.password?.data,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col basis-4/12 gap-3">
                    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow h-fit">
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">Role</label>
                            <SelectInput
                                id="role"
                                options={presenter?.roleList?.data || []}
                                getOptionLabel={(option) => option?.name}
                                getOptionValue={(option) => option?.token}
                                value={presenter?.role?.data}
                                handleChange={(e) =>
                                    presenter?.setRole({
                                        type: enumReducer.change.data,
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">Status</label>
                            <SelectInput
                                id="status"
                                options={[
                                    { value: 'true', label: 'Active' },
                                    { value: 'false', label: 'Inactive' },
                                ]}
                                value={presenter?.status?.data}
                                handleChange={(e) =>
                                    presenter?.setStatus({
                                        type: enumReducer.change.data,
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 justify-end">
                <ButtonContainedSecondary>Cancel</ButtonContainedSecondary>
                <ButtonContainedPrimary onClick={() => presenter?.handleFetchCreateUser()}>
                    Save
                </ButtonContainedPrimary>
            </div>
        </div>
    );
}

export default memo(CreateUserView);
