import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-brand-gray-700 border-b border-brand-gray-600">
            <Logo />
        </header>
    )
}