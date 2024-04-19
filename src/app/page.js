"use client"
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div>Landing page</div>
      <Link href='/prototype'>Log in</Link>
    </>
  );
}

export default page;
