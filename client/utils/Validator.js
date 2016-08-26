const Validator = {
  valTypes: {
    required: {
      validate: value => value==='',
      message: 'This field is required'
    },
    isNumber: {
      validate: value => !/\d+/.test(value),
      message: 'This field must contain number only'
    },
    isEmail: {
      validate: value => !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value),
      message: 'This field must be in e-mail format'
    },
    isEnglish: {
      validate: value => !/^[a-zA-Z ]+$/.test(value),
      message: 'This field must contain only latin letters'
    },
    isRussian: {
      validate: value => !/^[а-яА-Я ]+$/.test(value),
      message: 'This field must contain only russian letters'
    }
  },

  validate: function (data, type) {
    const checker = this.valTypes[type];
    const invalid = checker.validate(data);
    return invalid ? {result: false, msg: checker.message} : {result: true};
  }
}

export default Validator;
