const settings = {
    'descriptions':
        [
            {
                'language': 'en',
                'info': {
                    'surveyPane': {
                        'age': 'Age',
                        'gender': 'Gender',
                        'experience': 'Program experience',
                        'country': 'Country',
                        'years': 'Full years',
                        'months': 'Months',
                        'startSession': 'Start the session'
                    },
                    'taskChoosingPane': {
                        'chooseTask': 'Choose the task',
                        'finishSession': 'Finish the session',
                        'startSolving': 'Start solving',
                        'description': 'After you choose the task and press %s, a file will be created in the codetracker folder in the root of the project where you should write the code. When you are finished, press %s to submit your solution.\n' +
                            '\n' +
                            'Note: we only track the changes in the files created by the plugin, other files are not considered. The data will not be sent until you press %s.'
                    },
                    'taskSolvingPane': {
                        'inputData': 'Input data',
                        'outputData': 'Output data',
                        'submit': 'Submit',
                    },
                    'finalPane': {
                        'praise': 'Nicely done!',
                        'backToSurvey': 'Back to the survey',
                        'finalMessage': 'Do not forget to uninstall the Codetracker plugin',
                    },
                    'commonText': {
                        'backToTasks': 'Back to the tasks'
                    },
                    'successPane': {
                        'successMessage': 'The solution for the %s task has been submitted successfully'
                    }
                }
            },
            {
                'language': 'ru',
                'info': {
                    'surveyPane': {
                        'age': 'Возраст',
                        'gender': 'Пол',
                        'experience': 'Опыт программирования',
                        'country': 'Страна',
                        'years': 'Полных лет',
                        'months': 'Месяцев',
                        'startSession': 'Начать работу'
                    },
                    'taskChoosingPane': {
                        'chooseTask': 'Выберите задачу',
                        'finishSession': 'Закончить работу',
                        'startSolving': 'Начать решение',
                        'description': 'После выбора задачи и нажатия на кнопку %s будет создан файл в папке codetracker в корне вашего проекта, в котором необходимо написать ее решение. После окончания решения для отправки данных нажмите кнопку %s.\n' +
                            '\n' +
                            'Важно: во время решения будут записываться изменения только в созданных плагином файлах. Остальные файлы не отслеживаются. Без нажатия на кнопку %s данные не отправляются.',
                       },
                    'taskSolvingPane': {
                        'inputData': 'Входные данные',
                        'outputData': 'Выходные данные',
                        'submit': 'Отправить решение',
                    },
                    'finalPane': {
                        'praise': 'Отличная работа!',
                        'backToSurvey': 'Вернуться к анкете',
                        'finalMessage': 'Не забудьте удалить плагин Codetracker',
                    },
                    'commonText': {
                        'backToTasks': 'Вернуться к задачам'
                    },
                    'successPane': {
                        'successMessage': 'Решение задачи %s было успешно отправлено'
                    }
                }
            }
        ]
};

module.exports = settings;
