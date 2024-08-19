<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private $_directory = 'Product';
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'products' => Product::all(),
        ];
        return Inertia::render($this->_directory . '/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render($this->_directory . '/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
        ]);
        $data = [
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
        ];

        Product::create($data);
        sleep(1);
        return redirect()->route('products.index')->with('message', 'Product Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $data = ['product' => $product];
        return Inertia::render($this->_directory . '/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required',
            'description' => 'required'
        ]);

        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->save();
        sleep(1);
        return redirect()->route('products.index')->with('message', 'Product Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        sleep(1);
        return redirect()->route('products.index')->with('message', 'Product Delete Successfully');
    }
}
