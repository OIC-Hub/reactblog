import React from "react";

const DashboardContent = () => {
  const data = [
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
    {
      id: 1,
      name: "Ade",
      email: "ade@u.com",
      phone: "+2348123232323",
    },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <div key={index}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DashboardContent;
