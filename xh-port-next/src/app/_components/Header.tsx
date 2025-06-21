

export default function Header () {
    return (
        <header className="flex justify-between w-full p-4 relative box-border t-corner-brackets b-corner-brackets bg-white/2">
            <h2 className="max-w-1/2"><span className="text-blue-500/50">*</span>XAVIER HILLMAN</h2>
            <nav>
                <ul className="flex flex-col w-fit ">
                    <li className="mb-4">01 Home</li>
                    <li className="mb-4">02 Projects</li>
                    <li>03 About</li>
                </ul>
            </nav>
        </header>
    )
}