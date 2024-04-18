/* eslint-disable @next/next/no-img-element */
import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useUserAuth } from "../_utils/auth-context";

export default function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <div>
        <Navbar />
        <div className="advisor-parent-container">
          <div className="advisor-container">
            <h2 className="advisor-container-heading">Financial Advisors</h2>

            <div className="advisor-card-container">
              <div className="advisor-card">
                <img src="/pic-2.jpg" alt="" />
                <p>Keith Piper</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-3.jpg" alt="" />
                <p>Andrew Scott</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-4.jpg" alt="" />
                <p>Abigail Nolan</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-1.jpg" alt="" />
                <p>Faith Morris</p>
              </div>
            </div>
          </div>

          <div className="advisor-container">
            <h2 className="advisor-container-heading">Legal Advisors</h2>

            <div className="advisor-card-container">
              <div className="advisor-card">
                <img src="/pic-2.jpg" alt="" />
                <p>Keith Piper</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-3.jpg" alt="" />
                <p>Andrew Scott</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-4.jpg" alt="" />
                <p>Abigail Nolan</p>
              </div>

              <div className="advisor-card">
                <img src="/pic-1.jpg" alt="" />
                <p>Faith Morris</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
