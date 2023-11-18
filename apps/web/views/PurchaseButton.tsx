"use client";
import Input from "@/components/Input";
import React, { useState } from "react";

const PurchaseButton = () => {
  const [form, setForm] = useState({
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleOnSubmit() {
    console.log("test");
  }
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
      <Input
        id={"amount"}
        placeholder={"Enter Amount"}
        title={"Enter an amount:"}
        value={form.amount}
        onChange={handleChange}
        type={"number"}
      />

      <input
        type="submit"
        value="Buy Now"
        className={`py-4 px-8 rounded-2xl font-[switzer] w-full font-bold uppercase ${
          form.amount !== ""
            ? "text-cNeutral-900 bg-[#2DE481]"
            : "bg-[#FFFFFF1A] text-cNeutral-100/50"
        }`}
      />
    </form>
  );
};

export default PurchaseButton;
