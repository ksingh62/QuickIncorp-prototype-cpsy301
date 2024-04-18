/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-options-container">
        <div className="sidebar-logo-container">
          <img src="/logo-mobile.svg" alt="" />
          <p>QuickIncorp</p>
        </div>

        <div className="sidebar-options">
          <div className="sidebar-option ">
            <img src="/icon-board.svg" alt="" />
            <p>Register a Company</p>
          </div>

          <div className="sidebar-option active-sidebar-option">
            <img src="/icon-board.svg" alt="" />
            <p>Book a Session with advisor</p>
          </div>

          <div className="sidebar-option">
            <img src="/icon-board.svg" alt="" />
            <p>Tax Management</p>
          </div>

          <div className="sidebar-option">
            <img src="/icon-board.svg" alt="" />
            <p>Inbox</p>
          </div>
        </div>
      </div>
      <div className="sidebar-help-hide-container">
        <div className="sidebar-help-container">
          <div className="sidebar-option">
            <img src="/icon-board.svg" alt="" />
            <p>Help & Support</p>
          </div>

          <div className="sidebar-option">
            <img src="/icon-board.svg" alt="" />
            <p>Settings</p>
          </div>
        </div>
        <div className="hide-container">
          <div className="sidebar-option">
            <img src="/icon-hide-sidebar.svg" alt="" />
            <p>Hide Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
