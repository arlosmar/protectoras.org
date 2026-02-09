<?php

$animals = env('PATH_ANIMALS', '');
$animals_external = env('PATH_ANIMALS_EXTERNAL', '');
$people = env('PATH_PEOPLE', '');
$news = env('PATH_NEWS', '');

$files = getDomainConfig('files');

$root = '';
if(isset($files['bucket']) && !empty($files['bucket'])){
    $bucket = $files['bucket'];
    $root = $bucket.'/images';
}

return [
    'images' => [
        'root' => $root,
        'animals' => $root.'/'.$animals,
        'animals_external' => $root.'/'.$animals_external,
        'people' => $root.'/'.$people,
        'news' => $root.'/'.$news
    ],
    'files' => [
        'root' => $root,
        'animals' => $root.'/'.$animals,
        'animals_external' => $root.'/'.$animals_external,
        'people' => $root.'/'.$people,
        'news' => $root.'/'.$news
    ]
];
