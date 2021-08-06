
export default function Skills(skills) {
  return `
  <div class='nav-list__skills'>
    <ul>
    ${skills.collections.items
      .map((skills) => {
        return `
        <h3>${skills(skills)}</h3>
        `;
      })
      .join('')}
    </ul>
    </div>
    `;
}
