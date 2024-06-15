import './App.css';
import p_h from "./questions/physics_questions.json";
import q from "./questions/questions.json";
import t_q from "./questions/tech_questions.json";

function App() {
  
  const [current_1, setCurrent_1] = useState(null);
    const [current_2, setCurrent_2] = useState(null);
    const [current_3, setCurrent_3] = useState(null);

    const [questions_1, setQuestions_1] = useState([]);
    const [questions_2, setQuestions_2] = useState([]);
    const [questions_3, setQuestions_3] = useState([]);

    useEffect(() => {
        // Načítaj otázky pri montovaní komponentu
        setQuestions_1(q);
        setQuestions_2(p_h);
        setQuestions_3(t_q);
    }, []);

    const randomNumbers = (filename) => {
        if (filename === 1) {
            if (questions_1.length > 0) {
                const randomIndex = Math.floor(Math.random() * questions_1.length);
                setCurrent_1(questions_1[randomIndex]);
            }
        }
        else if (filename === 2) {
            if (questions_2.length > 0) {
                const randomIndex = Math.floor(Math.random() * questions_2.length);
                setCurrent_2(questions_2[randomIndex]);
            }
        }
        else if (filename === 3) {
            if (questions_3.length > 0) {
                const randomIndex = Math.floor(Math.random() * questions_3.length);
                setCurrent_3(questions_3[randomIndex]);
            }
        }

    }

    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <h1>Otázka pre Bc - architektúra</h1>
            <h1>Architektonické navrhování budov </h1>
            <div>
                {current_1 && (
                        <div style={{border: '1px solid', padding: "10px", fontSize: '20px'}}>
                            <p>{current_1.question}</p>
                        </div>
                )}
            <button onClick={() => randomNumbers(1)}>Generuj</button>
            </div>
            <h1>Konstrukcí pozemních staveb a stavební fyziky.  </h1>
            <div>
                {current_2 && (
                        <div style={{border: '1px solid', padding: "10px", fontSize: '20px'}}>
                            <p>{current_2.question}</p>
                        </div>
                )}
            <button onClick={() => randomNumbers(2)}>Generuj</button>
            </div>
            <h1>Technického zařízení budov</h1>
            <div>
                {current_3 && (
                        <div style={{border: '1px solid', padding: "10px", fontSize: '20px'}}>
                            <p>{current_3.question}</p>
                        </div>
                )}
            <button onClick={() => randomNumbers(3)}>Generuj</button>
            </div>


        </div>
    );
}

export default App;
