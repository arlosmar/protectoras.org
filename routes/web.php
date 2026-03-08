<?php

//https://laravel.com/docs/11.x/routing#the-default-route-files

use App\Http\Controllers\{
    Controller,
    HomeController,
    AnimalController,
    NewsController,
    ContactController,
    SettingsController,
    ExportController
};
use App\Http\Controllers\Auth\{AuthenticatedSessionController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

use App\Mail\Contact;

use App\Events\{EventBroadcast};
//use App\Notifications\Notifications;

/*
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
*/

Route::get('/versions', [HomeController::class, 'versions'])->name('versions');
Route::get('/php', [HomeController::class, 'php'])->name('php');

// react to telegram
Route::post('/log-telegram', [Controller::class, 'logTelegram'])->name('log.telegram');

//Route::get('/export', [ExportController::class, 'export'])->name('export');

// to preview email template without sending it
Route::get('/email/{template}', [HomeController::class, 'email'])->name('email');
Route::get('/mails/{type}', function ($type) {

    $values = [
        'name'  => 'test',
        'email' => 'test@test.com',
        'message'   => 'test'
    ];

    if($type === 'contact'){
        return new App\Mail\Contact($values);
    }
});

$landingIds = [/*'local',*/'demolanding','protectoras'];
$domainId = getDomainConfig('id');

// Register landing routes ONLY if we are on a landing domain OR running in console (for Ziggy to find them)
if(app()->runningInConsole() || in_array($domainId, $landingIds)){
    
    Route::get('/', [HomeController::class, 'landing'])->name('landing');
    Route::get('/ca', [HomeController::class, 'landing'])->defaults('lang','ca')->name('landing.ca');
    Route::get('/es', [HomeController::class, 'landing'])->defaults('lang','es')->name('landing.es');
    Route::get('/en', [HomeController::class, 'landing'])->defaults('lang','en')->name('landing.en');

    Route::get('/shelters', [HomeController::class, 'landingSection'])->defaults('section','shelters')->name('landing.shelters');    
    Route::get('/info', [HomeController::class, 'landingSection'])->defaults('section','info')->name('landing.info');
    //Route::get('/comments', [HomeController::class, 'landingSection'])->defaults('section','comments')->name('landing.comments');    
    Route::get('/social', [HomeController::class, 'landingSection'])->defaults('section','social')->name('landing.social');
    Route::get('/partners', [HomeController::class, 'landingSection'])->defaults('section','partners')->name('landing.partners');    
    
    Route::get('/legal', [HomeController::class, 'landingSection'])->defaults('section','legal')->name('landing.legal');    
    Route::get('/terms', [HomeController::class, 'landingSection'])->defaults('section','terms')->name('landing.terms');    
    Route::get('/policy', [HomeController::class, 'landingSection'])->defaults('section','policy')->name('landing.policy');    
    Route::get('/cookies', [HomeController::class, 'landingSection'])->defaults('section','cookies')->name('landing.cookies');    

    Route::get('/contact', [ContactController::class, 'indexLanding'])->name('contact.landing');
    Route::post('/contact', [ContactController::class, 'contactSendLanding'])->name('contact.landing.send');

    // any other we get 404 not found
    Route::any('{any}', function () {
        abort(404);
    })->where('any', '.*');

}
else{

    // for every subdomain

    Route::get('/contact', [ContactController::class, 'index'])->name('contact');
    Route::post('/contact', [ContactController::class, 'contactSend'])->name('contact.send');

    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/ca', [HomeController::class, 'index'])->defaults('lang','ca')->name('home.ca');
    Route::get('/es', [HomeController::class, 'index'])->defaults('lang','es')->name('home.es');
    Route::get('/en', [HomeController::class, 'index'])->defaults('lang','en')->name('home.en');

    Route::get('/collaboration', [HomeController::class, 'section'])->defaults('section','collaboration')->name('home.collaboration');
    Route::get('/social', [HomeController::class, 'section'])->defaults('section','social')->name('home.social');
    Route::get('/partners', [HomeController::class, 'section'])->defaults('section','partners')->name('home.partners');
    Route::get('/info', [HomeController::class, 'section'])->defaults('section','info')->name('home.info');

    Route::get('/legal', [HomeController::class, 'section'])->defaults('section','legal')->name('legal');    
    Route::get('/terms', [HomeController::class, 'section'])->defaults('section','terms')->name('terms');    
    Route::get('/policy', [HomeController::class, 'section'])->defaults('section','policy')->name('policy');    
    Route::get('/cookies', [HomeController::class, 'section'])->defaults('section','cookies')->name('cookies');    

    Route::get('/animals/{section?}/{subsection?}/{page?}', [AnimalController::class, 'index'])->name('animals');
    Route::get('/animalsget', [AnimalController::class, 'getList'])->name('animals.get');

    Route::get('/news/{page?}', [NewsController::class, 'index'])->name('news');
    Route::get('/newsget', [NewsController::class, 'getList'])->name('news.get');

    Route::put('settings/language', [SettingsController::class, 'languageUpdate'])->name('language.update');

    // for mobile app. persistent login
    Route::get('persistentlogin', [AuthenticatedSessionController::class, 'persistentLogin']);

    require __DIR__.'/auth.php';
}