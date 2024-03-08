import Account from "../components/account/Account";

export default function Navbar() {
    return (
        <div className={"border-white border-y-2 p-4 flex items-center justify-between"}>
            <div>
                <h2>Openchase</h2>
            </div>
            <div className={"flex items-center justify-center gap-3"}>
                <p>Experiences</p>
                <Account/>
            </div>
        </div>
    )
}