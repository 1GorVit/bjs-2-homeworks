class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this.state_ = 100
    this.type = null
  }
  get state () {
    return this.state_
  }
  set state (stateFix) {
    if (stateFix >= 100) {
      //alert(this.state)
      this.state_ = 100
    } else if (stateFix < 0) {
      this.state_ = 0
    } else {
      //alert(state)
      this.state_ = stateFix
    }
  }
  fix () {
    return (this.state *= 1.5)
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.state_ = 100
    this.type = 'magazine'
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author
    this.state_ = 100
    this.type = 'book'
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state_ = 100
    this.type = 'novel'
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state_ = 100
    this.type = 'fantastic'
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state_ = 100
    this.type = 'detective'
  }
}



class Library extends Book {
  constructor (nameLib, author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.name = nameLib
    this.books = []
  }
  addBook (book) {
    if (this.state > 30) {
      return this.books.push(book)
    }
  }
  findBookBy (type, value) {
    for (let i = 0; i < this.books.length; i++) {
      for (let key in this.books[i - 1]) {
        if (this.books[i][type] == value) {
          return this.books[i]
        } else {
          return null
        }
      }
    }
  }
  giveBookByName (bookName) {
    for (let i = 0; i < this.books.length; i++) {
      for (let key in this.books[i]) {
        if (this.books[i][key] != bookName) {
          const book = this.books[i]
          this.books.splice(i, 1)
          return book
        }
      }
    }
    return null
  }
}



class Student {
  constructor (name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.marks = {}
  }
  setSubject (subjectName) {
    return subjectName
  }
  addMark (mark, subjectName) {
    if (this.marks !== undefined) {
      let arr = [],
        m = []
      arr.push(subjectName)
      if (mark >= 2 && mark <= 5) {
        for (const key of arr) {
          if (this.marks[subjectName] === undefined) {
            Object.assign(this.marks, { [key]: [] })
            this.marks[subjectName].push(mark)
          } else {
            this.marks[subjectName].push(mark)
          }
        }
      }
      return this.marks[subjectName]
    } //alert(JSON.stringify(this.marks));
  }
  getAverageBySubject (subjectName) {
    let sum = 0
    let l = 0
    for (const key in this.marks) {
      if (key !== subjectName) {
        return 0
      } else {
        return this.marks[key].reduce(
          (acc, item, index, arr) => acc + item / arr.length,
          0
        )
      }
    }
  }
  getAverage () {
    let quantity = 0,
      sum = 0
    let arr = []
    arr = Object.keys(this.marks)
    for (let i = 0; i < arr.length; i++) {
      quantity += arr.length
      sum += this.marks[arr[i]].reduce((acc, item, index, arr) => acc + item, 0)
    }
    if (quantity === 0) {
      return 0
    } else {
      return sum / quantity
    }
  }
}

let student2 = new Student('Carina', 'female', 25)
let student3 = new Student('Andrei', 'male', 30)

let student = new Student('Petya', 'male', 20)
student.setSubject('A')