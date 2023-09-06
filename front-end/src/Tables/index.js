import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import TablesForm from "./TablesForm";

function Tables() {
  return (
    <>
      <h2>New Table</h2>
      <TablesForm />
    </>
  );
}

export default Tables;