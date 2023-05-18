export const SocialLinks = (props) => {
    const { social, itemClass } = props;
    return (
        <li>
            <a href={`https://www.${social}.com`} target="_blank" className={itemClass}>
                <i className={`fab fa-${social}`}></i>
            </a>
        </li>
    );
};
export default SocialLinks;