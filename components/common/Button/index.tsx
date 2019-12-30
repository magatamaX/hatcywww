import Link from 'next/link'
import css from './style.scss'

const Button = (
    { size, color, text, path, shadow, onClick, disabled = false } :
    { size: string, color: string, text: string, path: string, shadow: boolean, onClick?: any, disabled?: boolean }
    ) => (
    <Link href={path}>
        <a className={`${css.button} ${
            size === "large" ?
            css.large :
            size === "medium" ?
            css.medium :
            size === "full" ?
            css.full :
            ''
        } ${
            color === "blue" ?
            css.blue :
            color === "yellow" ?
            css.yellow :
            ''
        } ${shadow ? css.shadow : ''} ${disabled ? css.disabled : ''}`}
            onClick={(e: any) => {
				if(disabled) {
					e.preventDefault();
					return;
				}
                if (onClick) {
                    e.preventDefault()
                    onClick()
                }
            }}
        >
            {text}
        </a>
    </Link>
)

export default Button
