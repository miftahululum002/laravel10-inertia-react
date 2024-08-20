<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    private $_directory = 'Contact';
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'contacts' => Contact::all(),
            'title' => 'Kontak'
        ];
        return Inertia::render($this->_directory . '/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = ['title' => 'Kontak'];
        return Inertia::render($this->_directory . '/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|unique:contacts,email',
            'phone_number'  => 'required'
        ]);
        Contact::create([
            'name'          => $request->name,
            'email'         => $request->email,
            'phone_number'  => $request->phone_number
        ]);
        sleep(1);
        return redirect()->route('contacts.index')->with('message', 'Data berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        $data = [
            'title'     => 'Edit Kontak',
            'contact'   => $contact
        ];
        return Inertia::render($this->_directory . '/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:contacts,email,' . $contact->id . ',id',
            'phone_number' => 'required'
        ]);

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone_number = $request->phone_number;
        $contact->save();
        sleep(1);
        return redirect()->route('contacts.index')->with('message', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        sleep(1);
        return redirect()->route('contacts.index')->with('message', 'Data berhasil dihapus');
    }
}
