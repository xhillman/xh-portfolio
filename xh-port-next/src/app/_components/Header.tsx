

export default function Header () {
    return (
        <header className=" flex justify-between w-full p-2 md:p-4 box-border">
            <h2 className="max-w-1/2">XAVIER HILLMAN</h2>
            <nav>
                <ul className="flex flex-col w-fit text-xs md:text-base">
                    <li className="mb-2">01 Home</li>
                    <li className="mb-2">02 Projects</li>
                    <li>03 About</li>
                </ul>
            </nav>
        </header>
    )
}