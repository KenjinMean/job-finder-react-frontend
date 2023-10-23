import React, { Fragment } from "react";
import UserInfoView from "../views/UserInfo.View";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useStateContext } from "../../context/ContextProvider";
import { useGetUserInfo } from "../../hooks/useProfileRequesthandler";
import ProfileSkeletonLoadingUtil from "../utils/ProfileSkeletonLoading.Util";

export default function UserProfilePage() {
  const { user } = useStateContext();
  const { data, isLoading, isError } = useGetUserInfo(user.id);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <main className="max-w-2xl m-5 mx-auto">
        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
          {isError}
          {isLoading ? (
            <ProfileSkeletonLoadingUtil />
          ) : (
            <div>
              <UserInfoView data={data} handleEdit={handleEdit} />
            </div>
          )}
        </section>
      </main>
    </Fragment>
  );
}
