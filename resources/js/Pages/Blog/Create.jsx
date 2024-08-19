import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Create({ auth }) {
    const [title, setTitle] = useState("");
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Blog
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2">
                        <form>
                            <InputLabel htmlFor="title" label="Title">
                                Title
                            </InputLabel>
                            <TextInput
                                name="title"
                                id="title"
                                value={title}
                                placeholder="Title"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
