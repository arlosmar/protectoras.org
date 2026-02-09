<?php

$bucket = env('AWS_BUCKET_URL','');

return [
    'localhost' => [   
        'id' => 'local',
        'name' => 'Local',         
        'database' => 'local',        
        'location' => ['Xàtiva'],
        'files' => [
            'bucket' => $bucket.'/local',
            'logo' => 'spax.png',
            'favicon' => 'spax.png',
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
    '127.0.0.1' => [   
        'id' => 'local',
        'name' => 'Local',         
        'database' => 'local',
        'files' => [
            'bucket' => $bucket.'/local',
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
    'demolanding' => [   
        'id' => 'demolanding',
        'name' => 'Demo Landing',         
        'database' => 'demo',
        'files' => [
            'bucket' => $bucket.'/demo',
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
    'demo' => [   
        'id' => 'demo',
        'name' => 'Demo',         
        'database' => 'demo',
        'files' => [
            'bucket' => $bucket.'/demo',
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
    'protectoras.org' => [  
        'id' => 'protectoras',
        'name' => 'Protectoras',         
        'database' => 'protectoras',
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
    'protectoraxativa.org' => [  
        'id' => 'spax',
        'name' => 'SPAX',         
        'database' => 'spax',
        'files' => [
            'bucket' => $bucket.'/spax',
            'logo' => 'logo.png',
            'favicon' => 'favicon.png',
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
            'colaboration' => [
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
                    "santmiquelclinica.jpeg",
                    "salvapla.jpeg",
                    "amicscentreveterinari.png",
                    "lauraserraclinica.jpg",
                    "farmaciallanderal.jpg",
                    "animalia.svg",
                    "escuelakeiko.png",
                    "santantoniveterinaris.jpg",
                    "saetabissport.jpg",
                    "guaitaveterinari.svg",
                    "miscota.png",
                    "cadell.jpg",
                    "dentalcarralero.jpg",
                    "opticavicentesancho.jpg",
                    "caixaontinyent.jpg",
                    "caixapopular.jpg",
                    "fasnet.jpg",
                    "graficastormo.jpg",
                    "joaquinvidal.jpg",
                    "canesxativa.jpg"
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
                    "tierschutz.jpg",
                    "fadaa.png",
                    "rivia.png",
                    "affinity.png",
                    "institutoproteccionanimal.svg",
                    "arcadys.png",
                    "miwuki.png",
                    "centrocaninomiraflores.png",
                    "clubcaninosomontes.png",
                    "animalhelpespania.webp"
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
                "logos" => ["canesxativa.jpg","lauraserraclinica.jpg","santantoniveterinaris.jpg",
                "santmiquelclinica.jpeg","sarrimar.jpg"],
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
                    "xativaajuntament.jpeg",
                    "ministerioderechossociales.jpeg",
                    "gva.jpeg"
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
                'es' => '/guides/es/casa_acogida.pdf'
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
                        '/guides/es/guia_tenencia_responsable.pdf',
                        '/guides/es/reflexiones_antes_adoptar.pdf',
                        '/guides/es/guia_adopcion_cachorro.pdf',
                        '/guides/es/cuidar_animal_hola_calor.pdf',
                        '/guides/es/adoptar_animal_companyia.pdf',
                        '/guides/es/cuidador_responsable.pdf',
                        '/guides/es/obligaciones_tenedor.pdf',
                        '/guides/es/manual_tenencia_responsable.pdf'
                    ]
                ]
            ]
        ],
        'forms' => [
            'partner'   => 'https://forms.gle/B7HxA5TJuv6mVmWZ9',
            'sponsor'   => 'https://forms.gle/5uLAvgKmXAWsEwNr7',
            'adoption'  => 'https://forms.gle/9WMRXEGRWSBPkvit7',
            'sepa'      => '/forms/sepa.pdf',
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