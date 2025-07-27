import { Button } from "../ui/button";

function ContentArea() {
    return (
        <main className="flex-1">
            <div className="border-b p-3 flex justify-between items-center">
                <div className="text-lg font-semibold">
                    Projects
                </div>
                <Button
                    onClick={() => {console.log("Creating new project...")}}
                >New Project</Button>
            </div>
        </main>
    )
}

export default ContentArea;