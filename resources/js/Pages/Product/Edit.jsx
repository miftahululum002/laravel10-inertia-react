import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
export default function Create({ title, auth, product }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("products.update", data.id));
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

                                <InputLabel htmlFor="price" label="Harga">
                                    Harga
                                </InputLabel>

                                <TextInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={data.price}
                                    className="mt-1 block w-full mb-2"
                                    autoComplete="price"
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    placeholder="Harga"
                                />
                                <InputError
                                    message={errors.price}
                                    className="mt-2"
                                />
                                <InputLabel
                                    htmlFor="description"
                                    label="description"
                                >
                                    Deskripsi
                                </InputLabel>
                                <TextAreaInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mb-2 p-2.5"
                                    id="description"
                                    name="description"
                                    placeholder="Deskripsi"
                                    value={data.description}
                                    onChange={(e) => {
                                        setData("description", e.target.value);
                                    }}
                                ></TextAreaInput>
                                <InputError
                                    message={errors.description}
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
                                        href={route("products.index")}
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
