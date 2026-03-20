<?php

$bucket = env('AWS_BUCKET_URL','');

$domains = [
    'local' => [   
        'id' => 'local',
        'domains' => ['localhost'],
        'name' => 'Local',
        'database' => 'demo',
        // rest of info from spax
    ],
    'demo' => [   
        'id' => 'demo',
        'domains' => ['demo'],
        'name' => 'Demo',         
        'database' => 'demo'
        // rest of info from spax
    ],
    'demolanding' => [   
        'id' => 'demolanding',
        'domains' => ['demolanding'],
        'name' => 'Demo Landing',         
        'database' => 'demo'
        // rest of info from spax
    ],
    'protectoras.org' => [          
        'id' => 'protectoras',
        'domains' => ['protectoras.org'],
        'name' => 'Protectoras',         
        'database' => 'protectoras',
        'location' => ['Valencia'],
        'files' => [
            'bucket' => $bucket.'/global',
            'logo' => 'protectoras.png',
            'favicon' => 'protectoras.png',
        ],
        'email' => [            
            'noreply' => [
                'address' => 'noreply@protectoras.org',
                'name' => 'Protectoras',
            ],
            'contact' => [
                'address' => 'protectoras.org@gmail.com',
                'name' => 'Protectoras',
            ]
        ],
        'social'  =>  [
            'phone' => '644714407',
            'phone_noprefix' => '644714407',
            'whatsapp' => '34644714407',
            'whatsapp_noprefix' => '644714407',
            'telegram' => '@arlosmar'            
        ],
        'contact' => [
            'title1' => true,
            'email' => true,
            'whatsapp' => true
        ]
    ],
    'spax' => [  
        'id' => 'spax',
        'name' => 'SPAX',     
        'header' => 'Sociedad Protectora de Animales Xativa',
        'domains' => ['spax'/*, 'protectoraxativa.org'*/],
        'location' => ['Xàtiva'],    
        'database' => 'spax',
        'files' => [
            'bucket' => $bucket.'/spax',
            'logo' => 'logo.png',
            'favicon' => 'favicon.ico',
        ],
        'email' => [
            'noreply' => [
                'address' => 'noreply@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'from' => [
                'address' => 'infospax@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'adoptions' => [
                'address' => 'adopciones@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'collaboration' => [
                'address' => 'colabora@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'volunteering' => [
                'address' => 'voluntariado@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'info' => [
                'address' => 'infospax@protectoraxativa.org',
                'name' => 'SPAX',
            ],
            'contact' => [
                'address' => 'colabora@protectoraxativa.org',
                'name' => 'SPAX',
            ]
        ],
        'social'  =>  [
            'phone' => '671870889',
            'phone_noprefix' => '671870889',
            'whatsapp' => '34671870889',
            'whatsapp_noprefix' => '671870889',
            'facebook' => 'https://www.facebook.com/SPAX-Sociedad-Protectora-Animales-X%C3%83%C2%A0tiva-126905127375429',
            'instagram' => 'https://www.instagram.com/spax_protectora_animals_xativa/?hl=es',
            'twitter' => 'https://twitter.com/protectoraspax',
            'blog' => 'http://protectoraxativa.blogspot.com',
            'youtube' => 'https://www.youtube.com/@SPAXPROTECTORAANIMALESXATIVA',
            'soundcloud' => 'http://soundcloud.com/protectora-xativa',
            'ladridos' => 'http://ladridosylametones.blogspot.com.es/',
            'tiktok' => 'https://www.tiktok.com/search?q=%40spax.xativa&t=1730569872800'
        ],
        'partners' => [
            'partners'  =>  [
                "names" => [
                    "Clínica Sant Miquel",
                    "Salva Pla",
                    "Amics Centre veterinari",
                    "Laura Serra",
                    "Farmacia Llanderal",
                    "Animalia",
                    "Escuela Keiko (Carlos Orozco)",
                    "Sant Antoni Vete",
                    "Setabis sport",
                    "Guaita",
                    "Miscota",
                    "Cadell",
                    "Carralero",
                    "Sancho",
                    "Caixa ontinyent",
                    "Caixa popular",
                    "Fasnet",
                    "Gráficas tormo",
                    "Joaquín Vidal e hijo",
                    "Canes de Xàtiva"
                ],
                "logos" => [
                    $bucket.'/spax/images/partners/partners/santmiquelclinica.jpeg',
                    $bucket.'/spax/images/partners/partners/salvapla.jpeg',
                    $bucket.'/spax/images/partners/partners/amicscentreveterinari.png',
                    $bucket.'/spax/images/partners/partners/lauraserraclinica.jpg',
                    $bucket.'/spax/images/partners/partners/farmaciallanderal.jpg',
                    $bucket.'/spax/images/partners/partners/animalia.svg',
                    $bucket.'/spax/images/partners/partners/escuelakeiko.png',
                    $bucket.'/spax/images/partners/partners/santantoniveterinaris.jpg',
                    $bucket.'/spax/images/partners/partners/saetabissport.jpg',
                    $bucket.'/spax/images/partners/partners/guaitaveterinari.svg',
                    $bucket.'/spax/images/partners/partners/miscota.png',
                    $bucket.'/spax/images/partners/partners/cadell.jpg',
                    $bucket.'/spax/images/partners/partners/dentalcarralero.jpg',
                    $bucket.'/spax/images/partners/partners/opticavicentesancho.jpg',
                    $bucket.'/spax/images/partners/partners/caixaontinyent.jpg',
                    $bucket.'/spax/images/partners/partners/caixapopular.jpg',
                    $bucket.'/spax/images/partners/partners/fasnet.jpg',
                    $bucket.'/spax/images/partners/partners/graficastormo.jpg',
                    $bucket.'/spax/images/partners/partners/joaquinvidal.jpg',
                    $bucket.'/spax/images/partners/partners/canesxativa.jpg'
                ],
                "links" => [
                    "https://www.facebook.com/share/zAb2HPyNMQ6dw5GQ/",
                    "https://www.sarrimar.es/",
                    "http://www.centreveterinariamics.com/",
                    "https://www.facebook.com/share/QzpCH4BQg4ndwkSR/",
                    "https://farmaciallanderal.com/",
                    "https://www.animalialolleria.com/",
                    "https://keikoescuelacanina.com/",
                    "https://www.facebook.com/share/5ks4wzCiw3xWYqa6/",
                    "https://www.facebook.com/share/AkZEHahuj7TYHqKD/",
                    "https://guaitaveterinaris.com/",
                    "https://www.miscota.es/",
                    "https://www.facebook.com/share/brytWi8DjSfwcauU/",
                    "https://dentalcarralero.com/",
                    "https://www.facebook.com/share/SsyzrYq3AWjV5XzA/",
                    "https://www.caixaontinyent.es/es",
                    "http://www.caixapopular.es/inicio.html",            
                    "",
                    "https://graficastormo.com/",
                    "",            
                    "https://www.facebook.com/share/5u5WciwzUkWJgKzu/"
                ]
            ],
            'friends' =>  [
                "names" => [
                    "Tierschutz Pur",
                    "Fadaa",
                    "Rivia",
                    "Funfación Affinity",
                    "Instituto Protección Animal",
                    "Arcadys",
                    "Miwuki",
                    "Centro Canino Miraflores",
                    "Club Canino Sotomontes",
                    "Animal Help Espania e.V."
                ],
                "logos" => [
                    $bucket.'/spax/images/partners/friends/tierschutz.jpg',
                    $bucket.'/spax/images/partners/friends/fadaa.png',
                    $bucket.'/spax/images/partners/friends/rivia.png',
                    $bucket.'/spax/images/partners/friends/affinity.png',
                    $bucket.'/spax/images/partners/friends/institutoproteccionanimal.svg',
                    $bucket.'/spax/images/partners/friends/arcadys.png',
                    $bucket.'/spax/images/partners/friends/miwuki.png',
                    $bucket.'/spax/images/partners/friends/centrocaninomiraflores.png',
                    $bucket.'/spax/images/partners/friends/clubcaninosomontes.png',
                    $bucket.'/spax/images/partners/friends/animalhelpespania.webp'
                ],
                "links" => [            
                    "https://www.tierschutz-pur.org/",
                    "https://www.fadaa.org",
                    "https://www.rivia.org",
                    "https://www.fundacion-affinity.org",
                    "https://www.institutodeproteccionanimal.com/es/",
                    "https://www.arcadys.org",
                    "https://www.miwuki.com",
                    "https://www.centrocaninomiraflores.com",
                    "https://clubcaninosomontes.com/",
                    "https://www.animal-help-espania.de"
                ]
            ],
            'apus'  =>  [/*
                "logos" => [
                    $bucket.'/spax/images/partners/apus/canesxativa.jpg",
                    $bucket.'/spax/images/partners/apus/lauraserraclinica.jpg",
                    $bucket.'/spax/images/partners/apus/santantoniveterinaris.jpg",
                    $bucket.'/spax/images/partners/apus/santmiquelclinica.jpeg",
                    $bucket.'/spax/images/partners/apus/sarrimar.jpg"
                ],
                "links" => [            
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            */],
            'subsidized' =>  [
                "logos" => [
                    $bucket.'/spax/images/partners/subsidized/xativaajuntament.jpeg',
                    $bucket.'/spax/images/partners/subsidized/ministerioderechossociales.jpeg',
                    $bucket.'/spax/images/partners/subsidized/gva.jpeg'
                ],
                "links" => [
                    "http://www.xativa.es/",
                    "https://www.dsca.gob.es/",
                    "https://mediambient.gva.es/es/"
                ]
            ]
        ],
        'guides' => [
            'hosting' => [
                'es' => $bucket.'/spax/guides/es/casa_acogida.pdf'
            ],
            'adoption' => [
                'es'  =>  [
                    'names' => [
                        'Guía de tenencia responsable',
                        'Reflexiones antes de adoptar',
                        'Guía para la adopción de un cachorro',
                        'Guía para cuidar a tu animal de compañía en una ola de calor',
                        '¿Vas a adoptar un animal de compañía?',
                        '¿Eres un cuidador reponsable?',
                        '¿Conoces tus obligaciones como tenedor de animal de compañía?',
                        'Manual de tenencia responsable'
                    ],
                    'links' => [
                        $bucket.'/spax/guides/es/guia_tenencia_responsable.pdf',
                        $bucket.'/spax/guides/es/reflexiones_antes_adoptar.pdf',
                        $bucket.'/spax/guides/es/guia_adopcion_cachorro.pdf',
                        $bucket.'/spax/guides/es/cuidar_animal_hola_calor.pdf',
                        $bucket.'/spax/guides/es/adoptar_animal_companyia.pdf',
                        $bucket.'/spax/guides/es/cuidador_responsable.pdf',
                        $bucket.'/spax/guides/es/obligaciones_tenedor.pdf',
                        $bucket.'/spax/guides/es/manual_tenencia_responsable.pdf'
                    ]
                ]
            ]
        ],
        'forms' => [
            'partner'   => 'https://forms.gle/B7HxA5TJuv6mVmWZ9',
            'sponsor'   => 'https://forms.gle/5uLAvgKmXAWsEwNr7',
            'adoption'  => 'https://forms.gle/9WMRXEGRWSBPkvit7',
            'sepa'      => $bucket.'/spax/forms/sepa.pdf',
            'hosting'   => 'https://forms.gle/ofKPn8MPsYw8vLKRA'
        ],
        'prices'  =>  [
            'price_partner' => env('PRICE_PARTNER', ''),
            'price_retired' => env('PRICE_RETIRED', ''),
            'price_child' => env('PRICE_CHILD', ''),
            'price_sponsorship' => env('PRICE_SPONSORSHIP', ''),
            'price_adoption' => env('PRICE_ADOPTION', '')
        ]
    ]
];

return $domains;