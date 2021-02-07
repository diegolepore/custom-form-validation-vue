const validationFormMixin = {
  data() {
    return {
      errorsList: []
    }
  },
  methods: {
    validateForm() {
      this.errorsList = []

      if(('name' in this.formData) && !this.formData.name) {
        this.errorsList.push('Name is required')
      }

      if(('email' in this.formData) && !this.formData.email) {
        this.errorsList.push('Email is required')
      } else if(!this.validateEmail(this.formData.email)) {
        this.errorsList.push('Please add a valid email')
      }

      if(('password' in this.formData) && !this.formData.password) {
        this.errorsList.push('Password is required')
      } else if(this.formData.password.length < 6) {
        this.errorsList.push('Password must have at least 6 characters')
      }

      if (this.errorsList.length === 0) {
        return true
      }
    },
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
}

export default validationFormMixin