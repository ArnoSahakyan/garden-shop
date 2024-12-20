import './ButtonBanner.scss'

export default function ButtonBanner({title, submitted, onClick}) {
    return (
        <button
            onClick={onClick}
            className={`ButtonBanner ${submitted && 'submitted'}`}
        >
            {title}
        </button>
    );
}
