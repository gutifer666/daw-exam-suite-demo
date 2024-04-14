export class Question {
  id?: number;
  questionText?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  correctOption?: number;
  topic?: number;
  semester?: number;
  subject?: string;


  constructor(id: number, questionText: string, option1: string, option2: string, option3: string, option4: string, correctOption: number, topic: number, semester: number, subject: string) {
    this.id = id;
    this.questionText = questionText;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correctOption = correctOption;
    this.topic = topic;
    this.semester = semester;
    this.subject = subject;
  }
}
