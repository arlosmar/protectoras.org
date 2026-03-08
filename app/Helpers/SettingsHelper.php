<?php 

// https://laravel.com/docs/11.x/localization

use Illuminate\Support\Facades\App;

function isLocalhost(){    

    if(app()->runningInConsole()){
        
        $path = getcwd();

        if(!str_contains($path,'/var/www/protectoras') && !str_contains($path,'/var/www/demo')){
            return true;
        }
    }
    else{

        $myUrl = parse_url(url('/'), PHP_URL_HOST);

        if(str_contains($myUrl,'localhost') || str_contains($myUrl,'192.168') || str_contains($myUrl,'127.0.0.1')){
            return true;
        }
    }
    
    return false;
}

function isDemo(){

    if(app()->runningInConsole()){
        
        $path = getcwd();

        if(str_contains($path,'/var/www/demo')){
            return true;
        }
    }
    else{

        $myUrl = parse_url(url('/'), PHP_URL_HOST);

        if(str_contains($myUrl,'demo.') || str_contains($myUrl,'demolanding.')){
            return true;
        }
    }
    
    return false;
}

function isProd(){

    if(app()->runningInConsole()){
        
        $path = getcwd();

        if(str_contains($path,'/var/www/protectoras')){
            return true;
        }
    }
    else{

        if(!isLocalhost() && !isDemo()){
            return true;
        }
    }
    
    return false;
}

function getCurrentDomain(){
    
    if(!app()->runningInConsole()){
        $myUrl = parse_url(url('/'), PHP_URL_HOST);
    }
    else{
        if(isLocalhost()){
            $myUrl = 'localhost';
        }
        else{
            if(isDemo()){
                $myUrl = 'demo';
            }
            else{
                $myUrl = 'protectoras';
            }
        }
    }

    return $myUrl;
}

function isDomain($list = ''){

    $myUrl = getCurrentDomain();

    if(!is_array($list)){
        $list = [$list];
    }
    
    if(in_array($myUrl,$list)){
        return true;        
    }
    else{
        $mainDomain = env('APP_DOMAIN');
        $subdomain = str_replace('.'.$mainDomain,'',$myUrl);

        if(in_array($subdomain,$list)){
            return true;
        }
    }

    return false;
}

function getDomains(){
    
    $domainsConfig = config('domains');

    $domains = collect($domainsConfig)
    ->filter(function($value, $key){
        return !in_array($value['id'], ['local','demo','demolanding','protectoras']);
    })
    ->map(function($item, $key){
        unset($item['database']);
        return $item;
    })
    ->values()
    ->toArray();

    return $domains;
}

function getDomainConfig($keys = [],$domain = null){

    $result = '';

    if(isset($domain) && !empty($domain)){
        $myUrl = $domain;
    }
    else{
        $myUrl = getCurrentDomain();
    }

    $domains = config('domains');

    // cannot use config/domains because app.php is loaded before
    // in alphabetical order
    if(empty($domains)){
        $domains = require config_path('domains.php');
    }
    
    if(isset($domains) && !empty($domains)){

        $mainDomain = env('APP_DOMAIN');
        $myUrlWithoutDomain = str_replace('.'.$mainDomain,'',$myUrl);
        
        $result = collect($domains)->first(function ($config) use ($myUrl, $mainDomain, $myUrlWithoutDomain) {
            return isset($config['domains']) 
                && is_array($config['domains']) 
                && (in_array($myUrl, $config['domains']) || (!empty($mainDomain) && in_array($myUrlWithoutDomain, $config['domains'])));
        });

        if(!isset($result) || empty($result)){
            return '';
        }

        // local and demo use spax config except id,name,database        
        if((!isset($domain) || empty($domain)) && (isLocalhost() || $myUrl === 'demo')){
            $resultSpax = $domains['spax'];
            $resultId = $result['id'];
            $resultName = $result['name'];
            $resultDatabase = $result['database'];
            $result = $resultSpax;
            $result['id'] = $resultId;
            $result['name'] = $resultName;
            $result['database'] = $resultDatabase;
        }

        $output = [];
        if(isset($keys) && !empty($keys)){

            if(!is_array($keys)){
                $keys = [$keys];
            }
            
            foreach($keys as $key){ 
                
                if(isset($result[$key])){
                    $output[$key] = $result[$key];
                }
                else{
                    if($key === 'domain'){
                        $output[$key] = $myUrl;
                    }
                    else{
                        $output[$key] = '';
                    }
                }
            }

            if(count($keys) === 1){
                $result = $output[$keys[0]];
            }
            else{
                $result = $output;
            }
        }            
    }

    return $result;
}

// equivalent domain id to use for translations
function getDomainTranslation(){
    
    $domainId = getDomainConfig('id');

    // no domain translation if landing
    if(isset($domainId) && in_array($domainId,['protectoras','demolanding'])){
        return null;
    }

    // if local or demo or demolanding use spax
    if(isset($domainId) && in_array($domainId,['local','demo'])){
        $domainId = 'spax';
    }

    return $domainId;
}

// equivalent domain id to use for pages
function getDomainPages(){
    
    $domainId = getDomainConfig('id');

    // if local or demo or demolanding use spax
    if(isset($domainId) && in_array($domainId,['local','demo'])){
        $domainId = 'spax';
    }
    else{
        $ownContent = ['spax'];
        if(!in_array($domainId,$ownContent)){
            $domainId = 'global';
        }
    }

    return $domainId;
}

// get app envs
function getConfig($types = []){

    $return = '';

    try{

        if(!is_array($types)){
            $types = [$types];
        }

        $variables = [];

        $env = null;

        if(isDemo()){
            $env = 'DEMO';
        }
        else{
            if(isProd()){
                $env = 'PROD';
            }
            else{
                $env = 'LOCAL';
            }
        }

        if(isset($env) && !empty($env)){

            if(isset($types) && !empty($types)){

                foreach($types as $type){            
                
                    switch($type){

                        case 'name':
                        case 'env':
                        case 'tag':
                        case 'folder':
                        case 'debug':
                        case 'url':                    
                        case 'database':        
                        case 'email':    
                            $variables[$type] = true;
                            break;
                    }
                }
            }
            else{

                // all
                $variables = [
                    'name' => true,
                    'env' => true,
                    'tag' => true,
                    'folder' => true,
                    'debug' => true,
                    'url' => true,
                    'frontend' => true,
                    'database' => true,
                    'email' => true
                ];
            }

            $tag = 'env';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $variables[$tag] = env('APP_ENV_'.$env,'local');
            }

            $tag = 'tag';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $variables[$tag] = $env;
            }

            $tag = 'folder';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $variables[$tag] = mb_strtolower($env);
            }

            $tag = 'debug';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $variables[$tag] = (bool) env('APP_DEBUG_'.$env,false);   
            }

            $tag = 'url';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $variables[$tag] = env('APP_URL_'.$env,'http://localhost');
            }    
            
            $tag = 'name';
            if(isset($variables[$tag]) && !empty($variables[$tag])){   
                $name = getDomainConfig('name');
                $variables[$tag] = $name;
            }    

            $tag = 'database';

            if(isset($variables[$tag]) && !empty($variables[$tag])){                   
                
                $envDB = $env;
                $host = env('DB_HOST_'.$envDB, '127.0.0.1');
                // $databaseName = getDomainConfig('database');
                
                // if we want to use the demo database on local                    
                if($env === 'LOCAL'){
                    $envDB = 'DEMO';                    
                    $host = env('APP_IP_DEMO','');                  
                }
                
                $databaseName = getDomainConfig('database');

                // Si entramos por la IP directa (AWS bot) no queremos inundar los logs de "1046 No database selected"
                // Devolvemos 200 OK directamente y cortamos la ejecución.
                if (empty($databaseName) && !app()->runningInConsole() && filter_var(request()->getHost(), FILTER_VALIDATE_IP)) {
                    http_response_code(200);
                    die('OK');
                }

                // Si llegamos aquí y databaseName está vacío (ej. subdominio sin registrar en domains.php),
                // fallará a propósito más adelante (Error 1046) para no cruzar/corromper bases de datos.

                $variables[$tag] = [
                    'DB_CONNECTION' => env('DB_CONNECTION_'.$envDB, 'mysql'),
                    'DB_HOST'       => $host,
                    'DB_PORT'       => env('DB_PORT_'.$envDB, '3306'),
                    'DB_DATABASE'   => isset($databaseName) ? $databaseName : '',
                    'DB_USERNAME'   => env('DB_USERNAME_'.$envDB, ''),
                    'DB_PASSWORD'   => env('DB_PASSWORD_'.$envDB, '')
                ];            
            }

            $tag = 'email';
            if(isset($variables[$tag]) && !empty($variables[$tag])){

                // we only differentiate LOCAL for email
                /*
                $mailer = 'MAIL_MAILER_'.$env;
                if($env !== 'LOCAL'){
                    $mailer = 'MAIL_MAILER';
                }
                */

                // use always the same
                $mailer = 'MAIL_MAILER';

                $variables[$tag] = [
                    'APP_URL'       => env('APP_URL_'.$env,'http://localhost'),
                    'MAIL_MAILER'   => env($mailer,'smtp')
                ];            
            }

            if(isset($types) && !empty($types)){
                if(count($types) === 1){
                    $return = $variables[$types[0]];
                }
                else{
                    $return = $variables;
                }
            }
            else{
                $return = $variables;
            }
        }
    }
    catch(\Exception $e){
    }
    
    return $return;
}

// to avoid adding code to TelegramBotHandler.php in case it is change on any update
// vendor/monolog/monolog/src/Monolog/Handler/TelegramBotHandler.php
// method write
/*
change the default code for:
protected function write(LogRecord $record): void
    {
    $message = sendTelegramFromBotHandler();

    if(isset($message) && !empty($message)){
        $this->disableWebPagePreview(true);
        $this->send($message);
    }
}
*/

// to create random token to log in on the app
function getRandomToken(){
    $random = substr(time().'_'.str()->password(100,true,true,false),0,100);
    return $random;
}

function sendTelegramFromBotHandler($record){

    //https://gmblog.org/blog/how-to-use-telegram-for-storing-laravel-logs/    

    // do not send if localhost
    $logDetails = '';
    $url = '';
    if(isset($record['context']) && !empty($record['context'])){  

        $logDetails = print_r($record['context']['exception'],true);

        $split = explode('[trace:',$logDetails);

        $logDetailsInfo = $split[0];
        $logDetailsTrace = $split[1];
        
        // $split[0]
        /*
        [message:protected] => syntax error, unexpected token "try"
        [string:Error:private] => 
        [code:protected] => 0
        [file:protected] => /home/arlosmar/webs/protectoraxativa/app/Http/Controllers/Auth/AdminController.php
        [line:protected] => 48
        */

        preg_match('/\[message.*\n/',$logDetailsInfo,$matchesMessage);
        preg_match('/\[file.*\n/',$logDetailsInfo,$matchesFile);
        preg_match('/\[line.*\n/',$logDetailsInfo,$matchesLine);              

        $message = str_replace('[message:protected] => ','',$matchesMessage[0]);
        $file = str_replace('[file:protected] => ','',$matchesFile[0]);
        $path = str_replace('/public','',getcwd());
        $file = str_replace($path.'/','',$file);
        $line = trim(str_replace('[line:protected] =>','',$matchesLine[0]));
        $trace = str_replace(['Error:private] => Array','[previous:Error:private] =>'],'',$logDetailsTrace);            
        $traceSplit = explode(')',$trace);
        array_pop($traceSplit);
        $trace = implode(')',$traceSplit);
        $traceSubstr = '<pre>'.substr($trace,0,300).'</pre>';            
        $logDetailsFormatted = $traceSubstr;
        
        $url = '* File: '.$file.'* Line: '.$line;
    }

    $log = $record['message'];

    $user = auth()->user();

    $device = (array)json_decode(getCookieValue('device'));

    $date = $record['datetime']->format('Y-m-d H:i:s');

    $message = formatTelegramMessage($date,'Laravel',$url,$user,$device,$log,$logDetailsFormatted,true);

    if(isset($message) && !empty($message)){
        return $message;
    }
    else{
        return '';
    }
}

function formatTelegramMessage($date = '', $from = '',$url = '',$user = null,$device = '',$log = '',$details = '', $filter = false){

    // if filter, filter messages. we do not filter all here because if react
    // it makes no sense to call the server to filter. we can filter in advance and avoid a call
    if(isset($filter) && !empty($filter)){

        if(
            (strpos($log,'could not be found') !== false) ||
            (strpos($log,'Vite manifest not found') !== false) ||
            (strpos($log,'Unable to locate file in Vite') !== false) ||
            (strpos($log,'Unable to preload CSS') !== false)
        ){
            return '';
        }
    }

    if(isset($date) && !empty($date)){
        $logDate = $date;
    }
    else{
        $logDate = gmdate('Y-m-d H:i:s');
    }
    
    $logUser = '';
    if(isset($user) && !empty($user)){
        $logUser = $user->id.'# '.$user->email;
    }

    $logDevice = '';
    if(isset($device) && !empty($device)){
        foreach($device as $deviceItem => $deviceValue){
            $logDevice .= '* '.$deviceItem.': '.$deviceValue.PHP_EOL;
        }
    }

    $info = '<b>[UTC]</b>'.PHP_EOL.$logDate.PHP_EOL.PHP_EOL.'<b>[FROM]</b>'.PHP_EOL.$from.PHP_EOL.PHP_EOL.'<b>[URL]</b>'.PHP_EOL.$url.PHP_EOL.PHP_EOL.'<b>[USER]</b>'.PHP_EOL.$logUser.PHP_EOL.PHP_EOL.'<b>[DEVICE]</b>'.PHP_EOL.$logDevice.PHP_EOL.'<b>[LOG]</b>'.PHP_EOL.$log;

    if(isset($details) && !empty($details)){
        $info .= PHP_EOL.PHP_EOL.'<b>[DETAILS]</b>'.PHP_EOL.$details;
    }

    return $info;
}

function sendTelegram($message){

    $messageString = print_r($message,true);
    $messageEncoded = urlencode($messageString);

    $botToken = env('TELEGRAM_API_KEY');
    $channel = env('TELEGRAM_CHANNEL');         

    $urlTelegram = 'https://api.telegram.org/bot'.$botToken.'/sendMessage?parse_mode=html&chat_id='.$channel.'&text='.$messageEncoded.'&disable_web_page_preview=true';
    
    $response = Http::get($urlTelegram);
}

function getCookieValue($name){

    if(isset($_COOKIE[$name])){
        return $_COOKIE[$name];
    }
    else{
        return '';
    }
}

function setCookieValue($name,$value){
    setcookie($name,$value,0,'/');
}

// browser language
//$language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

function setLanguage(){
    
}

function getLanguageCookie(){       

    if(isset($_COOKIE['language']) && !empty($_COOKIE['language'])){
        return $_COOKIE['language'];
    }
    else{
        return false;
    }
}

function setLanguageCookie($language){
    setcookie('language',$language,0,'/');
}

function setUserLanguage(){

    $user = auth()->user();
    $language = false;

    if(isset($user) && !empty($user)){

        // if user language, set cookie
        if(isset($user->language) && !empty($user->language)){
            $language = $user->language;
            setLanguageCookie($user->language);
        }
        else{
            // if no language on user and cookie, set it
            // and update on user
            $cookieLanguage = getLanguageCookie();
        
            if(isset($cookieLanguage) && !empty($cookieLanguage)){
                $user->update(['language' => $cookieLanguage]);
            }
        }
    }

    return $language;
}

function getDarkModeCookie(){

    if(isset($_COOKIE['darkmode'])){
        if(!empty($_COOKIE['darkmode'])){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
        return null;
    }
}

function setDarkModeCookie($darkmode){
    setcookie('darkmode',$darkmode,0,'/');
}

function setUserDarkMode(){

    $user = auth()->user();

    if(isset($user['settings'])){

        $settings = (array)json_decode($user['settings']);

        if(isset($settings['darkmode'])){
            
            if(!empty($settings['darkmode'])){
                setDarkModeCookie(true);
            }
            else{
                setDarkModeCookie(false);
            }

            return $settings['darkmode'];
        }
        else{
            // if user does not have darkmode setting, check if cookie
            // if cookie add it to the user settings
            $darkmode = getDarkModeCookie();

            if($darkmode !== null){
                $settings['darkmode'] = $darkmode;
                $settingsNew = json_encode($settings);
                $user->update(['settings' => $settingsNew]);
                return $darkmode;
            }
            else{
                return false;
            }
        }
    }
    else{
        // if user does not have darkmode setting, check if cookie
        // if cookie add it to the user settings
        $darkmode = getDarkModeCookie();

        if($darkmode !== null){
            $settings = [
                'darkmode' => $darkmode
            ];
            $settingsNew = json_encode($settings);
            $user->update(['settings' => $settingsNew]);
            return $darkmode;
        }
        else{
            return false;
        }
    }
}

function apiResponse($success,$status,$data = [],$language = null){

    // messages on api always in English unless indicated by parameter on the api call with language
    //app()->setLocale('en'); => en

    if(!isset($language) || empty($language)){
        $language = 'en';
    }

    $response = [
        'success' => $success,
        'status' => trans('api.'.$status,[],$language)
    ];

    if(isset($data) && !empty($data)){
        $response['data'] = $data;
    }

    return response()->json($response);
}