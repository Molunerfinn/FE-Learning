interface Subjects {
  [key: string]: any
}

class PubSub {
  subjects: Subjects = {}
  on (subject, callback): void {
    /* istanbul ignore next */
    if (!this.subjects[subject]) {
      this.subjects[subject] = []
    }
    this.subjects[subject].push(callback)
  }
  off (subject, callback = null): void {
    if (callback === null) {
      this.subjects[subject] = []
    } else {
      this.subjects[subject].forEach((item, index) => {
        /* istanbul ignore next */
        if (item === callback) {
          this.subjects[subject].splice(index, 1)
        }
      })
    }
  }
  emit (subject, data = null): void {
    this.subjects[subject].forEach(item => item(data))
  }
}

export default new PubSub()
