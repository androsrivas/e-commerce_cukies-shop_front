import React from "react";
import AdminBreadcrumb from "./atoms/AdminBreadcrumb";

function AdminHeader() {
  return (
    <header className="flex flex-col gap-5">
      <section className="flex items-center space-x-2">
        <div>Barra de cerca</div>
        <div>Icones admin</div>
      </section>
      <section className="flex items-center space-x-4">
        <AdminBreadcrumb />
      </section>
    </header>
  )
}

export default AdminHeader