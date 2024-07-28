import React from "react";
import { useNavigate } from "react-router-dom";

import CompanyForm from "../forms/Company.Form";
import BackButtonUi from "../../UI/Buttons/BackButton.Ui";
import { useApiUserCompanyStore } from "../../../hooks/useApiUserCompanies";

export default function UserAddCompanyPage() {
  const navigate = useNavigate();
  const { isLoading, mutate: storeCompanyDetailsMutation } =
    useApiUserCompanyStore();

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    storeCompanyDetailsMutation(formData);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <BackButtonUi onClick={handleBackClick} />
      <CompanyForm onSubmit={onSubmit} disabled={isLoading} />
    </div>
  );
}
