

export default function Header () {
    return (
        <header className="flex justify-between w-full p-2 md:p-4 relative box-border before:w-[16px] before:h-[16px] before:border-t-2 before:border-l-2 before:top-0 before:left-0 before:absolute before:border-white/25 after:w-[16px] after:h-[16px] after:top-0 after:right-0 after:border-t-2 after:border-r-2 after:absolute after:border-white/25">
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