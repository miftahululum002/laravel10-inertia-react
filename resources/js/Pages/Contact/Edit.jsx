import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
export default function Create({ title, auth, contact }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone_number: contact.phone_number,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("contacts.update", data.id));
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
                            <form onSubmit={handleSubmit}>
                                <InputLabel htmlFor="name" label="Nama">
                                    Nama
                                </InputLabel>
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full mb-2"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Nama"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />

                                <InputLabel htmlFor="email" label="Email">
                                    Email
                                </InputLabel>

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full mb-2"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="Email"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <InputLabel
                                    htmlFor="phone_number"
                                    label="phone_number"
                                >
                                    No HP
                                </InputLabel>
                                <TextInput
                                    id="phone_number"
                                    type="text"
                                    name="phone_number"
                                    value={data.phone_number}
                                    className="mt-1 block w-full mb-2"
                                    autoComplete="phone_number"
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                    placeholder="No HP"
                                />

                                <InputError
                                    message={errors.phone_number}
                                    className="mt-2"
                                />
                                <div className="flex">
                                    <PrimaryButton
                                        className="px-4 py-1 rounded-none mt-1"
                                        disabled={processing}
                                    >
                                        Simpan
                                    </PrimaryButton>
                                    <Link
                                        href={route("contacts.index")}
                                        className="py-1 px-4 bg-secondary mt-1 rounded-none"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
