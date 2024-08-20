<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'blogs' => Blog::all(),
            'title' => 'Blog',
        ];
        return Inertia::render('Blog/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['title'] = 'Tambah Blog';
        return Inertia::render('Blog/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'content'   => 'required'
        ]);
        Blog::create([
            'title'     => $request->title,
            'content'   => $request->content
        ]);
        sleep(1);
        return redirect()->route('blogs.index')->with('message', 'Blog Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        $data = [
            'blog' => $blog,
        ];
        return Inertia::render('Blog/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required'
        ]);

        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->save();
        sleep(1);
        return redirect()->route('blogs.index')->with('message', 'Blog Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        sleep(1);
        return redirect()->route('blogs.index')->with('message', 'Blog Delete Successfully');
    }
}
