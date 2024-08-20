import NavLink from "@/Components/NavLink";

const links = [
    { label: "Dashboard", route: "dashboard" },
    { label: "Blog", route: "blogs.index" },
    { label: "Produk", route: "products.index" },
    { label: "Siswa", route: "students.index" },
    { label: "Kontak", route: "contacts.index" },
];
export default function NavBar() {
    return (
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex dark:text-secondary">
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    href={route(link.route)}
                    active={route().current(link.route)}
                >
                    {link.label}
                </NavLink>
            ))}
            <div className="flex mt-3 pt-3">
                <span className="mr-2 text-sm text-slate-500">Light</span>
                <input type="checkbox" className="hidden" id="dark-toggle" />
                <label htmlFor="dark-toggle">
                    <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                    </div>
                </label>
                <span className="ml-2 text-sm text-slate-500">Dark</span>
            </div>
        </div>
    );
}
