import './SkillItem.css'

const SkillItem = ({ skill, icon, delay }) => {
    const textDelay = delay + 0.5;
    return (
        <div className='skillContainer'>

            <h3 className=" skillText" style={{ animationDelay: `${textDelay}s` }}>{skill}</h3>
            <div className="SkillIcon" style={{ animationDelay: `${delay}s` }}>
                {icon}
            </div>

        </div>
    )
}

export default SkillItem;