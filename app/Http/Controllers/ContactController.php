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

        $status = session('status');

        $shelter = getDomainConfig();

        if(!isset($shelter['id'])){
            $shelterId = '';
        }
        else{
            if($shelter['id'] === 'local' || $shelter['id'] === 'demo'){
                $shelterId = 'spax';
            }
            else{
                $shelterId = $shelter['id'];
            }
        }

        return Inertia::render('Contact/'.$shelterId.'/Contact',compact('user','status','shelter'));
    }

    public function indexLanding(){

        $shelter = getDomainConfig(['email','social','contact','domain'],'protectoras.org');

        $status = session('status');
        
        return Inertia::render('Landing/Contact',compact('shelter','status'));
    }

    public function contactSend(ContactSendRequest $request){

        $values = $request->validated();

        if(
            isset($values['email']) && !empty($values['email']) &&
            isset($values['message']) && !empty($values['message'])
        ){            

            if(isDomain(['localhost','demo'])){                
                $config = getDomainConfig('email','protectoras.org');                
            }
            else{
                $config = getDomainConfig('email');
            }

            $toEmail = $config['contact']['address'] ?? '';
            $toName = $config['contact']['name'] ?? '';

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
                //echo '<pre>'.print_r($e->getMessage(),true).'</pre>';die;
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

    public function contactSendLanding(ContactSendRequest $request){

        $values = $request->validated();

        if(
            isset($values['email']) && !empty($values['email']) &&
            isset($values['message']) && !empty($values['message'])
        ){

            $config = getDomainConfig('email','protectoras.org');
            $toEmail = $config['contact']['address'] ?? '';
            $toName = $config['contact']['name'] ?? '';

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
                //echo '<pre>'.print_r($e->getMessage(),true).'</pre>';die;
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