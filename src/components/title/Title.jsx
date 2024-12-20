import './Title.scss';

export default function Title({title, subtitle, disabled}) {
    return (
        <div className="Title">
            <h2>{title}</h2>
            {subtitle && (
                <div>
                    <div className="line"/>
                    {subtitle && (
                        <div
                            className={`subtitle ${
                                disabled === undefined
                                    ? ''
                                    : disabled
                                        ? 'disabled'
                                        : 'active'
                            }`}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
