import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faSass, faReact, faBootstrap} from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1 className="py-5">SKILLS</h1>
            <div className="icons">
                <p>
                    <FontAwesomeIcon className="icon" icon={faHtml5} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faCss3Alt} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faJsSquare} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faNodeJs} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faSass} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faReact} size="3x" />
                    <FontAwesomeIcon className="icon" icon={faBootstrap} size="3x" />
                </p>
            </div>
        </div>

    )
}

export default Skills
