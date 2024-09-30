import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occured.";
  let message = "Something went wrong!";

  if (error.status == 404) {
    message = "resource not found";
  }
  if (error.status == 500) {
    message = error.data.message;
  }

  return (
    <PageContent title={title}>
      <div>{message}</div>
    </PageContent>
  );
}

export default ErrorPage;
