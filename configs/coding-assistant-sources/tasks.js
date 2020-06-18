// Todo: add tasks

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
                        'description': 'A pie in the dining room costs a rubles and b kopecks. Determine how many rubles and kopecks you need to pay for n pies.',
                        'input': 'The program receives three numbers as an input:\n' +
                            'a - how many rubles a pie costs;\n' +
                            'b - how many kopecks a pie costs;\n' +
                            'n - how many pies need to buy.',
                        'output': 'Print two numbers: the cost of n pies in rubles and kopecks.'
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
    }
];

module.exports = tasks;
