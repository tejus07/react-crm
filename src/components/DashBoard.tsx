export function DashBoard() {
    return (
        <>
            <div className="row flex-row p-6">
                <div className="text-2xl font-bold">Dashboard
                </div>
            </div>
            <div className="row flex-row px-6">
                <div className="col w-2/3">
                    <div className="custom-background flex-col p-4">
                        <div>
                            icon
                        </div>
                        <div>
                            Total Orders
                        </div>
                        <div className="justify-between">
                            <span className="text-2xl font-bold">75</span>
                            <span className="text-2xl font-bold accent-green-400">3%</span>
                        </div>
                    </div>
                </div>
                <div className="col w-1/3">
                    <div className="custom-background flex-col p-4">
                        <div>
                            icon
                        </div>
                        <div>
                            Total Orders
                        </div>
                        <div className="justify-between">
                            <span className="text-2xl font-bold">75</span>
                            <span className="text-2xl font-bold accent-green-400">3%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}