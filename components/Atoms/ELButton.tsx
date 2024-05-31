import React from "react";

type ELButtonProps = {
    handleClick?: any;
    disabled?: boolean;
    name: string;
    type?: "submit";
    size?: any;
    icon?: any;
    rightIcon?: any;
    className?: string;
    loading?: boolean;
    loadValue?: boolean;
    onKeyPress?: Function;
    formAction?:any
};

const ELButton: React.FC<ELButtonProps> = ({
    handleClick,
    disabled,
    type,
    name,
    icon,
    rightIcon,
    className,
    formAction,
    loading
}) => {

    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <span className="flex items-center gap-2 justify-center">
                    <div className="preloader-container">
                        <div className="preloader"></div>
                    </div>
                    Loading...
                </span> // You can replace this with a spinner component or icon if you have one
            ) : (
                <>
                    {icon && <span className="mr-[20px]">{icon}</span>}
                    {name}
                    {rightIcon && <span className="ml-[20px]">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

ELButton.defaultProps = {
    loading: false,
};

export default ELButton;
