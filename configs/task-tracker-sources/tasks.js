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
                        'description': 'A single pie costs A dollars and B cents in the cafe. Calculate how many dollars and cents you would need to buy N pies.',
                        'input': 'The program receives three numbers as an input:\n' +
                            'A - how many dollars a pie costs;\n' +
                            'B - how many cents a pie costs;\n' +
                            'N - how many pies do you need to buy.',
                        'output': 'Print out two numbers: the cost of N pies in dollars and cents.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Пирожки',
                        'description': 'Пирожок в столовой стоит A рублей и B копеек. Определите, сколько рублей и копеек нужно заплатить за N пирожков.',
                        'input': 'Программа получает на вход три числа:\n' +
                            'A - сколько рублей стоит пирожок;\n' +
                            'B - сколько копеек стоит пирожок;\n' +
                            'N - сколько пирожков нужно купить.',
                        'output': 'Выведите два числа: стоимость N пирожков в рублях и копейках.'
                    }
                }
            ]
    },
    {
        'key': 'max_3',
        'examples':
            [
                {
                    'input': '1\n' +
                        '2\n' +
                        '3',
                    'output': '3'
                },
                {
                    'input': '5\n' +
                        '5\n' +
                        '5',
                    'output': '5'
                },
                {
                    'input': '2\n' +
                        '1\n' +
                        '1\n',
                    'output': '1'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Max 3',
                        'description': 'Print the largest of three numbers in the input.',
                        'input': 'The program receives three numbers as an input',
                        'output': 'Print the largest number. If there are several largest among the three numbers, print only one of them.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Большее из трёх',
                        'description': 'Определите большее из трёх чисел.',
                        'input': 'Программа получает на вход 3 целых числа, каждое записано в отдельной строке.',
                        'output': 'Выведите одно число — наибольшее из данных трёх чисел. Если среди трёх чисел находится несколько наибольших, выведите только одно из них.'
                    }
                }
            ]
    },
    {
        'key': 'is_zero',
        'examples':
            [
                {
                    'input': '3\n' +
                        '9\n' +
                        '0\n' +
                        '1',
                    'output': 'YES'
                },
                {
                    'input': '3\n' +
                        '9\n' +
                        '-15\n' +
                        '1',
                    'output': 'NO'
                },
                {
                    'input': '2\n' +
                        '0\n' +
                        '0',
                    'output': 'YES'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Is zero',
                        'description': 'Check if there are zeros among numbers in the input.',
                        'input': 'The program receives several numbers as an input:\n' +
                            'N - how many numbers do you need to input;\n' +
                            'N numbers to check.',
                        'output': 'Print YES if there are zeros among numbers in the input and NO otherwise. You must enter all N numbers and only after that the inscription YES or NO should appear.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Есть ли ноль',
                        'description': 'Проверьте, есть ли среди данных N чисел нули.',
                        'input': 'Программа получает на вход число N, а затем N чисел.',
                        'output': 'Выведите YES, если среди введенных чисел есть хотя бы один ноль, или NO в противном случае. Пользователь должен ввести все N чисел и только после этого должна появиться надпись YES или NO.'
                    }
                }
            ]
    },
    {
        'key': 'max_digit',
        'examples':
            [
                {
                    'input': '11111111',
                    'output': '1'
                },
                {
                    'input': '123034655943',
                    'output': '9'
                },
                {
                    'input': '4',
                    'output': '4'
                }
            ],
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'name': 'Max digit',
                        'description': 'Given a string containing only digits, find and print the largest digit.',
                        'input': 'The program receives a string containing only digits.',
                        'output': 'Print the largest digit that occurs more often in the string.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Наибольшая цифра',
                        'description': 'Найти наибольшую цифру в строке, состоящей из цифр.',
                        'input': ' Программа получает на вход строку ненулевой длины, содержащую только десятичные цифры.',
                        'output': 'Выведите максимальную цифру, которая встречается во введенной строке.'
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
                        'description': 'Given three numbers, each of them being 1 or 0, determine which one occurs more often — 1 or 0.',
                        'input': 'The program receives three numbers as an input, each being 1 or 0.',
                        'output': 'Print out the number that occurs more often.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'name': 'Голосование',
                        'description': 'Даны три числа, каждое из которых равно 1 или 0. Определите, что среди них встречается чаще: 0 или 1.',
                        'input': 'Программа получает на вход три числа, каждое из которых равно 1 или 0.',
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
                        'description': 'Place the opening and the closing brackets into the input string like this:\nfor odd length\n' +
                            'example → e(x(a(m)p)l)e,\n' +
                            'for even length\n' +
                            'card → c(ar)d, but not c(a()r)d.',
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
