import { Fragment, memo } from 'react';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { SelectInput } from '../../../../core/components/inputs/input_select';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';
import { ButtonContainedSecondary } from '../../../../core/components/buttons/contained/button_secondary';
import { CreateUserPresenter } from '../presenter/create_user_presenter';

function CreateUserView({ usecase }) {
    const presenter = CreateUserPresenter({ usecase });
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <div className="flex flex-col basis-8/12 gap-2 bg-white p-3 rounded-md shadow h-fit">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">First Name</label>
                            <TextInput id="name" fullWidth />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">Last Name</label>
                            <TextInput id="name" fullWidth />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Email</label>
                        <TextInput id="name" fullWidth />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Phone Number</label>
                        <TextInput id="name" fullWidth />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Password</label>
                        <TextInput id="name" fullWidth />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label form="name">Confirm Password</label>
                        <TextInput id="name" fullWidth />
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
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label form="name">Status</label>
                            <SelectInput
                                id="role"
                                options={[
                                    { value: 'active', label: 'Active' },
                                    { value: 'deactive', label: 'Deactive' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 justify-end">
                <ButtonContainedSecondary>Cancel</ButtonContainedSecondary>
                <ButtonContainedPrimary>Save</ButtonContainedPrimary>
            </div>
        </div>
    );
}

export default memo(CreateUserView);
