import 'dotenv/config.js'
import '../../config/database.js'
import { Category } from '../Category.js'

let categories = [
    {
        name: "shonen",
        ranking: 1,
        examples: ["Dragon Ball","Jujutsu Kaisen"],
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        user_id: "63b1ff78588bf68775bb181a"
    },{
        name: "manhwa",
        ranking: 2,
        examples: ["The God of High School","Solo Leveling","Tower of god"],
        detail: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        user_id: "63b1ff78588bf68775bb181a"
    },{
        name: "marvel",
        ranking: 3,
        examples: ["Daredevil","Spiderman","House Of M"],
        detail: "American superhero comics",
        user_id: "63b1ff78588bf68775bb181a"
    },{
        name: "dc",
        ranking: 4,
        examples: ["Batman","Aquaman","Superman"],
        detail: "American superhero comics",
        user_id: "63b1ff78588bf68775bb181a"
    },{
        name: "shojo",
        ranking: 5,
        examples: ["Nana","Fruits Basket"],
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        user_id: "63b1ff78588bf68775bb181a"
    },{
        name: "seinen",
        ranking: 6,
        examples: ["Shuumatsu no Valkyrie","One Punch Man"],
        detail: "Japanese seinen tells stories with a mature tone.",
        user_id: "63b1ff78588bf68775bb181a"
    }
]

Category.insertMany(categories)