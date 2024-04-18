import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <div>
        <Navbar />
        <div className="advisor-container">
          
        </div>
      </div>
    </div>
  );
}
