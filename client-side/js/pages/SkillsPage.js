import Skills from '../components/Skills.js';

export default function SkillsPage(skills) {
    return `
    <<h1>Skills test page</h1>
   ${Skills(skills)}
    `;
}