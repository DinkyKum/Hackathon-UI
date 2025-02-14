import React from "react";
import CompanyCard from "./CompanyCard";
import { useEffect } from "react";

const Home =  () => {


  const companies = [
    {
      imageUrl: "/placeholder.svg",
      name: "Acme Corporation",
      registrationNo: "REG123456",
      address: "123 Main St, Anytown, AT 12345",
      email: "info@acmecorp.com",
    },
    {
      imageUrl: "/placeholder.svg",
      name: "TechNova Solutions",
      registrationNo: "REG789012",
      address: "456 Tech Ave, Innovation City, IC 67890",
      email: "contact@technova.com",
    },
    {
      imageUrl: "/placeholder.svg",
      name: "GreenLeaf Enterprises",
      registrationNo: "REG345678",
      address: "789 Eco Blvd, Greenville, GV 34567",
      email: "hello@greenleaf.com",
    },
  ];



  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </main>
  );
};

export default Home;
