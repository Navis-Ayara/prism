import Sidebar from "@/components/dashboard/Sidebar";
import ContentArea from "@/components/dashboard/Content";

function Dashboard() {
    return (
        <div className="flex w-screen h-screen box-border">
            <Sidebar />
            <ContentArea />
        </div>
    )
}

export default Dashboard;