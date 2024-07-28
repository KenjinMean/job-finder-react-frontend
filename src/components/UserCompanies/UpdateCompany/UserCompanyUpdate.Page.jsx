import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useApiUserCompanyUpdate,
  useApiUserCompanyDetailsFetch,
} from "../../../hooks/useApiUserCompanies";
import CompanyForm from "../forms/Company.Form";
import BackButtonUi from "../../UI/Buttons/BackButton.Ui";

export default function UserCompanyUpdatePage() {
  const { companyId } = useParams();
  const navigate = useNavigate();

  const { data: companyDetails } = useApiUserCompanyDetailsFetch(companyId);
  const { isLoading, mutate: updateCompanyDetailsMutation } =
    useApiUserCompanyUpdate();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    for (const key in data) {
      formData.append(key, data[key]);
    }

    updateCompanyDetailsMutation([companyId, formData]);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <BackButtonUi onClick={handleBackClick} />
      <CompanyForm
        onSubmit={onSubmit}
        defaultValues={companyDetails}
        disabled={isLoading}
      />
    </div>
  );
}
