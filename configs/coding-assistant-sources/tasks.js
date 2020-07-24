const tasks = [
    {
        'key': 'pies',
        'examples':
            [
                {
                    'input': '10\n' +
                        '15\n' +
                        '2',
                    'output': '20 30'
                },
                {
                    'input': '2\n' +
                        '50\n' +
                        '4',
                    'output': '10 0'
                },
                {
                    'input': '2\n' +
                        '50\n' +
                        '0',
                    'output': '0 0'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Pies',
                        'description': 'A single pie costs A dollars and B cents in the cafe. Calculate how many dollars and cents you would need to by N pies.',
                        'input': 'The program receives three numbers as an input:\n' +
                            'A - how many dollars a pie costs;\n' +
                            'B - how many cents a pie costs;\n' +
                            'N - how many pies do you need to buy.',
                        'output': 'Print out two numbers: the cost of n pies in dollars and cents.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Пирожки',
                        'description': 'Пирожок в столовой стоит a рублей и b копеек. Определите, сколько рублей и копеек нужно заплатить за n пирожков.',
                        'input': 'Программа получает на вход три числа:\n' +
                            'a - сколько рублей стоит пирожок;\n' +
                            'b - сколько копеек стоит пирожок;\n' +
                            'n - сколько пирожков нужно купить.',
                        'output': 'Выведите два числа: стоимость n пирожков в рублях и копейках.'
                    }
                }
            ]
    },
    {
        'key': 'voting',
        'examples':
            [
                {
                    'input': '0 0 1',
                    'output': '0'
                },
                {
                    'input': '1 1 1',
                    'output': '1'
                },
                {
                    'input': '1 0 1',
                    'output': '1'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Voting',
                        'description': 'Given three numbers, each of them being 1 or 0, determine, which one occurs more often — 1 or 0.',
                        'input': 'The program receives 3 numbers as an input, each being 1 or 0.',
                        'output': 'Print out the number that occurs more often.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Голосование',
                        'description': 'Даны три числа, каждое из которых равно 1 или 0. Определите, что среди них встречается чаще: 0 или 1.',
                        'input': 'Программа получает на вход 3 числа, каждое из которых равно 1 или 0.',
                        'output': 'Выведите то число, которое встречается чаще. '
                    }
                }
            ]
    },
    {
        'key': 'brackets',
        'examples':
            [
                {
                    'input': 'example',
                    'output': 'e(x(a(m)p)l)e'
                },
                {
                    'input': 'card',
                    'output': 'c(ar)d'
                },
                {
                    'input': 'ab',
                    'output': 'ab'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Brackets',
                        'description': 'Place the opening and the cloning brackets into the input string like this:\nfor odd length example -> e(x(a(m)p)l)e,\nfor even length card -> c(ar)d, but not c(a()r)d.',
                        'input': 'The program receives a string of English letters (lowercase and uppercase) as an input.',
                        'output': 'Print out the string with the brackets added.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Скобки',
                        'description': 'В строке расставить между буквами открывающиеся и закрывающиеся скобки. При этом: \n' +
                            'В случае нечётной длины: \n' +
                            'example → e(x(a(m)p)l)e\n' +
                            'В случае чётной длины: \n' +
                            'card → c(ar)d, но не c(a()r)d',
                        'input': 'Программа получает на вход строку из английских букв (больших и маленьких).',
                        'output': 'Выведите строку, которая получится после добавления скобок.'
                    }
                }
            ]
    }
];

module.exports = tasks;
