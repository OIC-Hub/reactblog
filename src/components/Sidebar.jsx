import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside className="bg-green-950 text-white flex flex-col h-screen">
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/role">Role Management</NavLink>
        <NavLink to="/admin/user">User Management</NavLink>
        <NavLink to="/admin/transaction">Transaction</NavLink>
        <NavLink to="/admin/settings">Setting</NavLink>
      </aside>
    </>
  );
}

export default Sidebar