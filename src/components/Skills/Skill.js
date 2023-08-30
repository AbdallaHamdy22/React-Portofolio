import "./Skill.css";
import ProgressBar from './Bar';
export default function Skill() {
    return (
        <div className="skill">
            <h1>Skills</h1>
            <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vel
                soluta, itaque, atque pariatur ad porro consequuntur illo reiciendis sed
                nobis esse ratione totam impedit tenetur rem qui ea assumenda!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vel
                soluta, itaque, atque pariatur ad porro consequuntur illo reiciendis sed
                nobis esse ratione totam impedit tenetur rem qui ea assumenda!
            </p>
            <div className="leftside">
                <h1>My Focus</h1>
                <ul>
                    <li><h3>UI/UX Design</h3></li>
                    <li><h3>Responsive Design</h3></li>
                    <li><h3>Web Design</h3></li>
                    <li><h3>Mobile App Design</h3></li>
                </ul>
            </div>
            <div className="rightside">
                <ProgressBar label="HTML" progress="90%" />
                <ProgressBar label="CSS" progress="70%" />
                <ProgressBar label="JavaScript" progress="90%" />
                <ProgressBar label="JQuery" progress="60%" />
                <ProgressBar label="ReactJS" progress="90%" />
                <ProgressBar label="NodeJS" progress="30%" />
                <ProgressBar label="PHP" progress="80%" />
                <ProgressBar label="Python" progress="100%" />
            </div>
        </div>
    );
}
