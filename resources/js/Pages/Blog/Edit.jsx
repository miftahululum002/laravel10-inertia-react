import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
export default function Edit({ auth, blog }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        id: blog.id,
        title: blog.title,
        content: blog.content,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("blogs.update", data.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Blog
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2">
                        <form onSubmit={handleSubmit}>
                            <InputLabel htmlFor="title" label="Title">
                                Title
                            </InputLabel>
                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full mb-2"
                                autoComplete="title"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                                placeholder="Title"
                            />
                            <InputLabel htmlFor="content" label="content">
                                Konten
                            </InputLabel>
                            <textarea
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                id="content"
                                name="content"
                                placeholder="Konten"
                                required
                                value={data.content}
                                onChange={(e) => {
                                    setData("content", e.target.value);
                                }}
                            ></textarea>
                            <PrimaryButton
                                className="mt-2"
                                disabled={processing}
                            >
                                Simpan
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
