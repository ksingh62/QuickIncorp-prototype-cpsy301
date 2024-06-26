/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./page.css";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <nav className="nav-bar">

        <Link href={`/`} className="sidebar-logo-container">
          <img src="/logo-mobile.svg" alt="" />
          <p>QuickIncorp</p>
        </Link>
        <div>Solutions</div>
        <div>Pricing</div>
        <div>Library</div>
        <div>About Us</div>
        <div>FAQs</div>
        <div className="button-container">
          <Link href={`/prototype`} className="user-info-button">Login</Link>
          <Link href={`/prototype`} className="bg-sky-500 rounded-xl p-2">Get Started!</Link>
        </div>
      </nav>

      <div className="landing-page-container">
        <div className="content-container">
          <h1 className="landing-page-heading">
            Start your Business today with QuickIncorp
          </h1>
          <p className="landing-page-para-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi eveniet nulla assumenda molestiae enim impedit,
            consequuntur quae voluptas fugiat. Nam voluptatum enim dolorem
            doloremque vero rem veniam. Harum, cumque!
          </p>
          <p className="landing-page-para-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi eveniet nulla assumenda molestiae enim impedit,
            consequuntur quae voluptas fugiat. Nam voluptatum enim dolorem
            doloremque vero rem veniam. Harum, cumque!
          </p>
        </div>
        <div className="landing-page-image-container">
          <img src="/bg.svg" alt="" />
        </div>
      </div>
    </>
  );
}
