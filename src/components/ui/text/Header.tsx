import {ComponentProps} from 'react';
import clsx from 'clsx';

interface Props extends ComponentProps<'h1'> {
    value: string;
    className?: string;
}

export const Header = ({value, className, ...rest}: Props) => {
    return (
        <header>
        <h1 className={clsx(className, 'font-medium')} {...rest}>{value}</h1>
        </header>
    )
}