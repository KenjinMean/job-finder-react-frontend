import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import UserCompanyCard from "./UserCompanyCard/UserCompanyCard";
import { userRoutes } from "../../constants/RoutesPath.Constants";
import { useApiUserCompaniesFetch } from "../../hooks/useApiUserCompanies";

export default function UserCompaniesPage() {
  const { data: userCompanies } = useApiUserCompaniesFetch();

  return (
    <div className="px-5 sm:px-0">
      <div className="flex flex-col justify-end sm:flex-row">
        <Button
          variant="contained"
          component={Link}
          to={userRoutes.userAddCompanyPage}
          startIcon={<AddIcon />}
        >
          Add Company
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {userCompanies.map((company) => {
          return <UserCompanyCard key={company.id} company={company} />;
        })}
      </div>
    </div>
  );
}
