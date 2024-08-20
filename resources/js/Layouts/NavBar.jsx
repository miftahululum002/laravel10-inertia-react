import NavLink from "@/Components/NavLink";

const links = [
    { label: "Dashboard", route: "dashboard" },
    { label: "Blog", route: "blogs.index" },
    { label: "Produk", route: "products.index" },
    { label: "Kontak", route: "contacts.index" },
];
export default function NavBar() {
    return (
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    href={route(link.route)}
                    active={route().current(link.route)}
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
}
