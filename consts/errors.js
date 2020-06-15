const ERRORS = {
  VALIDATION: {
    DATA_ITEM: {
      ALREADY_TAKEN: {
        content: {
          error: {
            key: 'DATA_ITEM_ALREADY_EXISTS',
            description: 'Data item already taken.',
            message: 'Validation failed.'
          }
        },
        code: 406
      },
      NOT_EXISTS: {
        content: {
          error: {
            key: 'DATA_ITEM_NOT_EXISTS',
            description: 'Data item does not exists.',
            message: 'Validation failed.'
          }
        },
        code: 406
      }
    },
    TASK: {
      ALREADY_TAKEN: {
        content: {
          error: {
            key: 'TASK_ALREADY_EXISTS',
            description: 'Task already taken.',
            message: 'Validation failed.'
          }
        },
        code: 406
      },
      NOT_EXISTS: {
        content: {
          error: {
            key: 'TASK_NOT_EXISTS',
            description: 'Task does not exists.',
            message: 'Validation failed.'
          }
        },
        code: 406
      }
    },
    FILE: {
      NOT_RECEIVED: {
        content: {
          error: {
            key: 'FILE_NOT_RECEIVED',
            description: 'File is not received.',
            message: 'Validation failed.'
          }
        },
        code: 406
      }
    },
    ACTIVITY_TRACKER_ITEM: {
      ALREADY_TAKEN: {
        content: {
          error: {
            key: 'ACTIVITY_TRACKER_ITEM_ALREADY_EXISTS',
            description: 'Activity tracker item already taken.',
            message: 'Validation failed.'
          }
      }
    },
      NOT_EXISTS: {
        content: {
          error: {
            key: 'ACTIVITY_TRACKER_ITEM_NOT_EXISTS',
            description: 'Activity tracker item does not exists.',
            message: 'Validation failed.'
          }
        },
        code: 406
      }
    }
  },
  INTERNAL_SERVER: {
    content: {
      error: {
        key: 'INTERNAL_SERVER_ERROR',
        description: 'An internal server error ouccured.',
        message: 'Internal server error.'
      }
    },
    code: 500
  }
};

module.exports = {
  ERRORS
};
