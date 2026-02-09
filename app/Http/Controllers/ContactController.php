<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\ContactSendRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use App\Mail\Contact;

// https://laravel.com/docs/11.x/mail
class ContactController extends Controller{

    public function __construct(){     
        parent::__construct();
    }

    public function index(){

        $user = auth()->user();

        $config = getDomainConfig(['email','social','contact','domain']);

        $status = session('status');

        $shelter = getDomainConfig();

        return Inertia::render('Contact/Contact',compact('user','config','status','shelter'));
    }

    public function contactSend(ContactSendRequest $request){

        $values = $request->validated();

        if(
            isset($values['email']) && !empty($values['email']) &&
            isset($values['message']) && !empty($values['message'])
        ){

            $config = getDomainConfig(['email','social']);
            $toEmail = $config['email']['contact']['address'] ?? '';
            $toName = $config['email']['contact']['name'] ?? '';

            $to = [
                [                    
                    'email' => $toEmail,
                    'name' => $toName                     
                ]
            ];
            
            try{
                Mail::to($to)->send(new Contact($values));            
            }
            catch(\Exception $e){
                echo '<pre>'.print_r($e->getMessage(),true).'</pre>';die;
                throw ValidationException::withMessages([
                    'error' => [trans('mail.contact.error')]
                ]);
            }
        }
        else{
            throw ValidationException::withMessages([
                'error' => [trans('mail.contact.error')]
            ]);
        }
        
        return back();
    }
}