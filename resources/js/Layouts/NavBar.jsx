import NavLink from "@/Components/NavLink";

export default function NavBar() {
    return (
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <NavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
            >
                Dashboard
            </NavLink>
            <NavLink
                href={route("blogs.index")}
                active={route().current("blogs.index")}
            >
                Blog
            </NavLink>
            <NavLink
                href={route("products.index")}
                active={route().current("products.index")}
            >
                Produk
            </NavLink>
            <NavLink
                href={route("contacts.index")}
                active={route().current("contacts.index")}
            >
                Kontak
            </NavLink>
        </div>
    );
}
