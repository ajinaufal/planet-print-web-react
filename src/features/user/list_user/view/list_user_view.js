import { Fragment, memo } from 'react';
import { TextInput } from '../../../../core/components/inputs/input_text';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';
import { ListUserPresenter } from '../presenter/list_user_presenter';
import { ConverTommmddyyyy } from '../../../../core/utils/helpers/date_helpers';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ButtonContainedSecondary } from '../../../../core/components/buttons/contained/button_secondary';

function ListUserView({ usecase }) {
  const presenter = ListUserPresenter({ usecase });
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <TextInput
          className="bg-white shadow-md rounded"
          placeholder="Search name"
          sx={{
            '&amp; .MuiOutlinedInput-root': {
              '&amp; fieldset': { border: 'none' },
            },
          }}
        />
        <ButtonContainedPrimary onClick={() => presenter?.navigate('/user/create')}>
          Create
        </ButtonContainedPrimary>
      </div>
      <div className="bg-white rounded-lg px-2 shadow-md border">
        <table class="table-auto border-separate border-spacing-2 w-full">
          <thead>
            <tr>
              <th className="text-start">USER NAME</th>
              <th className="text-start">NAME</th>
              <th className="text-start">EMAIL</th>
              <th className="text-start">ROLE</th>
              <th className="text-start">ACTIVE</th>
              <th>CREATED DATE</th>
              <th>UPDATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {(presenter?.getUserList?.data || []).map((user, i) => (
              <tr>
                <td>{user.username}</td>
                <td className="capitalize">
                  {user?.first_name} {user.last_name}
                </td>
                <td>{user?.email}</td>
                <td className="capitalize">{user?.role}</td>
                <td>{user?.active}</td>
                <td className="text-center">{ConverTommmddyyyy(user?.created_at)}</td>
                <td className="text-center">{ConverTommmddyyyy(user?.updated_at)}</td>
                <td className="flex flex-row gap-2 justify-center">
                  <ButtonContainedSecondary
                    onClick={() => presenter?.handleDeleteUser(user?.token)}
                  >
                    <DeleteIcon />
                  </ButtonContainedSecondary>
                  <ButtonContainedPrimary>
                    <EditIcon />
                  </ButtonContainedPrimary>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(ListUserView);
