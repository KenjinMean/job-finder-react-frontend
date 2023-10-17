import React, { Fragment, useEffect } from "react";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useGetUserInfo } from "../../hooks/useProfileRequesthandler";
import ProfileSkeletonLoadingUtil from "../utils/ProfileSkeletonLoading.Util";
import UserInfoView from "../views/UserInfo.View";
import { useStateContext } from "../../context/ContextProvider";
export default function UserProfilePage() {
  const { user, isRefreshingToken } = useStateContext();
  const { data, isLoading, isError, refetch } = useGetUserInfo(user.id);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  useEffect(() => {
    if (!isRefreshingToken) {
      refetch();
    }
  }, []);
  console.log(isRefreshingToken);
  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <main className="max-w-2xl m-5 mx-auto">
        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
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

{
  /* {editActive && (
          <div className="relative z-10 flex">
            <EditUserInfo
              handleEdit={handleEdit}
              fetchUserInfo={fetchUserInfo}
              handleUserInfoUpdate={handleUserInfoUpdate}
            />
          </div>
        )} */
}
