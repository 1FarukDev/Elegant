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
};

const ELButton: React.FC<ELButtonProps> = ({
    handleClick,
    disabled,
    type,
    name,
    icon,
    rightIcon,
    className,
}) => {

    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {icon && <span className="mr-[20px]">{icon}</span>}
            {name}
            {rightIcon && <span className="mr-[20px]">{rightIcon}</span>}
        </button>
    );
};

ELButton.defaultProps = {
    loading: false,
};

export default ELButton;
