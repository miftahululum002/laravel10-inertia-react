import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Products({ title, contacts, auth }) {
    const { delete: destroy } = useForm({});
    const deleteData = (id) => {
        const warning = confirm("Apakah Anda yakin untuk menghapus data?");
        if (!warning) {
            return;
        }
        destroy(route("contacts.destroy", id));
    };

    return (
        <>
            <Head title={title} />
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {title}
                    </h2>
                }
            >
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2">
                            <Link href={route("contacts.create")}>
                                <PrimaryButton className="py-1 px-4 bg-blue-500 mb-2 rounded-none">
                                    Tambah
                                </PrimaryButton>
                            </Link>
                            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                                <thead className="text-slate-500">
                                    <tr>
                                        <th>No</th>
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            Nama
                                        </th>
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            Email
                                        </th>
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            No HP
                                        </th>
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            Opsi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((data, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <td>{index + 1}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {data.name}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {data.email}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {data.phone_number}
                                            </td>
                                            <td className="text-center">
                                                <div className="flex">
                                                    <Link
                                                        className="px-4 py-1 bg-blue-500 text-white rounded-none"
                                                        href={route(
                                                            "contacts.edit",
                                                            data.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <DangerButton
                                                        onClick={() =>
                                                            deleteData(data.id)
                                                        }
                                                        className="rounded-none"
                                                    >
                                                        Hapus
                                                    </DangerButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
