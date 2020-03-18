const SIDER = [
    {
        "name" : "Frases",
        "key" : 1,
        "sub": [{
            "name" : "GET",
            "key"  : 1,
            "path" : "/get"
        }]
    },
    {
        "name" : "Palabras",
        "key" : 2,
        "sub": [
            {
            "name" : "Verbos",
            "key"  : 2,
            "path" : "/verbs"
            },
            {
            "name" : "Numeros",
            "key"  : 3,
            "path" : "/numeros"
            },
        ]
    },
    {
        "name" : "Verbos",
        "key" : 3,
        "sub": [{
            "name" : "Regulares",
            "key"  : 4,
            "path" : "/regular"
        },
        {
            "name" : "Irregulares",
            "key"  : 5,
            "path" : "/irregular"
        }]
    }
]

export default SIDER;