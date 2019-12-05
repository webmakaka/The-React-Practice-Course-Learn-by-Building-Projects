import React from 'react';
import UpdateSiteInfo from 'components/user/admin/UpdateSiteInfo';
import UserLayout from 'hoc/UserLayout';

const ManageSite = () => {
  return (
    <div>
      <UserLayout>
        <UpdateSiteInfo />
      </UserLayout>
    </div>
  );
};

export default ManageSite;
