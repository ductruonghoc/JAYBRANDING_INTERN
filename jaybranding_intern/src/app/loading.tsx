export default function Loading(props?: boolean) {
    return (
        <div className="animate-pulse">
            {props}
            <div
                className="container w-screen max-w-full grid grid-rows-1 grid-cols-12">
                <div
                    className="col-span-10 p-3">
                </div>
            </div>
        </div>
    );
}