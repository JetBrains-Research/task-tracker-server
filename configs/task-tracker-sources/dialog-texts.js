const dialogTexts = [
    {
        'key': 'task_solving_error',
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'header': 'Task solving',
                        'description': 'You cannot edit this file until you choose the task. To start or continue solving the %s task, choose it on the task choosing panel in the codetracker plugin and press %s.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'header': 'Решение задачи',
                        'description': 'Пока задача не будет выбрана, данный файл изменить нельзя. Чтобы начать или продолжить решение задачи %s выберите ее на панели выбора задач в плагине codetracker и нажмите на кнопку %s.'
                    }
                }
            ]
    },
    {
        'key': 'successful_submit',
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'header': 'Successful submit',
                        'description': 'The data for the %s task has been submitted successfully.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'header': 'Успешная отправка',
                        'description': 'Данные для задачи %s были успешно отправлены.'
                    }
                }
            ]
    },
    {
        'key': 'task_submit_error',
        'descriptions':
            [
                {
                    'language': 'en',
                    'info': {
                        'header': 'Submit error',
                        'description': 'The data for the %s task has not been submitted. Please, check your internet connection and then try again.'
                    }
                },
                {
                    'language': 'ru',
                    'info': {
                        'header': 'Ошибка отправки данных',
                        'description': 'Данные для задачи %s не были отправлены. Пожалуйста, проверьте интернет-соедение и попробуйте еще раз.'
                    }
                }
            ]
    }
];

module.exports = dialogTexts;
