import Skill from  '../components/Skill.js';

export default function SkillPage(skill){
    return `
    <h1>Skill Page</h1>
    ${Skill(skill)}
    `;
}