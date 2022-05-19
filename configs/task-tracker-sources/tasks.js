const tasks = [
    {
        'key': 'First task',
        'isExperimental': true,
        'ideSettings':{
            "actionsToToggle": ["ZenMode"],
            "parameters": {
                "AFTER___DISTRACTION___MODE___ARE_GUTTER_ICONS_SHOWN": "false",
                "AFTER___DISTRACTION___MODE___ARE_LINE_NUMBERS_SHOWN": "false",
                "AFTER___DISTRACTION___MODE___EDITOR_TAB_PLACEMENT": "0",
            }
        },
        'description':
            {
                'cells': [
                    {
                        'cell_type': 'markdown',
                        'source': [
                            '# Task №1\n',
                            '\n',
                            'Please implement following formula as python function:\n',
                            '\n',
                            '$$f(x,y,m,n)= \\sum_{n=0}^{100} \\dfrac{(x  + 2 y)^m}{n^{1/2n}} $$'
                        ],
                        'metadata': {
                            'collapsed': false,
                            'pycharm': {
                                'name': '#%% md\n'
                            }
                        }
                    },
                    {
                        'cell_type': 'code',
                        'execution_count': null,
                        'metadata': {
                            'collapsed': true,
                            'pycharm': {
                                'name': '#%%\n'
                            }
                        },
                        'outputs': [],
                        'source': []
                    }
                ],
                'metadata': {
                    'kernelspec': {
                        'display_name': 'Python 3',
                        'language': 'python',
                        'name': 'python3'
                    },
                    'language_info': {
                        'codemirror_mode': {
                            'name': 'ipython',
                            'version': 2
                        },
                        'file_extension': '___py',
                        'mimetype': 'text/x-python',
                        'name': 'python',
                        'nbconvert_exporter': 'python',
                        'pygments_lexer': 'ipython2',
                        'version': '2___7___6'
                    }
                },
                'nbformat': 4,
                'nbformat_minor': 0
            },
    },
];

module.exports = tasks;
