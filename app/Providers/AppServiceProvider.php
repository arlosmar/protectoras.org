<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Auth\Notifications\{VerifyEmail,ResetPassword};
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Move the default PHP translations to lang/backend so they don't clutter the root
        //app()->useLangPath(base_path('lang/backend'));
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // share logo with app layout
        \Illuminate\Support\Facades\View::composer('app', function ($view) {
            $shelter = getDomainConfig();
            $logo = isset($shelter['files']['logo']) ? $shelter['files']['bucket'].'/logos/'.$shelter['files']['logo'] : url('storage/protectoras.png');
            $favicon = isset($shelter['files']['favicon']) ? $shelter['files']['bucket'].'/logos/'.$shelter['files']['favicon'] : url('storage/protectoras.png');
            $view->with('logo', $logo)->with('favicon', $favicon);
        });

        // Load base global JSON translations
        \Illuminate\Support\Facades\Lang::addJsonPath(base_path('lang/frontend/global'));

        // Load domain-specific JSON translations (overrides the global ones if the key exists)
        $domainId = getDomainTranslation();

        if(isset($domainId) && !empty($domainId)){
            \Illuminate\Support\Facades\Lang::addJsonPath(base_path("lang/frontend/{$domainId}"));
        }

        // overwrite redirect if authenticated
        // redirect to when going to /login and already logged in
        // /vendor/laravel/framework/src/Illuminate/Auth/Middleware/RedirectIfAuthenticated.php
        /*
        public function handle(Request $request, Closure $next, string ...$guards): Response
        {
            $guards = empty($guards) ? [null] : $guards;

            foreach ($guards as $guard) {
                if (Auth::guard($guard)->check()) {   

                    $user = auth()->user();

                    if(isset($user->admin) && !empty($user->admin)){             
                        $path = 'admin';
                    }
                    else{
                        $path = 'intranet';
                    }
                    return redirect()->route($path);
                    //return redirect($this->redirectTo($request));
                }
            }

            return $next($request);
        }
        */
        redirectIfAuthenticated::redirectUsing(function () {
            
            $user = auth()->user();

            if(isset($user->admin) && !empty($user->admin)){             
                $path = 'admin';
            }
            else{
                $path = 'intranet';
            }

            return route($path);
        });

        // to customize the verify email

        // old version => vendor/laravel/framework/src/Illuminate/Auth/Notifications/VerifyEmail.php
        // buildMailMessage

        // the new templates are on 
        // resources/views/vendor/mail/html/message.blade.php
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
        
            return (new MailMessage)
                ->subject(trans('mail.verify.subject'))
                ->greeting(trans('mail.verify.greeting'))
                ->line(trans('mail.verify.sentence1'))
                ->action(trans('mail.verify.button'), $url)
                ->line(trans('mail.verify.sentence2'))
                ->salutation(trans('mail.verify.salutation'));
        });

        // customize forgot-password email
        ResetPassword::toMailUsing(function (object $notifiable, string $token) {

            $url = url(route('password.reset', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        
            return (new MailMessage)
                ->subject(trans('mail.reset-password.subject'))
                ->greeting(trans('mail.reset-password.greeting'))
                ->line(trans('mail.reset-password.sentence1'))
                ->action(trans('mail.reset-password.button'),$url)
                ->line(trans('mail.reset-password.sentence2',['count' => config('auth.passwords.users.expire')]))
                ->line(trans('mail.reset-password.sentence3'))
                ->salutation(trans('mail.reset-password.salutation'));
        });
    }
}
