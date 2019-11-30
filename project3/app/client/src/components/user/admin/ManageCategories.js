import React from 'react';
import UserLayout from 'hoc/UserLayout';
import ManageBrands from 'components/user/admin/ManageBrands';
import ManageWoods from 'components/user/admin/ManageWoods';

const ManageCategories = () => {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWoods />
    </UserLayout>
  );
};

export default ManageCategories;
