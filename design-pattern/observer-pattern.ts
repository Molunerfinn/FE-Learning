interface Subjects {
  [key: string]: any
}

class Observer {
  subject: string
  constructor (subject: string) {
    this.subject = subject
  }
  notify () {
    console.log(`This ${this.subject} was fired!`)
    this.subject = `Done`
  }
}

class Subject {
  subjects: Subjects = {}
  // subscribe
  add (subject, observer: Observer): void {
    /* istanbul ignore next */
    if (!this.subjects[subject]) {
      this.subjects[subject] = []
    }
    this.subjects[subject].push(observer)
  }
  // unsubscribe
  remove (subject, observer: Observer): void {
    this.subjects[subject].forEach((item, index) => {
      /* istanbul ignore next */
      if (item === observer) {
        this.subjects[subject].splice(index, 1)
      }
    })
  }
  fire (subject): void {
    this.subjects[subject].forEach(item => item.notify())
  }
}

export {
  Observer,
  Subject
}
