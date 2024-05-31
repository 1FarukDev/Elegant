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
    formAction
}) => {

    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
            disabled={disabled}
            formAction={formAction}
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
