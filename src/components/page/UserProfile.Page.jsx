import React, { Fragment } from "react";
import UserInfoView from "../views/UserInfo.View";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useStateContext } from "../../context/ContextProvider";
import { useGetUserInfo } from "../../hooks/useProfileRequesthandler";

export default function UserProfilePage() {
  const { user } = useStateContext();
  const { data, isLoading, isError } = useGetUserInfo(user.id);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <main>
        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
          <UserInfoView data={data} handleEdit={handleEdit} />
        </section>
      </main>
    </Fragment>
  );
}
