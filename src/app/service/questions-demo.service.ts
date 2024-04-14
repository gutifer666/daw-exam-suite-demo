import { Injectable } from '@angular/core';
import {Question} from "../model/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsDemoService {
  questions : Question[] | undefined;
  jsonQuestions = [
    {
      "id_question": 1,
      "questionText": "El nivel en el que se describe la estructura física de la base de datos a través de un esquema encargado de detallar el sistema de almacenamiento de la base de datos y sus métodos de acceso es:",
      "option1": "Nivel Básico.",
      "option2": "Nivel Conceptual.",
      "option3": "Nivel Interno.",
      "option4": "Nivel Lógico",
      "correctOption": 3,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 2,
      "questionText": "¿Cuál de los siguientes no es un tipo de base de datos documental?",
      "option1": "Bases de datos de texto completo.",
      "option2": "Directorios.",
      "option3": "Archivos electrónicos de imágenes.",
      "option4": "Bases de datos referenciales.",
      "correctOption": 2,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 3,
      "questionText": "¿Cuál de los siguientes sistemas gestores de base de datos libres está escrito en Java?",
      "option1": "MySQL",
      "option2": "Apache Derby.",
      "option3": "PostgreSQL.",
      "option4": "SQLite.",
      "correctOption": 2,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 4,
      "questionText": "Señala la afirmación correcta respecto a los ficheros secuenciales",
      "option1": "Permite el acceso de varios usuarios.",
      "option2": "Se pueden insertar registros entre los que ya están grabados.",
      "option3": "Su lectura siempre se hace hacia delante.",
      "option4": "El modo de apertura del fichero no condiciona la lectura o escritura.",
      "correctOption": 3,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 5,
      "questionText": "¿Cuál de los siguientes sistemas gestores de base de datos no es comercial?",
      "option1": "Informix",
      "option2": "DB2",
      "option3": "Foxpro",
      "option4": "Firebird",
      "correctOption": 4,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 6,
      "questionText": "¿Qué persona es la encargada de la creación o implementación física de la base de datos? ",
      "option1": "Administrador",
      "option2": "Programador",
      "option3": "Diseñador",
      "option4": "Usuario Final",
      "correctOption": 1,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 7,
      "questionText": "Para nombrar abreviadamente un sistema de almacenamiento masivo en red, utilizamos las siglas:",
      "option1": "RAID",
      "option2": "SAN",
      "option3": "NAS",
      "option4": "ASN",
      "correctOption": 3,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 8,
      "questionText": "El porcentaje de registros consultados o modificados en cada tratamiento del fichero, respecto al número total de registros contenidos en él, se denomina:",
      "option1": "Tasa de consulta.",
      "option2": "Frecuencia de consulta.",
      "option3": "Tasa de renovación.",
      "option4": "Frecuencia de renovación.",
      "correctOption": 1,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 9,
      "questionText": "El lugar donde se deposita la información sobre la totalidad de los datos que forman la base de datos y que contiene las características lógicas de las estructuras que almacenan los datos, su nombre, descripción, contenido y organización, se denomina:",
      "option1": "DDL.",
      "option2": "Metadatos.",
      "option3": "Gestor de la base de datos.",
      "option4": "Diccionario de datos.",
      "correctOption": 4,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    },
    {
      "id_question": 10,
      "questionText": "Normalmente, en cada operación de lectura/grabación se transfieren varios registros del fichero, es decir un _____ y suele contener varios registros lógicos.",
      "option1": "archivo",
      "option2": "registro\n",
      "option3": "bloque",
      "option4": "campo",
      "correctOption": 3,
      "topic": 1,
      "semester": 1,
      "subject": "bd"
    }
  ];

  constructor() { }

  getQuestions() {
    return this.jsonQuestions.map(item => new Question(
      item.id_question,
      item.questionText,
      item.option1,
      item.option2,
      item.option3,
      item.option4,
      item.correctOption,
      item.topic,
      item.semester,
      item.subject
    ));
  }

}
